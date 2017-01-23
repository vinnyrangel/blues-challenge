(function() {
'use strict';    

    angular
        .module('gridAzul.component',[])
        .component('gridAzul', {
            templateUrl: '/components/gridAzul/gridAzul.template.html',
            controller: gridAzulController,
            controllerAs: 'grid',
            bindings: {
                dados          : '<',
                colunas        : '<',
                buscar         : '<',
                itensPorPagina : '@',
                editar         : '&',
                remover        : '&'
            }
        });

    gridAzulController.$inject = ['$scope'];
    
    /**
     * gridAzul
     * 
     * Este componente é responsável por exibir as informações que chegam do controller,
     * montando o grid de dados e renderizando o componente de paginação
     * @param {array} dados - Array de objetos para renderizar no grid
     * @param {array} colunas - Array de obetos representando as colunas que devem ser renderizadas.
     * @param {object} buscar - Referência para o campo de busca no controller. Responsável pelo filtro no grid. 
     * @param {string} itensPorPagina - Quantidade de itens exibidos por página no grid
     * @param {function} editar - Método responsável por editar um item do grid
     * @param {function} remover - Método responsável por remover um item do grid
     */
    function gridAzulController($scope) {
        var vm = this;

        // Propriedades
        vm.paginaAtual  = 1;        
        vm.dadosPagina  = []; // controla quais dados serão exibidos na página atual
        vm.selecionados = [];
        vm.fn           = [];
        vm.imagem       = false;

        // Métodos
        vm.carregarPagina  = carregarPagina;
        vm.selecionarItem  = selecionarItem;
        vm.removerItens    = removerItens;
        vm.editarItem      = editarItem; 
        vm.carregarFuncoes = carregarFuncoes;      
        vm.abrirImagem     = abrirImagem; 
        
        ////////////////

        function carregarPagina(event) {
            // calculo onde iniciam os registros da próxima página
            var inicio     = (parseInt(event.pagina)-1) * vm.itensPorPagina;            
            var auxDados   = angular.copy(vm.dados);
            vm.dadosPagina = auxDados.splice(inicio, vm.itensPorPagina); 
            vm.paginaAtual = event.pagina;
        }

        
        function selecionarItem (item) {                 
            if (item.selecionado) {
                vm.selecionados.push(item);
            } else {
                vm.selecionados = vm.selecionados.filter(function(selecionado) {
                    return selecionado !== item
                })
            }
        }

        function editarItem(item) {                 
            vm.editar({
                $event: {
                    selecionado: item
                }
            })
        }
        
        function removerItens() {            
            vm.remover({
                $event: {
                    selecionados: vm.selecionados
                }
            })
        }

        function carregarFuncoes() {            
            for (var i in vm.colunas) {                
                var item = vm.colunas[i];
                if (item.fn){
                    vm.fn[item.value] = item.fn;
                }
            }            
        }

        function abrirImagem(event, url) {
            if (event)
                event.stopPropagation();

            if (url)
                vm.imagem = url;
        }

        vm.$onInit = function() {
            this.carregarFuncoes();
            carregarPagina({pagina: 1});
        }

        vm.$onChanges = function(changes) {            
            if(changes.dados && !changes.dados.isFirstChange()) {
                vm.dados = changes.dados.currentValue;
                carregarPagina({pagina: vm.paginaAtual});
            }
            
            if(changes.buscar && !changes.buscar.isFirstChange()) {
                vm.buscar = changes.buscar.currentValue;
            }
        };
    }
})();
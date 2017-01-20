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
    
    function gridAzulController($scope) {
        var vm = this;

        // Propriedades
        vm.paginaAtual  = 1;        
        vm.dadosPagina  = []; // controla quais dados serão exibidos na página atual
        vm.selecionados = [];

        // Métodos
        vm.carregarPagina = carregarPagina;
        vm.selecionarItem = selecionarItem;
        vm.removerItens   = removerItens;
        vm.editarItem     = editarItem;        
        
        ////////////////

        function carregarPagina(event) {
            // calculo onde iniciam os registros da próxima página
            var inicio = (parseInt(event.pagina)-1) * vm.itensPorPagina;            
            console.log(vm.dados);
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

        vm.$onInit = function() {
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
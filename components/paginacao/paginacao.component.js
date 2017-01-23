(function() {
'use strict';

    angular
        .module('paginacao.component',[])
        .component('paginacao', {
            templateUrl: '/components/paginacao/paginacao.template.html',
            controller: paginacaoController,
            controllerAs: 'paginacao',
            bindings: {
                itensPorPagina : '<',
                carregarPagina : '&'
            },
            require: {
                parent:'^gridAzul'
            }
        });

    paginacaoController.$inject = ['$rootScope'];
    function paginacaoController($rootScope) {
        var vm = this;        
        
        // Propriedades
        vm.totalPaginas = 1;
        vm.paginaAtual  = 1;

        // Métodos
        vm.selecionarPagina = selecionarPagina;
        vm.avancarPagina    = avancarPagina;
        vm.voltarPagina     = voltarPagina;

        ////////////////

        function calculaTotalPaginas() {
            // calculo o total de página contando os itens
            // que estão no array de dados do controller-pai
            var totalItens  = vm.parent.dados.length;
            vm.totalPaginas = Math.ceil(totalItens/vm.itensPorPagina);            
        }

        function selecionarPagina(numero) {
            vm.carregarPagina({
                $event: {
                    pagina: numero
                }
            })
            vm.paginaAtual = numero;            
        }

        function avancarPagina() {
            if (vm.paginaAtual+1 <= vm.totalPaginas) {
                vm.paginaAtual++;
                vm.selecionarPagina(this.paginaAtual);
            }
        }

        function voltarPagina() {
            if (vm.paginaAtual-1 >= 1) {
                vm.paginaAtual--;
                vm.selecionarPagina(this.paginaAtual);
            }
        }

        vm.$onInit = function() {            
            calculaTotalPaginas();
        }        
    }
})();
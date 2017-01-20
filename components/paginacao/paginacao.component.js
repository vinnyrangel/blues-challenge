(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('paginacao.component',[])
        .component('paginacao', {
            templateUrl: '/components/paginacao/paginacao.template.html',
            controller: paginacaoController,
            controllerAs: 'paginacao',
            bindings: {
                itensPorPagina: '<',
                carregarPagina: '&'
            },
            require: {
                parent:'^gridAzul'
            }
        });

    paginacaoController.$inject = [];
    function paginacaoController() {
        var vm = this;        
        
        // Propriedades
        vm.totalPaginas = 1;

        // Métodos
        vm.selecionarPagina = selecionarPagina;

        ////////////////

        function calculaTotalPaginas() {
            console.log("Entrei");
            var totalItens = vm.parent.dados.length;
            vm.totalPaginas = Math.ceil(totalItens/vm.itensPorPagina);
            console.log(vm.totalPaginas, "Cabei");
        }

        function selecionarPagina(numero) {
            console.log("trocar na paginação");
            vm.carregarPagina({
                $event: {
                    pagina: numero
                }
            })
        }

        vm.$onInit = function() {
            vm.paginaAtual = vm.parent.paginaAtual;
            calculaTotalPaginas();
        }
    }
})();
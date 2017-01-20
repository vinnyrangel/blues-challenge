(function() {
'use strict';

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
        vm.paginaAtual  = 1;

        // Métodos
        vm.selecionarPagina = selecionarPagina;

        ////////////////

        function calculaTotalPaginas() {
            // calculo o total de página contando os itens
            // que estão no array de dados do controller-pai
            var totalItens = vm.parent.dados.length;
            vm.totalPaginas = Math.ceil(totalItens/vm.itensPorPagina);            
        }

        function selecionarPagina(numero) {
            console.log("trocar na paginação");
            vm.carregarPagina({
                $event: {
                    pagina: numero
                }
            })
            vm.paginaAtual = numero;            
        }

        vm.$onInit = function() {            
            calculaTotalPaginas();
        }
    }
})();
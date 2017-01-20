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

        
        ////////////////

        vm.$onInit = function() {
            vm.paginaAtual = vm.parent.paginaAtual;
            
        }
    }
})();
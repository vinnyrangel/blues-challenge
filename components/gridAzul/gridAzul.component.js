(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('gridAzul.component',[])
        .component('gridAzul', {
            templateUrl: '/components/gridAzul/gridAzul.template.html',
            controller: gridAzulController,
            controllerAs: 'grid',
            bindings: {
                dados: '<',
                colunas: '<',
                itensPorPagina: '@'
            },
        });

    gridAzulController.$inject = [];
    
    function gridAzulController() {
        var vm = this;

        vm.paginaAtual = 1;        
        vm.carregarPagina = carregarPagina;
        
        ////////////////

        function carregarPagina(event) {
            console.log("Hora de carregar a página" + event.pagina);
        }

        vm.$onInit = function() {
            console.log(vm.itensPorPagina, "itensPorPagina 1");
        }
    }
})();
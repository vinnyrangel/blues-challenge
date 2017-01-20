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

        // Propriedades
        vm.paginaAtual = 1;        
        vm.dadosPagina = []; // controla quais dados serão exibidos na página atual
        vm.selecionados = [];

        // Métodos
        vm.carregarPagina = carregarPagina;
        vm.selecionarItem = selecionarItem;
        
        ////////////////

        function carregarPagina(event) {
            console.log("Hora de carregar a página" + event.pagina);

            // calculo onde iniciam os registros da próxima página
            var inicio = (parseInt(event.pagina)-1) * vm.itensPorPagina;
            console.log(inicio, "inicio");

            var auxDados = angular.copy(vm.dados);
            vm.dadosPagina = auxDados.splice(inicio, vm.itensPorPagina); 
            console.log(vm.dadosPagina, "vm.dadosPagina");
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
        

        vm.$onInit = function() {
            console.log(vm.itensPorPagina, "itensPorPagina 1");
            carregarPagina({pagina: 1});
        }
    }
})();
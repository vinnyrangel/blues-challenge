(function () {
    'use strict';

    angular
        .module('vehicles')
        .controller('newController', newController);

    newController.$inject = ['storageService', 'usSpinnerService', 'vehiclesService', '$state'];

    function newController(storageService, usSpinnerService, vehiclesService, $state) {
        var vm = this;

        // Propriedades 
        vm.veiculo = {
            placa      : "",
            marca      : "",
            modelo     : "",
            combustivel: "",
            valor      : "",
            foto       : ""
        }       

        // Métodos
        vm.voltar = voltar;
        vm.novoVeiculo = novoVeiculo;

        /////////////////

        function voltar() {
            $state.go('main.vehicles.list');
        }

        function novoVeiculo(veiculo) {
            vehiclesService.add(veiculo);
            $state.go('main.vehicles.list');
        }
        
    };
})();

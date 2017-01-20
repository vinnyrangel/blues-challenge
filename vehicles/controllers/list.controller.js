(function () {
    'use strict';

    angular
        .module('vehicles')
        .controller('listController', listController);

    listController.$inject = ['storageService', 'usSpinnerService', 'vehiclesService', '$state'];

    function listController(storageService, usSpinnerService, vehiclesService, $state) {
        var vm = this;
        
        // Propriedades
        vm.veiculos = vehiclesService.vehicles;
        vm.gridColunas = [
            {value: "placa", label: "Placa"},
            {value: "modelo", label: "Modelo"},
            {value: "marca", label: "Marca"},
            {value: "foto", label: "Foto"},
            {value: "combustivel", label: "Combustivel"},
            {value: "valor", label: "Valor"}
        ];

        // Métodos
        vm.addNewVehicle = addNewVehicle;

        /////////////////

        function addNewVehicle() {
            $state.go('main.vehicles.new');
        }  
    };
})();

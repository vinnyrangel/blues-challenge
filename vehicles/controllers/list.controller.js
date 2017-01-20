(function () {
    'use strict';

    angular
        .module('vehicles')
        .controller('listController', listController);

    listController.$inject = ['storageService', 'usSpinnerService', 'vehiclesService', '$state', '$scope'];

    function listController(storageService, usSpinnerService, vehiclesService, $state, $scope) {
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
        vm.removeVehicles = removeVehicles;

        /////////////////

        function addNewVehicle() {
            $state.go('main.vehicles.new');
        }  

        function removeVehicles(event) {            
            var selected_vehicles = event.selecionados;
            vehiclesService.remove(selected_vehicles, function(){
                vm.veiculos = vehiclesService.vehicles;
            });
        }
        
    };
})();

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

        // Métodos
        vm.addNewVehicle = addNewVehicle;

        /////////////////

        function addNewVehicle() {
            $state.go('main.vehicles.new');
        }  
    };
})();

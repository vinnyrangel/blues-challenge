(function () {
    'use strict';

    angular
        .module('vehicles')
        .controller('listController', listController);

    listController.$inject = ['storageService', 'usSpinnerService', 'vehiclesService', '$state', '$stateParams'];

    function listController(storageService, usSpinnerService, vehiclesService, $state, $stateParams) {
        var vm = this;
        
        // Propriedades
        vm.veiculos = vehiclesService.vehicles;
        vm.gridColunas = [
            {value: "placa", label: "Placa"},
            {value: "modelo", label: "Modelo"},
            {value: "marca", label: "Marca"},
            {value: "imagem", label: "Imagem", fn: exibeImagem},
            {value: "combustivel", label: "Combustivel"},
            {value: "valor", label: "Valor"}
        ];
        vm.pagina = ($stateParams.adicionado) ? 0 : 1;

        //console.log($stateParams.adicionado, "$stateParams.adicionado");

        // Métodos
        vm.addNewVehicle  = addNewVehicle;
        vm.removeVehicles = removeVehicles;
        vm.editVehicles   = editVehicles;

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

        function editVehicles(event) {                        
            $state.go('main.vehicles.edit', {placa: event.selecionado.placa});
        }

        function exibeImagem(url) {
            if (url)
                return "<a href='"+url+"' target='_blank'>Imagem</a>";
            else
                return "Sem foto";
        }
        
    };
})();

(function () {
    'use strict';

    angular
        .module('vehicles')
        .controller('editController', editController);

    editController.$inject = ['storageService', 'usSpinnerService', 'vehiclesService', '$state', '$stateParams'];

    function editController(storageService, usSpinnerService, vehiclesService, $state, $stateParams) {
        var vm = this;
        
        // Propriedades
        vm.veiculos = vehiclesService.vehicles;
        vm.veiculo = {};
        
        // Métodos
        
        

        // Métodos
        vm.voltar = voltar;
        vm.editarVeiculo = editarVeiculo;

        /////////////////

        function voltar() {
            $state.go('main.vehicles.list');
        }

        function editarVeiculo(veiculo) {
            vehiclesService.edit(veiculo);
            $state.go('main.vehicles.list');
        }

        vm.$onInit = function() {
            vm.veiculo = vm.veiculos.find(function(veiculo) {
                return veiculo.placa == $stateParams.placa;
            });

            console.log(vm.veiculo, "VEICULO ENCONTRADO");
        }
        
    };
})();

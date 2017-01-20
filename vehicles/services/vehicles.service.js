(function() {
'use strict';

    angular
        .module('vehicles')
        .service('vehiclesService', vehiclesService);

    vehiclesService.$inject = ['$rootScope', 'storageService'];
    function vehiclesService($rootScope, storageService) {

        // Propriedades
        this.vehicles = [];
        this.selected = [];

        // Métodos
        this.init   = init;
        this.add    = add;
        this.edit   = edit;
        this.remove = remove;
        this.save   = save;

        this.init();

        ////////////////

        function add(vehicle) {
            this.vehicles.push(vehicle);
            this.save();
        }
        
        function edit(selected_vehicle) {
            this.vehicles.forEach(function(veiculo) {
                if (veiculo.placa == selected_vehicle.placa) {                    
                    veiculo = selected_vehicle;
                }
            })
            this.save();
        }

        function remove(selected_vehicles, callback) {                        
            this.vehicles = this.vehicles.filter(function(vehicle) {                                
                return !findInside(selected_vehicles, vehicle, "placa");
            });    
            this.save();                    
            if (callback)
                callback();
        }

        function save() {
            storageService.set("vehicles", this.vehicles);
        }

        function findInside(source, target, prop) {
            var result = source.find(function(item) {                
                return item[prop] == target[prop];
            });            
            return (result) ? true : false;
        }

        function init() {
            if (storageService.get("vehicles")) {
                this.vehicles = storageService.get("vehicles");
            } else {                        
                this.vehicles = [
                    { "combustivel" : "Flex", "imagem" : null, "marca" : "Volkswagem", "modelo" : "Gol", "placa" : "FFF-5498", "valor" : "20000"},

                    { "combustivel" : "Gasolina", "imagem" : null, "marca" : "Volkswagem", "modelo" : "Fox", "placa" : "FOX-4125", "valor" : "20000"},

                    { "combustivel" : "Alcool", "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg", "marca" : "Volkswagen", "modelo" : "Fusca", "placa" : "PAI-4121", "valor" : "20000"}                    
                ];
                this.save();
            }
        }
        
    }
})();
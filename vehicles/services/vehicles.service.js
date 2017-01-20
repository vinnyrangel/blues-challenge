(function() {
'use strict';

    angular
        .module('vehicles')
        .service('vehiclesService', vehiclesService);

    vehiclesService.$inject = ['$rootScope'];
    function vehiclesService($rootScope) {

        // Propriedades
        this.vehicles = [
            { "combustivel" : "Flex", "imagem" : null, "marca" : "Volkswagem", "modelo" : "Gol", "placa" : "FFF-5498", "valor" : "20000"},

            { "combustivel" : "Gasolina", "imagem" : null, "marca" : "Volkswagem", "modelo" : "Fox", "placa" : "FOX-4125", "valor" : "20000"},

            { "combustivel" : "Alcool", "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg", "marca" : "Volkswagen", "modelo" : "Fusca", "placa" : "PAI-4121", "valor" : "20000"},




            { "combustivel" : "Flex", "imagem" : null, "marca" : "Honda", "modelo" : "Civic", "placa" : "KBC-8374", "valor" : "80000"},

            { "combustivel" : "Alcool", "imagem" : null, "marca" : "Peugeot", "modelo" : "206", "placa" : "LTR-0044", "valor" : "20000"},

            { "combustivel" : "Alcool", "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg", "marca" : "Ford", "modelo" : "Fiesta", "placa" : "RAU-4031", "valor" : "20000"},

            { "combustivel" : "Gasolina", "imagem" : null, "marca" : "Volkswagem", "modelo" : "Polo", "placa" : "GOD-1234", "valor" : "20000"},

            { "combustivel" : "Gasolina", "imagem" : null, "marca" : "Nissan", "modelo" : "Sentra", "placa" : "JFF-4380", "valor" : "20000"},

            { "combustivel" : "Flex", "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg", "marca" : "BMW", "modelo" : "320i", "placa" : "CAL-9359", "valor" : "20000"}
        ];
        this.selected = [];

        // Métodos
        this.add = add;
        this.remove = remove;

        ////////////////

        function add(vehicle) {
            this.vehicles.push(vehicle);
        }
        

        function remove(selected_vehicles, callback) {                        
            this.vehicles = this.vehicles.filter(function(vehicle) {                                
                return !findInside(selected_vehicles, vehicle, "placa");
            });                        
            if (callback)
                callback();
        }

        function findInside(source, target, prop) {
            var result = source.find(function(item) {                
                return item[prop] == target[prop];
            });            
            return (result) ? true : false;
        }
        
    }
})();
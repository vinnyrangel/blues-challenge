(function() {
'use strict';

    angular
        .module('vehicles')
        .service('vehiclesService', vehiclesService);

    vehiclesService.$inject = [];
    function vehiclesService() {

        // Propriedades
        this.vehicles = [
            { "combustivel" : "Flex", "imagem" : null, "marca" : "Volkswagem", "modelo" : "Gol", "placa" : "FFF-5498", "valor" : "20000"},

            { "combustivel" : "Gasolina", "imagem" : null, "marca" : "Volkswagem", "modelo" : "Fox", "placa" : "FOX-4125", "valor" : "20000"},

            { "combustivel" : "Alcool", "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg", "marca" : "Volkswagen", "modelo" : "Fusca", "placa" : "PAI-4121", "valor" : "20000"}
        ];
        this.selected = [];

        // Métodos
        this.add = add;
        this.remove = remove;

        ////////////////

        function add(vehicle) {
            this.vehicles.push(vehicle);
        }
        

        function remove(index) {
            this.vehicles.splice(index, 1);
        }
        
    }
})();
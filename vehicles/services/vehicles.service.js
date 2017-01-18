(function() {
'use strict';

    angular
        .module('vehicles')
        .service('vehiclesService', vehiclesService);

    vehiclesService.inject = [];
    function vehiclesService() {
        this.add = add;
        this.remove = remove;

        ////////////////

        function add(vehicle) { 
            
        }
        

        function remove(index) { 

        }
        
    }
})();
(function () {
    'use strict';

    angular
        .module('vehicles')
        .controller('newController', newController);

    newController.$inject = ['storageService', 'usSpinnerService', 'vehiclesService'];

    function newController(storageService, usSpinnerService, vehiclesService) {
        var vm = this;

        
        
    };
})();

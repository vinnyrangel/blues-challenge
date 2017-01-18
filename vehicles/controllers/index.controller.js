(function () {
    'use strict';

    angular
        .module('vehicles')
        .controller('indexController', indexController);

    indexController.$inject = ['storageService', 'usSpinnerService'];

    function indexController(storageService, usSpinnerService) {
        var vm = this;
        
    };
})();

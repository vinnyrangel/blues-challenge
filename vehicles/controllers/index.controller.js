(function () {
    'use strict';

    angular
        .module('Main')
        .controller('indexController', indexController);

    indexController.$inject = ['carrinhoService', 'storageService', 'usSpinnerService'];

    function indexController(carrinhoService, storageService, usSpinnerService) {
        var vm = this;
        
    };
})();

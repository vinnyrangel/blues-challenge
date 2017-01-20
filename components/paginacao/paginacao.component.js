(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('paginacao.component',[])
        .component('paginacao', {
            // template:'htmlTemplate',
            templateUrl: '/components/paginacao/paginacao.template.html',
            controller: paginacaoController,
            bindings: {
                Binding: '=',
            },
        });

    paginacaoController.inject = [];
    function paginacaoController() {
        var vm = this;
        

        ////////////////

        vm.onInit = function() { };
        vm.onChanges = function(changesObj) { };
        vm.onDestory = function() { };
    }
})();
(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('gridAzul.component',[])
        .component('gridAzul', {
            templateUrl: '/components/gridAzul/gridAzul.template.html',
            controller: gridAzulController,
            controllerAs: 'grid',
            bindings: {
                dados: '<',
                colunas: '<'
            },
        });

    gridAzulController.inject = [];
    
    function gridAzulController() {
        var vm = this;
                
        console.log(vm.dados, "DADOS");
        console.log(vm.colunas, "COLUNAS");

        ////////////////

        
    }
})();
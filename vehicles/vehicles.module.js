'use strict';

angular
    .module('vehicles', ['ngStorage', 'angularSpinner'])
    .config(appRouter);

appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function appRouter($stateProvider, $urlRouterProvider) {    

    $stateProvider        
        .state('main.vehicles', {
            url: '/veiculos',
            abstract: true,
            template: '<ui-view />'
        })
        .state('main.vehicles.list', {
            url: '/listar',            
            views: {
                'content@': {
                    controller: 'indexController as index',
                    templateUrl: 'vehicles/views/index.template.html'
                }
            }
        });
};

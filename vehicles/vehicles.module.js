'use strict';

angular
    .module('vehicles', ['ngStorage', 'angularSpinner', 'gridAzul.component', 'paginacao.component'])
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
                    controller: 'listController as listar',
                    templateUrl: 'vehicles/views/list.template.html'
                }
            }
        })
        .state('main.vehicles.new', {
            url: '/novo',            
            views: {
                'content@': {
                    controller: 'newController as adicionar',
                    templateUrl: 'vehicles/views/new.template.html'
                }
            }
        });
    
    $urlRouterProvider.otherwise('/veiculos/listar');
};

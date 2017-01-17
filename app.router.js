'use strict';

angular
    .module('Main')
    .config(appRouter);

appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function appRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider        
        .state('vehicles', {
            url: '/veiculos',
            views: {
                'conteudo': {
                    controller: 'indexController as index',
                    templateUrl: '/vehicles/views/index.template.html'
                }
            }
        });
};

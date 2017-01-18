'use strict';

angular
    .module('Main')
    .config(appRouter);

appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function appRouter($stateProvider, $urlRouterProvider) {    

    $stateProvider        
        .state('main', {
            url: '',
            abstract: true,
            views: {              
              'header': {
                   templateUrl: 'views/header.html'
              },
              'footer': {
                   templateUrl: 'views/footer.html'
              }
            }
        })
        .state('main.home' , {
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'views/home.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/');
};

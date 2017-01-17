(function () {
    'use strict';

    angular
        .module('Main')
        .config(appConfig);

    appConfig.$inject = ['$locationProvider', 'usSpinnerConfigProvider'];

    function appConfig($locationProvider, usSpinnerConfigProvider) {
        $locationProvider.html5Mode(true);
        usSpinnerConfigProvider.setDefaults({ lines: 11, length: 30, width: 10, radius: 30, color: '#255178', position: 'absolute' });
    };
} ());

angular
    .module('Main')
    .run(appRun);

appRun.$inject = ['$rootScope'];

function appRun($rootScope) {
    var showSpinner = $rootScope.$on('us-spinner:spin', function (event, key) {
        angular.element('#' + key).addClass('container-spinner');
    });

    var hideSpinner = $rootScope.$on('us-spinner:stop', function (event, key) {
        angular.element('#' + key).removeClass('container-spinner');
    });
};

(function () {
    'use strict';

    angular
        .module('Main')
        .service('parametrosService', parametrosService);

    parametrosService.$inject = ['$location'];

    function parametrosService($location) {
        var vm = this;
        vm.parametros = $location.search();

        vm.analytics = {
            'utm_campaign': vm.parametros.utm_campaign,
            'utm_content': vm.parametros.utm_content,
            'utm_medium': vm.parametros.utm_medium,
            'utm_source': vm.parametros.utm_source,
            'utm_terms': vm.parametros.utm_terms
        };

        vm.bko = {
            'u': vm.parametros.u,
            'codigo_origem': vm.parametros.codigo_origem
        };

        vm.configProjeto = {
            'ddd': vm.parametros.ddd,
            'uf': vm.parametros.uf,
            'plataforma': vm.parametros.plataforma,
            'plano': vm.parametros.plano,
            'sku': vm.parametros.sku
        };
    };
})();

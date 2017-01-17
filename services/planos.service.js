(function () {
    'use strict';

    angular
        .module('Main')
        .service('planosService', planosService);

    planosService.$inject = ['$http', 'configurationService', 'parametrosService'];

    function planosService($http, configurationService, parametrosService) {
        this.getPlanos = getPlanos;

        function getPlanos(codigoOrigem) {
            var urlPlanos = configurationService.getUrlPlano + '?CodigoOrigem=' + codigoOrigem + '&UfDefault=SP';

            if(parametrosService.configProjeto.uf) {
                urlPlanos += '&Uf=' + parametrosService.configProjeto.uf;
            }

            if(parametrosService.configProjeto.plano) {
                urlPlanos += '&Plano=' + parametrosService.configProjeto.plano;
            }

            if(parametrosService.configProjeto.sku) {
                urlPlanos += '&sku=' + parametrosService.configProjeto.sku;
            }

            return $http.get(urlPlanos).then(
                function (resultado) {
                    return resultado.data.Skus;
                },
                function (error) {
                    console.error(error);
                }
            );
        };
    };
})();

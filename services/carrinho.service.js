(function () {
    'use strict';

    angular
        .module('Main')
        .service('carrinhoService', carrinhoService);

    carrinhoService.$inject = ['$http', 'configurationService'];

    function carrinhoService($http, configurationService) {
        var urlAtualizaCarrinho = configurationService.getUrlAtualizaCarrinho;
        var urlNovoCarrinho = configurationService.getUrlNovoCarrinho;

        this.atualizaCarrinho = atualizaCarrinho;
        this.novoCarrinho = novoCarrinho;

        function atualizaCarrinho(carrinho) {
            return $http.post(urlAtualizaCarrinho, carrinho).then(
                function (resultado) {
                    return resultado.data;
                },
                function (erro) {
                    console.error(erro);
                }
            );
        };

        function novoCarrinho(carrinho, headers) {
            var request = {
                method: 'POST',
                url: urlNovoCarrinho,
                headers: headers,
                data: carrinho
            };

            return $http(request).then(
                function (resultado) {
                    return resultado.data;
                },
                function (erro) {
                    console.error(erro);
                }
            );
        };
    };
})();

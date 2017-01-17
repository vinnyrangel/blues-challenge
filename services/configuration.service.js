(function () {
    'use strict';

    angular
        .module('Main')
        .service('configurationService', configurationService);

    configurationService.$inject = ['$http', '$location', '$rootScope', 'parametrosService'];

    function configurationService($http, $location, $rootScope, parametrosService) {
        var ENV = '';

        var token = {
            dev: '9ec365a9a6664414ac8927b1bda4744c',
            homolog: 'c787dc81a50b467ca19d9eba7572c684',
            prod: 'c325452a3cf7473e85d375faca1ee812'
        };

        var domain = {
            dev: '//esb.webapidev.cd.com',
            homolog: '//esb.webapihmg.cd.com',
            prod: '//gtw.celulardireto.com.br'
        };

        var originCode = {
            dev: '',
            homolog: '',
            prod: ''
        };

        if ($location.host().match('hmg.')) {
            ENV = 'homolog';
        } else if ($location.host().match('dev.') || $location.host().match('localhost') || $location.host().match('10.17.2.')) {
            ENV = 'dev';
        } else {
            ENV = 'prod';
        }

        // Token/Authorization
        $http.defaults.headers.common.Authorization = token[ENV];

        // Codigo da operadora
        $http.defaults.headers.common.CodigoOperadora = '';

        // Codigo Origem
        if (parametrosService.bko.codigo_origem) {
            $rootScope.originCode = parametrosService.bko.codigo_origem;
        } else {
            $rootScope.originCode = originCode[ENV];
        }

        this.getUrlNovoCarrinho = domain[ENV] + '/v1/api/carrinho/';
        this.getUrlAtualizaCarrinho = domain[ENV] + '/v1/api/carrinho/';
        this.getUrlEndereco = domain[ENV] + '/v1/api/endereco/listar/porendereco/';
        this.getUrlCep = domain[ENV] + '/v1/api/endereco/obter/porcep/?cep=';
        this.getUrlPlano = domain[ENV] + '/v1/api/produto/';
        this.getUrlStatesAreaCodes = domain[ENV] + '/v1/api/endereco/Listar/UFs/ddds?Uf=';
        this.getUrlFaq = domain[ENV] + '/v1/api/crm/obter/faq/';
        this.getUrlRatingFaq = domain[ENV] + '/v1/api/crm/faq/';
        this.getUrlAkiva = domain[ENV] + '/v1/api/crm/enviar/discador';
        this.urlLiveChatIframe = '/layout/chat.template.html';
    };
})();

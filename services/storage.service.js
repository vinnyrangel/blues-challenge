(function () {
    'use strict';

    angular
        .module('Main')
        .factory('storageService', storageService);

    storageService.$inject = ['$localStorage', '$sessionStorage'];

    function storageService($localStorage, $sessionStorage) {
        //caso precise mudar para Local Storage é só alterar a variável abaixo
        var type = 'session';
        var storage = this;

        storage.configure = configure;
        storage.del = del;
        storage.get = get;
        storage.set = set;

        function configure(type) {
            type = type;
        };

        function del(k, v) {
            if (type === 'session') {
                eval('delete $sessionStorage.' + k + ';');
            } else if (type === 'local') {
                eval('delete $localStorage.' + k + ';');
            }
        };

        function get(k) {
            if (type === 'session') {
                return eval('$sessionStorage.' + k);
            } else if (type === 'local') {
                return eval('$localStorage.' + k);
            }
        };

        function set(k, v) {
            if (type === 'session') {
                $sessionStorage[k] = v;
            } else if (type === 'local') {
                $localStorage[k] = v;
            }
        };

        return storage;
    };
})();

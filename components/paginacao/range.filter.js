(function() {
'use strict';

    angular
        .module('paginacao.component')
        .filter('range', range);

    function range() {
        return rangeFilter;

        ////////////////

        function rangeFilter(input, total) {
            total = parseInt(total);
            for (var i=0; i<total; i++)
                input.push(i);
            return input;
        }
    }
})();
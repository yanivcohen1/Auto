'use strict';

angular.module('testmanageApp')
    .factory('TestsSearch', function ($resource) {
        return $resource('api/_search/testss/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });

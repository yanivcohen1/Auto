'use strict';

angular.module('testmanagerApp')
    .factory('TestsSearch', function ($resource) {
        return $resource('api/_search/testss/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });

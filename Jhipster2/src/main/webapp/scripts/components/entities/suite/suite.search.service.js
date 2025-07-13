'use strict';

angular.module('testmanageApp')
    .factory('SuiteSearch', function ($resource) {
        return $resource('api/_search/suites/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });

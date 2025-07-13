'use strict';

angular.module('testmanagerApp')
    .factory('TestsRun', function ($resource, DateUtils) {
        return $resource('api/run_tests/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'runTests': {method:'POST'
            	/*,transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }*/},
            'update': { method:'PUT' }
        });
    });

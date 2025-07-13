'use strict';

angular.module('testmanageApp')
    .factory('Suite', function ($resource, DateUtils) {
        return $resource('api/suites/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });

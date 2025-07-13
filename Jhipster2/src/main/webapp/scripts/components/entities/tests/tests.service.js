'use strict';

angular.module('testmanageApp')
    .factory('Tests', function ($resource, DateUtils) {
        return $resource('api/testss/:id', {}, {
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

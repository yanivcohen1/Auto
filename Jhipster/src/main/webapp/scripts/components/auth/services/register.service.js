'use strict';

angular.module('testmanageApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



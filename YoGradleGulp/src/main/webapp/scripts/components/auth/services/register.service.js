'use strict';

angular.module('testsmanagerApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



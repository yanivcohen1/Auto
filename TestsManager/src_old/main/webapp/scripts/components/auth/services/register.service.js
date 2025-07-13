'use strict';

angular.module('testmanagerApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



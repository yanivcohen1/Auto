'use strict';

angular.module('testmanagerApp')
    .factory('BootSwatchService', function ($http, $location) {
        return {
            get: function() {
            	var url = 'scripts/components/util/bootswatch.html';
                return $http.get(url).then(function (response) {
                    return response.data.themes;
                });
            }
        };
    });
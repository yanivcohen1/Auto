'use strict';

angular.module('testmanagerApp')
    .factory('BootSwatchService', function ($http, $location) {
        return {
            get: function() {
            	var url = 'scripts/components/util/them.html';
            	var themes;
                return $http.get(url).then(function (response) {
                	themes = response.data.themes;
                    return response.data.themes;
                });
            }
        };
    });
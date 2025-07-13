'use strict';

angular.module('testmanagerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('entity', {
                abstract: true,
                parent: 'site'
            });
    });

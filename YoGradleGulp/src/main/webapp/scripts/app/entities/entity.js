'use strict';

angular.module('testsmanagerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('entity', {
                abstract: true,
                parent: 'site'
            });
    });

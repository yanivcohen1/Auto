'use strict';

angular.module('testsmanagerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('admin', {
                abstract: true,
                parent: 'site'
            });
    });

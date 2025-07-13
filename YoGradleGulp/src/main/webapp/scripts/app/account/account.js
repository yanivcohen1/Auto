'use strict';

angular.module('testsmanagerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('account', {
                abstract: true,
                parent: 'site'
            });
    });

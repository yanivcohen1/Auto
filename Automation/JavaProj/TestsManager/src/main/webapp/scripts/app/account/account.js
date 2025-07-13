'use strict';

angular.module('testmanagerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('account', {
                abstract: true,
                parent: 'site'
            });
    });

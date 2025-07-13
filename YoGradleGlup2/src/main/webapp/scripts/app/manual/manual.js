'use strict';

angular.module('testmanagerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('manual', {
                parent: 'site',
                url: '/manual',
                data: {
                    roles: ['ROLE_USER']
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/manual/manual.html',
                        controller: 'ManualController'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('manual');
                        return $translate.refresh();
                    }]
                }
            });
    });

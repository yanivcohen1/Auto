'use strict';

angular.module('testmanageApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('suite', {
                parent: 'entity',
                url: '/suite',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'testmanageApp.suite.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/suite/suites.html',
                        controller: 'SuiteController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('suite');
                        return $translate.refresh();
                    }]
                }
            })
            .state('suiteDetail', {
                parent: 'entity',
                url: '/suite/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'testmanageApp.suite.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/suite/suite-detail.html',
                        controller: 'SuiteDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('suite');
                        return $translate.refresh();
                    }]
                }
            });
    });

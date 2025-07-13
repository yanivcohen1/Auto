'use strict';

angular.module('testmanageApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('tests', {
                parent: 'entity',
                url: '/tests',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'testmanageApp.tests.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/tests/testss.html',
                        controller: 'TestsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('tests');
                        return $translate.refresh();
                    }]
                }
            })
            .state('testsDetail', {
                parent: 'entity',
                url: '/tests/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'testmanageApp.tests.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/tests/tests-detail.html',
                        controller: 'TestsDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('tests');
                        return $translate.refresh();
                    }]
                }
            });
    });

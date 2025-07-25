angular.module('testmanageApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('tracker', {
                parent: 'admin',
                url: '/tracker',
                data: {
                    roles: ['ROLE_ADMIN']
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/admin/tracker/tracker.html',
                        controller: 'TrackerController'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('tracker');
                        return $translate.refresh();
                    }]
                },
                onEnter: function(Tracker) {
                    Tracker.subscribe();
                },
                onExit: function(Tracker) {
                    Tracker.unsubscribe();
                },
            });
    });

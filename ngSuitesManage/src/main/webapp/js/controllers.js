'use strict';

/* Controllers */


var app = angular.module('ngdemo.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('MyCtrl2', ['$scope', 'UserFactory', function ($scope, UserFactory) {
    $scope.bla = 'bla from controller';
    UserFactory.get({}, function (userFactory) {
    	//alert(userFactory.users[0].firstName);
        $scope.firstname = userFactory.users[1].firstName;//[0].firstName;//userFactory;
        //console.log(userFactory);
    })
}]);

app.controller('MyCtrl1', ['$scope', 'AllSutiesFactory', function ($scope, AllSutiesFactory) {
    $scope.bla = 'bla from controller';
    AllSutiesFactory.get({}, function (allSutiesFactory) {
    	//alert(allSutiesFactory.suites[0].suiteName);//.suitesDatas[0].suiteName
        $scope.suites = allSutiesFactory.suites;//[0].firstName;//userFactory;
        //console.log(userFactory);
    })
}]);
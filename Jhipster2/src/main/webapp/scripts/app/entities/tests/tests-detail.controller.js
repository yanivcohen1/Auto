'use strict';

angular.module('testmanageApp')
    .controller('TestsDetailController', function ($scope, $stateParams, Tests, Suite) {
        $scope.tests = {};
        $scope.load = function (id) {
            Tests.get({id: id}, function(result) {
              $scope.tests = result;
            });
        };
        $scope.load($stateParams.id);
    });

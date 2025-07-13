'use strict';

angular.module('testmanageApp')
    .controller('SuiteDetailController', function ($scope, $stateParams, Suite, Tests) {
        $scope.suite = {};
        $scope.load = function (id) {
            Suite.get({id: id}, function(result) {
              $scope.suite = result;
            });
        };
        $scope.load($stateParams.id);
    });

'use strict';

angular.module('testmanagerApp')
    .controller('TestsController', function ($scope, Tests, Suite, TestsSearch, ParseLinks) {
        $scope.testss = [];
        $scope.suites = Suite.query();
        $scope.page = 1;
        $scope.loadAll = function() {
            Tests.query({page: $scope.page, per_page: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                for (var i = 0; i < result.length; i++) {
                    $scope.testss.push(result[i]);
                }
            });
        };
        $scope.reset = function() {
            $scope.page = 1;
            $scope.testss = [];
            $scope.loadAll();
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();

        $scope.showUpdate = function (id) {
            Tests.get({id: id}, function(result) {
                $scope.tests = result;
                $('#saveTestsModal').modal('show');
            });
        };

        $scope.save = function () {
            if ($scope.tests.id != null) {
                Tests.update($scope.tests,
                    function () {
                        $scope.refresh();
                    });
            } else {
                Tests.save($scope.tests,
                    function () {
                        $scope.refresh();
                    });
            }
        };

        $scope.delete = function (id) {
            Tests.get({id: id}, function(result) {
                $scope.tests = result;
                $('#deleteTestsConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Tests.delete({id: id},
                function () {
                    $scope.reset();
                    $('#deleteTestsConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.search = function () {
            TestsSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.testss = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

        $scope.refresh = function () {
            $scope.reset();
            $('#saveTestsModal').modal('hide');
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.tests = {test_name: null, class_name: null, method_name: null, parameter_name: null, parameter_value: null, id: null};
            $scope.editForm.$setPristine();
            $scope.editForm.$setUntouched();
        };
    });

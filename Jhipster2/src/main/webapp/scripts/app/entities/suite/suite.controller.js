'use strict';

angular.module('testmanageApp')
    .controller('SuiteController', function ($scope, Suite, Tests, SuiteSearch, ParseLinks) {
        $scope.suites = [];
        $scope.testss = Tests.query();
        $scope.page = 1;
        $scope.loadAll = function() {
            Suite.query({page: $scope.page, per_page: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                for (var i = 0; i < result.length; i++) {
                    $scope.suites.push(result[i]);
                }
            });
        };
        $scope.reset = function() {
            $scope.page = 1;
            $scope.suites = [];
            $scope.loadAll();
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();

        $scope.showUpdate = function (id) {
            Suite.get({id: id}, function(result) {
                $scope.suite = result;
                $('#saveSuiteModal').modal('show');
            });
        };

        $scope.save = function () {
            if ($scope.suite.id != null) {
                Suite.update($scope.suite,
                    function () {
                        $scope.refresh();
                    });
            } else {
                Suite.save($scope.suite,
                    function () {
                        $scope.refresh();
                    });
            }
        };

        $scope.delete = function (id) {
            Suite.get({id: id}, function(result) {
                $scope.suite = result;
                $('#deleteSuiteConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Suite.delete({id: id},
                function () {
                    $scope.reset();
                    $('#deleteSuiteConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.search = function () {
            SuiteSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.suites = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

        $scope.refresh = function () {
            $scope.reset();
            $('#saveSuiteModal').modal('hide');
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.suite = {suite_name: null, xml_file_location: null, jenkins_url: null, id: null};
            $scope.editForm.$setPristine();
            $scope.editForm.$setUntouched();
        };
    });

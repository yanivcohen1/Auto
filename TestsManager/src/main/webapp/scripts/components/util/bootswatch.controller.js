'use strict';

angular.module('testmanagerApp')
    .controller('BootswatchController', function ($scope, BootSwatchService) {
        /*Get the list of availabel bootswatch themes*/
        BootSwatchService.get().then(function(themes) {
            $scope.themes = themes;
            $scope.themes.unshift({name:'Default',css:''});
        }).then(function (response) {
        	 //$("#bootswatch-css").attr("href", $scope.themes[13].css); //Default css
        });
    });
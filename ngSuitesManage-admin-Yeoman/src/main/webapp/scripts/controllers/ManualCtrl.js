'use strict';
app.controller('FileLoadCtrl', function ($scope, $log, $window, $http, ngAuthSettings) {
	var manualUrl = ngAuthSettings.apiServiceBaseUri + '/rest/manual/';
    $scope.options = [];
	$scope.content = "";
	$scope.selected;
	
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };
    
    getmanualTests();
    
    function getmanualTests() {
    	$http.get(manualUrl).success(function(allmanualTests) {
    		$scope.options = allmanualTests;
    	});
    	/*ManualFactory.query(function(allmanualTests) {
            //$log.info('manualTests: ' + manualTests);
        	});*/
    };
    
    $scope.runTest = function(content){
    	//var manualFactory = new ManualFactory();
    	//manualFactory.testName = $scope.selected;
    	//manualFactory.testContent = $scope.content;
    	$http.post(manualUrl,{testName:$scope.selected, testContent:$scope.content}).success(function(jenkinsUrl) {
    	//manualFactory.$save(function(jenkinsUrl) {
    			$window.open(jenkinsUrl);//'http://172.21.54.222:8080/view/BAU/job/BAU_Manual/', '_blank');
    		}
    	);
    	
    };
    
});
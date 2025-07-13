'use strict';
app.controller('SingleManualCtrl', function ($scope, $log, $window, $http, $filter, ngTableParams) {
	var manualUrl = AppConfig.apiServiceBaseUri() + '/rest/singleManual/';
    $scope.options = [];
	$scope.content = "";
	$scope.errorContent = "";
	$scope.status = "";
	$scope.battonStatus = "Run Test";
	$scope.data = [];
	var csv = "";
	//var suites = [{ suiteId: 1, url: "BAU Tests", xmlFileLocation: "C:\\", jenkinsURL: "http://"}]
	// suiteName =URL Xml FileLocation=returnCode Jenkins URL=MSG
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
    };
    
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: $scope.data.length, // length of data
        getData: function ($defer, params) {
        	var filteredData = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
            var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : $scope.data;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
    
    $scope.$watch("data", function () {
    	if ($scope.data.length != 0) {
    		$scope.tableParams.reload();
		}		
	});	
    
    $scope.runTest = function(content){
    	if ($scope.battonStatus == "Run Test") {
    		$scope.data = [];
    		var internalData = [];
    		$scope.battonStatus = "Stop";
    		$scope.errorContent = "";
        	var arrays = [];
        	var index = 0;
        	var contantArray = content.trim().split("\n"); 
        	var lastIndex = contantArray.length;
        	angular.forEach(contantArray, function(indexContent){
        	    if ($scope.battonStatus != "Run Test") {
					arrays.push($http.post(manualUrl, indexContent).success(function(results) {
								index = index + 1;
								$scope.status = "running index:" + index+ " of " + parseInt(lastIndex);
								console.log(results);
								if (results[0] !== "200") {
									$scope.errorContent = $scope.errorContent
											+ '\n' + index + ": ReturnCode:"
											+ results[0] + " URL:"
											+ indexContent + " MSG:"
											+ results[1];
									var a ={ index: index, url: indexContent, returnCode: results[0], msg: results[1]};
									internalData.push(a);
								}
								if (index == parseInt(lastIndex)) {
									$scope.battonStatus = "Run Test";
									$scope.status = "Done";
									$scope.data = internalData;
									//$scope.tableParams.reload();
								}
							}));
				}
        	    
        	});
		}else{
			$scope.battonStatus = "Run Test";
		}	
    };
    
    $scope.downloadCsv = function(){
    	csv = "";
    	//index: index, url: indexContent, returnCode: results[0], msg: results[1]
    	angular.forEach($scope.data, function(line){
    		csv = csv + '\n' + line.url.trim() + ',' + line.returnCode + ',' + line.msg;
    	});
    	console.log(csv);
    	var hiddenElement = document.createElement('a');

    	hiddenElement.href = 'data:attachment/text,' + encodeURI(csv);
    	hiddenElement.target = '_blank';
    	hiddenElement.download = 'errors.csv';
    	hiddenElement.click();
    };
    
});
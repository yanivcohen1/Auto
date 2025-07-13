'use strict';
app.controller('FileLoadCtrl', function ($scope, $log, $window, $http, $q, $resource, uiGridConstants) {
	//var manualUrl = AppConfig.apiServiceBaseUri() + '/rest/manual/';
    $scope.options = ["Manual Test"];
	$scope.content = "";
	$scope.selected;
	$scope.status;
	var contentJson;
	$scope.isCollapsed = false;
	$scope.responses = [];
	$scope.doneLoading = false;
	var res = [];
	//getmanualTests();
	
	$scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
	    if( col.filters[0].term ){
	      return 'header-filtered';
	    } else {
	      return '';
	    }
	  };

	  $scope.gridOptions = {
	    enableFiltering: true,
	    onRegisterApi: function(gridApi){
	      $scope.gridApi = gridApi;
	    }
	  };
	  
	  $scope.gridOptions2 = {
	    enableFiltering: true,
	    onRegisterApi: function(gridApi){
	      $scope.gridApi = gridApi;
	    }
	  };
	 
	
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
        contentJson = JSON.parse(csvJSON($scope.content));
        $scope.gridOptions.data = JSON.parse(csvJSON($scope.content));
    };
    
    function csvJSON(csv){
    	  var lines=csv.split("\n");
    	  var result = [];
    	  var headers=lines[0].trim().split(",");
    	  for(var i=1;i<lines.length;i++){
    		  var obj = {};
    		  var currentline=lines[i].trim().split(",");
    		  for(var j=0;j<headers.length;j++){
    			  obj[headers[j]] = currentline[j];
    		  }
    		  result.push(obj);
    	  }
    	  //return result; //JavaScript object
    	  return JSON.stringify(result); //JSON
    	}
    
    function getmanualTests() {
    	$http.get(manualUrl).success(function(allmanualTests) {
    		$scope.options = allmanualTests;
    	});
    	/*ManualFactory.query(function(allmanualTests) {
            //$log.info('manualTests: ' + manualTests);
        	});*/
    };
    
    $scope.runTest = function(){
    	  $scope.responses = [];
    	  $scope.doneLoading = false;
    	  var url = "";
    	  if($scope.selected = "Manual Test"){
    		  url = AppConfig.apiServiceBaseUri() + '/rest/manual/runManualTest';
    	  }
    	  var resorce = $resource(url, {});
    	  var promise = $q.all(null);
    	  var index = 1;
    	  var length = contentJson.length;
    	  $scope.status = index + " of " + length;
    	  angular.forEach(contentJson, function(line){
    	    promise = promise.then(function(){
    	      return $http.post(url,line)//resorce.save(test).$promise
    	      .then(function(res){
    	    	$scope.status = index + " of " + length;
    	    	index = index + 1;
    	    	var val = line[Object.keys(line)[0]];
    	    	var key = Object.keys(line)[0];
    	        $scope.responses.push(extend({input: val}, res.data));//.splice(0, 0, line[Object.keys(line)[0]])
    	      });
    	    });
    	  });

    	  promise.then(function(){
    	    //This is run after all of your HTTP requests are done
    	    $scope.doneLoading = true;
    	    angular.copy($scope.responses, res);
    	    $scope.gridOptions2.data = $scope.responses;
    	  })

    	/*$http.post(manualUrl,{testName:$scope.selected, testContent:$scope.content}).success(function(jenkinsUrl) {
    	//manualFactory.$save(function(jenkinsUrl) {
    			$window.open(jenkinsUrl);//'http://172.21.54.222:8080/view/BAU/job/BAU_Manual/', '_blank');
    		}
    	);*/
    };
    
    function extend(){
        if(arguments.length === 0){ return; }
        var x = arguments.length === 1 ? this : arguments[0];
        var y;

        for(var i = 1, len = arguments.length; i < len; i++) {
            y = arguments[i];
            for(var key in y){
                if(!(y[key] instanceof Function)){
                    x[key] = y[key];
                }
            }           
        };

        return x;
    }
    
    function JSON2CSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

        var str = '';
        var line = '';

        if (true) {//Include labels in first row 
            var head = array[0];
            if (true) {//Wrap values in double quotes
                for (var index in array[0]) {
                    var value = index + "";
                    line += '"' + value.replace(/"/g, '""') + '",';
                }
            } else {
                for (var index in array[0]) {
                    line += index + ',';
                }
            }

            line = line.slice(0, -1);
            str += line + '\r\n';
        }

        for (var i = 0; i < array.length; i++) {
            var line = '';

            if (true) {//Wrap values in double quotes
                for (var index in array[i]) {
                    var value = array[i][index] + "";
                    line += '"' + value.replace(/"/g, '""') + '",';
                }
            } else {
                for (var index in array[i]) {
                    line += array[i][index] + ',';
                }
            }

            line = line.slice(0, -1);
            str += line + '\r\n';
        }
        return str;
        
    }
        
    $scope.downloadCsv = function() {
        //var json = $.parseJSON($("#json").val());
        var csv = JSON2CSV(res);
        window.open("data:text/csv;charset=utf-8," + escape(csv))
    };
    
});
'use strict';

angular.module('testmanagerApp').controller('ManualController', function ($scope, $log, $window, $http, $q, $resource, uiGridConstants, $location, ParseCSV) {
	//var manualUrl = AppConfig.apiServiceBaseUri() + '/rest/manual/';
    $scope.options = ["URL Test"];
	$scope.content = "";
	$scope.selected;
	$scope.status;
	var contentJson;
	$scope.isCollapsed = false;
	$scope.responses = [];
	$scope.doneLoading = false;
	var resCopy = [];
	var url = "";
	var resorce;
    var promise;
    //var index = 1;
    var length;
    $scope.run = "Run Test";
    var sesion = "";
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
	    enableColumnResizing : true,
	    enableGridMenu : true,
		//showGridFooter : true,
		//showColumnFooter : true,
		fastWatch : true,
	    onRegisterApi: function(gridApi){
	      $scope.gridApi = gridApi;
	    }
	  };
	  
	  $scope.gridOptions2 = {
	    enableFiltering: true,
	    enableColumnResizing : true,
	    enableGridMenu : true,
		//showGridFooter : true,
		//showColumnFooter : true,
		fastWatch : true,
	    onRegisterApi: function(gridApi){
	      $scope.gridApi = gridApi;
	    }
	  };
	
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
        contentJson = JSON.parse(ParseCSV.CSV2JSON($scope.content));
        $scope.gridOptions.data = JSON.parse(ParseCSV.CSV2JSON($scope.content));
    };
    
    //ParseCSV.CSV2JSON(csv);
    /*function CSV2JSON(csv){
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
    	}*/
    
    function getmanualTests() {
    	$http.get(manualUrl).success(function(allmanualTests) {
    		$scope.options = allmanualTests;
    	});
    	/*ManualFactory.query(function(allmanualTests) {
            //$log.info('manualTests: ' + manualTests);
        	});*/
    };
    
    $scope.refresh = function(){
    	var resCopy2 = [];
    	angular.copy($scope.responses, resCopy2);
	    $scope.gridOptions2.data = resCopy2;
    }
    
    $scope.runTest = function(){
    	if ($scope.run === "Stop Test") {
    		$scope.run = "Run Test";
		}else{
    	  $scope.responses = [];
    	  $scope.doneLoading = false;
    	  var manualTests_url = 'api/manualTests/';
    	  if($scope.selected = "URL Test"){
    		  url = manualTests_url + 'urlTest';
    	  }
    	  $http.get(url)//resorce.save(test).$promise
  	      .then(function(res){
  	    	  sesion = res.data;
  	    	  promise = $q.all(null);
	      	  var index = 1;
	      	  length = contentJson.length;
	      	  $scope.status = index + " of " + length;
	      	  $scope.run = "Stop Test";
	      	  contentJson.reverse();
	      	  sendIndex(length - 1);
  	      });
    	  //resorce = $resource(url, {});
		}	
    };
    
    function sendIndex(index){
    	var line = contentJson[index];
    	promise = promise.then(function(){
    	  var obj = {sesion: sesion};
  	      return $http.post(url,extend(obj, line))//resorce.save(test).$promise
  	      .then(function(res){
  	    	$scope.status = length - index + " of " + length;
  	    	var val = line[Object.keys(line)[0]];
  	    	var key = Object.keys(line)[0];
  	    	var obj = {};
  	    	obj[key] = val;
  	        $scope.responses.push(extend(obj, res.data));//.splice(0, 0, line[Object.keys(line)[0]])
  	        if (index != 0 && $scope.run === "Stop Test") {
  	        	sendIndex(index - 1);
			}else{
				$scope.doneLoading = true;
	    	    angular.copy($scope.responses, resCopy);
	    	    $scope.gridOptions2.data = $scope.responses;
	    	    $scope.run = "Run Test";
	    	    $scope.status = "End";
	    	    contentJson.reverse();
	    	    $http.get(url+ "/" + sesion)//resorce.save(test).$promise
	    	      .then(function(){
	    	    	  
	    	      });
			}
  	      });
  	    });
    }
    
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
   
    //ParseCSV.JSON2CSV(objArray);
/*    function JSON2CSV(objArray) {
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
        
    }*/
    
    $scope.downloadCsv = function() {
    	//JSONToCSVConvertor(resCopy, "Report", true);
        //var json = $.parseJSON($("#json").val());
        var csv = ParseCSV.JSON2CSV(resCopy);
        	//JSON2CSV(resCopy);
        //window.open("data:text/csv;charset=utf-8," + escape(csv));
        var link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,' + escape(csv);
        link.target = '_blank';
        link.download = 'Report.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
});

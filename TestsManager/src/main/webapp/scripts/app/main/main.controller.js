'use strict';

angular.module('testmanagerApp')
    .controller('MainController', function ($scope, Principal, $http, $window, ParseCSV, TestsRun) {

			$scope.Process = false;
			$scope.fileJson = {};
			$scope.email;
			$scope.envirment = {
			        name: 'live'
			      };
			
			var contentJson;
			
			$scope.showContent = function($fileContent){
		        $scope.content = $fileContent;
		        var contentJson2 = ParseCSV.CSV2JSON($scope.content);
		        //contentJson2 = contentJson2.replace(/"/g, '');
		        contentJson = JSON.parse(contentJson2);
		        //$scope.fileJson = JSON.parse(ParseCSV.CSV2JSON($scope.content));
		        $scope.tree2 = [];
	    		filterData = [];
	    		for (var i = 0; i < contentJson.length-1; i++) {
	    			var element = contentJson[i];
	    			$scope.tree2.push({
	    				id: contentJson[i].id ,
	    				title: contentJson[i].title,
	    				nodes: []
	    			  });
	    			//$scope.tree2.push(contentJson[i]);
	    			
                }
	    		filterData.push($scope.tree2);
		        //$scope.tree2 = $scope.fileJson;
		    };
			
			var patt = new RegExp($scope.query, 'i');
			
			$scope.visible = function(item) {
				//var patt = new RegExp($scope.query, 'i');
				return !($scope.query && $scope.query.length > 0 && item.title
						.indexOf($scope.query) == -1 && !patt.test(item.title));
			};

			$scope.change = function() {
				try{
					patt = new RegExp($scope.query, 'i');
				} catch (e) {	
				}
		    };
		      
			$scope.findNodes = function () {

		    };
		    
		    $scope.remove = function(scope) {
		      scope.remove();
		    };

		    $scope.toggle = function(scope) {
		      scope.toggle();
		    };
		    
		    $scope.add = function(scope) {
			  var nodeData = scope.$modelValue;
			  var id = nodeData.id;
			  var title = nodeData.title;
			  $scope.tree2.push({
				id: id ,
				title: title,
				nodes: []
			  });
			  scope.remove();
			};
		    
		    $scope.newSubItem = function(scope) {
		      var nodeData = scope.$modelValue;
		      nodeData.nodes.push({
		        id: nodeData.id * 10 + nodeData.nodes.length,
		        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
		        nodes: []
		      });
		    };

		    $scope.tree1; /*= [{
		      "id": 1,
		      "title": "tree1 - item1",
		      "nodes": [{
    		      "id": 2,
    		      "title": "tree1 - item2",
    		      "nodes": [],
    		    		},{
    		      "id": 3,
    		      "title": "tree1 - item2",
    		      "nodes": [],
    		    		}]
		    }, {
		      "id": 4,
		      "title": "tree1 - item3",
		      "nodes": [{
    		      "id": 5,
    		      "title": "tree1 - item4",
    		      "nodes": [],
    		    		},{
    		      "id": 6,
    		      "title": "tree1 - item4",
    		      "nodes": [],
    		    		}]
		    }];*/
		    $scope.tree2 = [];
		    
		    var filterData = [];
		    var runTestsTests_url = 'api/run_tests/';
	    	//var url = runTestsTests_url + 'url_test';
	    	  /*$http.get(url)//resorce.save(test).$promise
	  	      .then(function(res){
	  	    	  $scope.tree1 = res.data;
	  	    	  filterData = res.data;
	  	      });*/
		    //$scope.init();
		    //$scope.init = function() {
			    TestsRun.query({}, function(result) {  //load tests
		    		$scope.tree1 = [];
		    		filterData = [];
		    		for (var i = 0; i < result.length; i++) {
		    			$scope.tree1.push(result[i]);
		    			filterData.push(result[i]);
	                }
		    		//$scope.tree1 = res.data;
		  	    	//filterData = res.data;
	            });
		    //};

	    	  $scope.runTest = function() {
	    		  if ($scope.email === undefined) {
	    			  $scope.email = "  ";
	    		  }
	    		  $scope.Process = true;
	    		  $http({
	    			  method:'POST',
	    			  url: runTestsTests_url,
	    			  params: {envirment: $scope.envirment.name, email: $scope.email},
	    			  data: $scope.tree2
	    		  })//resorce.save(test).$promise
	    		  .then(function(res){
	    			  $scope.Process = false;
	    			  $window.open(res.data);
	    			  $window.alert("Runnig Tests");
	    		  });
	    		  /*TestsRun.runTests({envirment: $scope.envirment.name, email: $scope.email}, $scope.tree2 , function(jenkinsUrl) {
	    			  $scope.Process = false;
	    			  //var jenkinsUrl2 = JSON.parse(jenkinsUrl);
	    			  $window.open(jenkinsUrl);
	    			  $window.alert("Runnig Tests");
	              });*/
	    	  };
    		   
	    	  $scope.exportTests = function() {
	    		  ParseCSV.downloadCsv("TestsList.csv", $scope.tree2);
	    	  };
	    	  
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });
        
        $scope.$watch(
                "searchText",
                function handleFooChange( newValue, oldValue ) {
                    console.log( "searchText", newValue );
                    var filterDataRes = [];
                    var out = [];
                        var count = 0;
                        	var nodesRes = regexflat(filterData, "nodes", newValue);// | regexflat:'nodes':searchText
                        	angular.forEach(nodesRes, function(internalData) {
                        		var filterDataInterRes = [];
                        		filterDataInterRes.push({
                      		      "id": internalData.id,
                    		      "title": internalData.title,
                    		      "nodes": []
                    		    });
                        		var titleRes = regex(internalData.nodes, "title", newValue);//| regex:'title':searchText
                        		filterDataInterRes[0].nodes = titleRes;
                        		filterDataRes.push(filterDataInterRes[0]);
                            });
                        	var res = filterDataRes;//angular.toJson(filterDataRes);
                        	$scope.tree1 = res;
                }
            );
        
        function regexflat(input, field, regex) {
    	      var patt = new RegExp(regex, 'i');    
    	      var out = [];
    	      if (input){
  			  for (var i = 0; i < input.length; i++){
  				  if(patt.test(JSON.stringify(input[i][field])))
  					  out.push(input[i]);
  			  } 
	  		  }else{
	  			out = undefined;
	  		  }	     
	    	    return out;
    	  };
    	  
    	  function regex(input, field, regex) {
    	      var patt = new RegExp(regex, 'i');      
    	      var jsonObjOut = [];
    	      if (input){
				  for (var i = 0; i < input.length; i++){
					  if(patt.test(input[i][field]))
						  jsonObjOut.push(input[i]);
				  }
			 }else{
				 jsonObjOut = undefined;
			 }    
    	    return jsonObjOut;
    	};
    	  
    });

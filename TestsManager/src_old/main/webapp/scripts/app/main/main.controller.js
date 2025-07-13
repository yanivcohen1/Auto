'use strict';

angular.module('testmanagerApp')
    .controller('MainController', function ($scope, Principal, $http, $window) {

			$scope.Process = false;
	
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
		    var runTestsTests_url = 'api/runTests/';
	    	var url = runTestsTests_url + 'urlTest';
	    	  $http.get(url)//resorce.save(test).$promise
	  	      .then(function(res){
	  	    	  $scope.tree1 = res.data;
	  	    	  filterData = res.data;
	  	      });

	    	  $scope.runTest = function() {
	    		  $scope.Process = true;
	    		  $http.post(url, $scope.tree2)//resorce.save(test).$promise
	    		  .then(function(res){
	    			  $scope.Process = false;
	    			  $window.open(res.data);
	    			  $window.alert("Runnig Tests");
	    		  });
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

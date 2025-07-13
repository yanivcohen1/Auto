'use strict';

angular.module('testmanagerApp')
    .controller('MainController', function ($scope, Principal, $http, $window) {

			$scope.Process = false;
	
		    $scope.remove = function(scope) {
		      scope.remove();
		    };

		    $scope.toggle = function(scope) {
		      scope.toggle();
		    };
		    
		    $scope.add = function(scope) {
			      setTimeout(function(){
					  var nodeData = scope.$modelValue;
					  var id = nodeData.id;
					  var title = nodeData.title;
					  $scope.tree2.push({
						id: id ,
						title: title,
						nodes: []
					  });
					  scope.remove();
					  //var i = $scope.tree1[0].nodes.indexOf(nodeData);
					  //$scope.tree1[0].nodes.splice(i, 1);
				  }, 500);
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
		    $scope.tree2 = [/*{
		      "id": 1,
		      "title": "tree2 - item1",
		      "nodes": [],
		    }, {
		      "id": 2,
		      "title": "tree2 - item2",
		      "nodes": [],
		    }, {
		      "id": 3,
		      "title": "tree2 - item3",
		      "nodes": [],
		    }, {
		      "id": 4,
		      "title": "tree2 - item4",
		      "nodes": [],
		    }*/];
	
		    var runTestsTests_url = 'api/runTests/';
	    	var url = runTestsTests_url + 'urlTest';
	    	  $http.get(url)//resorce.save(test).$promise
	  	      .then(function(res){
	  	    	  $scope.tree1 = res.data;
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
    });

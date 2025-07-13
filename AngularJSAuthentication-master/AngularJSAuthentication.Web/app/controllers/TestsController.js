//This controller retrieves data from the testsService and associates it with the $scope
//The $scope is ultimately bound to the Tests view
/**
 * @memberOf src/main/webapp/app/app.js
 */
app.controller('TestsController', function ($scope, $filter, $modal, $log, testsService, SuiteService, $routeParams, ngTableParams) {

    $scope.data = [];
    $scope.suiteId = parseInt($routeParams.suiteID);
    var tests;
    readTests();
    $scope.readSuite;
    readSuites($scope.suiteId);
    
    
    function readTests() {
        testsService.readTests($scope.suiteId ).then(function(results) { // success
        	tests = results.testss;
            $scope.data = results.testss;
            testsService.setTests($scope.data);
        	}, function(errResponse) {
        	   // fail
        		//alert("Server Error");
        	});
    };
    
    function readSuites( id ) {
    	 if (id > -1) {
	    	SuiteService.get({id:  id}, function(results) { // success
	    		 $scope.readSuite = results.suiteName;
	        	}, function(errResponse) {
	        	});
    	 }
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
    
    $scope.editId = -1;

    $scope.setEditId =  function(pid) {
        $scope.editId = pid;
    }
    
    $scope.$watch("data", function () {
    	if ($scope.data.length != 0) {
    		$scope.tableParams.reload();
		}		
	});	
    
    $scope.updateTest = function (suiteId, testId, suiteName, classesIDs, parametersIDs) {
        //alert(TestName);
    	var testName = angular.element( document.getElementById("ud.testName")).val();//("ud.TestName");
    	var classesName = angular.element( document.getElementById("ud.classesName")).val();
    	var parametersName = angular.element( document.getElementById("ud.parametersName")).val();
    	var parametersValue = angular.element( document.getElementById("ud.parametersValue")).val();
    	
        testsService.updateTest(suiteId, suiteName, testId, testName,
                classesName, classesIDs, parametersName, parametersIDs, parametersValue).then(function(resultSize) 
        	{// success
	        	$scope.setEditId(-1);
	        	readTests();
        	}, function(errResponse) {// fail
        		//alert("Server Error");
        	});
    };
    
    $scope.saveTests = function () {
        tests.Tests = $scope.data;
        testsService.saveTests(tests).then(function(resultSize) 
         {// success
        	readTests();
    	 }, function(errResponse) {// fail
    		//alert("Server Error");
    	 });
    };

    $scope.updateTests = function () {
        readTests();
    };

    $scope.deleteTest = function (id) {
        if (confirm("Confirm Delete?") == true) {
        	testsService.deleteTest(id).then(function(resultSize) 
        	 {// success
            	readTests();
        	 }, function(errResponse) {// fail
        		//alert("Server Error");
        	 });
        } 
    };
    
    $scope.open = function (size) {
        var modalInstance = $modal.open({
          //modalTemplate: '<div class="modal modal-width-override" ng-transclude></div>',
          templateUrl: 'newTestModal.html',
          controller: 'newTestModalCtrl',
          size: size,
          resolve: {
            items: function () {
              return ['TestName', 'fileLocatin', 'Url'];
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
          readTests();
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
        
    };

});


//This controller retrieves data from the testsService and associates it with the $scope
//The $scope is bound to the orders view
app.controller('newTestController', function ($scope, testsService) {
    $scope.Tests = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.Tests = testsService.getTests();
    }

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
app.controller('newTestModalCtrl', function ($scope, $log, testsService, $modalInstance, items) {

	  $scope.items = items;
	  $scope.selected = {
	    item: $scope.items[0]
	  };

	  $scope.save = function () {
	    $modalInstance.close($scope.selected.item);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  
	  $scope.insertTest = function (suiteName, testName, classesName, parametersName, parametersValue) {
	        //alert(TestName);
	        testsService.newTest(suiteName, testName, classesName, parametersName, parametersValue ).then(function(resultSize) 
	         {// success
	        	$modalInstance.close($scope.selected.item);
	    	 }, function(errResponse) {// fail
	    		//alert("Server Error");
	    	 });
	  };
});

//This controller retrieves data from the testsService and associates it with the $scope
//The $scope is bound to the order view
app.controller('TestOrdersController', function ($scope, $routeParams, testsService) {
    $scope.Test = {};
    $scope.ordersTotal = 0.00;

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab TestID off of the route        
        var TestID = ($routeParams.TestID) ? parseInt($routeParams.TestID) : 0;
        if (TestID > 0) {
            $scope.Test = testsService.getTest(TestID);
        }
    }

});

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a Tests. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('OrderChildController', function ($scope) {
    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.Tests && $scope.Tests.orders) {
            var total = 0.00;
            for (var i = 0; i < $scope.Tests.orders.length; i++) {
                var order = $scope.Tests.orders[i];
                total += order.orderTotal;
            }
            $scope.ordersTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});
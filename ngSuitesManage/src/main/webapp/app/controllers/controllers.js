//This controller retrieves data from the suitesService and associates it with the $scope
//The $scope is ultimately bound to the suites view
app.controller('SuitesController', function ($scope, $filter, $resource, $modal, $log, suitesService, ngTableParams) {

    $scope.data = [];
    var suites;
    readSuites();
    
    function readSuites() {
        suitesService.readSuites($resource).get({}).$promise.then(function(allSutiesFactory) {
        	   // success
        	suites = allSutiesFactory;
            $scope.data = allSutiesFactory.suites;
            suitesService.setSuites($scope.data);
        	}, function(errResponse) {
        	   // fail
        		alert("Server Error");
        	});
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
    
    $scope.updateSuite = function (suiteId, suiteName, xmlFileLocation, jenkinsURL) {
        //alert(suiteName);
    	var suiteName = angular.element( document.getElementById("ud.suiteName")).val();//("ud.suiteName");
    	var xmlFileLocation = angular.element( document.getElementById("ud.xmlFileLocation")).val();
    	var jenkinsURL = angular.element( document.getElementById("ud.jenkinsURL")).val();
        suitesService.updateSuite($resource).save({ suiteId: suiteId, suiteName: suiteName, xmlFileLocation: xmlFileLocation, jenkinsURL: jenkinsURL }).$promise.then(function(resultSize) 
        	{// success
	        	$scope.setEditId(-1);
	        	readSuites();
        	}, function(errResponse) {// fail
        		alert("Server Error");
        	});
    };
    
    $scope.saveSuites = function () {
        suites.suites = $scope.data;
        suitesService.saveSuites($resource).save({ suites: suites }).$promise.then(function(resultSize) 
         {// success
        	readSuites();
    	 }, function(errResponse) {// fail
    		alert("Server Error");
    	 });
    };

    $scope.updateSuites = function () {
        readSuites();
    };

    $scope.deleteSuite = function (id) {
        if (confirm("Confirm Delete?") == true) {
        	suitesService.deleteSuite($resource).get({ id: id }).$promise.then(function(resultSize) 
        	 {// success
            	readSuites();
        	 }, function(errResponse) {// fail
        		alert("Server Error");
        	 });
        } 
    };
    
    $scope.open = function (size) {
        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return ['SuiteName', 'fileLocatin', 'Url'];
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
          readSuites();
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
        
    };

});

//This controller retrieves data from the suitesService and associates it with the $scope
//The $scope is bound to the orders view
app.controller('newSuiteController', function ($scope, $resource, suitesService) {
    $scope.suites = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.suites = suitesService.getSuites();
    }

    $scope.insertSuite = function (suiteName, xmlFileLocation, jenkinsURL) {
        //alert(suiteName);
        suitesService.newSuite($resource).save({ suiteId: "0", suiteName: suiteName, xmlFileLocation: xmlFileLocation, jenkinsURL: jenkinsURL }).$promise.then(function(resultSize) 
         {// success
        	window.location.href = '#/Suites';
    	 }, function(errResponse) {// fail
    		alert("Server Error");
    	 });
    };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
app.controller('ModalInstanceCtrl', function ($scope, $resource, $log, suitesService, $modalInstance, items) {

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
	  
	  $scope.insertSuite = function (suiteName, xmlFileLocation, jenkinsURL) {
	        //alert(suiteName);
	        suitesService.newSuite($resource).save({ suiteId: "0", suiteName: suiteName, xmlFileLocation: xmlFileLocation, jenkinsURL: jenkinsURL }).$promise.then(function(resultSize) 
	         {// success
	        	$modalInstance.close($scope.selected.item);
	    	 }, function(errResponse) {// fail
	    		alert("Server Error");
	    	 });
	  };
});

//This controller retrieves data from the suitesService and associates it with the $scope
//The $scope is bound to the order view
app.controller('SuiteOrdersController', function ($scope, $routeParams, suitesService) {
    $scope.suite = {};
    $scope.ordersTotal = 0.00;

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab SuiteID off of the route        
        var suiteID = ($routeParams.suiteID) ? parseInt($routeParams.suiteID) : 0;
        if (suiteID > 0) {
            $scope.suite = suitesService.getSuite(suiteID);
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
//It's used to track the orderby parameter and ordersTotal for a suites. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('OrderChildController', function ($scope) {
    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.suites && $scope.suites.orders) {
            var total = 0.00;
            for (var i = 0; i < $scope.suites.orders.length; i++) {
                var order = $scope.suites.orders[i];
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
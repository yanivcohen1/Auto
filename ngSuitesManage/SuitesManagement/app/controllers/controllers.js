//This controller retrieves data from the suitesService and associates it with the $scope
//The $scope is ultimately bound to the suites view
app.controller('SuitesController', function ($scope, $resource, suitesService, ngTableParams, $sce) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    readSuites();
    $scope.data;
    var suites;
    //var data = [{ name: "Moroni", age: 50 },
    //          { name: "Enos", age: 34 }];
    function readSuites() {
        suitesService.readSuites($resource).get({}, function (allSutiesFactory) {
            //alert(allSutiesFactory.suites[0].suiteName);//.suitesDatas[0].suiteName
            suites = allSutiesFactory;
            $scope.data = allSutiesFactory.suites;
            suites = $scope.data;
            suitesService.setSuites($scope.data);
            $scope.tableParams = new ngTableParams({
                page: 1,            // show first page
                count: 10           // count per page
            }, {
                total: $scope.data.length, // length of data
                getData: function ($defer, params) {
                    $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });
        })
    };

    $scope.saveSuites = function () {
        suites.suites = $scope.data;
        //alert(suites.suites[1].suiteName);
        suitesService.saveSuites($resource).save({ suites: suites }, function (resultSize) {
            //alert('save: ' + resultSize);
            readSuites();
        })
    };

    $scope.updateSuites = function () {
        readSuites();
    };

    $scope.deleteSuite = function (id) {
        suitesService.deleteSuite($resource).get({ id: id }, function (resultSize) {
            //alert('delete: ' + resultSize);
            readSuites();
        })
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
        suitesService.newSuite($resource).save({ suiteId: "0", suiteName: suiteName, xmlFileLocation: xmlFileLocation, jenkinsURL: jenkinsURL }, function (resultSize) {
            window.location.href = '#/Suites';
        })
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
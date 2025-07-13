//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('testsService', function ($resource, $rootScope, $http, TestService, suitesService) {

    var tests;

    this.setTests = function (Testss) {
        tests = Testss;
    };

    this.getTests = function () {
        return tests;
    };

    this.readTests = function (suiteId) {
    	return $http.get(serviceBase + 'api/Orders/SuiteTests?id=' + suiteId).then(function (results) {
            return results.data;
        });
    };

    /*this.saveTests = function (tests) {
    	var Tests = $resource('rest/tests/updateTests', {}, {
            save: { method: 'POST',
                headers: { 'X-Auth-Token': $rootScope.authToken } 
            	}
        });
    	return Tests.save({ Tests: tests }).$promise;
    };*/

    this.deleteTest = function (id) {
    	var testService = TestService.get({id: id});
    	return testService.$remove({id: id});
    };

    this.newTest = function (suiteName, testName, classesName, parametersName, parametersValue) {
    	var testService = new TestService();
    	testService.suiteName = suiteName;
    	testService.testName = testName;
    	testService.classesName = classesName;
    	testService.parametersName = parametersName;
    	testService.parametersValue = parametersValue;
    	testService.suiteId = suitesService.getSuiteID(suiteName).suiteId;
    	return testService.$save();
    };

    this.updateTest = function (suiteId, suiteName, testId, TestName,
            classesName, classesIDs, parametersName, parametersIDs, parametersValue) {
    	var testService = TestService.get({id: testId});
    	testService.TestId = testId;
    	testService.SuiteId = suiteId;
    	testService.suiteName = suiteName;
    	testService.testName = TestName;
    	testService.classesName = classesName;
    	testService.parametersName = parametersName;
    	testService.parametersValue = parametersValue;
    	return	testService.$update({id: testId});
    };
    
    this.insertTest = function (firstName, lastName, city) {
        var topID = tests.length + 1;
        tests.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.getTest = function (id) {
        for (var i = 0; i < tests.length; i++) {
            if (tests[i].id === id) {
                return tests[i];
            }
        }
        return null;
    };
    //var Tests = [{ suiteId: 1, suiteName: "BAU Tests", xmlFileLocation: "C:\\Tomcat\\webapps\\RunSuiteSelectedTests\\BauAutomationTests\\testngClientsDebug.xml", jenkinsURL: "http://172.21.54.222:8080/view/BAU/job/BAU-Tests_debug/"},
       // {suiteId: 2, suiteName: "BAU Tests Secend", xmlFileLocation: "C:\\Tomcat\\webapps\\RunSuiteSelectedTests\\BauAutomationTests\\testngBAUDebug.xml", jenkinsURL: "http://172.21.54.222:8080/view/BAU/job/BAU-Tests_Branch_debug/"}];

});
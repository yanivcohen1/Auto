//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('testsService', function ($resource, $rootScope) {

    var tests;

    this.setTests = function (Testss) {
        tests = Testss;
    };

    this.getTests = function () {
        return tests;
    };

    this.readTests = function (suiteId) {
        var Tests =  $resource('rest/tests/readAllTests/:id', { id: '@id' }, {
            query: { //'query':   {method:'Get'}
                method: 'GET',
                params: {},
                isArray: false,
                headers: { 'X-Auth-Token': $rootScope.authToken }
            }
        });
        return Tests.get({ id: suiteId }).$promise;
    };

    this.saveTests = function (tests) {
    	var Tests = $resource('rest/tests/updateTests', {}, {
            save: { method: 'POST',
                headers: { 'X-Auth-Token': $rootScope.authToken } 
            	}
        });
    	return Tests.save({ Tests: tests }).$promise;
    };

    this.deleteTest = function (id) {
        var Tests = $resource('rest/tests/deleteTest/:id', { id: '@id' }, {
            query: {
                method: 'GET',
                params: {},
                isArray: false,
                headers: { 'X-Auth-Token': $rootScope.authToken }
            }
        });
         return Tests.get({ id: id }).$promise;
    };

    this.newTest = function (suiteName, testName, classesNamef, parametersNamef, parametersValuef) {
    	var Tests = $resource('rest/tests/newTest', {}, {
            save: { method: 'POST',
                headers: { 'X-Auth-Token': $rootScope.authToken } 
            	}
        });
        return Tests.save({ suiteName: suiteName, testName: testName, classesNamef: classesNamef, parametersNamef: parametersNamef, parametersValuef: parametersValuef }).$promise;
    };

    this.updateTest = function (suiteId, suiteName, testId, TestName,
            classesNamef, classesIDs, parametersNamef, parametersIDs, parametersValuef) {
        var Tests = $resource('rest/tests/updateTest', {}, {
            save: { method: 'POST',
                headers: { 'X-Auth-Token': $rootScope.authToken } 
            	}
        });
        return Tests.save({ suiteId: suiteId, suiteName: suiteName, testId: testId, testName: TestName,
            classesNamef: classesNamef, classesIDs: classesIDs, parametersNamef: parametersNamef, parametersIDs: parametersIDs,
            parametersValuef: parametersValuef }).$promise;
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
'use strict';
//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('testsService', function ($resource) {

    var tests;

    this.setTests = function (Testss) {
        tests = Testss;
    };

    this.getTests = function () {
        return tests;
    };

    this.readTests = function (suiteId) {
        var Tests =  $resource(AppConfig.apiServiceBaseUri() +'/rest/tests/readAllTests/:id', { id: '@id' });
        return Tests.get({ id: suiteId }).$promise;
    };

    this.saveTests = function (tests) {
    	var Tests = $resource(AppConfig.apiServiceBaseUri()+'/rest/tests/updateTests', {});
    	return Tests.save({ Tests: tests }).$promise;
    };

    this.deleteTest = function (id) {
        var Tests = $resource(AppConfig.apiServiceBaseUri() + '/rest/tests/deleteTest/:id', { id: '@id' });
         return Tests.get({ id: id }).$promise;
    };

    this.newTest = function (suiteName, testName, classesNamef, parametersNamef, parametersValuef) {
    	var Tests = $resource(AppConfig.apiServiceBaseUri() + '/rest/tests/newTest', {});
        return Tests.save({ suiteName: suiteName, testName: testName, classesNamef: classesNamef, parametersNamef: parametersNamef, parametersValuef: parametersValuef }).$promise;
    };

    this.updateTest = function (suiteId, suiteName, testId, TestName,
            classesNamef, classesIDs, parametersNamef, parametersIDs, parametersValuef) {
        var Tests = $resource(AppConfig.apiServiceBaseUri() + '/rest/tests/updateTest', {});
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
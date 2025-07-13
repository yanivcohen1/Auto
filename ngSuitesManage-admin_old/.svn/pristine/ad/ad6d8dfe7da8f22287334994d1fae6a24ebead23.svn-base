//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('suitesService', function ($resource, $rootScope) {

    var suites;

    this.setSuites = function (suitess) {
        suites = suitess;
    };

    this.getSuites = function () {
        return suites
    };

    this.readSuites = function () {
        var Suite = $resource('rest/suites/readAllSuites', {}, {
            query: { //'query':   {method:'Get'}
                method: 'GET',
                params: {},
                isArray: false,
                headers: { 'X-Auth-Token': $rootScope.authToken }
            }
        });
         return Suite.get({}).$promise;
    };

    this.saveSuites = function (suites) {
        var Suites = $resource('rest/suites/updateSuites', {}, {
            save: { method: 'POST',
                headers: { 'X-Auth-Token': $rootScope.authToken }
            	}
        })
        return Suites.save({ suites: suites }).$promise;
    };

    this.deleteSuite = function (id) {
        var Suite = $resource('rest/suites/deleteSuite/:id', { id: '@id' }, {
            query: {
                method: 'GET',
                params: {},
                isArray: false,
                headers: { 'X-Auth-Token': $rootScope.authToken }
            }
        });
        return Suite.get({ id: id }).$promise;
    };

    this.newSuite = function (suiteName, xmlFileLocation, jenkinsURL) {
        var Suite = $resource('rest/suites/newSuite', {}, {
            save: { method: 'POST',
	                headers: { 'X-Auth-Token': $rootScope.authToken } 
	              }
        });
        return Suite.save({ suiteId: "0", suiteName: suiteName, xmlFileLocation: xmlFileLocation, jenkinsURL: jenkinsURL }).$promise;
        
    };

    this.updateSuite = function (suiteId, suiteName, xmlFileLocation, jenkinsURL) {
        var Suite = $resource('rest/suites/updateSuite', {}, {
            save: { method: 'POST',
                headers: { 'X-Auth-Token': $rootScope.authToken }
            	}
        });
        return Suite.save({ suiteId: suiteId, suiteName: suiteName, xmlFileLocation: xmlFileLocation, jenkinsURL: jenkinsURL }).$promise;
    };
    
    this.insertSuite = function (firstName, lastName, city) {
        var topID = suites.length + 1;
        suites.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.getSuite = function (id) {
        for (var i = 0; i < suites.length; i++) {
            if (suites[i].id === id) {
                return suites[i];
            }
        }
        return null;
    };
    //var suites = [{ suiteId: 1, suiteName: "BAU Tests", xmlFileLocation: "C:\\Tomcat\\webapps\\RunSuiteSelectedTests\\BauAutomationTests\\testngClientsDebug.xml", jenkinsURL: "http://172.21.54.222:8080/view/BAU/job/BAU-Tests_debug/"},
       // {suiteId: 2, suiteName: "BAU Tests Secend", xmlFileLocation: "C:\\Tomcat\\webapps\\RunSuiteSelectedTests\\BauAutomationTests\\testngBAUDebug.xml", jenkinsURL: "http://172.21.54.222:8080/view/BAU/job/BAU-Tests_Branch_debug/"}];

});
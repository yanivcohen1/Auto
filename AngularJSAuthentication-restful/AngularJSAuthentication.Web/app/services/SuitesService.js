//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('suitesService', function ($resource, $rootScope, SuiteService) {

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
    	var newsEntry = SuiteService.get({id: id});
    	return newsEntry.$remove({id: id});
    };

    this.newSuite = function (suiteName, xmlFileLocation, jenkinsURL) {
    	var suiteService = new SuiteService();
    	suiteService.suiteName = suiteName;
    	suiteService.xmlFileLocation = xmlFileLocation;
    	suiteService.jenkinsURL = jenkinsURL;
    	return suiteService.$save();
    };

    this.updateSuite = function (suiteId, suiteName, xmlFileLocation, jenkinsURL) {
    	var newsEntry = SuiteService.get({id: suiteId});
    	newsEntry.SuiteId = suiteId;
    	newsEntry.suiteName = suiteName;
    	newsEntry.xmlFileLocation = xmlFileLocation;
    	newsEntry.jenkinsURL = jenkinsURL;
    	return	newsEntry.$update({id: suiteId});
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
    
    this.getSuiteID = function (suiteName) {
        for (var i = 0; i < suites.length; i++) {
            if (suites[i].suiteName === suiteName) {
                return suites[i];
            }
        }
        return null;
    };
    //var suites = [{ suiteId: 1, suiteName: "BAU Tests", xmlFileLocation: "C:\\Tomcat\\webapps\\RunSuiteSelectedTests\\BauAutomationTests\\testngClientsDebug.xml", jenkinsURL: "http://172.21.54.222:8080/view/BAU/job/BAU-Tests_debug/"},
       // {suiteId: 2, suiteName: "BAU Tests Secend", xmlFileLocation: "C:\\Tomcat\\webapps\\RunSuiteSelectedTests\\BauAutomationTests\\testngBAUDebug.xml", jenkinsURL: "http://172.21.54.222:8080/view/BAU/job/BAU-Tests_Branch_debug/"}];

});
//var services = angular.module('exampleApp.services', ['ngResource']);
app.factory('UserFactory', function($resource, $location) {  
	return $resource(AppConfig.init($location) +'/rest/user/:action', {},
			{
				authenticate: {
					method: 'POST',
					params: {'action' : 'authenticate'},
					headers : {'Content-Type': 'application/x-www-form-urlencoded'}
				},
			}
		);
});

app.factory('SuiteFactory', function($resource) {
    return $resource(AppConfig.apiServiceBaseUri() +'/rest/suites/:id', { id: '@id' }, {
        update: {
            method: 'PUT', // this method issues a PUT request
          }
    });

});
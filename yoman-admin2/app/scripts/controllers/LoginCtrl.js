'use strict';
app.controller('LoginController', [ '$scope', '$rootScope', '$location', '$cookieStore', 'UserFactory', function($scope, $rootScope, $location, $cookieStore, UserFactory) {
	$scope.rememberMe = false;
	
	$scope.login = function() {
		$rootScope.loginError = true;
		UserFactory.authenticate($.param({username: $scope.username, password: $scope.password}), function(authenticationResult) {
			$rootScope.loginError = false;
			var authToken = authenticationResult.token;
			$rootScope.authToken = authToken;
			if ($scope.rememberMe) {
				$cookieStore.put('authToken', authToken);
			}
			UserFactory.get(function(user) {
				$rootScope.user = user;
				window.location.href = '#/Suites';
				//$location.replace();
				//$location.path("#/Suites");
			});
			
		});
	};
}]);

app.controller('IndexController', [ '$scope', 'NewsService', function($scope, NewsService) {
	
	$scope.newsEntries = NewsService.query();
	
	$scope.deleteEntry = function(newsEntry) {
		newsEntry.$remove(function() {
			$scope.newsEntries = NewsService.query();
		});
	};
}]);


app.controller('EditController', [ '$scope', '$routeParams', '$location', 'NewsService', function($scope, $routeParams, $location, NewsService) {
	$scope.newsEntry = NewsService.get({id: $routeParams.id});
	
	$scope.save = function() {
		$scope.newsEntry.$save(function() {
			$location.path('/');
		});
	};
}]);


//function CreateController($scope, $location, NewsService) {
app.controller('CreateController', [ '$scope', '$location', 'NewsService', function($scope, $location, NewsService) {
	$scope.newsEntry = new NewsService();
	
	$scope.save = function() {
		$scope.newsEntry.$save(function() {
			$location.path('/');
		});
	};
}]);

/*app.factory('NewsService', function($resource) {
return $resource(AppConfig.apiServiceBaseUri() + '/rest/news/:id', {id: '@id'});
});*/
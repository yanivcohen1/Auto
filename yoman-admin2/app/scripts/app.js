'use strict';
angular.element(document).ready(function() {
	  angular.bootstrap(document, ['ngSuitesManageAdminYeomanApp']);
});
var app = angular.module('ngSuitesManageAdminYeomanApp', ['ngRoute', 'ngCookies', 'ngTable', 'ngResource', 'ui.bootstrap', 'angular-loading-bar', 'ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pinning', 'ui.grid.selection', 'ui.grid.moveColumns', 'ui.grid.exporter', 'ui.grid.importer', 'oc.lazyLoad', 'ui.router']
	).config( function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

			$stateProvider
			.state('/login', {
				url: "/login",
				views: {
				        "main": { templateUrl: 'views/login.html',
								   controller: 'LoginController',
								   secure: false}
				 }
			})
			.state('/runTests', {
				url: "/runTests",
				views: {
			        "main": { templateUrl: 'views/RunTests.html',
			        	secure: false}
			 }
			})
	        .state('Suites',
	            {
	        	url: "/Suites",
	        	views: {
			        "main": { controller: 'SuitesController',
		                	  templateUrl: 'views/Suites.html',
		                	  secure: true}
	        	},
	        		//resolve: resolveController('/app/controllers/SuitesController.js'),     
	            })
	        //Define a route that has a route parameter in it (:suiteID)
	        .state('/tests',
	            {
	        		url: "/tests/:suiteID",
	        		views: {
				        "main": { controller: 'TestsController',
			                	  templateUrl: 'views/Tests.html',
			                	  secure: true}
		        	}
	            })
	        .state('about', {
	        	resolve: {
	        		LazyLoad: [ '$location', '$ocLazyLoad',function ($location, $ocLazyLoad) {
	                	return  $ocLazyLoad.load('scripts/controllers/ManualCtrl.js');
	                }]
	              },
	        	url: "/about",
	        	views: {
			        "main": { controller: 'FileLoadCtrl',
				        	  templateUrl: 'views/about.html',
				              secure: false }
	        	}
		        });
			$urlRouterProvider.otherwise("/runTests");
	        //.otherwise({ redirectTo: '/runTests' });
			
			//$locationProvider.hashPrefix('!'); 
			$httpProvider.defaults.useXDomain = true;
			//$httpProvider.defaults.withCredentials = true;
			/* Register error provider that shows message on failed requests or redirects to login page on
			 * unauthenticated requests */
		    $httpProvider.interceptors.push([ '$q', '$rootScope', '$location', function($q, $rootScope, $location) {
			        return {
			        	'responseError': function(rejection) {
			        		var status = rejection.status;
			        		var config = rejection.config;
			        		var method = config.method;
			        		var url = config.url;
			        		if ($rootScope.loginError == true) {
			        			alert("Login Error");
							}
			        		if (status == 401 || status == 0) {
			        			//$location.path( "/login" );
			        			$rootScope.logout();
			        		} else {
			        			$rootScope.error = method + " on " + url + " failed with status " + status;
			        		}
			              
			        		return $q.reject(rejection);
			        	}
			        };
			    }]
		    );
		    
		    /* Registers auth token interceptor, auth token is either passed by header or by query parameter
		     * as soon as there is an authenticated user */
		    $httpProvider.interceptors.push([ '$q', '$rootScope', '$location', '$routeParams' , function ($q, $rootScope, $location, $routeParams) {
		        return {
		        	'request': function(config) {
		        		var isRestCall = config.url.indexOf('/rest/') != -1;
		        		if (isRestCall && angular.isDefined($rootScope.authToken) ) {//&& !$routeParams.secure
		        			var authToken = $rootScope.authToken;
		        			if (AppConfig.useAuthTokenHeader() && $location.absUrl().substr(0, 22) != 'http://localhost:9000/') {
		        				config.headers['X-Auth-Token'] = authToken;
		        			} else {
		        				config.url = config.url + "?token=" + authToken;
		        			}
		        		}
		        		return config || $q.when(config);
		        	}
		        };
		    }]
	    );
		   
		}
		
	).run(function($rootScope, $location, $cookieStore, UserFactory, $state) {
		/* Reset error when a new view is loaded */
		$rootScope.$on('$viewContentLoaded', function() {
			delete $rootScope.error;
		});
		
	     //Client-side security. Server-side framework MUST add it's 
        //own security as well since client-based security is easily hacked
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
			var views = toState.views;
	    	var view = views[Object.keys(views)[0]];
	        if (view.secure) {
	            if ($rootScope.authToken === undefined) {
	            	event.preventDefault();
	            	$state.go("/login");
	            	//$location.replace();
	            	//$location.path("/login");
	            }
	        }	 
		    // transitionTo() promise will be rejected with 
		    // a 'transition prevented' error
		});
		//
		/*$rootScope.$on("$stateChangeStart", function (event, next, current) {
	    	var views = next.views;
	    	var view = views[Object.keys(views)[0]];
	        if (next && view && view.secure) {
	            if ($rootScope.authToken === undefined) {
	            	$location.replace();
	            	$location.path("/login");
	            }
	        }
	    });*/
	    
	    $rootScope.getClass = function (path) {
	        if ($location.path().substr(0, path.length) == path) {
	            return true
	        } else {
	            return false;
	        }
	    };
	    
		$rootScope.hasRole = function(role) {
			
			if ($rootScope.user === undefined) {
				return false;
			}
			
			if ($rootScope.user.roles[role] === undefined) {
				return false;
			}
			
			return $rootScope.user.roles[role];
		};
		
		$rootScope.logout = function() {
			delete $rootScope.user;
			delete $rootScope.authToken;
			delete $rootScope.loginError;
			$cookieStore.remove('authToken');
			$location.replace();
			$location.path("/login");
		};
		
		 /* Try getting valid user from cookie or go to login page */
		var originalPath = $location.path();
		
		var authToken = $cookieStore.get('authToken');
		if (authToken !== undefined) {
			$rootScope.authToken = authToken;
			UserFactory.get(function(user) {
				$rootScope.user = user;
				$location.path(originalPath);
			});
		} else {
			//$location.path("/runTests");
		}
		$rootScope.initialized = true;
});
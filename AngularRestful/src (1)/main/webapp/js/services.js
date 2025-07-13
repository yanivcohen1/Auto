'use strict';

/* Services */

var services = angular.module('ngdemo.services', ['ngResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('/ngdemo/rest/suites/test', {}, {
        query: { //'save':   {method:'POST'}
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});

services.factory('AllSutiesFactory', function ($resource) {
    return $resource('/ngdemo/rest/suites/print/all', {}, {
        query: { //'save':   {method:'POST'}
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});

services.service('sutiesService', function ($resource) {
	
    this.getSuites = function () {
    	//var User = $resource('/user/:userId', {userId:'@id'});
    	var allSuites = $resource('/ngdemo/rest/suites/print/all', {} ,{
            query: { //'save':   {method:'POST'}
                method: 'GET',
                params: {},
                isArray: false
            }
        });
    	  var suites = allSuites.get({}, function() {
    		  suites = suitesDatas;
    		  suites.$save();
    	  });
    	return customers;
    };

    this.insertCustomer = function (firstName, lastName, city) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };
});
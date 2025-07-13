'use strict';

angular.module('testmanageApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

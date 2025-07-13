'use strict';

angular.module('testsmanagerApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

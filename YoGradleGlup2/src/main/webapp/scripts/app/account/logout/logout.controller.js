'use strict';

angular.module('testmanagerApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

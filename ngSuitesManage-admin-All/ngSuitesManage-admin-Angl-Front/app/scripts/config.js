'use strict';
var AppConfig = {
	/* When set to false a query parameter is used to pass on the auth token.
	 * This might be desirable if headers don't work correctly in some
	 * environments and is still secure when using https. */
	useAuthTokenHeader: function () { return true },
	url: function () { return "http://localhost:8080/ngSuitesManage-admin"},//http://localhost:8080/ngSuitesManage-admin
    domain: function () { return "/ngSuitesManage-admin"},
    //debug: true ,
    apiServiceBaseUri: function () { return this.temp },
    init: function($location) {
			   	 if ($location.absUrl().substr(0, 22) == 'http://localhost:9000/') {
			   		 this.temp = this.url();
					 return this.url();
				 } else {
					 this.temp = this.domain();
				 	 return this.domain();
				 };
		  },
    temp: ''
};
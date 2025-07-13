'use strict';

angular.module('testmanagerApp')
    .filter('characters', function () {
        return function (input, chars, breakOnWord) {
            if (isNaN(chars)) {
                return input;
            }
            if (chars <= 0) {
                return '';
            }
            if (input && input.length > chars) {
                input = input.substring(0, chars);

                if (!breakOnWord) {
                    var lastspace = input.lastIndexOf(' ');
                    // Get last space
                    if (lastspace !== -1) {
                        input = input.substr(0, lastspace);
                    }
                } else {
                    while (input.charAt(input.length-1) === ' ') {
                        input = input.substr(0, input.length - 1);
                    }
                }
                return input + '...';
            }
            return input;
        };
    })
    .filter('words', function () {
        return function (input, words) {
            if (isNaN(words)) {
                return input;
            }
            if (words <= 0) {
                return '';
            }
            if (input) {
                var inputWords = input.split(/\s+/);
                if (inputWords.length > words) {
                    input = inputWords.slice(0, words).join(' ') + '...';
                }
            }
            return input;
        };
    }).filter('regex', function () {//regex:'type':'word1(.*)word2'"
    	return function(input, field, regex) {
    	      var patt = new RegExp(regex, 'i');      
    	      var out = [];
    	      if (input){
				  for (var i = 0; i < input.length; i++){
					  if(patt.test(input[i][field]))
						  out.push(input[i]);
				  }
			 }else{
				out = undefined;
			 }    
    	    return out;
    	};
    }).filter('regexflat', function () {//regex:'type':'word1(.*)word2'"
    	return function(input, field, regex) {
  	      var patt = new RegExp(regex, 'i');    
  	      var out = [];
  	      if (input){
			  for (var i = 0; i < input.length; i++){
				  if(patt.test(JSON.stringify(input[i][field])))
					  out.push(input[i]);
			  } 
		  }else{
			out = undefined;
		  }	     
  	    return out;
  	  };
  });

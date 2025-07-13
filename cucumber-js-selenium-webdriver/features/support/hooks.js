'use strict';

//var fs = require('fs');
//var path = require('path');
//var sanitize = require("sanitize-filename");

var myHooks = function () {

  this.After(function(scenario) {
    if(scenario.isFailed()) {
       /* this.driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"");
        fs.writeFile(path.join('screenshots', sanitize(scenario.getName() + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
            if(err) console.log(err);
        });
      }); */ 
       this.driver.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/,'',''), 'base64');
                scenario.attach(decodedImage, 'image/png');
              });
    }else{
      this.driver.manage().deleteAllCookies();
    }
      return this.driver.quit();
  });

   /* this.registerHandler('AfterFeatures', function (event) {
    return require('./world.js').getDriver().quit();
  }); */

};

module.exports = myHooks;

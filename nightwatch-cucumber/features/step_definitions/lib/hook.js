const { defineSupportCode } = require('cucumber')
var util = require('./util.js');

defineSupportCode(({Before, After }) => {

  Before(function (scenario) {
      var browser;
      this.scenario = scenario;
      console.log('Loading browser ');
      //process.execArgv.push("--env iphone-7");
      util.setEnv(process.argv[4]);
      if (process.execArgv[0].includes("debug-brk") == true) {
        util.setDebug(true);
      } else {
        util.setDebug(false);
      }
      //util.setDebug(false);
      console.log(process.execArgv[0]);
      return browser;
   });

   After(function (scenario) {
    var world = this;
    if (scenario.isFailed()) {
        return browser.screenshot().then((screenShot) => {
          var decodedImage = new Buffer(screenShot.value, 'base64');//.toString('binary');
          world.attach(decodedImage, 'image/png');
        }).end();
    }else{
      return browser.end();
    }
  });

})
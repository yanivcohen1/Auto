var util = require('./lib/util.js');
//const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {

  Given(/^migUser language "([^"]*)" and Brand "([^"]*)" and "([^"]*)"$/, function (language, brand, type) {
    var browser;
    util.setLanguage(language);
    if (brand === "EG") {
      util.setBrand(util.BRAND.EG);
    } else if (brand === "WHCC") {
      util.setBrand(util.BRAND.WHCC);
    }
    if (type === "MOBI") {
      util.setType(util.TYPE.MOBI);
    } else if (type === "DESK") {
      util.setType(util.TYPE.DESK);
    }
    return browser;
  });

  Given(/^migUser is navigating to "([^"]*)"$/, function (url) {
    browser = util.getBrowser();
    if (util.getDebug()) {
      var error = false;
      var sid = util.readLastSessionId();
      var oldSid = browser.requestHandler.sessionID;
      browser.requestHandler.sessionID = sid;
      return browser.windowHandle().then(function(value) {
          //not error
          error = false;
         
          //console.log(value); // "Success!"
          //throw 'oh, no!';
        }).catch(function(e) { // error
            //console.log(e);
            error = true;
           
        }).then(function() {
              if (error) {
                 browser = util.getBrowser();
                return browser
                  .init()
                  .url(util.getUrl()).then(() =>{
                    var sid = browser.requestHandler.sessionID;
                    util.saveSessionToFile(sid);
                    console.log(sid);
                  });
              } else {
                return browser.url(util.getUrl()).then(() =>{
                      var sid = browser.requestHandler.sessionID;
                      util.saveSessionToFile(sid);
                      console.log(sid);
                });
              }
          });
      
    } else {  // not debug
      return browser
            .init()
            .url(util.getUrl()).then(() =>{
                var sid = browser.requestHandler.sessionID;
                //util.saveSessionToFile(sid);
                console.log(sid);
            });
    }    
    //return browser
    //.url('http://google.com')
    //.getTitle().then(function(title) {
    //console.log('Title was: ' + title);
  });

  Given(/^migUser Click Register top Button$/, function () {
    var css = '#eg_hp_joinnow';
    var css2 = "#eg_reg_submit_button";
    return browser
      //.pause(10000)
      .waitForVisible(css, 10000)
      .click(css)
  });

});

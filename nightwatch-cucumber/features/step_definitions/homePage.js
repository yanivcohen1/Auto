var util = require('./lib/util.js');
//const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
var browser1;

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
    browser1 = util.loadBrowser();
    return browser1.then((ret) =>{
      if (ret === null) {
            browser1 = util.getBrowser();
            browser = browser1;
            return  browser.init();
          } else {
            browser = browser1;
            return browser1;
          }
    });
   
    
  });

  Given(/^migUser is navigating to "([^"]*)"$/, function (url) {
      browser = browser1;
      return browser
            .url(util.getUrl()).then(() =>{
                var sid = browser.requestHandler.sessionID;
                if (util.getDebug()) {
                  util.saveSessionToFile(sid);
                }
                console.log(sid);
            });
      
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

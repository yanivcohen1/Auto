//const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
var webdriverio = require("webdriverio");
var expect = require('chai').expect;
var int = 0;
//var world = this;

defineSupportCode(({ Given, Then, When, Before, After }) => {

  Given(/^I open Google`s search page$/, () => {
    if (int == 0) {
        browser = webdriverio.remote(options_chrome_emulator);
        int = int + 1;
    }else{
      browser = webdriverio.remote(options_chrome);
    }
    this.browser = browser;
    return browser.init()
    //return browser
       .url('http://google.com')
       .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
      //.waitForElementVisible('body', 1000)
  })

  When(/^I search for "(.*?)"$/, (text) => {
    return browser
      .setValue('input[name=q]', text)
      .submitForm('input[name=q]')
  })

  Then(/^the search result should contain "(.*?)"$/, (text) => {
    return expect(3).to.be.equal(4);
  })

  var options_chrome_emulator = {
        "screenshots" : {
          "enabled" : true,
          "on_failure" : true,
          "on_error" : true,
          "path" : "output/screenshots"
        },
         "desiredCapabilities" : {
            "browserName" : "chrome",
            "chromeOptions" : {
                "mobileEmulation": {
                  "deviceName" : "Apple iPhone 6"
                  //"deviceMetrics": {"width": 360, "height": 640, "pixelRatio": 3}
                }
            }
          },
            selenium: {
                cli_args: {
                  'webdriver.chrome.driver': "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
                }
            }
      };
      var options_chrome = {
        "screenshots" : {
          "enabled" : true,
          "on_failure" : true,
          "on_error" : true,
          "path" : "output/screenshots"
        },
         "desiredCapabilities" : {
            "browserName" : "chrome",
          },
            selenium: {
                cli_args: {
                  'webdriver.chrome.driver': "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
                }
            }
      };
})
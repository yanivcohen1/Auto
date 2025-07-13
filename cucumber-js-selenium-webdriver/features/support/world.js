'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var platform = process.env.PLATFORM || "CHROME";
var driver;
var elements;

var buildAndroidDriver = function () {
  return new webdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      platformVersion: '4.4',
      deviceName: 'Android Emulator',
      browserName: 'Chrome'
    }).
    build();
};

var buildChromeDriver = function () {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};

var buildChromeMobileDriver = function () {
  return new webdriver.Builder().
    withCapabilities({
      browserName: 'chrome',
      chromeOptions: {
        mobileEmulation: {
          deviceName: 'Apple iPhone 5'
        }
      }
    }).
    build();
};

var buildFirefoxDriver = function () {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
};

var getDriverInit = function (browserName) {
  switch (browserName) {
    case 'ANDROID':
      driver = buildAndroidDriver();
      break;
    case 'FIREFOX':
      driver = buildFirefoxDriver();
      break;
    case 'CHROME':
      driver = buildChromeDriver();
      break;
    case 'CHROME_MOBILE':
      driver = buildChromeMobileDriver();
      break;
    default:
      driver = buildChromeDriver();
  }
  //this.driver = driver
  return driver;
};

var loadLibs = function loadLibs() {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.until = webdriver.until;
  this.elements = elements;
  this.by = webdriver.By;

  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

  this.waitForElementPresent = function (cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function () {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };

  this.waitForVisability = function (cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    var element = driver.findElement(cssLocator);
    return driver.wait(this.until.elementIsVisible(element), waitTimeout).then(function () {
      return element;
    });
  };

 /*  this.waitForVisability_enable = function (cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.isDisplayed({ css: cssLocator }).then(function (element) {
      driver.wait(function () {
        return element.isDisplayed().then(function (displayed) {
          if (!displayed)
            return false;

          return element.isEnabled().then(function (enabled) {
            if (!enabled)
              return false;

            elements = element;
            return true;
          });
        });
      }, waitTimeout);
      //element.sendKeys('webdriver');
    });
    //return elements;
  }; */

};

module.exports.loadLibs = loadLibs;
module.exports.getDriverInit = getDriverInit;

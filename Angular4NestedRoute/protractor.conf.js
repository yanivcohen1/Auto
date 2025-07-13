let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var fs = require('fs-extra');
// https://github.com/angular/protractor/issues/1451
require('protractor/built/logger').Logger.logLevel = 1;

exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },
  specs: [
    'tests/e2e-spec.js'
  ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome'//,
    /* 'chromeOptions': {
      args: ['--test-type']
    } */
  },
  //framework: 'jasmine2',
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');

       var HTMLReport = require('protractor-html-reporter');

       testConfig = {
           reportTitle: 'Test Execution Report',
           outputPath: './testresults',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true
       };
       new HTMLReport().from('testresults/xmloutput.xml', testConfig);
   });
},
  onPrepare: function() {
      var jasmineReporters = require('jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: 'testresults',
          filePrefix: 'xmloutput'
      }));
      fs.emptyDir('testresults/screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('testresults/screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });

  }
  /* onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: false
      }
    }));
  } */
};
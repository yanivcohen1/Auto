const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
 
require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions',
   '--format', 'pretty', '--format', 'json:reports/cucumber.json', '--tags', '@Add', 'features']
})

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,//not Debug
    server_path: "node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.0.jar",
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
	cli_args: {
         'webdriver.chrome.driver': "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
   }
  },
  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": "output/screenshots" // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true // turn off to test progressive enhancement
      }
    },
    "iphone-6": {
      "screenshots": {
        "path": "./reports/iphone-6/screenshots"
      },
      "capabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,

        "chromeOptions": {
          "mobileEmulation": { "deviceName" : "Apple iPhone 6"},
          "args": [
            "disable-web-security"
          ]
        }
      }
    },
    "iphone-7" : {
      "desiredCapabilities" : {
        "browserName" : "chrome",
        "chromeOptions" : {
            "mobileEmulation": {
              "deviceName" : "Apple iPhone 6"
              //"deviceMetrics": {"width": 360, "height": 640, "pixelRatio": 3}
            }
        }
      }
    }
  }
}
  // test_settings: {
	//   "default" : {
  //     "launch_url" : "",
  //     "silent": true,
  //     "end_session_on_fail": false,
  //     "skip_testcases_on_fail": false,
  //     "screenshots" : {
  //       "enabled" : true,
  //       "on_failure" : true,
  //       "on_error" : true,
  //       "path" : "output/screenshots"
  //     },
	//   /* "capabilities": {
  //       "browserName": "chrome",
  //       "chromeOptions": {
  //         "mobileEmulation": {
  //           "deviceName": "Apple iPhone 6"
  //         }
  //       },
  //       "loggingPrefs": {
  //         "browser": "ALL"
  //       },
	// 	"selenium": {
	// 		"cli_args": {
	// 		  'webdriver.chrome.driver': "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
	// 		}
  //     }
  //     }, */
	//   "desiredCapabilities": {
  //       "browserName": "chrome",
  //     }/* ,
  //      "desiredCapabilities": {
  //       "browserName": "chrome",
  //       "javascriptEnabled": true,
  //       "acceptSslCerts": true
  //     } */,
  //     "exclude" : ["tests/disabled*"]
  //   },
  //   /* default: {
  //     launch_url: 'http://localhost:8087',
  //     selenium_port: 4444,
  //     selenium_host: '127.0.0.1',
  //     desiredCapabilities: {
  //       browserName: 'phantomjs',
  //       javascriptEnabled: true,
  //       acceptSslCerts: true,
  //       'phantomjs.binary.path': phantomjs.path
  //     }
  //   }, */
  //   /* chrome: {
  //     desiredCapabilities: {
  //       browserName: 'chrome',
  //       javascriptEnabled: true,
  //       acceptSslCerts: true
  //     },
  //     selenium: {
  //       cli_args: {
  //         'webdriver.chrome.driver': "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
  //       }
  //     }
  //   } ,*/
  //   firefox: {
  //     desiredCapabilities: {
  //       browserName: 'firefox',
  //       javascriptEnabled: true,
  //       acceptSslCerts: true
  //     }
  //   } ,
	// "chrome": {
  //     "capabilities": {
  //       "browserName": "chrome",
  //       "javascriptEnabled": true,
  //       "acceptSslCerts": true,

  //       "chromeOptions": {
  //         "mobileEmulation": { "deviceName" : "Apple iPhone 6"},
  //         "args": [
  //           "disable-web-security"
  //         ]
  //       }
  //     },
	//   "selenium": {
  //       "cli_args": {
  //         'webdriver.chrome.driver': "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
  //       }
  //     }
  //   }
  //   /* chromeEmulator: {
  //     capabilities: {
  //       browserName: 'chrome',
  //       chromeOptions: {
  //         mobileEmulation: {
  //           deviceName: 'Apple iPhone 6'
  //         }
  //       },
  //       loggingPrefs: {
  //         browser: 'ALL'
  //       }
  //     }
  //   } */
  // }

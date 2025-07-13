'use strict';

var webdriverio = require("webdriverio");
var fs = require('fs');
var timeStamp;
var language;
var brand;
var type;
var browser;
var env;
var url;
var debug;
var this1 = this;

module.exports = {

    getBrowser: function () {
        if (this.getType() === this.TYPE.MOBI) {
            browser = webdriverio.remote(this.options_chrome_emulator);
        } else if (this.getType() === this.TYPE.DESK) {
            browser = webdriverio.remote(this.options_chrome);
        } else {

        }
        return browser;
    },

    BRAND: { EG: "EG", WHCC: "WHCC" },
    TYPE: { MOBI: "MOBI", DESK: "DESK" },
    //.then(() => {debugger})

    loadBrowser: function (){
        browser = this.getBrowser();
        this1 = this;
        if (this.getDebug()) {
            var error = false;
            var sid = this.readLastSessionId();
            var oldSid = browser.requestHandler.sessionID;
            browser.requestHandler.sessionID = sid;
            return browser.getTitle().then(function(value) {
                //not error
                error = false;
                //console.log(value); // "Success!"
                //throw 'oh, no!';
                }).catch(function(e) { // error
                    //console.log(e);
                    error = true;
                
                }).then(function() {
                    if (error) {
                        return null;
                                       /*  .url(this1.getUrl()).then(() =>{
                                            var sid = browser.requestHandler.sessionID;
                                            if (this1.getDebug()) {
                                            }
                                            //util.saveSessionToFile(sid);
                                            console.log(sid);
                                        });  */
                        
                    } else {
                        return browser;
                    }
                });
        } else{
            return browser.init();
        }
    },

    setEnv: function (env1) {
        env = env1
    },

    getEnv: function () {
        return env
    },

    setDebug: function (debug1) {
        debug = debug1
    },

    getDebug: function () {
        return debug
    },

    saveSessionToFile: function (sid) {
        fs.writeFileSync('C:\\SeleniumGrid\\LastSession.txt', sid, 'utf8');
    },

    readLastSessionId: function(){
        return fs.readFileSync('C:\\SeleniumGrid\\LastSession.txt', 'utf8');
    },

    getUrl: function () {
        if (this.getEnv() === "--envr=stg") {
            if (this.getBrand() === this.BRAND.WHCC) {
                url = "http://m-stg-admin.williamhillcasino.com"
            } else if (this.getBrand() === this.BRAND.EG) {
                url = "http://stg-migration.eurogrand.com"
            }
        } else if (this.getEnv() === "--envr=admin") {
            if (this.getBrand() === this.BRAND.WHCC) {
                url = "http://desktop-admin.williamhillcasino.com"
            } else if (this.getBrand() === this.BRAND.EG) {
                url = "https://desktop-admin.eurogrand.com"
            }
        } else if (this.getEnv() === "--envr=dev") {
            if (this.getBrand() === this.BRAND.WHCC) {
                url = "https://mobile.williamhillcasino.com"
            } else if (this.getBrand() === this.BRAND.EG) {
                url = "http://dev-migration.eurogrand.com"
            }
        } else {
            if (this.getBrand() === this.BRAND.WHCC) {
                url = "https://www.williamhillcasino.com"
            } else if (this.getBrand() === this.BRAND.EG) {
                url = "https://www.eurogrand.com/"
            }
        }
        return url;
    },

    options_chrome_emulator: {
        "screenshots": {
            "enabled": true,
            "on_failure": true,
            "on_error": true,
            "path": "output/screenshots"
        },
        "desiredCapabilities": {
            "browserName": "chrome",
            "chromeOptions": {
                "mobileEmulation": {
                    "deviceName": "Apple iPhone 6"
                    //"deviceMetrics": {"width": 360, "height": 640, "pixelRatio": 3}
                }
            }
        },
        selenium: {
            cli_args: {
                'webdriver.chrome.driver': "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
            }
        }
    },

    options_chrome: {
        "screenshots": {
            "enabled": true,
            "on_failure": true,
            "on_error": true,
            "path": "output/screenshots"
        },
        "desiredCapabilities": {
            "browserName": "chrome",
        },
        start_process: true,
        server_path: "node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.0.jar",
        log_path: '',
        host: '127.0.0.1',
        port: 4444,
        selenium: {
            cli_args: {
                'webdriver.chrome.driver': "node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
            }
        } 
    },

    getCreateTimeStamp: function () {
        timeStamp = Math.round(new Date().getTime() / 1000);
        console.log(timeStamp);
        return timeStamp;
    },

    getTimeStamp: function () {
        return timeStamp;
    },

    getLanguage: function () {
        return language;
    },

    getBrand: function () {
        return brand;
    },

    getType: function () {
        return type;
    },

    setLanguage: function (language1) {
        language = language1;
    },

    setBrand: function (brand1) {
        brand = brand1;
    },

    setType: function (type1) {
        type = type1;
    }

};

//module.exports = configure;

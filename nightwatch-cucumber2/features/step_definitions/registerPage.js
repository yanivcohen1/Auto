const { defineSupportCode } = require('cucumber')
var expect = require('chai').expect;
var util = require('./lib/util.js');

defineSupportCode(({ Given, Then, When }) => {

  Given(/^migUser Click Register1 top Button$/, function () {
    var css = '#eg_hp_joinnow';
    return browser
      //.pause(10000)
      .waitForVisible(css, 10000)
      .click(css);
  });

  Given(/^migUser fill Title "([^"]*)"$/, function (title) {
    var id = '#eg_reg_title';
    return browser
      .pause(5000)
      .selectByVisibleText(id, title);
  });

  Given(/^migUser fill first "([^"]*)"$/, function (firstName) {
    var id = '#eg_reg_firstname';
    return browser
      .pause(5000)
      .waitForVisible(id, 10000)
      .setValue(id, firstName)
  });

  Given(/^migUser fill last "([^"]*)"$/, function (lastName) {
    return browser.setValue('#eg_reg_lastname', lastName)
  });

  Given(/^migUser fill email with email: "([^"]*)"$/, function (email) {
    return browser.setValue('#eg_reg_email', email)
  });

  Given(/^migUser fill user name with timestamp$/, function () {
    var id = '#eg_reg_userName';
    var timeStamp = util.getCreateTimeStamp();
    this.attach("userName:" + timeStamp);
    return browser
      .pause(5000)
      .waitForVisible(id, 10000)
      .setValue(id, timeStamp)
  });

  Given(/^migUser fill password (\d+)$/, function (password) {
    return browser.setValue('#eg_reg_password', password)
  });

  Given(/^migUser Contiue to step (\d+)$/, function (step) {
    if (util.getType() === util.TYPE.MOBI) {
      return browser.click('#eg_reg_next_button')
    } else {
      return browser;
    }
  });

  Given(/^User enter zip code "([^"]*)"$/, function (code) {
    var id = '#eg_reg_zip';
    return browser
      .waitForVisible(id, 10000)
      .setValue(id, code)
      .pause(3000)
      .element('div.fn-address-suggestions.suggestions-wrapper div:first-child')
      .click()
      .pause(2000)
  });

  Given(/^migUser click enter address manualy$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Given(/^migUser fill City "([^"]*)"$/, function (city) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Given(/^migUser fill date of birth (\d+)\/(\d+)\/(\d+)$/, function (day, mounth, year) {
    return browser
      .selectByValue('#day', '0' + day)
      .selectByValue('#month', '0' + mounth)
      .selectByValue('#year', year);
  });

  Given(/^migUser select country "([^"]*)"$/, function (cuntry) {
    return browser
      .selectByVisibleText('#eg_reg_countryCode', cuntry);
  });

  Given(/^migUser fill Address "([^"]*)"$/, function (address) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Given(/^migUser fill Post code (\d+)$/, function (code) {

    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Given(/^migUser fill Mobile (\d+)$/, function (mobileNumber) {
    return browser.setValue('#eg_reg_cellphone', mobileNumber)
  });

  Given(/^migUser select currency GBP$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Given(/^migUser click on Register Now$/, function () {
    return browser.click('#eg_reg_submit_button')
  });

  Then(/^migUser Account was Created$/, function () {
    var depositCss;
    if (util.getBrand() === util.BRAND.WHCC) {
       if (util.getType() === util.TYPE.MOBI) {
         depositCss = 'a.deposit.btn.fn-submit';
      } else {  
        depositCss = 'a.deposit.btn.fn-submit';
      }
    } else if (util.getBrand() === util.BRAND.EG) {
      if (util.getType() === util.TYPE.MOBI) {
         depositCss = 'a.btn.fn-submit.fr';
      } else {
        depositCss = 'a.deposit.btn-2.fn-submit';
      }
    }    
    return browser
      .pause(5000)
      .waitForVisible('.popup-modal__inner')
      .click(depositCss)
  });

});

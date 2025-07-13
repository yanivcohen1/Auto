'use strict';

var expect = require('chai').expect;
var world = require('../support/world.js');

module.exports = function() {

  this.World = world.loadLibs;//load global libs
  
  this.When(/^I search Google for "([^"]*)"$/, function (searchQuery) {
    this.driver = world.getDriverInit("CHROME_MOBILE");//load new driver
    this.driver.get('http://www.google.co.uk/webhp?complete=0');
    this.driver.findElement({ name: 'q' })
      .sendKeys(searchQuery);
    return this.driver.findElement({ name: 'q' })
      .sendKeys(this.webdriver.Key.ENTER);
  });

  /* this.Then(/^I should see some results$/, function () {
    this.waitFor('div.g');
    return this.driver.findElements({ css: 'div.g' })
      .then(function(elements) {
        expect(elements.length).to.equal(0);
      });
  }); */

};

'use strict';

var expect = require('chai').expect;
var worlds = require('../support/world.js');


module.exports = function() {

  this.World = worlds.World;
  
  this.When(/^I search Google for "([^"]*)"$/, function (searchQuery) {
    this.driver = worlds.getDriverInit("CHROME");
    this.driver.get('http://www.google.co.uk/webhp?complete=0');
    this.driver.findElement({ name: 'q' })
      .sendKeys(searchQuery);
    return this.driver.findElement({ name: 'q' })
      .sendKeys(this.webdriver.Key.ENTER);
  });

  this.Then(/^I should see some results$/, function () {
    this.waitFor('div.g');
    return this.driver.findElements({ css: 'div.g' })
      .then(function(elements) {
        expect(elements.length).to.equal(0);
      });
  });

};

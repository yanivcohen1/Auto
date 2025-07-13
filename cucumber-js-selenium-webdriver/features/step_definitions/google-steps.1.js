'use strict';

var expect = require('chai').expect;
var Promise = require('es6-promise').Promise;

module.exports = function () {

  this.Then(/^I should see some results$/, function () {
/*     this.waitForVisability({ name: 'q' })
     .then(function (element) {
        element.click();
      }); */
    var element = this.driver.findElement(this.by.name("q"));
    this.driver.wait(this.until.elementIsVisible(element));//optional add timeout param
    element.click()
    .then(function () {
      //console.log("result:" + add1(5));
       promise.then(function (result) {
        console.log(result); // "Stuff worked!"
      }, function (err) {
        console.log(err); // Error: "It broke"
      });
    });
    //this.driver.sleep(5000);
    //.then(() => {})
    return this.driver.findElements({ css: 'div.g' })
      .then(function (elements) {
        console.log("equal");
        expect(elements.length).to.equal(0);
      });
  });

  var promise = new Promise(function (resolve, reject) {
    if (true/* everything turned out fine */) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });

  //es7
/*  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  async function add1(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
  } */

};

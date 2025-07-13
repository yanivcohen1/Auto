// features/step_definitions/stepDefinitions.js
var angularPage = require('../pages/homePage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


module.exports = function() {
  this.setDefaultTimeout(60 * 1000);
  
  this.After(function (scenario, callback) {
       if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
                scenario.attach(decodedImage, 'image/png');
                callback();
            });
        }
        else {
            callback();
        }
    });
	
  this.Given(/^I go to "([^"]*)"$/, function(site, next) {
    //browser.get(site);
    angularPage.go(site);
    expect(browser.getTitle()).to.eventually.equal('AngularJS — Superheroic JavaScript MVW Framework').and.notify(next);
  });

  this.When(/^I add "([^"]*)" in the task field$/, function(task, next) {
    //element(by.model('todoList.todoText')).sendKeys(task);
    angularPage.addTask(task);
    next();
  });

  this.When(/^I click the add button$/, function(next) {
    //var el = element(by.css('[value="add"]'));
    //el.click();
    angularPage.submitTask();
    next();
  });

  this.Then(/^I should see my new task in the list$/, function(next) {
    var todoList = angularPage.angularHomepage.todoList;
    expect(todoList.count()).to.eventually.equal(3);
    expect(todoList.get(2).getText()).to.eventually.equal('Be Awesome1')
      .and.notify(next);
  });
};

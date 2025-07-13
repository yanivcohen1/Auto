'use strict';
const until = require('selenium-webdriver').until;

module.exports = {

  angularHomepage: {
    taskList: element(by.model('todoList.todoText')),
    taskButton: element(by.css('[value="add"]')),
    todoList: element.all(by.repeater('todo in todoList.todos'))
  },

  go: function(site) {
    browser.get(site);
	//var started = startTestServer();
	//browser.wait(5 * 1000, 'Server should start within 5 seconds');
	//browser.wait(until.elementLocated(by.model('todoList.todoText')));
	//browser.waitForElementVisible('body', 1000);
  },

  addTask: function(task) {
    var angular = this.angularHomepage;
	
    angular.taskList.sendKeys(task);
  },

  submitTask: function() {
    var angular = this.angularHomepage;
    angular.taskButton.click();
  }

};

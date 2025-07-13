"use strict";
var search = require("../pages/searchPage");
var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Given }) {
  Given(/^I am on google page$/, function() {
    browser.get('http://www.angularjs.org');
    
    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).to.eventually.equal('Hello Julie!');

    var addTodo = element(by.model('todoList.todoText'));
    var addButton = element(by.css('[value="add"]'));

    //beforeEach(function() {
      //browser.get('http://www.angularjs.org');

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    //});
    expect(todoList.count()).to.eventually.equal(2);
    expect(todoList.get(1).getText()).to.eventually.equal('build an AngularJS app');
    
    addTodo.sendKeys('write a protractor test');
    addButton.click();

    expect(todoList.count()).to.eventually.equal(3);
    expect(todoList.get(2).getText()).to.eventually.equal('write a protractor test');
    return browser.get('http://www.google.com');
    //return expect(browser.getTitle()).to.eventually.equal("Google");
  });
});

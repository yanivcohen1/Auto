const { defineSupportCode } = require('cucumber')
var expect = require('chai').expect;


defineSupportCode(({ Given, Then, When }) => {

  Then(/^I search1 for "([^"]*)"$/, function(text) {
  return browser
      .setValue('input[name=q]', text)
      .submitForm('input[name=q]')
  })

})
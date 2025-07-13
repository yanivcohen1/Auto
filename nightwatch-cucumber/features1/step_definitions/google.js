const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Given(/^I open Google's search page$/, () => {
    return client
      .url('http://google.com')
      .waitForElementVisible('body', 1000)
	  .sendKeys('input[name="q"]', 'yaniv');
  });

  Then(/^the title is "([^"]*)"$/, (title) => {
    return client.assert.title(title);
	
  });

  Then(/^the Google search form exists$/, () => {
	//setTimeout(function(){client.end();}, 2000);
    client.assert.visible('input[name="q"]');
	return client
			.waitForElementVisible('body', 2000)
			.end();
	
  });

   Then(/^the Google1 search form exists$/, () => {
    client.assert.visible('input[name="q"]');
	return client
			.waitForElementVisible('body1', 2000)
			.end();
	
  });
  
});
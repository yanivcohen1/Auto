const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When, Before, After }) => {

  /* Before(function (scenario) {
      this.scenario = scenario;
      return client;
   });

  After(function (scenario) {
    var world = this;
    if (scenario.isFailed()) {
        client.screenshot().then((screenShot) => {
          world.attach(screenShot, 'image/png');
        });
        // screenShot is a base-64 encoded PNG
        client.end();
       return client;
    }else{
      client.end();
      return client;
    }
    
  }); */

  Given(/^I open Google`s search page$/, () => {
    return client
      .url('http://google.com')
      .waitForElementVisible('body', 1000)
  })

  When(/^I search for "(.*?)"$/, (text) => {
      client.setValue('input[name=q]', text);
      client.getText('#gb_70', (result) => {
                 console.log("print: " + result.value)
       });
      client.submitForm('input[name=q]');
      return client;
  })

  Then(/^the search result should contain "(.*?)"$/, (text) => {
    client.assert.containsText('body', text);
    promise.then(function(result) {
          console.log(result); // "Stuff worked!"
        }, function(err) {
          console.log(err); // Error: "It broke"
        });
    return client;
  })

  var promise = new Promise(function(resolve, reject) {
    if (true/* everything turned out fine */) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });
  
})
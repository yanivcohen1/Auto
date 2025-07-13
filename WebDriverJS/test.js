//webdriver-manager start
//file:///C:/Protector/test.html?wdurl=http://localhost:4444/wd/hub&wdsid=a850591b-00ca-4d79-8f8a-045f7a54bee9

 var driver = new webdriver.Builder().
     usingServer('http://localhost:4444/wd/hub').
     withCapabilities(webdriver.Capabilities.chrome()).
     build();
//var driver = new webdriver.Builder().build();

driver.get("http://www.google.com").
   then(function() { 
   return driver.findElement(webdriver.By.name("q"));}).
   then(function(q) { 
   return q.sendKeys("webdriver");}).
   then(function() { 
   return driver.findElement(webdriver.By.name("btnG"));}).
   then(function(btnG) { 
   return btnG.click();}).
   then(function() { 
   return driver.getTitle();}).
   then(function(title) { 
   assertEquals("webdriver - Google Search", title);});
	
/* 
function onCancel() {
 console.log('The promise was cancelled');
}

webdriver.promise.defer(onCancel).
then(driver.get('http://www.google.com')).
then(driver.findElement(webdriver.By.name('q')).sendKeys('webdriver')).
then(driver.findElement(webdriver.By.name('btnG')).click()).
then(driver.getTitle().then(function(title) {
if (title !== 'webdriver - Google Search') {
 throw new Error(
	 'Expected "webdriver - Google Search", but was "' + title + '"');
}
})).
then(null, function(e) {
 console.error('There was an error: ' + e);
}).
cancel(new Error('boom')); */
//EXECUTE_ASYNC_SCRIPT:"executeSyncScript"

/* driver.get('http://www.google.com', function() {
 driver.findElement(webdriver.By.name('q'), function(q) {
   q.sendKeys("webdriver", function() {
     driver.findElement(webdriver.By.name('btnG'), function(btnG) {
       btnG.click(function() {
         driver.getTitle(function(title) {
           assertEquals('webdriver - Google Search', title);
         });
       });
     });
   });
 });
}); */
	 
 /* driver.get('http://www.google.com');
 driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
 driver.findElement(webdriver.By.name('btnG')).click();
 driver.getTitle().then(function(title) {
   if (title !== 'webdriver - Google Search') {
     throw new Error(
         'Expected "webdriver - Google Search", but was "' + title + '"');
   }
 });

 driver.quit(); */
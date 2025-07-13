package com.wh.auto.eurogrand.desktop;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.testng.annotations.*;
import org.testng.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.utils.RandomString;

public class TestUnsubscribe {
	
	protected WebDriver driver;
	protected Browsers browser = new Browsers();
	protected Map<String, String> Baseurls = new HashMap<String, String>();
	
	// get the utility Properties
	protected Properties utilityProp = Utility.getPropertyFile("utility.properties");
	
	// get integration page
	protected String integrationPageUrl = utilityProp.getProperty("integrationPageUrl");
	
	// define list of browsers and languages to test
	protected String[] TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
	protected String[] TestLanguage = {"en", "de", "ru"};
	
	// playtech admin credentials
	protected String playtechAdminUsername = utilityProp.getProperty("playtechAdminUser");
	protected String playtechAdminPassword = utilityProp.getProperty("playtechAdminPass");
	
	
	@BeforeClass
	public void setBaseurls(){
		// get euorogrand unsubscribe links per lang
		String unsubscribeLinksFile = Utility.getFilePathFromResource("EurograndUnsubscribeLinks.csv");
		ArrayList<ArrayList<String>> links = CSVReader.readFile(unsubscribeLinksFile);
		for(ArrayList<String> csvline : links){
			Baseurls.put(csvline.get(0), csvline.get(1));
		}
	}
	
	@DataProvider(name = "browsersAndLanguages")
	public Object[][] setBrowsersAndLanguages() {
		Object[][] browsersAndLanguages = new Object[TestBrowser.length * TestLanguage.length][2];
		for(int i=0;i<TestBrowser.length;i++){
			for(int j=0;j<TestLanguage.length;j++){
				browsersAndLanguages[(i+1)*j][0] = TestBrowser[i];
				browsersAndLanguages[(i+1)*j][1] = TestLanguage[j];
			}
		}
		return browsersAndLanguages;
	}
	
	/**
	 * Check the unsubscribe form with empty fields
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void checkEmptyInputs(String browserName, String language){
		// Create a driver
		driver = browser.getDriver(browserName);
		Assert.assertNotNull(driver);
		
		// submit bad data
		this.submitUnsubscribeForm(driver, "", language);
		
		// check that error message appears
		Assert.assertTrue(this.errorMessageAppears(driver));
	}
	
	/**
	 * Check the unsubscribe form with long `username` value (1024 characters)
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void checkLongInputs(String browserName, String language){
		// Create a driver
		driver = browser.getDriver(browserName);
		Assert.assertNotNull(driver);
		
		// submit big data (long string)
		char[] usernameChars = new char[1024];
		Arrays.fill(usernameChars, 'a');
		this.submitUnsubscribeForm(driver, (new String(usernameChars)), language);
		
		// check that error message appears
		Assert.assertTrue(this.errorMessageAppears(driver));
	}
	
	/**
	 * Check the unsubscribe form with special characters (slashes, quotes, dashes, ...)
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void checkSpecialCharsInputs(String browserName, String language){
		// Create a driver
		driver = browser.getDriver(browserName);
		Assert.assertNotNull(driver);
		
		// submit special chars data - mainly: \ ' " / 
		String username = "()%^[]&'\"--\\/~`<";
		this.submitUnsubscribeForm(driver, username, language);
		
		// check that error message appears
		Assert.assertTrue(this.errorMessageAppears(driver));
	}
	
	/**
	 * Check the unsubscribe form for sql injections
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void checkSqlInjectionInputs(String browserName, String language){
		// Create a driver
		driver = browser.getDriver(browserName);
		Assert.assertNotNull(driver);
		
		// submit special chars data - mainly: \ ' " / 
		String username = "\" or 1=1 or \"a\" = \"";
		this.submitUnsubscribeForm(driver, username, language);
		
		// check that error message appears
		Assert.assertTrue(this.errorMessageAppears(driver));
	}
	
	/**
	 * Check the unsubscribe form with username that does not exist
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void checkBadInput(String browserName, String language){
		// Create a driver
		driver = browser.getDriver(browserName);
		Assert.assertNotNull(driver);
		
		// submit bad data
		this.submitUnsubscribeForm(driver, "bad string for testing", language);
		
		// check that error message appears
		Assert.assertTrue(this.errorMessageAppears(driver));
	}
	
	/**
	 * submit the unsubscribe form with normal data, 
	 * and check that the user was actully unsubscribed using PlayTech admin system
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void checkActualUnsubscribe(String browserName, String language){

		// skip the test for IE
		if (browserName == "ie") return;
		
		// Create the driver
		driver = browser.getDriver(browserName);
		Assert.assertNotNull(driver);
		
		// create new user with random username
		String username = this.getRandomUsername();
		System.out.println("New random user: " + username);
		this.registerNewUser(driver, username);
		
		// check that the user is subscribed to all the channels
		try {
			Assert.assertTrue(this.getUnsubscribeData(driver, username, true));
		} catch (Exception e) {
			Assert.fail("Cannot check the actual unsubscribe status from PT admin");
			return;
		}
		
		// submit the unsubscribe form
		this.submitUnsubscribeForm(driver, username, language);
		
		// check that there's no error
		Assert.assertFalse(this.errorMessageAppears(driver));
		
		// check that the user is UNsubscribed to all the channels
		try {
			Assert.assertTrue(this.getUnsubscribeData(driver, username, false));
		} catch (Exception e) {
			Assert.fail("Cannot check the actual unsubscribe status from PT admin");
			return;
		}

	}

	@AfterMethod
    public void tearDown() {
		browser.clearCookies(driver);
		driver.quit();
    }

	/****************************************************** PROTECTED SECION *******************/
	
	/**
	 * Just submit the unsubscribe for with the desired username
	 * @param driver
	 * @param username
	 * @param language
	 */
	protected void submitUnsubscribeForm(WebDriver driver, String username, String language) {
		WebElement usernameElement = null, captchaElement = null;
		
		// go to the desired unsubscribe page
		driver.get(Baseurls.get(language));
		
		// get the input elements
		try {
			usernameElement = driver.findElement( By.name("UnsubscribeForm[username]") );
			usernameElement.clear();
			captchaElement = driver.findElement( By.name("UnsubscribeForm[verifyCode]") );
			captchaElement.clear();
		} catch (Exception e) {
			Assert.fail("Username element was not found");
			return;
		}
		
		// check that the inputs are visible without error
		Assert.assertTrue(usernameElement.isDisplayed());

		// input and submit
		usernameElement.sendKeys(username);
		captchaElement.sendKeys("zaq1xsw2"); // some non relevant string, just because it cannot be empty
		usernameElement.submit();
	}
	
	/**
	 * Check that the error element appears on the page
	 * @param driver
	 * @return
	 */
	protected boolean errorMessageAppears(WebDriver driver) {
		WebElement errorMessageElem = null;
		try {
			// try to find the element on the page
			errorMessageElem = driver.findElement( By.className("errorMessage") );
		} catch (Exception e) {
			// element not found - return `false`
			return false;
		}
		
		// return true is the error is displayed
		boolean isDisplayed = (errorMessageElem.isDisplayed()); 
		return isDisplayed;
	}	
	
	/**
	 * Get random username
	 * @return
	 */
	protected String getRandomUsername() {
		RandomString rs = new RandomString(10);
		return rs.nextString();
	}
	
	
	/**
	 * Register new user using the `integrationPage` GUI
	 * @param driver
	 * @param username
	 */
	protected void registerNewUser(WebDriver driver, String username) {
		WebElement usernameElement = null,
				submitButton = null,
				outputWindow = null;
		
		// go to the integration page
		driver.get(this.integrationPageUrl);
		
		// get the elements
		try {
			usernameElement = driver.findElement( By.id("registration-form") ).findElement(By.name("username"));
			submitButton = driver.findElement( By.id("button_register") );
			outputWindow = driver.findElement(By.id("output"));
		} catch (Exception e) {
			Assert.fail("Cannot find the username/submit/output elements on the page");
			return;
		}
		
		// insert the username and submit
		outputWindow.clear();
		usernameElement.clear();
		usernameElement.sendKeys(username);
		submitButton.click();
		
		// wait for the ajax
		String value = "";
		int attempts = 10;
		do {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				Assert.fail("Error while waiting the registration AJAX to return");
				break;
			}
			
			value = outputWindow.getAttribute("value");
		} while (attempts-- > 0 && value.length() == 0);
		
		System.out.println("output window value is: " + value);
		// @TODO: check the output window that everything is ok
		Assert.assertTrue(outputWindow.getAttribute("value").contains("Registered successfully"));
	}
	
	/**
	 * Go to playtech admin and check that the checkboxes are like `expectedSubscribeStatus`
	 * @param driver
	 * @param username
	 * @param expectedSubscribeStatus
	 * @return boolean
	 * @throws Exception
	 */
	public boolean getUnsubscribeData(WebDriver driver, String username, boolean expectedSubscribeStatus) throws Exception {

		boolean All = false;
		boolean Email = false;
		boolean SMS = false;
		boolean DirectMail = false;
		boolean Phone = false;

		// login to playtech admin
		
//		driver.get("https://extdev-devhead-admin.playtech.com/index.php");
		driver.get(utilityProp.getProperty("playtechAdminUrl"));
		driver.findElement(By.name("username")).clear();
		driver.findElement(By.name("username")).sendKeys(playtechAdminUsername);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(playtechAdminPassword);
		driver.findElement(By.name("Submit")).click();
		Thread.sleep(5000);
		
		// find the requested username
//		driver.get("https://extdev-devhead-admin.playtech.com/user_search.php?context=ums");
		driver.get(utilityProp.getProperty("playtechAdminSearchUserUrl"));
		driver.findElement(By.id("username")).clear();
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("submit")).click();
		driver.findElement(By.linkText(username)).click();
		driver.findElement(By.id("imgsec_contact")).click();

		// check unsubscribe status
		All = driver.findElement(By.id("communicationoptouts['all']")).isSelected();
		Email = driver.findElement(By.id("communicationoptouts[1][2]")).isSelected();
		SMS = driver.findElement(By.id("communicationoptouts[2][2]")).isSelected();
		DirectMail = driver.findElement(By.id("communicationoptouts[3][2]")).isSelected();
		Phone = driver.findElement(By.id("communicationoptouts[4][2]")).isSelected();

		System.out.println("all:" + All + ",Email:" + Email + ",SMS:" + SMS + ",DirectMail:" + DirectMail + ",Phone:" + Phone);
		
		Thread.sleep(2000);

		return (All == expectedSubscribeStatus
				&& Email == expectedSubscribeStatus
				&& SMS == expectedSubscribeStatus
				&& DirectMail == expectedSubscribeStatus 
				&& Phone == expectedSubscribeStatus);
	}
	
}

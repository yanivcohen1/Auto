package com.wh.auto.eurogrand.desktop;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;

/**
 * Test the good/bad Mechanism in Eurogrand
 * @author Dario De Santis <dario.desantis@williamhill.com>
 */
public class TestGoodBad {
	
	protected WebDriver driver;
	protected Browsers browser = new Browsers();
	protected Map<String, String> Baseurls = new HashMap<String, String>();
	protected String[] TestBrowser;
	protected String goodAffiliate, badAffiliate  = "";
	
	/**
	 * Initializate the parameters that we want to test
	 * Browsers, Homepages
	 */
	@BeforeClass
	public void setTestParams(){
		
		//get browsers
		TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		
		//get euorogrand homepage links per lang
		String homeLinksFile = Utility.getFilePathFromResource("EurograndHomeLinks.csv");
		ArrayList<ArrayList<String>> links = CSVReader.readFile(homeLinksFile);
		for(ArrayList<String> csvline : links){
			Baseurls.put(csvline.get(0), csvline.get(1));
		}
		
		//get good/bad servelinks
		Properties prop = Utility.getPropertyFile("EurograndGoodBad.ini");
		goodAffiliate = prop.getProperty("GoodServeLink");
		badAffiliate = prop.getProperty("BadServeLink");
		
	}
	
	/**
	 * Create the DataProvider for the tests
	 * Create a matrix of browsers and languages
	 * @return Object of elements to tests
	 */
	@DataProvider(name = "browsersAndLanguages")
	public Object[][] setBrowsersAndLanguages() {
		Object[][] browsersAndLanguages = new Object[TestBrowser.length * Baseurls.size()][2];
		int loopLenght = 0;
		for (String browser : TestBrowser) {
			for(String language : Baseurls.keySet()){
				browsersAndLanguages[loopLenght] = new String[] {browser , language};
				loopLenght++;
			}
		}
		return browsersAndLanguages;
	}
	
	/**
	 * Test the good affilate.
	 * Enter in the website using a servelink with a member "good"
	 * Check that we show the banner for good affiliates and the cookie gba has value 1
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void testGoodAffiliateMulti(String browserName, String language){
		//get the webdriver
		driver = browser.getDriver(browserName);
		
		//enter in the website with a good member
		driver.get(goodAffiliate);
		
		//set the flang cookie with the language
		Calendar cal = Calendar.getInstance(); 
		cal.add(Calendar.MONTH, 1);
		Date expiry = cal.getTime();
		Cookie cookie = new Cookie("flang", language, ".eurogrand.com", "/", expiry);
		driver.manage().addCookie(cookie);
		
		//go to the homepage of the language
		String baseUrl = Baseurls.get(language);
		driver.get(baseUrl);
		
		//check that the images is "good"
		WebElement img = driver.findElement(By.id("goodbadbanner"));
		String imgSrc = img.getAttribute("src");
		Assert.assertTrue(imgSrc.contains("good"));
		
		//check that the gba cookie is 1
		Cookie cookieGba = driver.manage().getCookieNamed("gba");
		Assert.assertEquals(cookieGba.getValue(), "1");
	}
	
	/**
	 * Test the bad affilate.
	 * Enter in the website using a servelink with a member "bad"
	 * Check that we show the banner for bad affiliates and the cookie gba has value 2
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void testBadAffiliateMulti(String browserName, String language){
		//get the webdriver
		driver = browser.getDriver(browserName);
		
		//enter in the website with a bad member
		driver.get(badAffiliate);
		
		//set the flang cookie with the language
		Calendar cal = Calendar.getInstance(); 
		cal.add(Calendar.MONTH, 1);
		Date expiry = cal.getTime();
		Cookie cookie = new Cookie("flang", language, ".eurogrand.com", "/", expiry);
		driver.manage().addCookie(cookie);
		
		//test with manually changed cookie
		//cookie = new Cookie("gba", "2", ".eurogrand.com", "/", null);
		//driver.manage().addCookie(cookie);
		
		//go to the homepage of the language
		String baseUrl = Baseurls.get(language);
		driver.get(baseUrl);
		
		//check that the images is "bad"
		WebElement img = driver.findElement(By.id("goodbadbanner"));
		String imgSrc = img.getAttribute("src");
		Assert.assertFalse(imgSrc.contains("good"));
		
		//check that the gba cookie is 1
		Cookie cookieGba = driver.manage().getCookieNamed("gba");
		Assert.assertEquals(cookieGba.getValue(), "2");
	}
	
	/**
	 * After each test clear cookies and close the browser
	 */
	@AfterMethod
    public void tearDown() {
		browser.clearCookies(driver);
		driver.quit();
    }	

}

package com.wh.auto.general;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;

/**
 * Test the Internal Tracking
 * @author Dario De Santis <dario.desantis@williamhill.com>
 */
public class TestInternalTracking {
	
	protected WebDriver driver;
	protected Browsers browser = new Browsers();
	protected Map<String, String> webSitesToTest = new HashMap<String, String>();
	protected String[] TestBrowser;
	
	
	/**
	 * Initializate the websites that we want to test
	 */
	@BeforeClass
	public void setTestParams(){
		
		//get browsers
		TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		
		//get servelinks
		String servelinksFile = Utility.getFilePathFromResource("Servelinks.csv");
		ArrayList<ArrayList<String>> links = CSVReader.readFile(servelinksFile);
		for(ArrayList<String> csvline : links){
			webSitesToTest.put(csvline.get(0), csvline.get(2));
		}
	}
	
	/**
	 * Create the DataProvider for the tests
	 * Create a matrix of browsers and websites
	 * @return Object of elements to tests
	 */
	@DataProvider(name = "browsersAndWebsites")
	public Object[][] setBrowsersAndWebsites() {
		Object[][] browsersAndWebsites = new Object[TestBrowser.length * webSitesToTest.size()][2];
		int loopLenght = 0;
		for (String browser : TestBrowser) {
			for(String webSiteskey : webSitesToTest.keySet()){
				browsersAndWebsites[loopLenght] = new String[]{browser, webSiteskey};
				loopLenght++;
			}
		}
		return browsersAndWebsites;
	}
	
	
	/**
	 * Test for check that the clickinfo cookie is created correctly if we enter with a servelink
	 * @param browserName
	 * @param webSite
	 */
	@Test(dataProvider = "browsersAndWebsites")
	public void enterWithServelink(String browserName, String webSite){
		driver = browser.getDriver(browserName);
		driver.get(webSitesToTest.get(webSite));
		
		//get the cookie and check that exist
		Cookie clickinfoCookie = driver.manage().getCookieNamed("clickinfo");
		Assert.assertNotNull(clickinfoCookie);
		
		//check that member,campaign and channel that are in the clickinfo are equal to the servelink
		Map<String, String> servelinkInfo = Utility.getQueryMap(webSitesToTest.get(webSite).split("\\?")[1]);
		Map<String, String> map = Utility.getQueryMap(clickinfoCookie.getValue());
		Assert.assertEquals(map.get("member"), servelinkInfo.get("member"));
		Assert.assertEquals(map.get("campaign"), servelinkInfo.get("campaign"));
		Assert.assertEquals(map.get("channel"), servelinkInfo.get("channel"));
	}
	
	
	/**
	 * Test for check if after press a download button the banner_dowloand cookie is created
	 * @param browserName
	 * @param webSite
	 * @throws InterruptedException
	 */
	@Test(dependsOnMethods = { "enterWithServelink" }, dataProvider = "browsersAndWebsites")
	public void downloadClient(String browserName, String webSite) throws InterruptedException{
		//enter in the site with a servelink and check that the cookie is created correcly
		enterWithServelink(browserName, webSite);
		
		//check that we don't have the banner_download cookie
		Cookie banner_downloadCookie = driver.manage().getCookieNamed("banner_download");
		Assert.assertNull(banner_downloadCookie);
		
		//click on a download button and wait 3 second, later check that we have the banner_download cookie
		driver.findElement(By.cssSelector("[tagdownload]")).click();
		Thread.sleep(3000);
		banner_downloadCookie = driver.manage().getCookieNamed("banner_download");
		Assert.assertNotNull(banner_downloadCookie);
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

package com.wh.auto.general;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;

/**
 * Test the Seo Pixel
 * @author Dario De Santis <dario.desantis@williamhill.com>
 */
public class TestSeoPixel {
	
	protected WebDriver driver;
	protected Browsers browser = new Browsers();
	protected Map<String, SearchEngine> searchEngineToTest = new HashMap<String, SearchEngine>();
	protected Map<String, String[]> webSitesToTest = new HashMap<String, String[]>();
	protected String[] TestBrowser;
	
	/**
	 * Initializate the parameters that we want to test
	 * Browsers, Search Engines, WebSites
	 */
	@BeforeClass
	public void setTestParams(){
		
		//get browsers
		TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		
		//Search Engine (search url, channel, selector first result)
		String searchEngineFile = Utility.getFilePathFromResource("SearchEngine.csv");
		ArrayList<ArrayList<String>> search = CSVReader.readFile(searchEngineFile);
		for(ArrayList<String> csvline : search){
			searchEngineToTest.put(csvline.get(0), new SearchEngine(csvline.get(1), csvline.get(2), csvline.get(3)));
		}
		
		//get servelinks
		String servelinksFile = Utility.getFilePathFromResource("Servelinks.csv");
		ArrayList<ArrayList<String>> links = CSVReader.readFile(servelinksFile);
		Map<String, String> webSitesLinks = new HashMap<String, String>();
		for(ArrayList<String> csvline : links){
			webSitesLinks.put(csvline.get(0), csvline.get(2));
		}
		
		//Web Sites (member,search engine query, servelink)
		String seoPixelsFile = Utility.getFilePathFromResource("SeoPixel.csv");
		ArrayList<ArrayList<String>> pixels = CSVReader.readFile(seoPixelsFile);
		for(ArrayList<String> csvline : pixels){
			webSitesToTest.put(csvline.get(0), new String[]{csvline.get(1), csvline.get(2), webSitesLinks.get(csvline.get(0))});
		}
		
	}
	
	
	/**
	 * Create the DataProvider for the tests
	 * Create a matrix of browsers, websites and search engines
	 * @return Object of elements to tests
	 */
	@DataProvider(name = "browsersAndWebSitesAndSearchEngine")
	public Object[][] setbrowsersAndWebSitesAndSearchEngine() {
		Object[][] browsersAndWebSitesAndSearchEngine = new Object[TestBrowser.length * webSitesToTest.size() * searchEngineToTest.size()][3];
		int loopLenght = 0;
		for (String browser : TestBrowser) {
			for(String webSiteskey : webSitesToTest.keySet()){
				for(String searchEngineToTestkey : searchEngineToTest.keySet()){
					browsersAndWebSitesAndSearchEngine[loopLenght] = new String[] {browser, webSiteskey, searchEngineToTestkey};
					loopLenght++;
				}
			}
		}
		return browsersAndWebSitesAndSearchEngine;
	}
	
	/**
	 * Check that if a user without clickinfo enter in the website from a search engine, we fire the SEO pixel
	 * Check we have in the member the website seo pixel, in the channel the search engine and in the var5 the query
	 * @param browserName
	 * @param webSite
	 * @param searchEngine
	 */
	@Test(dataProvider = "browsersAndWebSitesAndSearchEngine")
	public void checkSeoPixelNoCookie(String browserName, String webSite, String searchEngine){
		driver = browser.getDriver(browserName);
		
		//Enter in the search engine and click on the first result
		driver.get(searchEngineToTest.get(searchEngine).getUrl()+webSitesToTest.get(webSite)[1]);
		driver.findElement(By.cssSelector(searchEngineToTest.get(searchEngine).getCssSelector())).click();
		//fix yahoo
		if(searchEngine.contains("yahoo")){
			for(String winHandle : driver.getWindowHandles()){
			    driver.switchTo().window(winHandle);
			}
		}
		
		//check that we fire the seo pixel
		WebDriverWait wait = new WebDriverWait(driver, 7);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("img.impressionpixel")));
		Assert.assertTrue(driver.findElements(By.cssSelector("img.impressionpixel")).size() != 0);
		
		//check we have in the member the website seo pixel, in the channel the search engine and in the var5 the query
		Map<String, String> map = Utility.getQueryMap(driver.findElement(By.cssSelector("img.impressionpixel")).getAttribute("src").split("\\?")[1]);
		Assert.assertEquals(map.get("member"), webSitesToTest.get(webSite)[0]);
		Assert.assertEquals(map.get("channel"), searchEngineToTest.get(searchEngine).getChannel());
		Assert.assertEquals(map.get("var5"), webSitesToTest.get(webSite)[1].replace("+","%20"));
	}
	
	
	/**
	 * Check that if a user with clickinfo and is not PPC (no var5) enter in the website from google, we fire the SEO pixel, for the other searchengine we don't do it
	 * Check we have in the member the website seo pixel, in the channel the search engine, in the var5 the query and in var6 the previous member
	 * @param browserName
	 * @param webSite
	 * @param searchEngine
	 */
	@Test(dataProvider = "browsersAndWebSitesAndSearchEngine")
	public void checkSeoPixelWithCookieNoPPC(String browserName, String webSite, String searchEngine){
		driver = browser.getDriver(browserName);
		driver.get(webSitesToTest.get(webSite)[2]);
		
		//Enter in the search engine and click on the first result
		driver.get(searchEngineToTest.get(searchEngine).getUrl()+webSitesToTest.get(webSite)[1]);
		driver.findElement(By.cssSelector(searchEngineToTest.get(searchEngine).getCssSelector())).click();
		//fix yahoo
		if(searchEngine.contains("yahoo")){
			for(String winHandle : driver.getWindowHandles()){
			    driver.switchTo().window(winHandle);
			}
		}
		
		//if the search engine is google check that we fire the seo pixel
		if(searchEngine.contains("google")){
			WebDriverWait wait = new WebDriverWait(driver, 7);
			wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("img.impressionpixel")));
			Assert.assertTrue(driver.findElements(By.cssSelector("img.impressionpixel")).size() != 0);
			
			//Check we have in the member the website seo pixel, in the channel the search engine, in the var5 the query and in var6 the previous member
			Map<String, String> servelinkInfo = Utility.getQueryMap(webSitesToTest.get(webSite)[2].split("\\?")[1]);
			Map<String, String> map = Utility.getQueryMap(driver.findElement(By.cssSelector("img.impressionpixel")).getAttribute("src").split("\\?")[1]);
			Assert.assertEquals(map.get("member"), webSitesToTest.get(webSite)[0]);
			Assert.assertEquals(map.get("channel"), searchEngineToTest.get(searchEngine).getChannel());
			Assert.assertEquals(map.get("var6"),servelinkInfo.get("member"));
			Assert.assertEquals(map.get("var5"), webSitesToTest.get(webSite)[1].replace("+","%20"));
		}
		else	//if the search engine is not google check that we don't fire the pixel in the next 7 seconds
		{
			driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS); 
			Assert.assertFalse(driver.findElements(By.cssSelector("img.impressionpixel")).size() != 0);
			driver.manage().timeouts().implicitlyWait(0, TimeUnit.SECONDS); 
		}
		
	}
	
	/**
	 * Check that if a user with clickinfo and is PPC (with var5) enter in the website from a search engine, we never fire the SEO pixel 
	 * @param browserName
	 * @param webSite
	 * @param searchEngine
	 */
	@Test(dataProvider = "browsersAndWebSitesAndSearchEngine")
	public void checkSeoPixelWithCookieYesPPC(String browserName, String webSite, String searchEngine){
		
		//enter in the website
		driver = browser.getDriver(browserName);
		driver.get(webSitesToTest.get(webSite)[2]);
		
		//add the var5 in vars_info cookie in order to simulate PPC
		Calendar cal = Calendar.getInstance(); 
		cal.add(Calendar.MONTH, 1);
		Date expiry = cal.getTime();
		Cookie cookie = new Cookie("vars_info", "&var5=isppc", (webSitesToTest.get(webSite)[2].replace("http://serve", "")).split("/")[0], "/", expiry);
		driver.manage().addCookie(cookie);
		
		//Enter in the search engine and click on the first result
		driver.get(searchEngineToTest.get(searchEngine).getUrl()+webSitesToTest.get(webSite)[1]);
		driver.findElement(By.cssSelector(searchEngineToTest.get(searchEngine).getCssSelector())).click();
		//fix yahoo
		if(searchEngine.contains("yahoo")){
			for(String winHandle : driver.getWindowHandles()){
			    driver.switchTo().window(winHandle);
			}
		}
		
		//check that we don't fire the pixel
		driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS); 
		Assert.assertFalse(driver.findElements(By.cssSelector("img.impressionpixel")).size() != 0);
		driver.manage().timeouts().implicitlyWait(0, TimeUnit.SECONDS); 
		
	}
	
	/**
	 * After each test clear cookies and close the browser
	 */
	@AfterMethod
    public void tearDown() {
		browser.clearCookies(driver);
		driver.quit();
    }
	
	
	/**
	 * class for search engine Objects
	 * @author Dario De Santis <dario.desantis@williamhill.com>
	 *
	 */
	public class SearchEngine{
		
		private String url;
		private String channel;
		private String cssSelector;
		
		/**
		 * Construct
		 * @param url
		 * @param channel
		 * @param cssSelector
		 */
		public SearchEngine(String url, String channel, String cssSelector){
			this.url = url;
			this.channel = channel;
			this.cssSelector = cssSelector;
		}
		
		/**
		 * @return String url of the search engine
		 */
		public String getUrl(){
			return this.url;
		}
		
		/**
		 * @return String channel of the search engine
		 */
		public String getChannel(){
			return this.channel;
		}
		
		/**
		 * @return String cssSelector of the search engine
		 */
		public String getCssSelector(){
			return this.cssSelector;
		}
	}
	
}

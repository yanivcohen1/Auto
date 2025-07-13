package com.wh.auto.general;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.datatransfer.Transferable;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;

/**
 * Test the regulated counties with Geo IP rules
 * @author Dario De Santis <dario.desantis@williamhill.com>
 *
 */
public class TestRegulatedCountry {

	protected WebDriver driver;
	protected Browsers browser = new Browsers();
	protected Map<String, String[]> webSitesLinks = new HashMap<String, String[]>();
	protected Map<String, String[]> webSiteRegulated = new HashMap<String, String[]>();
	protected String[] TestBrowser;
	
	//get the utility Properties
	Properties utilityProp = Utility.getPropertyFile("utility.properties");
	

	/**
	 * Initializate the urls for the test
	 */
	@BeforeClass
	public void setTestParams() {
		
		//get browsers
		TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		
		//get servelinks
		String servelinksFile = Utility.getFilePathFromResource("Servelinks.csv");
		ArrayList<ArrayList<String>> links = CSVReader.readFile(servelinksFile);
		for(ArrayList<String> csvline : links){
			webSitesLinks.put(csvline.get(0), new String[]{csvline.get(1), csvline.get(2)});
		}
		
		//get regulated tests
		String regulatedFile = Utility.getFilePathFromResource("RegulatedCountry-GEO.csv");
		ArrayList<ArrayList<String>> rules = CSVReader.readFile(regulatedFile);
		for(ArrayList<String> csvline : rules){
			webSiteRegulated.put(csvline.get(0), new String[]{csvline.get(1), csvline.get(2)});
		}
		
	}
	
	/**
	 * Create the DataProvider for the test
	 * Create a matrix of browsers, websites and countries
	 * @return Object of elements to tests
	 */
	@DataProvider(name = "browsersAndWebSitesAndCountry")
	public Object[][] setbrowsersAndWebSitesAndCountry() {
		Object[][] browsersAndWebSitesAndCountry = new Object[TestBrowser.length * webSiteRegulated.size()][3];
		int loopLenght = 0;
		for (String browser : TestBrowser) {
			for(String webSiteRegulatedKey : webSiteRegulated.keySet()){
				String[] regulation = webSiteRegulatedKey.split("-");
				browsersAndWebSitesAndCountry[loopLenght] = new String[] {browser, regulation[0], regulation[1]};
				loopLenght++;
			}
		}
		return browsersAndWebSitesAndCountry;
	}

	/**
	 * Test a user coming from a country defined in the list using a direct link to the site
	 * and check that he is redirected to the destination site in the proper way
	 * @param browserName
	 * @param webSite
	 * @param country
	 */
	@Test(dataProvider = "browsersAndWebSitesAndCountry")
	public void testGeoRegulationDirectLink(String browserName, String webSite, String country) {
		
		//open the browser and go to an url using a proxy from a country
		regulatedAccess(browserName, country, webSitesLinks.get(webSite)[0]);
		
		//check that the current url is the aspected
		String currentUrl = driver.getCurrentUrl();
		Assert.assertEquals(currentUrl, webSiteRegulated.get(webSite+"-"+country)[0]);
		
		//get the clickinfo cookie
		Cookie clickinfoCookie = driver.manage().getCookieNamed("clickinfo");
		
		//if in the rule we say that is with tracking check that the clickinfo is created with default parameters
		//otherwise check that the cookie is not created
		if( webSiteRegulated.get(webSite+"-"+country)[1].equals("yes") ){
			
			//check the we have the cookie
			Assert.assertNotNull(clickinfoCookie);
			
			//check that member,campaign and channel are in the clickinfo with the default parameters
			Map<String, String> map = Utility.getQueryMap(clickinfoCookie.getValue());
			Assert.assertEquals(map.get("member"), "default");
			Assert.assertEquals(map.get("campaign"), "DEFAULT");
			Assert.assertEquals(map.get("channel"), "DEFAULT");
		} else {
			//check that we don't have the cookie
			Assert.assertNull(clickinfoCookie);
		}

	}
	
	/**
	 * Test a user coming from a country defined in the list using a serve link to the site
	 * and check that he is redirected to the destination site in the proper way
	 * @param browserName
	 * @param webSite
	 * @param country
	 */
	@Test(dataProvider = "browsersAndWebSitesAndCountry")
	public void testGeoRegulationServeLink(String browserName, String webSite, String country) {
		
		//open the browser and go to an url using a proxy from a country
		regulatedAccess(browserName, country, webSitesLinks.get(webSite)[1]);
		
		//check that the current url is the aspected
		String currentUrl = driver.getCurrentUrl();
		Assert.assertEquals(currentUrl, webSiteRegulated.get(webSite+"-"+country)[0]);
		
		//get the clickinfo cookie
		Cookie clickinfoCookie = driver.manage().getCookieNamed("clickinfo");
		
		//if in the rule we say that is with tracking check that the clickinfo is created with the goodaff parameters
		//otherwise check that the cookie is not created
		if( webSiteRegulated.get(webSite+"-"+country)[1].equals("yes")  || webSiteRegulated.get(webSite+"-"+country)[1].equals("mixed") ){
			
			//check the we have the cookie
			Assert.assertNotNull(clickinfoCookie);
			
			//check that member,campaign and channel are in the clickinfo with the servelink parameters
			Map<String, String> servelinkInfo = Utility.getQueryMap(webSitesLinks.get(webSite)[1].split("\\?")[1]);
			Map<String, String> map = Utility.getQueryMap(clickinfoCookie.getValue());
			Assert.assertEquals(map.get("member"), servelinkInfo.get("member"));
			Assert.assertEquals(map.get("campaign"), servelinkInfo.get("campaign"));
			Assert.assertEquals(map.get("channel"), servelinkInfo.get("channel"));
		} else {
			//check that we don't have the cookie
			Assert.assertNull(clickinfoCookie);
		}

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
	 * Private function for open the browser and go to an url using a proxy from a country
	 * @param browserName
	 * @param country
	 * @param url
	 */
	private void regulatedAccess(String browserName, String country, String url){
		
		//get the driver using proxy from a country
		String proxyUrl = utilityProp.getProperty("geosurfProxy").replace("%country%", country.toLowerCase());
		org.openqa.selenium.Proxy proxy = new org.openqa.selenium.Proxy();
		proxy.setHttpProxy(proxyUrl).setSslProxy(proxyUrl);
		DesiredCapabilities cap = new DesiredCapabilities();
		cap.setCapability(CapabilityType.PROXY, proxy);
		driver = browser.getDriver(browserName, cap);

		//start a task after 5 seconds for insert username and password of the proxy
		new java.util.Timer().schedule(new java.util.TimerTask() {
			@Override
			public void run() {
				try {
					SmartRobot robot = new SmartRobot();
					robot.type(utilityProp.getProperty("geosurfUser"));
					robot.keyPress(KeyEvent.VK_TAB);
					robot.type(utilityProp.getProperty("geosurfPass"));
					robot.keyPress(KeyEvent.VK_ENTER);
				} catch (Exception AWTException) {
					System.out.println("Exception " + AWTException.getMessage());
				}
			}
		}, 5000);

		//open the browser and go the url
		driver.get(url);
	}

}


/**
 * Class for input in the proxy popup message
 * @author Dario De Santis <dario.desantis@williamhill.com>
 *
 */
class SmartRobot extends Robot {

	public SmartRobot() throws AWTException {
		super();
	}

	/**
	 * paste from clipboard
	 */
	public void pasteClipboard() {
		keyPress(KeyEvent.VK_CONTROL);
		keyPress(KeyEvent.VK_V);
		delay(50);
		keyRelease(KeyEvent.VK_V);
		keyRelease(KeyEvent.VK_CONTROL);
	}

	/**
	 * Type a text (copy in clipboard and past it)
	 * @param text
	 */
	public void type(String text) {
		writeToClipboard(text);
		pasteClipboard();
	}

	/**
	 * Save in clipboard a text
	 * @param s
	 */
	private void writeToClipboard(String s) {
		Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
		Transferable transferable = new StringSelection(s);
		clipboard.setContents(transferable, null);
	}
}

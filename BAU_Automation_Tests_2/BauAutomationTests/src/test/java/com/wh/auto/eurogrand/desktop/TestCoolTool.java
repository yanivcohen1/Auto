package com.wh.auto.eurogrand.desktop;


import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.testng.annotations.*;
import org.testng.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;


/**
 * Test the Eurogrand CoolTool
 * @author Dario De Santis <dario.desantis@williamhill.com>
 */
public class TestCoolTool {
	
	protected WebDriver driver;
	protected Browsers browser = new Browsers();
	protected Map<String, String> Baseurls = new HashMap<String, String>();
	protected String filePath="C:\\Users\\dariod\\Downloads";	//where we download the files
	protected String[] TestBrowser;
	
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
	 * Test that the cooltool is present and visible
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void checkCoolToolMulti(String browserName, String language){
		checkCoolTool(browserName, language);
	}
	
	/**
	 * Test that the close button is working
	 * @param browserName
	 * @param language
	 */
	@Test(dependsOnMethods = { "checkCoolToolMulti" }, dataProvider = "browsersAndLanguages")
	public void checkCoolToolCloseButtonMulti(String browserName, String language){
		checkCoolTool(browserName, language);
		checkCloseButton();
	}
	
	/**
	 * Test the download button on the cooltool, check that the right file is downloaded
	 * and the user is redirected to the get started page
	 * @param browserName
	 * @param language
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	@Test(dependsOnMethods = { "checkCoolToolMulti" }, dataProvider = "browsersAndLanguages")
	public void checkCoolToolDownloadButtonMulti(String browserName, String language) throws AWTException, InterruptedException{
		checkCoolTool(browserName, language);
		checkDownloadButton();
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
	 * Function for open the browser, go to a 404 page in order to set a language cookie
	 * enter in the homepage of that language and check that the cooltool exist and is displayed
	 * @param browserName
	 * @param language
	 */
	protected void checkCoolTool(String browserName, String language){
		//get the webdriver
		driver = browser.getDriver(browserName);
		
		//enter in a 404 page and set the flang cookie with the language
		driver.get("http://www.eurogrand.com/404");
		Calendar cal = Calendar.getInstance(); 
		cal.add(Calendar.MONTH, 1);
		Date expiry = cal.getTime();
		Cookie cookie = new Cookie("flang", language, ".eurogrand.com", "/", expiry);
		driver.manage().addCookie(cookie);
		
		//go to the homepage of the language
		String baseUrl = Baseurls.get(language);
		driver.get(baseUrl);
		
		// test that cooltool exist and is visible
		Assert.assertTrue(driver.findElements( By.id("cooltoolwin") ).size() != 0);
		Assert.assertTrue(driver.findElement( By.id("cooltoolwin") ).isDisplayed());
	}
	
	/**
	 * Function that check in the download folder there isn't a setup file, if yes delete it
	 * later click on the download button, download the setup file, check that we are redirected to the getting started page
	 * and check the file is downloaded correctly
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	protected void checkDownloadButton() throws AWTException, InterruptedException{
		//expected path to exe file 
	    File f = new File(filePath);
	    
	    String[] paths = f.list();
	    // for each name in the path array
        for(String path:paths)
        {
        	if(path.contains("SetupCasino_")){
        		File filedelete = new File(filePath+"\\"+path);
        		filedelete.delete();
        	}
        }
	    
		Robot robot = new Robot();
		driver.findElement(By.xpath("//div[@id='cooltoolwin']//input[@tagdownload]")).click();
		Thread.sleep(3000);
        //download window is loaded with default focus on [CANCEL] button
        //to focus on [SAVE] TAB button is pressed twice
        robot.keyPress(KeyEvent.VK_TAB);
        Thread.sleep(3000);
        robot.keyPress(KeyEvent.VK_TAB);
        Thread.sleep(3000);
        //press [ENTER]
        robot.keyPress(KeyEvent.VK_ENTER);
        
		//check redirect after download
		String pageAfterDownload=driver.getCurrentUrl().toString();
		Assert.assertTrue(pageAfterDownload.contains("getting-started"));
		
		Thread.sleep(10000);
		
        //check if fail is downloaded
		paths = f.list();
		boolean fileDownloaded = false;
	    // for each name in the path array
        for(String path:paths)
        {
        	if(path.contains("SetupCasino_")){
        		fileDownloaded = true;
        	}
        }
		Assert.assertTrue(fileDownloaded);
	}
	
	/**
	 * Function that click on close button and check that the cooltool is not more displayed
	 */
	protected void checkCloseButton(){
		driver.findElement(By.cssSelector("div#cooltoolwin input[type='reset']")).click();
//		driver.findElement(By.xpath("//div[@id='cooltoolwin']//input[@type='reset']")).click();
		Assert.assertFalse(driver.findElement( By.id("cooltoolwin") ).isDisplayed());
	}

}

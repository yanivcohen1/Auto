package com.wh.auto.eurogrand.desktop;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
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
 * Test the winners in homepage
 * @author Dario De Santis <dario.desantis@williamhill.com>
 */
public class TestWinners {
	
	protected WebDriver driver;
	protected Browsers browser = new Browsers();
	protected Map<String, String> Baseurls = new HashMap<String, String>();
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
	 * Test that the winners are displayed in homepage
	 * @param browserName
	 * @param language
	 */
	@Test(dataProvider = "browsersAndLanguages")
	public void testWinnersMulti(String browserName, String language){
		//get the webdriver
		driver = browser.getDriver(browserName);
		
		//go to the homepage of the language
		driver.get(Baseurls.get(language));
		
		//check that winners are loaded
		WebDriverWait wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.textToBePresentInElement(By.id("winners_list"),"Date"));
		Assert.assertTrue(driver.findElements(By.xpath("//div[@id='winners_list']//table")).size() != 0);
	}
	
	/**
	 * Test that the winners are updated (at least 3 days)
	 * @param browserName
	 * @param language
	 */
	@Test(dependsOnMethods = { "testWinnersMulti" }, dataProvider = "browsersAndLanguages")
	public void testWinnersUpdatedMulti(String browserName, String language){
		//get the webdriver
		driver = browser.getDriver(browserName);
		
		//go to the homepage of the language
		driver.get(Baseurls.get(language));
		
		//check that winners are loaded
		WebDriverWait wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.textToBePresentInElement(By.id("winners_list"),"Date"));
		
		//get the fist date
		List<WebElement> tdLines = driver.findElements(By.xpath("//div[@id='winners_list']//table//tr//td"));
		String firstWinner = tdLines.get(0).getText();
		String[] splittedDate = firstWinner.split("-"); 
		
		//check that the winners are updated (at least 3 days)
		Calendar calWinner = Calendar.getInstance();
		calWinner.set(Integer.parseInt(splittedDate[0]), Integer.parseInt(splittedDate[1]), Integer.parseInt(splittedDate[2]));
		Calendar calCurr = Calendar.getInstance();
		Date calWinnerDate= calWinner.getTime();
		Date calCurrDate = calCurr.getTime();
		long calWinnerTime = calWinnerDate.getTime();
		long calCurrTime = calCurrDate.getTime();
		long diffTime = calCurrTime - calWinnerTime;
		long diffDays = diffTime / (1000 * 60 * 60 * 24);
		boolean updated = false;
		if(diffDays<=3) {
			updated = true;
		}
		Assert.assertTrue(updated);
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

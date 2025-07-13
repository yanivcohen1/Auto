package com.who.auto.tool;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AddTest {
	
	static WebDriver driver;
	public static WebDriverEventListener eventListener = new MyEventListener();
	
	public static void main(String[] args) throws MalformedURLException, InterruptedException {
		AddTest addTest = new AddTest();
		driver = addTest.openFirefoxRemote(null);
		//addTest.add("test2", "class1", "methodName", "parameterName", "parameterValue", "BAU");
		addTest.deleteTests();
	}

	public AddTest() throws MalformedURLException {
		driver = openFirefoxRemote(null);
	}
	protected void add(String test_name, String class_name, String method_name, String parameter_name,
			String parameter_value, String suiteName) throws InterruptedException {
		/*String baseUrl = "https://10.1.0.153:8080";
		driver.get(baseUrl + "/#/login");
		waitForElement(driver,By.id("username"), 30).clear();
		driver.findElement(By.id("username")).sendKeys("admin");
		driver.findElement(By.id("password")).clear();
		driver.findElement(By.id("password")).sendKeys("yanivc77");
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		waitForElement(driver, By.cssSelector("span.hidden-tablet.ng-scope"), 30).click();
		waitForElement(driver, By.cssSelector("#navbar-collapse > ul > li.dropdown.pointer.ng-scope.open > ul li a"), 30).click();
		waitForElement(driver,By.linkText("Tests"), 30).click();*/
		Thread.sleep(1000);
		waitForElement(driver,By.cssSelector("button.btn.btn-primary"), 30).click();
		waitForElement(driver,By.name("test_name"), 30).clear();
		waitForElement(driver,By.cssSelector("#saveTestsModal > div > div > form > div.modal-body > div:nth-child(2) > input"), 30 ).sendKeys(test_name);
		waitForElement(driver, By.name("test_name"), 30).clear();
		waitForElement(driver, By.name("test_name"), 30).sendKeys(test_name);
		driver.findElement(By.name("class_name")).clear();
		driver.findElement(By.name("class_name")).sendKeys(class_name);
		driver.findElement(By.name("method_name")).clear();
		driver.findElement(By.name("method_name")).sendKeys(method_name);
		driver.findElement(By.name("parameter_name")).clear();
		driver.findElement(By.name("parameter_name")).sendKeys(parameter_name);
		driver.findElement(By.name("parameter_value")).clear();
		driver.findElement(By.name("parameter_value")).sendKeys(parameter_value);
		new Select(driver.findElement(By.name("suite"))).selectByVisibleText(suiteName);
		//driver.findElement(By.cssSelector("option[lable=\"BAU\"]")).click();
		driver.findElement(By.cssSelector("#saveTestsModal > div > div > form > div.modal-footer > button.btn.btn-primary")).click();
	}

	protected void add(String suiteName, String testName,
			List<String> classNames, List<String> prameterNames,
			List<String> prameterValues, List<String> methodsNames) throws InterruptedException{
		
		String methodsName = "";
		if (methodsNames.size() > 0) {
			methodsName = methodsNames.get(0);
		}
		String prameterName = "";
		if (prameterNames.size() > 0) {
			prameterName = prameterNames.get(0);
		}
		String prameterValue = "";
		if (prameterValues.size() > 0) {
			prameterValue = prameterValues.get(0);
		}
		add(testName, classNames.get(0), methodsName, prameterName, prameterValue, suiteName);
	}
	
	private void deleteTests() throws InterruptedException {
		WebElement we = waitForElement(driver, By.cssSelector("body > div.container > div.well.ng-scope > div > div.table-responsive > table"), 30);
		Collection<WebElement> rows = GetTableRows(we);
		for (WebElement webElement : rows) {
			Thread.sleep(500);
			WebElement butten = waitForElement(driver, By.cssSelector("tr:nth-child(1) > td:nth-child(8) > button.btn.btn-danger.btn-sm"),30);
			butten.click();
			waitForElement(driver,By.cssSelector("#deleteTestsConfirmation > div > div > form > div.modal-footer > button.btn.btn-danger"),30).click();
		}
	}
	
	public WebDriver openFirefoxRemote(String UserAgent) throws MalformedURLException {
		FirefoxProfile firefoxProfile = new FirefoxProfile();
		if (UserAgent != null) {
			firefoxProfile.setPreference("general.useragent.override", UserAgent);
		}
		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		capabilities.setCapability(FirefoxDriver.PROFILE, firefoxProfile);
		try {
			driver = new RemoteWebDriver(new URL("http://localhost:7055/hub"), capabilities);
		} catch (Exception e) {
			driver = new FirefoxDriver();
			driver = new RemoteWebDriver(new URL("http://localhost:7055/hub"), capabilities);
		}
		driver = new EventFiringWebDriver(driver).register(eventListener);
		return driver;
	}
	
	public static WebElement waitForElement(WebDriver driver, By by, int timeoutSec) {
		WebElement dynamicElement = (new WebDriverWait(driver, timeoutSec)).until(ExpectedConditions
				.presenceOfElementLocated(by));
		for (int i = 0; i < 5; i++) {
			try {
				dynamicElement.isDisplayed();
				break;
			} catch (Exception e) {
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e1) {	}
			} 
		}
		return dynamicElement;
	}
	
	public Collection<WebElement> GetTableRows(WebElement table)
    {
        return table.findElements(By.cssSelector("tbody tr"));
    }
    
	/**
	 * Get Row Cells
	 * @param table
	 * @return
	 */
    public Collection<WebElement> GetRowCells(WebElement table)
    {
        return table.findElements(By.cssSelector("td"));
    }
    
}

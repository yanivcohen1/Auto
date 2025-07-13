package com.wh.auto.whcc.pages.mobile;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.MyEventListener;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

public class MainWebPage extends AbstractWhPageObject{

	//private String browserType;
	private String url;
	private String language;
	private Browsers browsers;
	private String password;
	private String userName;
	private String userAgent;
	private String login;
	private String cashier;
	
	//private WebDriver driver = null;

	/**
	 * MainWeb Page Constructor
	 * 
	 * @param driver
	 */
	public MainWebPage(Browsers browsers) {
		super(null);
		this.browsers = browsers;
	}
	
	public WebDriver openUrl(String browserType) throws InterruptedException, IOException
    {
		if (browserType.contains("chrome")) {
			ArrayList<String> switches = new ArrayList<String>();
			switches.add("--disable-extensions");
			switches.add("--user-agent="+ getUserAgent());       
			ChromeOptions options = new ChromeOptions();
			options.addArguments(switches);
			driver = browsers.getDriver(browserType, options);
			//options.addArguments("user-data-dir=C:/Users/user_name/AppData/Local/Google/Chrome/User Data/Default");
		}else if (browserType.contains("firefox")) {
			FirefoxProfile firefoxProfile = browsers.getDriveWithUserAgent(getUserAgent());
			//driver = browsers.getDriver(browserType, firefoxProfile);
			DesiredCapabilities capabilities = DesiredCapabilities.firefox();
			capabilities.setCapability(FirefoxDriver.PROFILE, firefoxProfile);
			driver = browsers.getDriver(browserType, capabilities);
			//driver = new FirefoxDriver();
			//driver = new RemoteWebDriver(new URL("http://localhost:7055/hub"), capabilities);
			//driver = new RemoteWebDriver(uri, DesiredCapabilities.firefox());
			//driver = new EventFiringWebDriver(driver).register(new MyEventListener());

		}else if (browserType.contains("safari")) {
			driver = browsers.getDriver(browserType);
			//change userAgent
			Utility.runProcessWaitExit(Utility.getResourcePath("ClickSafariUserAgent.exe"));
		}
		driver.get(getUrl());//"http://www.21nova.com/uk"
		if (!getLanguage().isEmpty()) {
			//driver.get(getLanguage());
			Thread.sleep(2000);
			driver.findElement(By.cssSelector("#application > div.page.fn-page > div.page-header.fn-header-container span")).click();
			Thread.sleep(2000);
			driver.findElement(By.cssSelector("#application > div.fn-slide-menu-container > div > div > div.slide-menu__wrap.fn-menu-wrap > div > ul > li:nth-child(5) > div > span.slide-menu__head__name")).click();
			Thread.sleep(2000);
			driver.findElement(By.cssSelector("#layout-column__column-1 > div > div.fn-portlet.portlet > article > p > div > ul > li:nth-child(2)")).click();
		}
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
		}
		return driver;
    }

	public String readBalance() throws InterruptedException {
		
		return waitForElement(driver, By.id("player_balance"), 25).getText();
	}
	
	public void login() throws InterruptedException{
		waitForElement(driver, By.cssSelector("#application > div.page.fn-page > div.page-header.fn-header-container button")).click();
		Thread.sleep(2000);
		waitForElement(driver, By.name("userName")).clear();
		driver.findElement(By.name("userName")).sendKeys(getUserName());
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(getPassword());
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		if (!getLanguage().isEmpty()) {
			
		}
		//waitForElement(driver, By.cssSelector(getCashier())).click();//#top > div.hdr_button.cashier > a
		//return waitForElement(driver, By.cssSelector("#flexible > div > div > table > tbody > tr > td:nth-child(2) > div"), 25).getText();
		//waitForElement(driver, By.cssSelector("button.ok"), 20).click();
	}

	public void login(String userName, String password) throws InterruptedException{
		waitForElement(driver, By.cssSelector("#application > div.page.fn-page > div.page-header.fn-header-container button"), "login").click();
		Thread.sleep(2000);
		waitForElement(driver, By.name("userName"), "username").clear();
		driver.findElement(By.name("userName")).sendKeys(userName);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(password);
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		if (!getLanguage().isEmpty()) {
			
		}
		//waitForElement(driver, By.cssSelector(getCashier())).click();//#top > div.hdr_button.cashier > a
		//return waitForElement(driver, By.cssSelector("#flexible > div > div > table > tbody > tr > td:nth-child(2) > div"), 25).getText();
		//waitForElement(driver, By.cssSelector("button.ok"), 20).click();
	}
	
	private String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	private String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	private String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	private String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	private String getUserAgent() {
		return userAgent;
	}

	public void setUserAgent(String userAgent) {
		this.userAgent = userAgent;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getCashier() {
		return cashier;
	}

	public void setCashier(String cashier) {
		this.cashier = cashier;
	}

	/*private String getBrowserType() {
		return browserType;
	}

	public void setBrowserType(String browserType) {
		this.browserType = browserType;
	}*/
}
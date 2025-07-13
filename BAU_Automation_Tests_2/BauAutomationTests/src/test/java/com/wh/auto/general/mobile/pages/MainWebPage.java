package com.wh.auto.general.mobile.pages;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.net.MalformedURLException;
import java.util.ArrayList;

import javax.annotation.PostConstruct;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.context.ApplicationContext;

import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.TestObjects.AbstractWhPageObjectSpring;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.repository.SessionRepository;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;

public class MainWebPage extends AbstractWhPageObjectSpring{

	private String userName;
	private String password;
	private String url;
	private String language;
	private String languageAdmin;
	private String languageDev;
	private String userAgent;
	private String login;
	private String cashier;
	private MainWebPage thisClass;
	private String scenario;
	private String browserType;
	private String feature;
	private static boolean init;
	
	public MainWebPage() {
		if (!init) {
			init = true;
			thisClass = (MainWebPage) AppContextRepository.getAc().getBean(MainWebPage.class.getName());
			init = false;
		} 
	}
	
	@Given("^user connect to the internet <\"([^\"]*)\">$")
	public void user_connect_to_the_internet(String browserType) throws Throwable {
		String userAgent = thisClass.getUserAgent();
		String browserTypes = thisClass.getBrowserType();
		Browsers browsers = new Browsers();
		long ThreadId = Thread.currentThread().getId();
		driver = SessionRepository.getWebDriver(ThreadId);
		try {
			driver.getTitle();
		} catch (Exception e) {
			driver = browsers.get_Driver(browserTypes, userAgent);
		}
	}
	
	@When("^user navigates to <\"([^\"]*)\">$")
	public void user_navigates_to_(String url) throws Throwable {
		System.out.println(thisClass.getUrl());
		driver.get(thisClass.getUrl());
		System.out.println("-----------------URL:" + thisClass.getLanguage());
		if (!thisClass.getLanguage().trim().isEmpty()) {
			switch (Utility.getEnvirement())
		    {
		      case ADMIN: driver.get(thisClass.getLanguageAdmin());
		      			  break;
		      case DEV: driver.get(thisClass.getLanguageAdmin());
		      			  break;
		      default: driver.get(thisClass.getLanguage());
		    }
		}
		if (thisClass.getBrowserType().contains("safari")) {
			Thread.sleep(5000);
		}
	}

	@When("^Click on LOGIN top button on main page$")
	public void Click_on_LOGIN_top_button_on_main_page() throws Throwable {
		Thread.sleep(10000);
		waitForElement(driver, By.cssSelector("button.btn.btn_action_login.fr.fn-login")).click();
	}

	@When("^Fill Username <\"([^\"]*)\"> in popup window$")
	public void Fill_Username_in_popup_window(String userName) throws Throwable {
		if (userName.isEmpty()) {
			userName = thisClass.getUserName();
		}
		driver.findElement(By.name("userName")).sendKeys(userName);//user name
	}

	@When("^Fill Last Username in popup window$")
	public void Fill_Last_Username_in_popup_window() throws Throwable {
		driver.findElement(By.name("userName")).sendKeys(userName);
	}
	
	@When("^Fill Password <\"([^\"]*)\"> in popup window$")
	public void Fill_Password_in_popup_window(String password) throws Throwable {
		if (password.isEmpty()) {
			password = thisClass.getPassword();
		}
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@When("^Click on LOGIN Butten in popup window$")
	public void Click_on_LOGIN_Butten_in_popup_window() throws Throwable {
		Click_on_LOGIN_Butten_in_popup_window_no_refresh();
		driver.navigate().refresh();
	}

	@Then("^Click on LOGIN Butten in popup window no refresh$")
	public void Click_on_LOGIN_Butten_in_popup_window_no_refresh() throws Throwable {
		Thread.sleep(1000);
		waitForElement(driver, By.xpath("//button[@type='submit']")).click();
		Thread.sleep(2000);
	}
	
	@When("^Click on Accept on terms and condition$")
	public void Click_on_Accept_on_terms_and_condition() throws Throwable {
		try {
			waitForElement(driver, By.cssSelector("#view157 > div > div.popup-modal__buttons > span.popup-modal__button.fn-accept.popup-modal__button_type_accept")).click();
		} catch (Exception e) {	}
	}
	
	@Then("^Read user name$")
	public void Read_user_name() throws Throwable {
		userName = waitForElement(driver, By.cssSelector("span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(1)")).getText();
	}
	
	@When("^Logout click$")
	public void Logout_click() throws Throwable {
		Thread.sleep(1000);
		//#application > div.page.fn-page > div.page-header.fn-header-container > div > span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(1)
		Read_user_name();
		Utility.SystemOutPrintln(userName);
		waitForElement(driver, By.xpath("//div[@id='application']/div[2]/div/div/span")).click();
		Thread.sleep(1000);
		waitForElement(driver, By.xpath("//button[@type='button']")).click();
	    //throw new PendingException();
	}

	@Then("^Logout msg aprove$")
	public void Logout_msg_aprove() throws Throwable {
		waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span.popup-modal__button.fn-accept.popup-modal__button_type_accept")).click();
	}

	@Then("^Logout Signed out msg aprove$")
	public void Logout_Signed_out_msg_aprove() throws Throwable {
		Thread.sleep(5000);
		waitForElement(driver, By.cssSelector("span.popup-modal__button.fn-close")).click();
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

	public String getScenario() {
		return scenario;
	}

	public void setScenario(String scenario) {
		this.scenario = scenario;
	}

	public String getBrowserType() {
		return browserType;
	}

	public void setBrowserType(String browserType) {
		this.browserType = browserType;
	}

	public String getFeature() {
		return feature;
	}

	public void setFeature(String feature) {
		this.feature = feature;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public void afterTest() {
		// TODO Auto-generated method stub
		
	}

	public String getLanguageAdmin() {
		return languageAdmin;
	}

	public void setLanguageAdmin(String languageAdmin) {
		this.languageAdmin = languageAdmin;
	}

	public String getLanguageDev() {
		return languageDev;
	}

	public void setLanguageDev(String languageDev) {
		this.languageDev = languageDev;
	}

}
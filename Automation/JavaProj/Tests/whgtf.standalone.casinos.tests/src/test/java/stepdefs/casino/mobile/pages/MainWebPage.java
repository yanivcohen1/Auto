package stepdefs.casino.mobile.pages;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;

import javax.annotation.PostConstruct;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.wh.auto.TestObjects.AbstractWhPageObject;
import com.wh.auto.TestObjects.AbstractWhPageObjectSpring;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.extendRunner.LocalRemoteDriver;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.repository.SessionRepository;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import stepdefs.shared.SharedData;
import stepdefs.shared.SharedSteps;

public class MainWebPage extends WebDriverUtils{

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
	private Logger logger = LogManager.getRootLogger();
	private static WebDriver driver;
	public boolean debug = true;
	private String brand;
	//private static int init1 = 0; 
	
	public MainWebPage() {
		
	}
	
	@Given("^user is connect to the internet <\"(.*?)\">$")
	public void user_is_connect_to_the_internet(String arg1) throws Throwable {
		//boolean s = false;
		//System.out.println(s? "true":"false"); 
		if (SharedData.isDebug()) {
			terminateChromeDriver();
		}
		ChromeOptions opts = new ChromeOptions();
		String device = getProperty("device");
		String userAgent = Utility.getPropertyFile("selenium/useragents.properties").getProperty(device);
		//opts.addArguments("maximised-browser");
		ArrayList<String> switches = new ArrayList<String>();
		switches.add("--disable-extensions");
		switches.add("--maximised-browser");
		switches.add("--user-agent=" + userAgent);
		opts.addArguments(switches);
		Browsers browsers = SharedData.getBrowsers();
		DesiredCapabilities caps = DesiredCapabilities.chrome();
        LoggingPreferences logPrefs = new LoggingPreferences();
        logPrefs.enable(LogType.BROWSER, Level.ALL);
        caps.setCapability(CapabilityType.LOGGING_PREFS, logPrefs);
		driver = browsers.get_Driver("chrome", userAgent, caps);
		LocalRemoteDriver localRemoteDriver = new LocalRemoteDriver();
		localRemoteDriver.set_Driver(driver);
		setDriver(driver);
		driver.manage().window().maximize();
		System.out.println("create mobile driver");
		/*ChromeOptions opts2 = new ChromeOptions();
			Map<String, String> mobileEmulation = new HashMap<String, String>();
			//mobileEmulation.put("deviceName", "Google Nexus 5");//iPhone 6
			//mobileEmulation.put("deviceName", "Apple iPhone 5");
			mobileEmulation.put("deviceName", "Apple iPhone 6");
			//here creating the second map with key mobileEmulation
			//HashMap<String, Object> chromeOptions = new HashMap<String, Object>();
			//chromeOptions.put("mobileEmulation", mobileEmulation);
			opts2.setExperimentalOption("mobileEmulation", mobileEmulation);
			//opts2.addArguments("mobile_emulation={'deviceName':'Google Nexus 5'}");
			 //{"Google Nexus 5", "LG Nexus 5"},
             //{"Apple iPhone 6", "Apple iPhone"},
             //{"Google Nexus 10", "Samsung Nexus 10"}
			createBrowser("browser1", System.getProperty("browser")).setChromeOptions(opts).
			setPageLoadTimeout(180).setImplicitlyWait(40);
		}*/
		//navigateToPage("https://www.google.co.il/");
	}
	
	@Given("^User language \"([^\"]*)\" and Brand \"([^\"]*)\" and configurationFile \"([^\"]*)\"$")
	public void User_language_and_Brand_and_configurationFile(String language, String brand, String configFile) throws Throwable {
		this.language = language.toLowerCase();
		this.brand = brand;
		this.url = getProperty(brand+"Tracking");
		String folderFile = this.getClass().getPackage().getName().replace('.', '/') + "/";
		String springFileName = folderFile + configFile;
		ApplicationContext context = new ClassPathXmlApplicationContext("classpath:" + springFileName);// cucumber2.xml
		AppContextRepository.setAc(context);
		//thisClass = (MainWebPage) AppContextRepository.getAc().getBean(MainWebPage.class.getName()); 
	}
	
	@Given("^User is navigating to <\"(.*?)\">$")
	public void user_is_navigating_to(String arg1) throws Throwable {
		System.out.println(this.url + "/" + language);
		//setWaitTime(40);
		assertTrue(navigateToPage(this.url));
		String navUrl = getProperty(brand.toString()) + "/" + language + "/?js_fast_load=0";
		assertTrue(navigateToPage(navUrl));
		Thread.sleep(3000);
		assertTrue(navigateToPage(getProperty(brand) + "/" + language));
		Reporter.log("User Navigate1:" + navUrl, true);
		SharedSteps.getScenario().write("User Navigate to:" + navUrl);
	}

	@Given("^User is navigating to url<\"(.*?)\">$")
	public void user_is_navigating_to_url(String url) throws Throwable {
		System.out.println(this.url + "/" + language);
		//setWaitTime(40);
		assertTrue(navigateToPage(url));
		//assertTrue(navigateToPage(getProperty(brand) + "/" + language));
		Reporter.log("User Navigate1:" + url, true);
	}
	
	@Given("^User Name \"(.*?)\" Password \"(.*?)\" Login$")
	public void user_Name_Password_Login(String name, String pass) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(waitForVisibilityOfElementByXPath("//*[@id='application']/div[2]/div[1]/div[1]/div/button[1]"));
		assertTrue(navigateToElementByXpath("//div[@id='application']/div[2]/div/div/div/button"));
		assertTrue(click());
		assertTrue(navigateToRootElement());
		assertTrue(waitForVisibilityOfElementByName("userName"));
		assertTrue(navigateToElementByName("userName"));
		assertTrue(typeIn(name));
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByName("password"));
		assertTrue(typeIn(pass));
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByXpath("//button[@type='submit']"));
		assertTrue(click());
	}
	
	@When("^User Click on LOGIN top button on main page$")//
	public void Click_on_LOGIN_top_button_on_main_page() throws Throwable {
		SharedSteps.getScenario().write("Start Login");
		waitForElementByXpathClick("//button[@data-event='Login']");
		/*assertTrue(navigateToRootElement());
		String xpath = "//*[@id='application']/div[3]/div[1]/div[1]/div/button[1]";
		assertTrue(waitForVisibilityOfElementByXPath(xpath));
		assertTrue(navigateToElementByXpath(xpath));
		assertTrue(click());*/
	}

	@Given("^User Fill Last Username in popup window$")
	public void user_Fill_Last_Username_in_popup_window() throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(waitForVisibilityOfElementByName("userName"));
		assertTrue(navigateToElementByName("userName"));
		userName = SharedData.getUserName();
		assertTrue(typeIn(userName));
	}
	
	@When("^User Fill Username \"([^\"]*)\" in popup window$")
	public void Fill_Username_in_popup_window(String userName) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(waitForVisibilityOfElementByName("userName"));
		assertTrue(navigateToElementByName("userName"));
		if (userName.trim().isEmpty()) {
			userName = getUserName();
		}
		assertTrue(typeIn(userName));
	}
	
	@When("^User Fill Password \"([^\"]*)\" in popup window$")
	public void Fill_Password_in_popup_window(String password) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByName("password"));
		if (password.trim().isEmpty()) {
			password = getPassword();
		}
		assertTrue(typeIn(password));
	}

	@When("^User Click on LOGIN Butten in popup window$")
	public void Click_on_LOGIN_Butten_in_popup_window() throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByXpath("//button[@type='submit']"));
		assertTrue(click());
		Thread.sleep(1000);
		//assertTrue(refresh());
		Thread.sleep(1000);
		/*try {
			Thread.sleep(2000);
			navigateToRootElement();
			navigateToElementByCSS("div.popup-modal__buttons > span");
			click();
		} catch (Exception e) {
		}*/
	}

	@Then("^User Click on LOGIN Butten in popup window no refresh$")
	public void Click_on_LOGIN_Butten_in_popup_window_no_refresh() throws Throwable {
		/*Thread.sleep(1000);
		waitForElement(driver, By.xpath("//button[@type='submit']")).click();
		Thread.sleep(2000);*/
	}
	
	@When("^User Click on Accept on terms and condition$")
	public void Click_on_Accept_on_terms_and_condition() throws Throwable {
		try {
			assertTrue(navigateToRootElement());
			String msgCss = "div.popup-modal__buttons > span.popup-modal__button.fn-accept.popup-modal__button_type_accept";
			if (waitForVisibilityOfElementByCss(msgCss)){
				assertTrue(navigateToElementByCSS(msgCss));
				//if (isDisplayed())
				assertTrue(click());
			}
			//waitForElement(driver, By.cssSelector("")).click();
		} catch (Exception e) {	
			Reporter.log("no terms and condition");
		}
	}
	
	@Then("^User Read user name$")
	public void Read_user_name() throws Throwable {
		//userName = waitForElement(driver, By.cssSelector("span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(1)")).getText();
	}
	
	@Then("^User click on logout$")
	public void user_click_on_logout() throws Throwable {
		waitForElementByXpathClick("//button[@class='btn btn_type_logout fn-logout']");
	    //throw new PendingException();
	}

	@Then("^User Logout click$")
	public void user_Logout_click() throws Throwable {
		waitForElementByCssClick("span.popup-modal__button.fn-accept.popup-modal__button_type_accept");
	}
	
	@Then("^User Logout msg OK click$")
	public void user_Logout_msg_OK_click() throws Throwable {
		waitForElementByCssClick("span.popup-modal__button.fn-close");
		Thread.sleep(5000);
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
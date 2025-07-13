package stepdefs.casino.migration;

import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;

import org.openqa.selenium.Proxy;
import org.openqa.selenium.Proxy.ProxyType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.google.common.base.Strings;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.SmartRobot;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;
import com.wh.auto.extendRunner.LocalRemoteDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import stepdefs.shared.SharedData;
import stepdefs.shared.SharedSteps;

public class MainWebPage extends WebDriverUtils{

	DepositPage depositPage = new DepositPage();
	RegisterPage registerPage = new RegisterPage();
	
	private String userName;
	private String password;
	private String url;
	//private Logger logger = LogManager.getRootLogger();
	private static WebDriver driver;
	private boolean useProxy = Boolean.getBoolean("proxy");
	
	//public boolean debug = true;
	private static String language;
	private static Brand brand;
	private static Type type;
	//private static int init1 = 0;1
	
	public enum Type {
	    MOBILE, DESKTOP 
	}
	
	public enum Brand {
	    Eg, Whcc 
	}
	
	@Given("^\"(.*?)\" User is connect to the internet \"(.*?)\"$")
	public void user_is_connect_to_the_internet(String _device, String url) throws Throwable {
		//boolean s = false;
		//System.out.println(s? "true":"false"); 
		if (!SharedData.isDebug() && Utility.developmentMac) {
			terminateChromeDriver();
		}
		/*if (System.getProperty("os.name").contains("Linux")) {
			terminateChromeDriver();
		}*/
		ChromeOptions opts = new ChromeOptions();
		String device = "Apple iPhone 6";
		String userAgent = null;
		if (_device.contentEquals("Mobi")) {
			device = getProperty("device");
			//userAgent = Utility.getPropertyFile("selenium/useragents.properties").getProperty(device);
		}else if(_device.contentEquals("Desk")){
			device = "Google";
			userAgent = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36";
		}else{
			assertTrue("no driver set", false);
		}
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
        logPrefs.enable(LogType.PERFORMANCE, Level.ALL);
        //LogEntries les = driver.manage().logs().get(LogType.PERFORMANCE);
        //for (LogEntry le : les) {
        //	System.out.println(le.getMessage());
        //}
        caps.setCapability(CapabilityType.LOGGING_PREFS, logPrefs);
        ChromeOptions options = new ChromeOptions();
		Map<String, String> mobileEmulation = new HashMap<String, String>();
		//mobileEmulation.put("deviceName", "Google Nexus 5");//iPhone 6
		mobileEmulation.put("deviceName", "Apple iPhone 6");//device
		options.setExperimentalOption("mobileEmulation", mobileEmulation);
        caps.setCapability(ChromeOptions.CAPABILITY, options);
        //useProxy = Boolean.getBoolean("proxy");
        if (useProxy) {//proxy
	        String proxyHostname = "178.237.42.45";
	        Integer proxyPort = 80;
	        String proxyDetails = String.format("%s:%d", proxyHostname, proxyPort);
	        Proxy proxy = new Proxy();
	        proxy.setProxyType(ProxyType.MANUAL);
	        proxy.setHttpProxy(proxyDetails);
	        proxy.setSslProxy(proxyDetails);
	        caps.setCapability(CapabilityType.PROXY, proxy);
        }
		driver = browsers.get_Driver("chrome", userAgent, caps);
		LocalRemoteDriver localRemoteDriver = new LocalRemoteDriver();
		localRemoteDriver.set_Driver(driver);
		setDriver(driver);
		driver.manage().window().maximize();
		//setBrowserDimensionsNoRefresh(1024,768);
		System.out.println("create " + _device + " driver");
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
	
	@Given("^migUser language \"(.*?)\" and Brand \"(.*?)\" and \"(.*?)\"$")
	public void miguser_language_and_Brand_and(String language, String brand, String type) throws Throwable {
		MainWebPage.language = language;
		MainWebPage.brand = Brand.valueOf(brand);
		//MainWebPage.type = Type.valueOf(type);
		//MainWebPage.brand = Brand.valueOf("ytttt");
		/*if (brand.contains("Eg")) {
			MainWebPage.brand = Brand.Eg;
		}else if(brand.contains("Whcc")){
			MainWebPage.brand = Brand.Whcc;
		}else{
			throw new Exception("Brand not set" + brand);
		}*/
		if (type.contains("Mobi")) {
			MainWebPage.type = Type.MOBILE;
		}else if(type.contains("Desk")){
			MainWebPage.type = Type.DESKTOP;
		}else{
			throw new Exception("Type not set" + type);
		}
		this.url = getProperty(brand+"Tracking");
		//String folderFile = this.getClass().getPackage().getName().replace('.', '/') + "/";
		//String springFileName = folderFile + configFile;
		//ApplicationContext context = new ClassPathXmlApplicationContext("classpath:" + springFileName);// cucumber2.xml
		//AppContextRepository.setAc(context);
		//thisClass = (MainWebPage) AppContextRepository.getAc().getBean(MainWebPage.class.getName()); 
	}
	
	@Given("^migUser is navigating to url \"(.*?)\"$")
	public void user_is_navigating_to_url(String _url) throws Throwable {
		String url = getProperty(brand.toString()) + "/" + language + _url;
		if (url.contains("/?wrapper=1")) {
			try {
				user_is_navigating_to(url);
			} catch (Exception e) {	}
		}else{
			user_is_navigating_to(url);
		}
		
	}
	
	@Given("^migUser is navigating to \"(.*?)\"$")
	public void user_is_navigating_to(String url) throws Throwable {
		System.out.println(this.url + "/" + language);
		if (useProxy) {//proxy
			navigateToPage("http://www.eurogrand.com");
			Thread.sleep(3000);
			SmartRobot robot = new SmartRobot();
			robot.type("yaniv.cohen@williamhill.com");
			robot.keyPress(KeyEvent.VK_TAB);
			robot.type("ynch9248");
			robot.keyPress(KeyEvent.VK_ENTER);
			Thread.sleep(2000);
			if (SharedData.isDebug()) {
				robot.type("yaniv.cohen@williamhill.com");
				robot.keyPress(KeyEvent.VK_TAB);
				robot.type("ynch9248");
				robot.keyPress(KeyEvent.VK_ENTER);
				Thread.sleep(2000);
			}
		}
		// if ("".equals(url)){}else{}
		if (Strings.isNullOrEmpty(url)) {
			assertTrue(navigateToPage(this.url));
			String navUrl = getProperty(brand.toString()) + "/" + language;
//			if (getBrand().equals(Brand.Whcc)) {
//				navUrl = navUrl + "/?js_fast_load=0";
//			}
			assertTrue(navigateToPage(navUrl));
			Thread.sleep(5000);
			assertTrue(navigateToPage(navUrl));
			Reporter.log("User Navigate to:" + navUrl, true);
			SharedSteps.getScenario().write("User Navigate to:" + navUrl);
		}else{
			assertTrue(navigateToPage(url));
			Thread.sleep(3000);
			Reporter.log("User Navigate to:" + url, true);
		}
	}
	
	@Then("^Redirection To \"(.*?)\"$")
	public void no_Redirection(String url) throws Throwable {
		assertTrue("URL not main desktop:"+ getCurrentUrl(), hasPartialURL(url));
	}
	
	@Then("^migUser see login Popup window$")
	public void miguser_see_login_Popup_window() throws Throwable {
		boolean find = false;
		if (MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)) {
			find = waitForVisibilityOfElementByCss("div.popup.popup-modal.popup_type_login");//20 sec
		}else if (MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)) {
			find = waitForVisibilityOfElementById("eg_login_username");
		}
		assertTrue("Login popup not find", find);
	}
	
	@Given("^migUser Name \"(.*?)\" Password \"(.*?)\" Login$")
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
	
	@When("^migUser Click on LOGIN top button on main page$")//
	public void  migUser_Click_on_LOGIN_top_button_on_main_page() throws Throwable {
		SharedSteps.getScenario().write("Start Login");
		waitForElementByIdClick("eg_hp_login");
	}

	@When("^migUser Fill Username \"([^\"]*)\" in popup window$")
	public void migUser_Fill_Username_in_popup_window(String userName) throws Throwable {
		assertTrue(navigateToRootElement());
		String id = "eg_login_username";
		assertTrue(waitForVisibilityOfElementById(id));
		assertTrue(navigateToElementById(id));
		if (userName.trim().isEmpty()) {
			userName = getUserName();
		}
		assertTrue(typeIn(userName));
	}
	
	@When("^migUser Fill Password \"([^\"]*)\" in popup window$")
	public void  migUser_Fill_Password_in_popup_window(String password) throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementById("eg_login_password"));
		if (password.trim().isEmpty()) {
			password = getPassword();
		}
		assertTrue(typeIn(password));
	}

	@When("^migUser Click on LOGIN Butten in popup window$")
	public void  migUser_Click_on_LOGIN_Butten_in_popup_window() throws Throwable {
		assertTrue(navigateToRootElement());
		assertTrue(navigateToElementByXpath("//button[@type='submit']"));
		assertTrue(click());
		/*try {
			Thread.sleep(2000);
			navigateToRootElement();
			navigateToElementByCSS("div.popup-modal__buttons > span");
			click();
		} catch (Exception e) {
		}*/
	}

	@Then("^migUser Click on LOGIN Butten in popup window no refresh$")
	public void Click_on_LOGIN_Butten_in_popup_window_no_refresh() throws Throwable {
		/*Thread.sleep(1000);
		waitForElement(driver, By.xpath("//button[@type='submit']")).click();
		Thread.sleep(2000);*/
	}
	
	@When("^migUser Click on Accept on terms and condition$")
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
	
	@Then("^migUser Read user name$")
	public void Read_user_name() throws Throwable {
		//userName = waitForElement(driver, By.cssSelector("span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(1)")).getText();
	}
	
	@When("^migUser Logout click$")
	public void Logout_click() throws Throwable {
		/*Thread.sleep(1000);
		//#application > div.page.fn-page > div.page-header.fn-header-container > div > span.fn-redirect.main-header__balance > div:nth-child(1) > p:nth-child(1)
		Read_user_name();
		Utility.SystemOutPrintln(userName);
		waitForElement(driver, By.xpath("//div[@id='application']/div[2]/div/div/span")).click();
		Thread.sleep(1000);
		waitForElement(driver, By.xpath("//button[@type='button']")).click();*/
	    //throw new PendingException();
	}

	@Then("^migUser Logout msg aprove$")
	public void Logout_msg_aprove() throws Throwable {
		//waitForElement(driver, By.cssSelector("div.popup-modal__buttons > span.popup-modal__button.fn-accept.popup-modal__button_type_accept")).click();
	}

	@Then("^migUser Logout Signed out msg aprove$")
	public void Logout_Signed_out_msg_aprove() throws Throwable {
		Thread.sleep(5000);
		//waitForElement(driver, By.cssSelector("span.popup-modal__button.fn-close")).click();
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

	public static Brand getBrand() {
		return brand;
	}

	public static Type getType() {
		return type;
	}

	public static String getLanguage() {
		return language;
	}

	public void loginMainPage() throws Throwable {
		migUser_Click_on_LOGIN_top_button_on_main_page();
		login();
		depositPage.miguser_read_the_Current_Balance_with_css();
	}
	
	public void login() throws Throwable {
		String userName ="";
		if (MainWebPage.getBrand().equals(MainWebPage.Brand.Whcc)) {
			userName = "170129033419";
		}else if(MainWebPage.getBrand().equals(MainWebPage.Brand.Eg)){
			userName = "170129040528";
		}
		migUser_Fill_Username_in_popup_window(userName);
		migUser_Fill_Password_in_popup_window("123456");
		migUser_Click_on_LOGIN_Butten_in_popup_window();	
	}
}
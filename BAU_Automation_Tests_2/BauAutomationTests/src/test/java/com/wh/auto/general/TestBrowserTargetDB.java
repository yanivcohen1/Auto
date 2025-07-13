package com.wh.auto.general;

import java.io.File;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.StatelessSession;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistryBuilder;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.ITestContext;
import org.testng.Reporter;
import org.testng.TestNG;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.core.io.Resource;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import com.wh.auto.common.HibernateUtil;
import com.wh.auto.common.Utility;
import com.wh.auto.hibernate.Brand;
import com.wh.auto.hibernate.BrandHome;
import com.wh.auto.hibernate.BrandsResult;
import com.wh.auto.hibernate.Tool;
import com.wh.auto.hibernate.ToolResult;
import com.wh.auto.hibernate.ToolResultHome;
import com.wh.auto.common.AutoBD;
import com.wh.auto.common.Browsers;

/**
 * Test The Browser Targeting in all languages and all brands
 * @author yanivc
 *
 */
public class TestBrowserTargetDB {

	private Browsers browser = new Browsers();
	private WebDriver driver;
	private List<Tool> tools = null;
	private boolean updateDB = true;
	private ITestContext myTestContext;
	private Object[][] dpObj = null;
	private List<String> brandsNames;
	private int numfunArgs = 4;
	private boolean standalone = true;

	public static void main(String[] args) {
		TestBrowserTargetDB bt = new TestBrowserTargetDB();
		bt.ReadTestBT();
	}
	
	@BeforeClass
	public void before() {
		updateDB = true;
		Session session = null;
		brandsNames = new ArrayList<String>();
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			String HQL = "select tool from Tool as tool where tool.toolType='BT'" +
					"order by tool.brandLanguage.brand.brandName";
			tools = session.createQuery(HQL).list();
			List<BrowserTarget> browserTargetDP = new ArrayList<BrowserTarget>();
			for (Tool tool : tools) {
				BrowserTarget browserTarget = new BrowserTarget();
				browserTarget.BaseURL = tool.getBrandLanguage().getBrand().getBrandMainUrl();
				browserTarget.Language = tool.getBrandLanguage().getLanguage().getLanguageBrowserAcceptLangauge();
				String symbol = tool.getBrandLanguage().getLanguage().getLanguageSymbol();
				browserTarget.EcpectedURL = tool.getBrandLanguage().getBrandLanguageUrlTemplate().replace("<LS>", symbol);
				browserTarget.toolId = tool.getToolId().toString();
				browserTargetDP.add(browserTarget);
				brandsNames.add(tool.getBrandLanguage().getBrand().getBrandName());
			}
			dpObj = new Object[browserTargetDP.size()][numfunArgs];
			for (int i=0; i < dpObj.length ; i++)
				dpObj[i] = new Object[] {browserTargetDP.get(i).BaseURL, browserTargetDP.get(i).Language,
					browserTargetDP.get(i).EcpectedURL, browserTargetDP.get(i).toolId};
		}
		catch (Exception e) {
			e.printStackTrace();
			Reporter.log("DataProvider Error:"+ e);
		}finally{
			session.close();
		}
	}
	
	@DataProvider(name = "browserTarget")
	public Object[][] ReadTestBT() {
		List<Object[]> Result = new ArrayList<Object[]>();
		for (int i = 0; i < dpObj.length; i++) {
			if (!standalone) {
				if (myTestContext.getName().equalsIgnoreCase(brandsNames.get(i).toString())) {
					Result.add(dpObj[i]);
				}
			}else{
				Result.add(dpObj[i]);
			}
		}
		Object[][] obj = new Object[Result.size()][numfunArgs];
		for (int i=0; i < obj.length ; i++)
			obj[i] = Result.get(i);
		return obj;
	}
	
	public WebDriver getDriver(String locale){
		  FirefoxProfile profile = new FirefoxProfile();
		  profile.setPreference("intl.accept_languages", locale);
		  //driver = FFDriverUtil.initFFDriver(profile);
		  driver = browser.getDriver("firefox", profile);
		  driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		  driver.manage().deleteAllCookies();
		  return driver;       
		}
	
	@DataProvider(name = "browserTarget2")
	public Object[][] languages() {
		updateDB = false;
		return new Object[][] {{"http://www.eurogrand.com/", "de", "http://www.eurogrand.com/de","0" }, {"http://www.eurogrand.com/", "ru", "http://www.eurogrand.com/ru","0" }};
	}
	
	/**
	 * Test The Browser Targeting in Firefox
	 * @param BaseURL
	 * @param Language
	 * @param EcpectedURL
	 * @param toolId
	 */
	@Test(dataProvider = "browserTarget", description = "Test The Browser Targeting in Firefox")
	public void browserTarget(String BaseURL, String Language, String EcpectedURL, String toolId) {
		getDriver(Language);
		driver.get(BaseURL);
		try { Thread.sleep(1000);}
		catch (InterruptedException e) {}
		boolean isPass = EcpectedURL.toLowerCase().equals(driver.getCurrentUrl().toLowerCase());
		String	errorMSG = "Expected:"+ EcpectedURL+ " --> Response:"+ driver.getCurrentUrl()+" --> Lang:"+ Language;
		if (updateDB) {
			AutoBD.updateResult(toolId, isPass, errorMSG);
		}
		Assert.assertTrue(errorMSG, isPass);
	}
		
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1){
		myTestContext = myTestContext1;      
// Note: 
// Setting up ITestContext variable. This variable can be sent as argument to each method aswell.
//I am declaring myTestContext variable as global and initializing it in before test class so i need not to pass this variable as argument to each method.

	}

	@AfterMethod
	public void after() {
		driver.close();
	}
	
	@AfterClass
	public void afterSuite() {
		driver.quit();
	}
	
	public class BrowserTarget {
		String BaseURL;
		String Language; 
		String EcpectedURL;
		String toolId;
	}
	
}

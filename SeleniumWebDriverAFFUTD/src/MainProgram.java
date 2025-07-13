
import static org.junit.Assert.fail;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.apache.log4j.xml.DOMConfigurator;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

//import Com.WHO.Logging.UseLogger;

public class MainProgram {
	
	private WebDriver driver;
	private String baseUrl;
	private StringBuffer verificationErrors = new StringBuffer();
	//private PrintWriter mOutput;
	private Date m_date = new Date();
	Timestamp m_Now = new Timestamp(m_date.getTime());
	private static Logger m_logger;

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		m_logger = Logger.getLogger("name");
		//m_logger = LogManager.getLogger(Logger1.class);
		// TODO Auto-generated method stub	
		//WebDriver driver = new FirefoxDriver();
		
        // And now use this to visit Google
//        driver.get("http://www.google.com");
//        // Alternatively the same thing can be done like this
//        // driver.navigate().to("http://www.google.com");
//
//        // Find the text input element by its name
//        WebElement element = driver.findElement(By.name("q"));
//
//        // Enter something to search for
//        element.sendKeys("Cheese!");
//
//        // Now submit the form. WebDriver will find the form for us from the element
//        element.submit();
//
//        // Check the title of the page
//        System.out.println("Page title is: " + driver.getTitle());
//        
//        //new WebDriverWait(driver, 120);
//        
//        // Google's search is rendered dynamically with JavaScript.
//        // Wait for the page to load, timeout after 10 seconds
//        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
//            public Boolean apply(WebDriver d) {
//                return d.getTitle().toLowerCase().startsWith("cheese!");
//            }
//        });
//        
//        
//        // Should see: "cheese! - Google Search"
//        System.out.println("Page title is: " + driver.getTitle());
        
        //Close the browser
		try {
			MainProgram MP = new MainProgram();
			MP.MainTest();
		} catch (Exception e) {
			String message = "AFFUTD Error Msg:" + e.getMessage();
			m_logger.error(message, e);
			e.printStackTrace();
		}
	}

	public void MainTest() throws Exception {
		//Timestamp Now = new Timestamp(m_date.getTime());
		try {
			//mOutput = new PrintWriter(new FileWriter("C:\\Tests\\Log.txt", true), true); 
			m_logger.debug(NowAndName() + "*************************Test Started ");
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		//mOutput.flush();
		driver = new FirefoxDriver();
		baseUrl = "https://www.affutd.com/";
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		m_logger.debug(NowAndName() + "Opening URL");
		driver.get(baseUrl + "/en/success-signup");
		driver.findElement(By.id("lgUsername")).clear();
		driver.findElement(By.id("lgUsername")).sendKeys("Linoy4");
		driver.findElement(By.id("lgPass")).clear();
		driver.findElement(By.id("lgPass")).sendKeys("Linoy315");
		driver.findElement(By.cssSelector("input.btnOrg")).click();
		m_logger.debug(NowAndName() + "LogIn");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if (driver.getPageSource().contains("Welcome to Affiliates United")) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}
		
		//if (driver.getPageSource().contains("Welcome to Affiliates United")){
		if (findElementContain(By.cssSelector("h3") , "Welcome to Affiliates United") != null){
			System.out.println("Test Pass");
			m_logger.debug(NowAndName() + "Test Pass");
			//out ="java test";
		}
		else{
			System.out.println("Test Fail");
			m_logger.debug(NowAndName() + "Test Fail");
		}
		// ERROR: Caught exception [ERROR: Unsupported command [isTextPresent]]
		driver.quit();
		m_logger.debug(NowAndName() + "Close FF");
//		String verificationErrorString = verificationErrors.toString();
//		if (!"".equals(verificationErrorString)) {
//			System.out.println(verificationErrorString);
//		}
	}
	
	private boolean isElementPresent(By by) {
		try {
			driver.findElement(by);
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}
	
	private WebElement findElementContain(By by , String Contain) {
		List<WebElement> LE = new ArrayList<WebElement>();
		try {
			LE = driver.findElements(by);
		} catch (Exception e) {}
		WebElement webElement = null;
		for (WebElement webElement1 : LE) {
			if (webElement1.getText().toLowerCase().contains(Contain.toLowerCase())) {
				webElement = webElement1;
			}
		}
		return webElement;
	}
	
	private String NowAndName(){
		return m_Now + " AFFUTD :";
	}
}

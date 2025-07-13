import static org.junit.Assert.*;

//import java.io.FileWriter;
//import java.io.PrintWriter;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.MethodRule;
import org.junit.rules.TestWatchman;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
import org.junit.runners.model.FrameworkMethod;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.firefox.FirefoxProfile;
//import org.openqa.selenium.firefox.internal.ProfilesIni;

public class UnsubscribeTesting {
	
	static WebDriver driver;
	String username = "Yaniv121";
	String urlStr = "http://api.dev//account/playtech800011/web/Yaniv111/unsubscribe";
	String BodyStr = "{\"channels\":\"email,phone,directMail,SMS\"}";
	boolean Email; //!= "checked";
    boolean SMS;
    boolean DirectMail;
    boolean Phone;
    String Return;
	//(values {email,phone,directMail,SMS})
	String[] paramName = {"p"};
	String[] paramVal = {BodyStr};
	private static String watchedLog = "";
	
	@Rule
    public MethodRule watchman= new TestWatchman() {
            @Override
            public void failed(Throwable e, FrameworkMethod method) {
                    //watchedLog+= method.getName() + " " + e.getClass().getSimpleName()
                                   // + "\n";
                    watchedLog += method.getName() + "\n";
                    watchedLog += e.getMessage() + "\n";
            }

            @Override
            public void succeeded(FrameworkMethod method) {
                    //watchedLog+= method.getName() + " " + "success!\n";
            }
    };
    
	public static void main(String[] args) {
	    Result result = JUnitCore.runClasses(UnsubscribeTesting.class);//ForgetPasswordTesting
	    StringBuilder sb = new StringBuilder();
	    System.out.println("");
	    boolean Pass = true;
	    for (Failure failure : result.getFailures()) {
	    	if (Pass) {
				System.out.println("Fail Results:");
		      }
	    	Pass = false;
	    	System.out.println(failure.toString());
	    	sb.append(failure.toString());
	    }
	    if (Pass) {
	    	System.out.println("Test Pass");
		}else{
			fail(sb.toString());
		}
	    //return sb.toString();
	  }
	
	@BeforeClass 
	public static void Init(){
		
//		ProfilesIni allProfiles = new ProfilesIni();
//		FirefoxProfile profile = allProfiles.getProfile("YanivFF2_Profile");
//		driver = new FirefoxDriver(profile);
		//test T = new test();
		//T.WriteConsole();
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
	}
	
	@Test(timeout=300000)//5 minute timeout
	public void ChannelInvalidFormat() {
		paramVal[0] = "{\"channels\":\"email,phone,directMail,SSSMS\"}";
		Return = SendData.httpPost(urlStr, paramName, paramVal);
		assertTrue(Return, Return.contains("Unknown channel"));
	}
	
	@Test(timeout=300000)//5 minute timeout
	public void ChannelEmptyFormat() {
		paramVal[0] = "{\"channels\":\"\"}";
		Return = SendData.httpPost(urlStr, paramName, paramVal);
		assertTrue(Return, Return.contains("Channels cannot be blank"));
	}
	
	@Test(timeout=300000)//5 minute timeout
	public void ChannelExtraParams() {
		paramVal[0] = "{\"channels\":\"email,phone,directMail,SSSMS,BROWSER\"}";
		Return = SendData.httpPost(urlStr, paramName, paramVal);
		assertTrue(Return, Return.contains("Unknown channel:SSSMS"));
	}
	
	@Test(timeout=300000)//5 minute timeout
	public void UnregisteredUser() {
		String urlStr1 = "http://api.dev//account/playtech800011/web/Yani/unsubscribe";
		paramVal[0] = "{\"channels\":\"email,phone,directMail,SMS\"}";
		Return = SendData.httpPost(urlStr1, paramName, paramVal);
		assertTrue(Return, Return.contains("Unable to read player from database"));
	}
	
	@Test(timeout=300000)//5 minute timeout
	public void WrongCasino() {
		String urlStr1 = "http://api.dev//account/playtech8000191/web/Yaniv111/unsubscribe";
		paramVal[0] = "{\"channels\":\"email,phone,directMail,SMS\"}";
		Return = SendData.httpPost(urlStr1, paramName, paramVal);
		assertTrue(Return, Return.contains("2013(range)"));
	}
	
	@Test(timeout=300000)//5 minute timeout
	public void WithoutUser() {
		String urlStr1 = "http://api.dev//account/playtech800011/web//unsubscribe";
		paramVal[0] = "{\"channels\":\"email,phone,directMail,SMS\"}";
		Return = SendData.httpPost(urlStr1, paramName, paramVal);
		assertTrue(Return, Return.contains("UMS-105"));
	}
	
	@Test(timeout=300000)//5 minute timeout
	public void WithoutCasino() {
		String urlStr1 = "http://api.dev//account//web/Yaniv111/unsubscribe";
		paramVal[0] = "{\"channels\":\"email,phone,directMail,SMS\"}";
		Return = SendData.httpPost(urlStr1, paramName, paramVal);
		assertTrue(Return, Return.contains("2015(not_found)"));
	}
	
	@Test(timeout=300000)//5 minute timeout
	public void UnsubscribeAll() {
		
		ReadPT_ADMIN_Scribe();
		if (!driver.findElement(By.id("communicationoptouts[1][2]")).isSelected()) {
			driver.findElement(By.id("communicationoptouts[1][2]")).click();
		}
		if (!driver.findElement(By.id("communicationoptouts[2][2]")).isSelected()) {
			driver.findElement(By.id("communicationoptouts[2][2]")).click();
		}
		if (!driver.findElement(By.id("communicationoptouts[3][2]")).isSelected()) {
			driver.findElement(By.id("communicationoptouts[3][2]")).click();
		}
		if (!driver.findElement(By.id("communicationoptouts[4][2]")).isSelected()) {
			driver.findElement(By.id("communicationoptouts[4][2]")).click();
		}
		
		driver.findElement(By.id("update")).click();
		driver.switchTo().alert().accept();
        
		Return = SendData.httpPost(urlStr, paramName, paramVal);
		assertFalse(Return, !Return.contains("{\"errorCode\":\"0\"}"));
        
        ReadPT_ADMIN_Scribe();
        Email = driver.findElement(By.id("communicationoptouts[1][2]")).isSelected(); //!= "checked";
        SMS = driver.findElement(By.id("communicationoptouts[2][2]")).isSelected();
        DirectMail = driver.findElement(By.id("communicationoptouts[3][2]")).isSelected();
        Phone = driver.findElement(By.id("communicationoptouts[4][2]")).isSelected();
        
        assertFalse("Phone can't Unsubscribe", Phone);
        assertFalse("Email can't Unsubscribe", Email);
        assertFalse("SMS can't Unsubscribe", SMS);
        assertFalse("DirectMail can't Unsubscribe", DirectMail);
	}
	
	public void Unsubscribe() {
		
		Return = SendData.httpPost(urlStr, paramName, paramVal);
		assertTrue(Return, Return.contains("{\"errorCode\":\"0\"}"));
	}
	
	public void ReadPT_ADMIN_Scribe() {
		System.out.println ("Starting to check PT ADMIN output for user: "+username);
        driver.get("https://extdev-devhead-admin.playtech.com/index.php");
        driver.findElement(By.name("username")).clear();
        driver.findElement(By.name("username")).sendKeys("PavelY1");
        driver.findElement(By.name("password")).clear();
        driver.findElement(By.name("password")).sendKeys("Ihate2share4u");
        driver.findElement(By.name("Submit")).click();
        try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			//e.printStackTrace();
		} 
        driver.get("https://extdev-devhead-admin.playtech.com/user_search.php?context=ums");
        driver.findElement(By.id("username")).clear();
        driver.findElement(By.id("username")).sendKeys(username);
        driver.findElement(By.id("internalaccount")).click();
        driver.findElement(By.id("submit")).click();
        driver.findElement(By.linkText(username)).click();
        driver.findElement(By.id("imgsec_contact")).click();
	}
	
	@AfterClass 
	public static void terminated(){
		driver.quit();
		if (watchedLog != "") {
			System.out.println("");
			System.out.println("Test Fail Results:");
			System.out.println(watchedLog);
		}else{
			System.out.println("");
			System.out.println("Test Pass");
		}
	}
}

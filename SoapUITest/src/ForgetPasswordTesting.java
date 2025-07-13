import static org.junit.Assert.*;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.CodeSource;
import java.util.List;
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
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.firefox.FirefoxDriver;


public class ForgetPasswordTesting {

	static String urlStr = "http://api.dev/user/playtech800011/web/Yaniv123/forgotpassword";
	static String BodyStr = "{\"email\": \"test@playtech.com\", \"birthDate\": \"1959-02-05\"}";
	static String UrlReg = "http://api.dev/user/add";
	static String mUserName;
	//static String BodyReg = "{\"username\":"+ mUserName +",\"casinoName\":\"playtech800011\",\"address\":\"Goddess of the hunt\",\"currency\":\"EUR\",\"cellPhone\":\"52618088\",\"city\":\"London\",\"countryCode\":\"DE\",\"email\":\"test@playtech.com\",\"email_1\":\"test@playtech.com\",\"firstName\":\"winnerName\",\"lastName\":\"Olympians\",\"wantMail\":\"1\",\"zip\":\"69087\",\"bday\":\"5\",\"bmonth\":\"2\",\"byear\":\"1959\",\"phoneCode\":\"11\",\"phoneNumber\":\"123456\",\"terms\":\"1\",\"sex\":\"M\",\"advertiser\":\"playtech800011\",\"language\":\"EN\",\"password\":\"test123\",\"password_1\":\"test123\",\"client\":\"web\"}";
	
	static String[] mParamName = {"p"};
	static String[] mParamVal = {BodyStr};
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
	    Result result = JUnitCore.runClasses(ForgetPasswordTesting.class);//ForgetPasswordTesting
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
	
	//@BeforeClass 
	public static void RegisterUser() {
		
		//String aFileName = getProjectFolder() + "LibFolder" + System.getProperty("file.separator") + "Password.txt";
		String UserName;
		try {
			Path path = Paths.get("C:\\Tests\\LastUser.txt");
			List<String> AllLins = Files.readAllLines(path, StandardCharsets.UTF_8);
			UserName = AllLins.get(0);
			int PhoneNumberInt = Integer.parseInt(UserName);
			UserName = Integer.toString(PhoneNumberInt +1);
			//PhoneNumber = String.format("%d", PhoneNumberInt +1); 
			AllLins.set(0, UserName);
			Files.write(path, AllLins, StandardCharsets.UTF_8);
		
			mUserName = "Yan"+ UserName;
			String[] ParamVal = {"{\"username\":"+ "\""+ mUserName +"\"" +",\"casinoName\":\"playtech800011\",\"address\":\"Goddess of the hunt\",\"currency\":\"EUR\",\"cellPhone\":\"52618088\",\"city\":\"London\",\"countryCode\":\"DE\",\"email\":\"test@playtech.com\",\"email_1\":\"test@playtech.com\",\"firstName\":\"winnerName\",\"lastName\":\"Olympians\",\"wantMail\":\"1\",\"zip\":\"69087\",\"bday\":\"5\",\"bmonth\":\"2\",\"byear\":\"1959\",\"phoneCode\":\"11\",\"phoneNumber\":\"123456\",\"terms\":\"1\",\"sex\":\"M\",\"advertiser\":\"playtech800011\",\"language\":\"EN\",\"password\":\"test123\",\"password_1\":\"test123\",\"client\":\"web\"}"};
			String Return = SendData.httpPost(UrlReg, mParamName, ParamVal);
			assertTrue(Return, Return.contains("{\"errorCode\":\"0\"}"));
			urlStr = "http://api.dev/user/playtech800011/web/"+mUserName+"/forgotpassword";
			
		} catch (Exception e) {
			fail("Can't read Last User File");
		}
	}
	
	@Test
	public void AllGood() {
		RegisterUser();
		//System.out.println(Thread.currentThread().getStackTrace());
		String Return = SendData.httpPost(urlStr, mParamName, mParamVal);
		assertTrue(Return, Return.contains("{\"errorCode\":\"0\"}"));
		//fail("Not yet implemented");
	}
	
	@Test
	public void EmailFormatError() {
		RegisterUser();
		String[] ParamVal = {"{\"email\": \"test@playtech.com1\", \"birthDate\": \"1959-02-05\"}"};
		String Return = SendData.httpPost(urlStr, mParamName, ParamVal);
		assertTrue(Return, Return.contains("Not valid user email"));
	}
	
	@Test
	public void EmailMissing() {
		RegisterUser();
		String[] ParamVal = {"{\"email\": \"\", \"birthDate\": \"1959-02-05\"}"};
		String Return = SendData.httpPost(urlStr, mParamName, ParamVal);
		assertTrue(Return , Return.contains("2015(not_found)"));
	}
	
	@Test
	public void birthDateMissing() {
		RegisterUser();
		String[] ParamVal = {"{\"email\": \"test@playtech.com\", \"birthDate\": \"\"}"};
		String Return = SendData.httpPost(urlStr, mParamName, ParamVal);
		assertFalse(Return,Return.contains("{\"errorCode\":\"0\"}"));
	}
	
	@Test
	public void birthDateFormatError() {
		RegisterUser();
		String[] ParamVal = {"{\"email\": \"test@playtech.com\", \"birthDate\": \"1959-02-055\"}"};
		String Return = SendData.httpPost(urlStr, mParamName, ParamVal);
		assertTrue(Return, Return.contains("Invalid date"));
	}
	
	@Test
	public void AllMissing() {
		RegisterUser();
		String[] ParamVal = {"{\"email\": \"\", \"birthDate\": \"\"}"};
		String Return = SendData.httpPost(urlStr, mParamName, ParamVal);
		assertTrue(Return, Return.contains("{\"email\":[\"2015(not_found)\"],\"birthDate\":[\"2015(not_found)\"]}"));
	}
	
	@Test
	public void UserMissing() {
		RegisterUser();
		urlStr = "http://api.dev/user/playtech800011/web//forgotpassword";
		String Return = SendData.httpPost(urlStr, mParamName, mParamVal);
		assertTrue(Return, Return.contains("\"username\":[\"2015(not_found)\"]"));
	}
	
	@Test
	public void casinoMissing() {
		RegisterUser();
		urlStr = "http://api.dev/user//web/"+mUserName+"/forgotpassword";
		String Return = SendData.httpPost(urlStr, mParamName, mParamVal);
		assertTrue(Return, Return.contains("2015(not_found)"));
	}
	
	public String getProjectFolder() throws URISyntaxException {
		CodeSource codeSource = ForgetPasswordTesting.class.getProtectionDomain()
				.getCodeSource();
		File jarFile = new File(codeSource.getLocation().toURI().getPath());
		String jarDir = jarFile.getParentFile().getPath();
		return jarDir + System.getProperty("file.separator"); 
		}
	  
	@AfterClass 
	public static void terminated(){
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

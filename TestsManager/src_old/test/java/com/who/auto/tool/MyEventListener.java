package com.who.auto.tool;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.regexp.recompile;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.events.WebDriverEventListener;

public class MyEventListener implements WebDriverEventListener {
	String findBy = "";
	String LastError = "";
	long lastTime = System.currentTimeMillis();
	static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    // All the methods of the WebDriverEventListener need to
    // be implemented here. You can leave most of them blank.
    // For example...
    // ...
	// WebDriverEventListener eventListener = new MyEventListener();
    //driver = new EventFiringWebDriver(new FirefoxDriver()).register(eventListener);
	@Override
    public void onException(Throwable error, WebDriver arg1) {
		//System.out.println(LastError);
		 if (!LastError.contentEquals(findBy) || (System.currentTimeMillis()-lastTime)>5000) {
			 lastTime = System.currentTimeMillis();
			 LastError = findBy;
			 if (error.getClass().equals(NoSuchElementException.class)){
				 //Reporter.log("WebDriver error: Element not found "+findBy, true);
				 System.out.println("WebDriver error: Element not found "+findBy);
	        } else {
	         //Reporter.log("WebDriver error: with Element "+ findBy, true);
	         //org.testng.Reporter.log("This is only test" + Utility.newlineHtml, 0, false);
	        	System.out.println("WebDriver error: with Element "+ findBy);
	        }
		}
		 //INFO("WebDriver error");
    }

	@Override
	public void afterChangeValueOf(WebElement element, WebDriver arg1) {
		String msg = "-Set value: "+element.getAttribute("value");
		//org.testng.Reporter.log(msg + Utility.getNewlinehtml(), false);
		System.out.println(msg);
	}

	@Override
	public void afterClickOn(WebElement arg0, WebDriver arg1) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void afterFindBy(By arg0, WebElement arg1, WebDriver arg2) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void afterNavigateBack(WebDriver arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void afterNavigateForward(WebDriver arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void afterNavigateTo(String arg0, WebDriver arg1) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void afterScript(String script, WebDriver driver) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void beforeChangeValueOf(WebElement element, WebDriver driver) {
		System.out.println("About to write to " + element.getTagName() + " find"+ findBy);
	}

	@Override
	public void beforeClickOn(WebElement element, WebDriver driver) {
		System.out.println("About to click on " + element.getTagName() + " find"+ findBy);
	}

	@Override
	public void beforeFindBy(By by, WebElement element, WebDriver driver) {
		findBy = by.toString();
		if (!LastError.contentEquals("") && !LastError.contentEquals(findBy)) {
			LastError = "";
		}
	}

	@Override
	public void beforeNavigateBack(WebDriver driver) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void beforeNavigateForward(WebDriver driver) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void beforeNavigateTo(String url, WebDriver driver) {
		System.out.println("About to navigating to:'"+url+"'");
		//System.out.println("About to navigating to:'"+url+"'" + Utility.newlineHtml);
	}

	@Override
	public void beforeScript(String script, WebDriver driver) {
		System.out.println("About to execute script:'"+script+"'");
	}
	
	public static String strDate() {
		Calendar cal = Calendar.getInstance();
		return sdf.format(cal.getTime());
	}
	
}
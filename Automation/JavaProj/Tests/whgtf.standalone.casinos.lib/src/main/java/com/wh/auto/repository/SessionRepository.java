package com.wh.auto.repository;

import java.util.HashMap;

import org.openqa.selenium.WebDriver;
import org.springframework.context.ApplicationContext;

public class SessionRepository {

	private static HashMap<Long, WebDriver> webDriverList = new HashMap<Long, WebDriver>();
	private static HashMap<Long, ApplicationContext> applicationContextList = new HashMap<Long, ApplicationContext>(); 

	public static void setWebDriver(WebDriver driver, long session) {
		webDriverList.put(session, driver);
	}
	
	public static WebDriver getWebDriver(long session) {
		try {
			return webDriverList.get(session);
		} catch (Exception e) {
			return null;
		}
	}
	
	public static void setAppContext(ApplicationContext applicationContext, long session) {
		applicationContextList.put(session, applicationContext);
	}
	
	public static ApplicationContext getAppContext(long session) {
		return applicationContextList.get(session);
	}
}

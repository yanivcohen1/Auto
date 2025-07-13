package com.who.test.pages;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Map.Entry;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.who.test.utils.AppContextRepository;
import com.who.test.utils.Browsers;
import com.who.test.utils.WebDriverUtils;

import java.awt.AWTException;
import java.awt.Robot;

public class SearchPage extends WebDriverUtils {
	
	/**
	 * SearchPage Constructor
	 * @param browsers
	 */
	public SearchPage(Browsers browsers) {
		super();
		this.browsers = browsers;
	}

	private WebDriver driver;
	private Browsers browsers;
	private String googleSearcePageUrl;
	private String searchKey;
	
	public String getGoogleSearcePageUrl() {
		return googleSearcePageUrl;
	}
	public void setGoogleSearcePageUrl(String googleSearcePageUrl) {
		this.googleSearcePageUrl = googleSearcePageUrl;
	}
	public String getSearchKey() {
		return searchKey;
	}
	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}
	  
	/**
	 * Search in google
	 * @return
	 * @throws InterruptedException
	 */
    public void searce() throws InterruptedException { 
    	//initReadDriver();
    	driver = browsers.getDriver();
    	driver.get(getGoogleSearcePageUrl());
		driver.findElement(By.id("lst-ib")).sendKeys(getSearchKey());//gbqfq
		driver.findElement(By.id("lst-ib")).submit();//gbqfq
    } 
    
    public WebDriver getDriver() throws InterruptedException { 
    	return browsers.getDriver();
    }
}
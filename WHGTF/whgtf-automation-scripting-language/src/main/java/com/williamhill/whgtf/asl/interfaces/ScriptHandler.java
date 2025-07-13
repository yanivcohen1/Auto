package com.williamhill.whgtf.asl.interfaces;

import org.openqa.selenium.WebDriver;

public interface ScriptHandler {

	public < T extends Object> T executeScript( WebDriver webdriver, java.lang.String script);
	public < T extends Object> T executeScript( WebDriver webdriver, java.lang.String script, java.lang.Object... args);
	public < T extends Object> T executeAsyncScript( WebDriver webdriver, java.lang.String script);
	public < T extends Object> T executeAsyncScript( WebDriver webdriver, java.lang.String script, java.lang.Object... args);
}

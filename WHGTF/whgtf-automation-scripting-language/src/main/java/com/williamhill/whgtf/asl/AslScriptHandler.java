package com.williamhill.whgtf.asl;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.JavascriptExecutor;

public class AslScriptHandler implements com.williamhill.whgtf.asl.interfaces.ScriptHandler  {
	
	private final static Logger logger = LogManager.getRootLogger();
	
	public AslScriptHandler() {
		
	}
	
	@Override
	public <T> T executeScript(WebDriver webdriver, String script) {
			return (executeScript(webdriver, script, (Object)null));
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> T executeScript(WebDriver webdriver, String script, Object... args) {
		try {
			return (T) ((JavascriptExecutor) webdriver).executeScript(script, args);
		}
		catch( IllegalArgumentException iae) {
			logger.error("ScriptHandler : executeScript : Argument list must contain objects - Number, Boolean, String, WebElement, List or any combination thereof");
			logger.error("ScriptHandler : args : "+args.toString());
		}
		return null;
	}

	@Override
	public <T> T executeAsyncScript(WebDriver webdriver, String script) {
		return (executeAsyncScript(webdriver, script, (Object)null));
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> T executeAsyncScript(WebDriver webdriver, String script, Object... args  ) {
			try {
				return (T) ((JavascriptExecutor) webdriver).executeAsyncScript(script, args);
			}
			catch( IllegalArgumentException iae) {
				logger.error("ScriptHandler : executeScript : Argument list must contain objects - Number, Boolean, String, WebElement, List or any combination thereof");
				logger.error("ScriptHandler : args : "+args.toString());
			}
			return null;
		}
}

package com.wh.auto.common;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.annotations.ITestAnnotation;

public class TransformerUtil {

	private static ITestAnnotation testAnnotation;

    public static void setTestAnnotation(ITestAnnotation _testAnnotation)
    {
    	testAnnotation = _testAnnotation;
    }
	
    public static ITestAnnotation getTestAnnotation()
    {
    	return testAnnotation;
    }
    
}

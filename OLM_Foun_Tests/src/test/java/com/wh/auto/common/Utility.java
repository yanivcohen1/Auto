package com.wh.auto.common;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.testng.Reporter;

public class Utility {

	static String path;
	static java.util.Properties prop = InitUtility();
	
	public static Properties InitUtility() {
		java.util.Properties prop = new Properties();
		Resource resource = new ClassPathResource("sut.properties");
		try {
			path = resource.getFile().getPath();
			File configFile = resource.getFile();
			prop.load(new FileInputStream(configFile));
		}
		catch (Exception e) {
			Reporter.log("SessionServiceImpl error config file: " + e.getMessage());
			throw new IllegalArgumentException("SessionServiceImpl error config file", e);
		}
		return prop;
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
	}

	public static String terminateFF() {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
			command[2] = "taskkill /f /IM firefox.exe /t";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	public static String terminateChrome() {
		try {
			String[] command = new String[3];
			command[0] = "cmd";
			command[1] = "/C";
			command[2] = "taskkill /f /IM chromedriver.exe /t";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	public static String terminateIE() {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
/*	        command[2] = "taskkill /f /IM chromedriver.exe /t";
			Process p1 = Runtime.getRuntime().exec(command);
			p1.waitFor();*/
			command[2] = "taskkill /f /IM IEDriverServer.exe /t";
			Process p2 = Runtime.getRuntime().exec(command);
			p2.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	public static String getProperties(String property) {//"webdriver.domain"
		String propertyVal = "";
		//java.util.Properties prop = new Properties();
		//Resource resource = new ClassPathResource("sut.properties");
		try {
			//File configFile = resource.getFile();
			//prop.load(new FileInputStream(configFile));
			propertyVal = prop.getProperty(property);
		}
		catch (Exception e) {
			// Loger.getLoger().error("SessionServiceImpl error config file",
			// e);
			Reporter.log("SessionServiceImpl error config file: " + e.getMessage());
			throw new IllegalArgumentException("SessionServiceImpl error config file", e);
		}
		return propertyVal;
	}
	
	public static String getResourcePath(String driver) throws IOException{
		Resource resource = new ClassPathResource(driver);
		String path = resource.getFile().getPath();
		return path;
	}
	
}

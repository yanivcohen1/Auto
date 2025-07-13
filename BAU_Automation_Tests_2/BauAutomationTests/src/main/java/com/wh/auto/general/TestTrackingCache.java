package com.wh.auto.general;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.ProcessBuilder.Redirect;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.apache.commons.io.IOUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.IRetryAnalyzer;
import org.testng.ITestContext;
import org.testng.ITestResult;
//import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import bsh.This;

import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Reporter;

/**
 * Test The sport Banner
 * @author yanivc
 */
public class TestTrackingCache {//implements IRetryAnalyzer{

	private String newline = System.getProperty("line.separator");
	
	public static void main(String[] args) throws IOException, InterruptedException, XPathExpressionException, ParserConfigurationException, SAXException {
		TestTrackingCache tcr = new TestTrackingCache();
		tcr.sportBannerDebug("C:\\Temp\\TrackingADS.csv");//"C:\\Temp\\" "general\\TrackingADS.csv"
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	private void sportBannerDebug(String parametersFileName) throws IOException, InterruptedException, ParserConfigurationException, SAXException, XPathExpressionException {

		List<List<String>> data = new ArrayList<List<String>>();
		String SportBunnerFile = parametersFileName;//Utility.getFilePathFromResource(parametersFileName);//"SportBanner.csv"	
		String line;
		BufferedReader br = new BufferedReader(new FileReader(SportBunnerFile));
		int i = 1;
		while ((line = br.readLine()) != null) {
			String url = line.replace('"', ' ').trim();
			URL obj = new URL(line.replace('"', ' ').trim());
			//URLConnection conn = obj.openConnection();
			//String expires = conn.getHeaderField("Expires");
			List<String> lineArray = new ArrayList<String>();
			lineArray.add(line.replace('"', ' ').trim());
			//lineArray.add(expires);
			data.add(lineArray);
			System.out.println("first: "+i);
			i++;
		}
		br.close();
		Thread.sleep(30000);
		BufferedWriter writer = OpenWriteFile("SportBunner");
		writer.write("URL, ADS, Final Location" + newline);
		i = 1;
		// Disable automatic redirects for all HTTP requests
		//HttpURLConnection.setFollowRedirects(false);
		for (List<String> line2 : data) {
			HttpURLConnection.setFollowRedirects(false);
			System.out.println("second: "+i);
			i++;
			URL obj = new URL(line2.get(0));
			URLConnection conn = obj.openConnection();
			HttpURLConnection httpConn = (HttpURLConnection)conn;
		    httpConn.setInstanceFollowRedirects(false);
			 
			// Send the request to the server
			conn.connect();
			
			String location = conn.getHeaderField("Location");
			line2.add(location);
			HttpURLConnection.setFollowRedirects(true);
			URL obj2 = new URL(line2.get(0));
			URLConnection conn2 = obj2.openConnection();
			HttpURLConnection httpConn2 = (HttpURLConnection)conn2;
		    httpConn2.setInstanceFollowRedirects(true);
		    //conn2.setDoOutput(true);
			conn2.connect();
			InputStream is = conn2.getInputStream();
			URL location2 = conn2.getURL();
			System.out.println(httpConn2.getResponseCode());
			System.out.println(location2.toString());
			line2.add(location2.toString());
			writer.write('"' +line2.get(0) + '"' +","+ '"' +line2.get(1)+ '"' +","+ '"' +line2.get(2) + '"' + newline);
			writer.flush();
		}

	}
	
	public BufferedWriter OpenWriteFile(String Name) {
        BufferedWriter writer = null;
        try {
            //create a temporary file
            String timeLog = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
            File logFile = new File("C:\\Temp\\" + Name + timeLog + ".csv");

            // This will output the full path where the file will be written to...
            System.out.println(logFile.getCanonicalPath());
            
            PrintWriter printWriter = new PrintWriter(logFile.getCanonicalPath());
            printWriter.print("");
            printWriter.close();
            
            writer = new BufferedWriter(new FileWriter(logFile));
            //writer.write("Hello world!");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            //try {
                // Close the writer regardless of what happens...
                //writer.close();
            //} catch (Exception e) {
            //}
        }
        return writer;
    }
	
}

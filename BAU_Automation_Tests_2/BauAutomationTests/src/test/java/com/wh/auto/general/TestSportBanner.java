package com.wh.auto.general;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.lang.ProcessBuilder.Redirect;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
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
import org.testng.annotations.Optional;
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
 *
 */
public class TestSportBanner {//implements IRetryAnalyzer{

	private int retryCount = 0;
	private int maxRetryCount = 3;
	private static ITestContext myTestContext ;
	private Object[][] dpObj = null;
	private static boolean debug = false;
	private String parametersFileName;
	
	public static void main(String[] args) throws IOException, InterruptedException, XPathExpressionException, ParserConfigurationException, SAXException {
		debug = true;
		TestSportBanner tcr = new TestSportBanner();
		tcr.beforeSuite("SportBanner.csv");
		tcr.sportBanner("http://feeds.affutd.com/feed.ip.php?lang=en&market=MR&cat_id=5&hash=5856d16b77b4dba876af4c0edc533d98");
	}
	
	/**
	 * Before all tests starts
	 */
	@Parameters({ "parametersFileName" })
	@BeforeClass
	public void beforeSuite(@Optional("SportBanner.csv") String parametersFileName) {
		this.parametersFileName = parametersFileName;
		org.testng.Reporter.log("<style> img { height: 200px; width: 300px;} img:hover {height: 100%; width: 100%;} </style>");
			     // Lambda Runnable
			     Runnable r2 = () -> System.out.println("Hello java 8");
			     // Run em!
			     r2.run();
	}
	
	/**
	 * initiaze the DataProvider for running the sportBanner
	 * @return
	 */
	@DataProvider(name = "sportBanner")
	public Object[][] ReadTestBT() {
		List<String> result = new ArrayList<String>();
		//System.out.println(myTestContext.getSuite().getName());
		String currentSuite = myTestContext.getSuite().getName();
		String BrowserTargetFile = Utility.getFilePathFromResource(parametersFileName);//"SportBanner.csv"
		ArrayList<ArrayList<String>> urls = CSVReader.readFile(BrowserTargetFile);
		for (int i = 0; i < urls.size(); i++) {
				result.add(urls.get(i).get(0));
		}
		Object[][] obj = new Object[result.size()][1];
		for (int i=0; i < result.size() ; i++)
			obj[i][0] = result.get(i);
		return obj;
	}
	
	/**
	 * initiaze for manual running
	 * @return
	 */
	@DataProvider(name = "sportBanner2")
	public Object[][] languages() {
		return new Object[][] {{"http://feeds.affutd.com/feed.ip.php?lang=en&market=MR&cat_id=5&hash=5856d16b77b4dba876af4c0edc533d98" }};//,
				//{"http://www.eurogrand.com/", "ru", "http://www.eurogrand.com/ru","chrome" }};
	}
	
	/**
	 * sport Banner Test
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ParserConfigurationException 
	 * @throws SAXException 
	 * @throws XPathExpressionException 
	 */
	@Test(dataProvider = "sportBanner", timeOut = 600000, retryAnalyzer=TestSportBanner.class, description = "Test The Sport Bunner event")//10 min timeout
	public void sportBanner(String url) throws IOException, XPathExpressionException, InterruptedException, ParserConfigurationException, SAXException {
		if (!debug) {
			for (int i = 0; i < maxRetryCount; i++) {
				try {
					sportBannerDebug(url);
					break;
				} catch (Exception ex) {
					if(i >= maxRetryCount-1){
						Utility.logError(ex, myTestContext, null, true);
					}
					Utility.logError(ex, myTestContext, null, false);
				}
			}
		}else{
			sportBannerDebug(url);
		}  
	}
	
	/**
	 * The main Test
	 * @param browserType
	 * @throws AWTException
	 * @throws InterruptedException
	 */
	private void sportBannerDebug(String url) throws IOException, InterruptedException, ParserConfigurationException, SAXException, XPathExpressionException {
	
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		DocumentBuilder db = dbf.newDocumentBuilder();
		Document doc = db.parse(new URL(url).openStream());
		doc.getDocumentElement().normalize();
		NodeList nList = doc.getElementsByTagName("event");
		
		/*XPath xPath = XPathFactory.newInstance().newXPath();
		String expression = "/Employees/Employee[@emplid='3333']/email";
		//read a string value
		String email = xPath.compile(expression).evaluate(xmlDocument);
		//read an xml node using xpath
		Node node = (Node) xPath.compile(expression).evaluate(xmlDocument, XPathConstants.NODE);*/
		
		/*for (int temp = 0; temp < nList.getLength(); temp++) { 
			Node nNode = nList.item(temp);
			System.out.println("\nCurrent Element :" + nNode.getNodeName());
			if (nNode.getNodeType() == Node.ELEMENT_NODE) {
				Element eElement = (Element) nNode;
	 
				System.out.println("eventid : " + eElement.getAttribute("eventid"));
				System.out.println("oddsDecimal : " + eElement.getAttribute("oddsDecimal"));
			}
		}*/
		//Add report table
		StringWriter writer = new StringWriter();
		IOUtils.copy(new URL(url).openStream(), writer);
		String content = writer.toString().replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "");
		ArrayList<String> tableHader = new ArrayList<String>(Arrays.asList(new String[] {"Feed URL","Feed Content"}));
		ArrayList<String> tableCells = new ArrayList<String>(Arrays.asList(new String[] {url,content}));//{url,writer.toString()}));
		ArrayList<ArrayList<String>> table = new ArrayList<ArrayList<String>>(Arrays.asList(tableHader,tableCells));
		try {
			//Utility.buildOnlyTable(table);
			Reporter.buildTable(table);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		
		try {
			System.out.println("test: " + myTestContext.getName() + "-" +(nList.getLength() > 0));
		} catch (Exception e) {
			//e.printStackTrace();
		}
		if(nList.getLength() == 0){
			throw new IllegalStateException("event is missing");
		}
        Assert.assertTrue("Test Fail", nList.getLength() > 0);
	}
	
	/**
	 * getting the test context 
	 * @param myTestContext1
	 */
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1){
		myTestContext = myTestContext1;      
	}
	
}

package com.wh.auto.general;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.apache.commons.io.FilenameUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.ITestContext;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import org.xml.sax.SAXException;

import com.google.common.collect.Iterables;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;
import com.wh.auto.common.WebDriverUtils;

/*http://sports.williamhill.com/bet/en-gb

//language menu
ul.clearfix 
li
href & text

//main Tabs
#productsNav ul 
il a href & text
//String selectLinkOpeninNewTab = Keys.chord(Keys.CONTROL,Keys.RETURN); 
//driver.findElement(By.linkText("urlLink")).sendKeys(selectLinkOpeninNewTab);
*/public class TestWhLangTabs {

	String newline = System.getProperty("line.separator");
	String parametersFileName;
	WebDriver driver;
	BufferedWriter writer;
	int index = 1;
	int maxIndex;
	String destFile = "C:\\temp\\WHTabs.csv";//WHLang.csv
	//File outputFile = new File(Utility.getLocalPath() + "\\ManualOut.csv");
	File outputFile = new File(destFile);
	String LocalPath = null;
	private ITestContext myTestContext = null;
	List<LangTab> langTabList;
	
	public static void main(String[] args) throws IOException, XPathExpressionException, InterruptedException, ParserConfigurationException, SAXException {
		// TODO Auto-generated method stub
		TestWhLangTabs testWhLangTabs = new TestWhLangTabs();
		testWhLangTabs.langTabList = new ArrayList<LangTab>();
		testWhLangTabs.beforeClass();
		List<String> langs = testWhLangTabs.generateMenuFile("http://sports.williamhill.com/bet/en-gb");
		for (String lang : langs) {
			testWhLangTabs.generateTabsFile(lang);
		}
		//testWhLangTabs.afterClass();
		//testWhLangTabs.sportBannerDebug("general\\SportBanner.csv");
	}

	@BeforeClass
	public void beforeClass() throws IOException {
		writer = OpenWriteFile("WHTabs");
		writer.write("Language, Language Url, ActiveTab, TabName, TabUrl" + newline);
		//System.out.println("Start test: " + myTestContext.getName());
		Utility.terminateChrome();
		// go to the integration page
		driver = (new Browsers()).getDriver("chrome");
	}
	
	private List<String> generateMenuFile(String url) {
		List<String> retUrl = new ArrayList<String>();
		//driver = (new Browsers()).getDriver("chrome");
		driver.get(url);
		Collection<WebElement> col = driver.findElements(By.cssSelector("ul.clearfix li a"));
		int i = 0;
		for (WebElement webElement : col) {
			String href = webElement.getAttribute("href");
			System.out.println(webElement.getAttribute("outerText")+","+ href);
			if (i == 0) {
				retUrl.add("http://sports.williamhill.com/bet/en-gb");
			}else{
				retUrl.add(href);
			}
			i++;
			//System.out.println(webElement.getAttribute("id"));
			//System.out.println(webElement.getAttribute("href"));
			//System.out.println("");
		}
		new WebDriverWait(driver, 20).until(ExpectedConditions
				.visibilityOfElementLocated(By.cssSelector("#cancelBtn")));
		driver.findElement(By.cssSelector("#cancelBtn")).click();
		return retUrl;
	}

	private void generateTabsFile(String url) throws InterruptedException, IOException {
		//String url = "http://sports.williamhill.com/bet/en-gb";
		String lang = findLang(url);
		//driver = (new Browsers()).getDriver("chrome");
		driver.get(url);
		//List<LangTab> langTabList = new ArrayList<LangTab>();
		LangTab langTab = new LangTab();
		langTab.lang = lang;//regular #productsNav > a
		langTab.langUrl = url;
		Map<String, String> tabUrls = new HashMap<String, String>();//Bingo financials #primary > li.active > a
		new WebDriverWait(driver, 20).until(ExpectedConditions//mobile #sports_tab > a
				.visibilityOfElementLocated(By.cssSelector("#productsNav a")));//Games Scratch nav > a
		//WebElement colUlMain = WebDriverUtils.waitForElement(driver, By.cssSelector("#productsNav ul"), 25);//#productsNav > ul > li.vegas > a
		Collection<WebElement> colMain = driver.findElements(By.cssSelector("#productsNav a"));
		for (int i = 0; i < colMain.size(); i++) {
			driver.get(url);
			new WebDriverWait(driver, 20).until(ExpectedConditions//mobile #sports_tab > a
					.visibilityOfElementLocated(By.cssSelector("#productsNav a")));
			//WebElement colUl = driver.findElement(By.cssSelector("#productsNav ul"));//#productsNav > ul > li.vegas > a
			Collection<WebElement> col = driver.findElements(By.cssSelector("#productsNav a"));
			WebElement activeTab = Iterables.get(col, i);
			String activeTabName = activeTab.getAttribute("outerText");
			langTab.tabName = activeTabName;
			activeTab.click();
			String searchCss = "#productsNav a";
			if (activeTabName.contains("Games") || activeTabName.contains("Scratchcards")){
				searchCss = "header section nav a";//body > header > section > section > nav > a:nth-child(1)
			}else if (activeTabName.contains("Bingo") || activeTabName.contains("Financials")) {
				searchCss = "#primary a";
			}else if (activeTabName.contains("Mobile")) {
				searchCss = "#content a";
			}
			try {
				WebElement tabColUl = WebDriverUtils.waitForElement(driver,
						By.cssSelector(searchCss), 25);//#productsNav > ul > li.vegas > a
				Thread.sleep(2000);
				Collection<WebElement> tabCol = driver.findElements(By
						.cssSelector(searchCss));
				System.out.println("find tabs:" + tabCol.size() + "in tab " + activeTabName);
				int i1 = 0;
				for (WebElement tab : tabCol) {
					if (i1 < 12) {
						String outerText = tab.getAttribute("outerText").trim();
						String href = tab.getAttribute("href");
						System.out.println(outerText + "," + href);
						tabUrls.put(outerText, href);
						writer.write(langTab.lang + ',' + langTab.langUrl + ',' + langTab.tabName + ',' + outerText +
								',' + href + newline);
						writer.flush();
					}
					i1++;
				}
			} catch (Exception e) {
				writer.write(langTab.lang + ',' + langTab.langUrl + ',' + langTab.tabName + ',' + "Error" +
						',' + "Error" + newline);
				writer.flush();
			}
			
		}
		langTabList.add(langTab);
	}
	
	private String findLang(String url) {
		int i = url.lastIndexOf('/');
		String extension = url.substring(i+1);
		return extension;
	}

	@AfterClass
	public void afterClass() throws IOException {
		//writer.write("Language,Language Url, ActiveTab, TabName, TabUrl" + newline);
		for (LangTab langTab : langTabList) {
			for(Entry<String, String> TabUrls : langTab.tabsUrl.entrySet()){
				writer.write(langTab.lang + ',' + langTab.langUrl + ',' + langTab.tabName + ',' + TabUrls.getKey() +
						',' + TabUrls.getValue() + newline);
				writer.flush();
			}
		}
	}
	
	/**
	 * initiaze for running test and browser
	 * @return
	 * @throws IOException 
	 * @throws InterruptedException 
	 */
	@DataProvider(name = "redirect")
	public Object[][] createDataProvider() {
		//this.parametersFileName =  myTestContext.getCurrentXmlTest().getParameter("parametersFileName");
		String redirectFile = Utility.getFilePathFromResource("ManualIn.csv");
		ArrayList<ArrayList<String>> urls = CSVReader.readFile(redirectFile);
		Object[][] dpObj = new Object[urls.size()][2];
		maxIndex = urls.size();
		int i = 0;
		for (ArrayList<String> url : urls) {
			dpObj[i] = new Object[] {url.get(0), url.get(1)};
			i++;
		}
		return dpObj;
	}
	
	/**
	 * getting the test context 
	 * @param myTestContext1
	 * @throws IOException 
	 */
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1) {
		myTestContext = myTestContext1;	
	}
	
	/**
	 * Test redirect url
	 * @param mainUrl
	 * @param redirectUrl
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@Test(dataProvider = "redirect", description = "Test redirect url")
	public void testRedirect(String mainUrl, String redirectUrl) throws IOException, InterruptedException {
			System.out.println("start " + index + " of "+ maxIndex);
			index++;
			String url = mainUrl.trim();
			driver.get(url);
			Thread.sleep(1000);
			if (!driver.getCurrentUrl().equalsIgnoreCase(redirectUrl)) {
				Reporter.log("Set URL:" +url+ ", expected URL:" + redirectUrl + ", Actual URL:" + driver.getCurrentUrl());
				writer.write(url +","+ redirectUrl +","+ driver.getCurrentUrl() +","+ "Fail" + newline);
				Assert.assertTrue(false, driver.getCurrentUrl());
			}else{
				writer.write(url +","+ redirectUrl +","+ driver.getCurrentUrl() +","+ "Pass" + newline);
			}
			writer.flush();
			//driver.manage().deleteAllCookies();
			//int Len = url.length();	
	}
	
	private void sportBannerDebug(String parametersFileName) throws IOException, InterruptedException, ParserConfigurationException, SAXException, XPathExpressionException {

		List<List<String>> data = new ArrayList<List<String>>();
		String SportBunnerFile = Utility.getFilePathFromResource(parametersFileName);//"SportBanner.csv"	
		String line;
		BufferedReader br = new BufferedReader(new FileReader(SportBunnerFile));
		int i = 1;
		while ((line = br.readLine()) != null) {
			String url = line.replace('"', ' ').trim();
			URL obj = new URL(line.replace('"', ' ').trim());
			URLConnection conn = obj.openConnection();
			String expires = conn.getHeaderField("Expires");
			List<String> lineArray = new ArrayList<String>();
			lineArray.add(line.replace('"', ' ').trim());
			lineArray.add(expires);
			data.add(lineArray);
			System.out.println("first: "+i);
			i++;
		}
		br.close();
		Thread.sleep(30000);
		BufferedWriter writer = OpenWriteFile("SportBunner");
		writer.write("Bunner URL, First Expires, Secend Expires, Status" + newline);
		i = 1;
		for (List<String> line2 : data) {
			System.out.println("second: "+i);
			i++;
			URL obj = new URL(line2.get(0));
			URLConnection conn = obj.openConnection();
			String expires = conn.getHeaderField("Expires");
			line2.add(expires);
			if (expires.contentEquals(line2.get(1))) {
				line2.add("Fail");
				System.out.println(line2.get(0));
			}else{
				line2.add("Pass");
			}
			writer.write('"' +line2.get(0) + '"' +","+ '"' +line2.get(1)+ '"' +","+ '"' +line2.get(2) + '"'  +","+ line2.get(3) + newline);
			writer.flush();
		}

	}
	
	public BufferedWriter OpenWriteFile(String name) {
        BufferedWriter writer = null;
        try {
            //create a temporary file
        	
            //String timeLog = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
            // This will output the full path where the file will be written to...
            System.out.println(outputFile.getCanonicalPath());
            PrintWriter printWriter = new PrintWriter(outputFile.getCanonicalPath());
            printWriter.print("");
            printWriter.close();
            writer = new BufferedWriter(new FileWriter(outputFile));
            //writer.write("Hello world!");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
        }
        return writer;
    }
	
	class LangTab {
		String lang;
		String langUrl;
		String tabName;
		HashMap<String, String> tabsUrl;
	}
}

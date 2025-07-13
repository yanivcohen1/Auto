package com.wh.auto.manual;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.testng.annotations.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.ITestContext;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Utility;

public class TestManualRedirect {
	
	private ITestContext myTestContext = null;
	String newline = System.getProperty("line.separator");
	String parametersFileName;
	WebDriver driver;
	BufferedWriter writer;
	int index = 1;
	int maxIndex;
	String destFile = "C:\\Jenkins\\workspace\\BAU_Manual\\ManualOut.csv";
	File outputFile = new File(Utility.getLocalPath() + "\\ManualOut.csv");
	String LocalPath = null;
	
	public static void main(String[] args) throws IOException, InterruptedException {
		TestManualRedirect bt = new TestManualRedirect();
		//bt.testRedirect();
	}
	
	@BeforeClass
	public void beforeClass() throws IOException {
		writer = OpenWriteFile("Redirect");
		writer.write("Set URL, expected URL, Actual URL, Status" + newline);
		//System.out.println("Start test: " + myTestContext.getName());
		Utility.terminateChrome();
		// go to the integration page
		driver = (new Browsers()).getDriver("chrome");
	}
	
	public BufferedWriter OpenWriteFile(String Name) {
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
	
	@AfterTest
	public void afterTest() {
		try {
			driver.manage().deleteAllCookies();
		} catch (Exception e) {
		}
	}
	
	@AfterClass
	public void afterClass() {
		/*try {
			File destFileString = new File(destFile);
			Utility.copyFileUsingJava7Files(outputFile, destFileString);
		} catch (IOException e1) {
			
		}*/
		try {
            // Close the writer regardless of what happens...
			driver.quit();
            writer.close();
        } catch (Exception e) {
        }
	}
}
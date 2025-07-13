package com.wh.auto.whcc.desktop;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;

import org.junit.AfterClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.ITestContext;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;

public class TestRedirect {
	
	private ITestContext myTestContext = null;
	String newline = System.getProperty("line.separator");
	
	public static void main(String[] args) throws IOException, InterruptedException {
		TestRedirect bt = new TestRedirect();
		bt.testRedirect();
	}
	
	/**
	 * initiaze for running test and browser
	 * @return
	 * @throws IOException 
	 * @throws InterruptedException 
	 */
	/*@DataProvider(name = "Browsers")
	public Object[][] createDataProvider() {
		this.parametersFileName =  myTestContext.getCurrentXmlTest().getParameter("parametersFileName");
		
		String[] TestBrowser = Utility.getBrowsersPerTest(this.getClass().getSimpleName());
		//Object[][] obj = new Object[TestBrowser.length][1];
		//for (int i=0; i < obj.length ; i++)
		//	obj[i] = new Object[]{TestBrowser[i]};//(Object[])TestBrowser[i];
		dpObj = new Object[browserTargetDP.size()][numfunArgs];
		for (int i=0; i < dpObj.length ; i++)
			dpObj[i] = new Object[] {browserTargetDP.get(i).BaseURL, browserTargetDP.get(i).Language,
				browserTargetDP.get(i).EcpectedURL, browserTargetDP.get(i).Browser};
		return obj;
	}*/
	
	@Test
	public void testRedirect() throws IOException, InterruptedException {
		//create a temporary file
		 BufferedWriter writer = OpenWriteFile("Redirect");
		 writer.write("Set URL, expected URL, Actual URL" + newline);
		//System.out.println("Start test: " + myTestContext.getName());
		Utility.terminateChrome();
		// go to the integration page
		WebDriver driver = (new Browsers()).getDriver("chrome");
		//String Redirect21NovaFile = Utility.getFilePathFromResource("Redirect21Nova.csv");
		String Redirect21NovaFile = Utility.getFilePathFromResource("Whcc\\whccRe-directs.csv");
		ArrayList<ArrayList<String>> urls = CSVReader.readFile(Redirect21NovaFile);
		int i = 0;
		for(ArrayList<String> urlList : urls){
			i++;
			String url = urlList.get(0).trim();
			/*if (!"http:".trim().contains(url)) {
				url = urlList.get(1).trim();
			}*/
			
			driver.get(url);
			Thread.sleep(1000);
			if (!driver.getCurrentUrl().equalsIgnoreCase(urlList.get(1))) {
				System.out.println("Set URL:" +url+ ", expected URL:" + urlList.get(1) + ", Actual URL:" + driver.getCurrentUrl());
				writer.write(url +","+ urlList.get(1) +","+ driver.getCurrentUrl() + newline);
				writer.flush();
			}
			driver.manage().deleteAllCookies();
			int Len = url.length();		
			System.out.println(i + " of " + urls.size());
			
		}
		try {
            // Close the writer regardless of what happens...
			driver.quit();
            writer.close();
        } catch (Exception e) {
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
	
	/**
	 * getting the test context 
	 * @param myTestContext1
	 */
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1){
		myTestContext = myTestContext1;    
	}
	
}
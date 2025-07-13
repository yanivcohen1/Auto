package com.who.Jenkins;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Properties;
import java.util.Scanner;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.GetMethod;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CreateReport extends Utilitys {
	
   public static String buildNumber = "";
	
	public static String createTable(Properties prop, String cssStyle,
			String reportHtmlFile) throws InterruptedException, IOException,
			DocumentException {
		String testReport = "Jenkins url didn't respond";
		String resultPath = prop.getProperty("ResultPath");
		String resultPage = prop.getProperty("ResultPage");
		testReport = new Scanner(new File(resultPath+resultPage)).useDelimiter("\\A").next();
		cssStyle = "<style type=\"text/css\">" + cssStyle + "</style>";
		File file = new File(reportHtmlFile);
		FileWriter fw = new FileWriter(file.getAbsoluteFile());
		BufferedWriter bw = new BufferedWriter(fw);
		// add css in to the file
		CharSequence emptySection = readFile(getResourcePath("empty.xml"));
		testReport = testReport.replace(emptySection, "");
		testReport = testReport
				.replace(
						"<link href=\"reportng.css\" rel=\"stylesheet\" type=\"text/css\" />",
						cssStyle);
		// <link href="reportng.css" rel="stylesheet" type="text/css" />
		// add test name title
		testReport = testReport.replace("<td> </td>", "<td>Test name</td>");

		// add border
		// testReport = testReport.replace("<table class=\"overviewTable\">",
		// "<table class=\"overviewTable\" border=\"1\">");

		// set table for outlook
		testReport = testReport.replace("line-height: 1em;", "");

		// remove data that not needed
		testReport = testReport.replace("Log Output", "");
		testReport = testReport.replace("<h1>Test Results Report</h1>", "");
		testReport = testReport.replace(
						"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">",
						"");

		// add links to test
		//href = href.replace("${buildNumber}", buildNumber);
		//String newRef = "<a href=" + "\"" + jenkinsURL + href;
		//testReport = testReport.replace("<a href=\"suite", newRef);
		// Thread.sleep(2000);

		// save data to file
		bw.write(testReport);

		bw.close();
		// driver.quit();
		return testReport;

	}

   public static String getLastReportContent(Properties prop) throws IOException, DocumentException {
      /* HttpClient client = new HttpClient();

       //String hostName = "http://localhost:8080/";
       GetMethod runMethod = new GetMethod(testURL);//hostName+"loginEntry");
       client.executeMethod(runMethod);
       checkResult(runMethod.getStatusCode());

       System.out.println(runMethod.getResponseBodyAsString());*/
	   String jenkinsURL = prop.getProperty("jenkinsURL");
	    //String ReportPath = prop.getProperty("ReportPath");
		String view = prop.getProperty("view");
       URL url = new URL(jenkinsURL + view + "api/xml");
       //"http://172.21.54.222:8080/view/BAU/job/BAU-Tests/api/xml");

       // if you are calling security-enabled Hudson and
       // need to invoke operations and APIs that are protected,
       // consult the 'SecuredMain" class
       // in this package for an example using HttpClient.

       // read it into DOM.
       Document dom = new SAXReader().read(url);

       List<Element> jobsNumbers = (List<Element>)dom.getRootElement().elements("build");
       buildNumber = jobsNumbers.get(0).elementText("number");
       System.out.println("LastBuidNumber: " + buildNumber);
       
       // scan through the job list and print its status
       /*for( Element job : (List<Element>)dom.getRootElement().elements("build")) {
           System.out.println(String.format("Number:%s\t",
               job.elementText("number")));
       }*/
       String overview = prop.getProperty("overview");
       String job = prop.getProperty("job");
       GetMethod runMethod = new GetMethod(jenkinsURL + "job/"+ job + "/" + overview.replace("${buildNumber}", buildNumber));
    		   //jenkinsURL + view + buildNumber + "/BAU_Results_Report/overview.html");//hostName+"loginEntry");
       HttpClient client = new HttpClient();
       client.executeMethod(runMethod);
       checkResult(runMethod.getStatusCode());
       //System.out.println(runMethod.getResponseBodyAsString());
       return runMethod.getResponseBodyAsString();
   }

   private static void checkResult(int i) throws IOException {
       if(i/100!=2)
           throw new IOException();
   }
   
}
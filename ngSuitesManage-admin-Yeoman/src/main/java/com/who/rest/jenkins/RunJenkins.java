package com.who.rest.jenkins;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.io.StringWriter;

import org.apache.commons.io.FileUtils;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;



import com.who.rest.service.SuitesUtil;
//import com.who.test.BuildTests;
import com.who.rest.service.TestsUtil;
import com.who.rest.db.model.Suites;
import com.who.rest.db.model.Tests;
import com.who.rest.util.Common;
import com.who.rest.util.Utility;
import com.who.rest.dto.SuitesData;
import com.who.rest.dto.SuitesDto;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.transaction.annotation.Transactional;

public class RunJenkins {

	private static final SuitesUtil suitesUtil = Common.getApplicationContext().getBean(SuitesUtil.class);
	
	public String runJenkinsSelectedTests(String xmlContent, String suiteName, String testManualContent) throws IOException{
		SuitesDto findSuite = null;
		for (SuitesDto suite : suitesUtil.getAllSuites()) {
			if (suite.getSuiteName().equalsIgnoreCase(suiteName)) {
				findSuite = suite;
			}
		}
		Path path = Paths.get(findSuite.getXmlFileLocation());
		String file = path.getFileName().toString();
		File folder = path.getParent().toFile();
		Utility.RunProcces(folder, "svn" , "update "+ file);
		Utility.RunProcces(folder, "svn" , "revert "+ file);
		FileUtils.writeStringToFile(path.toFile(), xmlContent);
		Utility.RunProcces(folder, "svn", "commit --force-log --file "+ file);
		if (testManualContent != null) {
			String ManualContentPath = path.getParent().getParent().toFile().getAbsolutePath().toString() + "\\Manual\\ManualIn.csv";
			path = Paths.get(ManualContentPath);
			file = path.getFileName().toString();
			folder = path.getParent().toFile();
			Utility.RunProcces(folder, "svn" , "update "+ file);
			Utility.RunProcces(folder, "svn" , "revert "+ file);
			FileUtils.writeStringToFile(path.toFile(), testManualContent);
			Utility.RunProcces(folder, "svn", "commit --force-log --file "+ file);
		}
		runTest(findSuite.getJenkinsURL() + "build?token=RUN");
		return findSuite.getJenkinsURL();
	}
	
	public void runTest(String testURL) throws IOException {
	        HttpClient client = new HttpClient();

	        //String hostName = "http://localhost:8080/";
	        GetMethod runMethod = new GetMethod(testURL);//hostName+"loginEntry");
	        client.executeMethod(runMethod);
	        checkResult(runMethod.getStatusCode());
	    }

    private static void checkResult(int i) throws IOException {
        if(i/100!=2)
            throw new IOException();
    }
	
    public static List<String> runTests(SuitesData suitesData) throws IOException {
    	List<String> returnList = new ArrayList<String>();
		String xmlSuiteContent = buildTestsXML(suitesData);
		RunJenkins runJenkins = new RunJenkins();
		String ret = runJenkins.runJenkinsSelectedTests(xmlSuiteContent, suitesData.getSuiteName(), suitesData.getTestContent());
		returnList.add(ret);
		return returnList;
	}
    
    public static String buildTestsXML(SuitesData suitesData) throws IOException {
		List<Tests> testss = new ArrayList<Tests>();
		for (String testName : suitesData.getTestsName()) {		
			  if (!testName.contentEquals("")) {
				String HQL = "select testss from Tests as testss "
						+ "where testss.testName ='" + testName + "' and testss.suites.suiteName ='" + suitesData.getSuiteName() + "'";
				//"order by testss.testName";
				List<Tests> tests = Common.getEntityManager().createQuery(HQL).getResultList();
				testss.add(tests.get(0));
			}
		}
		return buildTestsXML(testss , suitesData.getSuiteName());
	}
    
    private static String buildTestsXML(List<Tests> tests, String suiteName) throws IOException {//new buildXML
		
		VelocityEngine ve = new VelocityEngine();
		String templateFile = "TemplateOnlyTable.html";
		if (suiteName.contains("BAU Tests")) {
			templateFile = "TemplateOnlyTable2.html";
		}
        String vmPath = Utility.getResourcePath(templateFile).
        		replace(templateFile, "");
        Properties p = new Properties();
        p.setProperty("file.resource.loader.path", vmPath);
        ve.init(p);
        /*  add that list to a VelocityContext  */
        VelocityContext context = new VelocityContext();
        context.put("tests", tests);
        context.put("suiteName", suiteName);
        /*  get the Template  */
        Template t;
        try {
			t = ve.getTemplate(templateFile);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new IllegalArgumentException("coldn't find tamplate file: 'TemplateOnlyTable.html'", e);
		}
        
        /*  now render the template into a Writer  */
        StringWriter writer = new StringWriter();
        t.merge( context, writer );
        String xmlReportNg = writer.toString();
        return xmlReportNg;
		
	}
    
}

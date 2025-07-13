package com.yan.manag.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Properties;
import java.io.StringWriter;

import javax.inject.Inject;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;

import com.yan.manag.domain.Suite;
import com.yan.manag.domain.Tests;
import com.yan.manag.repository.SuiteRepository;
import com.yan.manag.repository.TestsRepository;
import com.yan.manag.service.util.Utility;
import com.yan.manag.service.dto.RunTestsDTO;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.velocity.VelocityEngineUtils;

@Component
public class JenkinsService {

	@Inject
    private TestsRepository testsRepository;
	
	@Inject
    private SuiteRepository suiteRepository;
	
	//@Inject
	private VelocityEngine engine;
	
	private Suite suite;
	
    public String runTests(List<RunTestsDTO> suitesData, String envirment, String email) throws IOException {//main List<RunTestsDTO> runData
    	List<String> returnList = new ArrayList<String>();
    	TestsList testsList = buildTestsXML(suitesData);
    	String jenkinsURL = "";
    	if (testsList.oldTestss.size() > 0) {
    		//String xmlSuiteContent = buildTestsXML(testsList.oldTestss , testsList.oldTestss.get(0).getSuite().getSuiteName());
    		//jenkinsURL = runJenkinsSelectedTests(xmlSuiteContent, suite.getSuiteName(), null, envirment, email);
		}
    	if (testsList.newTestss.size() > 0) {
    		Suite findSuite = testsList.newTestss.get(0).getSuite();
    		String BuildTests = "";
    		int i = 0;
			for (Tests test : testsList.newTestss) {
				if (i == 0) {
					BuildTests = "@" + test.getTestName();
				}else{
					BuildTests = BuildTests + ',' + "@" +test.getTestName();
				}
				i++;
			}		
			runTest(findSuite.getJenkinsUrl() + "buildWithParameters?token=RUN&ManualTests=" + BuildTests
					+ "&Environment="+ envirment + "&Email=" + email);///build?token=RUN
			jenkinsURL = findSuite.getJenkinsUrl();
		}
		return jenkinsURL;
	}
	
	/*public String runJenkinsSelectedTests(String xmlContent, String suiteName, String testManualContent, String envirment, String email) throws IOException{
		Suite findSuite = suite;
		
		Path path = Paths.get(findSuite.getXml_fileLocation());
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
		runTest(findSuite.getJenkins_url() + "buildWithParameters?token=RUN&Environment="+ envirment + "&Email=" + email);///build?token=RUN
		return findSuite.getJenkins_url();
	}*/
	
	public void runTest(String testURL) throws IOException {
        HttpClient client = new HttpClient();
        GetMethod runMethod = new GetMethod(testURL);
        client.executeMethod(runMethod);
        checkResult(runMethod.getStatusCode());
	    }

    private void checkResult(int i) throws IOException {
        if(i/100!=2)
            throw new IOException();
    }
    
    public TestsList buildTestsXML(List<RunTestsDTO> suitesData) throws IOException {
    	List<Tests> newTestss = new ArrayList<Tests>();
    	List<Tests> oldTestss = new ArrayList<Tests>();
		for (RunTestsDTO runTestsDTO : suitesData) {
			Tests test = testsRepository.findOne(Long.valueOf(runTestsDTO.getData()).longValue());
			suite = test.getSuite();//suiteRepository.findOne(Long.valueOf(test.getId()).longValue());
			String suiteName = suite.getSuiteName();
			if (suiteName.contentEquals("BAU") || suiteName.contentEquals("Payments") || 
					suiteName.contentEquals("Marketing")) {
				oldTestss.add(test);
			}else{
				newTestss.add(test);
			}
		}
		TestsList testsList = new TestsList();
		testsList.newTestss = newTestss;
		testsList.oldTestss = oldTestss;
		return testsList;
		//return buildTestsXML(testss , suiteName);
		//for (RunTestsDTO testName : suitesData) {
		//	oldTestss.add(testsRepository.findOne(new Long(testName.getId())));
			  /*if (!testName.contentEquals("")) {
				String HQL = "select testss from Tests as testss "
						+ "where testss.testName ='" + testName + "' and testss.suites.suiteName ='" + suitesData.getSuiteName() + "'";
				//"order by testss.testName";
				List<Tests> tests = Common.getEntityManager().createQuery(HQL).getResultList();
				testss.add(tests.get(0));
			  }*/
		//}
		//return buildTestsXML(testss , suiteName);
	}
    
    private String buildTestsXML(List<Tests> tests, String suiteName) throws IOException {
		
    	String templateFile = "TemplateOnlyTable.html";
		if (suiteName.contains("BAU")) {
			templateFile = "TemplateOnlyTable2.html";
		}
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("tests", tests);
		model.put("suiteName", suiteName);
		model.put("Utility", new Utility());
		String xmlReportNg = VelocityEngineUtils.mergeTemplateIntoString(this.engine,
				"jenkins/"+ templateFile, "UTF-8", model);
		return xmlReportNg;
		/*VelocityEngine ve = new VelocityEngine();
		String templateFile = "TemplateOnlyTable.html";
		if (suiteName.contains("BAU")) {
			templateFile = "TemplateOnlyTable2.html";
		}
        String vmPath = Utility.getFileFromResource("Jenkins/"+templateFile).
        		replace(templateFile, "");
        Properties p = new Properties();
        p.setProperty("file.resource.loader.path", vmPath);//"C:/SVN/automation_tools/TestsManager/src/main/resources/Jenkins/");
        ve.init(p);
          add that list to a VelocityContext  
        VelocityContext context = new VelocityContext();
        context.put("tests", tests);
        context.put("suiteName", suiteName);
        context.put("Utility", new Utility());
          get the Template  
        Template t;
        try {
			t = ve.getTemplate(templateFile);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			throw new IllegalArgumentException("coldn't find tamplate file: 'TemplateOnlyTable.html'", e);
		}
        
          now render the template into a Writer  
        StringWriter writer = new StringWriter();
        t.merge( context, writer );
        String xmlReportNg = writer.toString();*/
	}
    
    private class TestsList {
    	List<Tests> newTestss;
    	List<Tests> oldTestss;
    }
}

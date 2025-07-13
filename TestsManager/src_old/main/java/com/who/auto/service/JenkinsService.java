package com.who.auto.service;

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

import com.who.auto.domain.Suite;
import com.who.auto.domain.Tests;
import com.who.auto.repository.SuiteRepository;
import com.who.auto.repository.TestsRepository;
import com.who.auto.util.Utility;
import com.who.auto.web.rest.dto.RunTestsDTO;

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
	
	@Inject
	private VelocityEngine engine;
	
	private Suite suite;
	
    public String runTests(List<RunTestsDTO> suitesData) throws IOException {//main List<RunTestsDTO> runData
    	List<String> returnList = new ArrayList<String>();
		String xmlSuiteContent = buildTestsXML(suitesData);
		String ret = runJenkinsSelectedTests(xmlSuiteContent, suite.getSuite_name(), null);
		//returnList.add(ret);
		return ret;
	}
	
	public String runJenkinsSelectedTests(String xmlContent, String suiteName, String testManualContent) throws IOException{
		Suite findSuite = suite;
		
		Path path = Paths.get(findSuite.getXml_file_location());
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
		runTest(findSuite.getJenkins_url() + "build?token=RUN");
		return findSuite.getJenkins_url();
	}
	
	public void runTest(String testURL) throws IOException {
	/*	URL url = new URL(testURL);
		HttpURLConnection connection = (HttpURLConnection)url.openConnection();
		connection.setRequestMethod("GET");
		connection.connect();
		int code = connection.getResponseCode();
		checkResult(code);
		InputStream is = connection.getInputStream();
		String theString = IOUtils.toString(is, Charset.forName("UTF-8"));*/
        HttpClient client = new HttpClient();
        GetMethod runMethod = new GetMethod(testURL);
        client.executeMethod(runMethod);
        checkResult(runMethod.getStatusCode());
	    }

    private void checkResult(int i) throws IOException {
        if(i/100!=2)
            throw new IOException();
    }
    
    public String buildTestsXML(List<RunTestsDTO> suitesData) throws IOException {
		List<Tests> testss = new ArrayList<Tests>();
		Tests test = testsRepository.findOne(Long.valueOf(suitesData.get(0).getId()).longValue());
		suite = test.getSuite();//suiteRepository.findOne(Long.valueOf(test.getId()).longValue());
		String suiteName = suite.getSuite_name();
		for (RunTestsDTO testName : suitesData) {
			testss.add(testsRepository.findOne(new Long(testName.getId())));
			  /*if (!testName.contentEquals("")) {
				String HQL = "select testss from Tests as testss "
						+ "where testss.testName ='" + testName + "' and testss.suites.suiteName ='" + suitesData.getSuiteName() + "'";
				//"order by testss.testName";
				List<Tests> tests = Common.getEntityManager().createQuery(HQL).getResultList();
				testss.add(tests.get(0));
			  }*/
		}
		return buildTestsXML(testss , suiteName);
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
    
}

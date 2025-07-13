package com.who.rest.tests.testService;

import java.io.IOException;
import java.util.List;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.who.rest.JenkinsManualRestService;
import com.who.rest.dto.SuitesData;
import com.who.rest.dto.TestsDatasf;
import com.who.rest.util.Common;

public class TestServiceTests extends BaseTest {

	public static void main(String[] args) throws JsonParseException, JsonMappingException, IOException {
		String parametersFileName = "applicationContext.xml";
		ac = new ClassPathXmlApplicationContext("classpath:"+ parametersFileName); //src/main/resources/applicationContext.xml
		Common.setApplicationContext(ac);
		TestServiceTests testServiceTests = new TestServiceTests();
		testServiceTests.ManualTest();
	}
	
	//@Test
	public void getTestsData() {
		
		TestsDatasf testsDatasf = new TestsDatasf();
		testsDatasf.getTestsFlat().addAll(Common.getTestsUtil().getTestsData(-1));
		boolean res = Common.getTestsUtil().updateTests(testsDatasf.getTestsFlat());
		Assert.assertTrue(res, "Test Fail");
	}
	
	//@Test
	public void ManualTest() throws JsonParseException, JsonMappingException, IOException {
		
		JenkinsManualRestService manualRestService = new JenkinsManualRestService();
		List<String> suitesData1 = manualRestService.getManuals();
		System.out.println(suitesData1);
		SuitesData suitesData = new SuitesData();
		suitesData.setTestName("TestManualRedirect");
		String testManualContext = "http://www.williamhillcasino.com/previews/,http://www.williamhillcasino.com/games" + Common.newline +
				"http://de.williamhillcasino.com/mobile,http://www.williamhillcasino.com/de/mobile";
		suitesData.setTestContent(testManualContext);
		String res = manualRestService.runManualTest(suitesData);//, testManualContext);
		System.out.println(res);
	}
	
}

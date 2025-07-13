package yan.tests.maneg.web.rest;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.firefox.FirefoxProfile;
//import org.openqa.selenium.remote.CapabilityType;
//import org.openqa.selenium.remote.DesiredCapabilities;
//import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import com.google.common.primitives.Ints;
import com.codahale.metrics.annotation.Timed;
import yan.tests.maneg.domain.Authority;
import yan.tests.maneg.domain.Suite;
import yan.tests.maneg.domain.Tests;
import yan.tests.maneg.domain.User;
import yan.tests.maneg.repository.SuiteRepository;
import yan.tests.maneg.repository.TestsRepository;
import yan.tests.maneg.repository.UserRepository;
import yan.tests.maneg.security.AuthoritiesConstants;
import yan.tests.maneg.security.SecurityUtils;
import yan.tests.maneg.service.JenkinsService;
import yan.tests.maneg.service.MailService;
import yan.tests.maneg.service.UserService;
//import yan.tests.maneg.service.dto.ManualTestInDTO;
//import yan.tests.maneg.service.dto.ManualTestOutDTO;
import yan.tests.maneg.service.dto.RunTestsDTO;
import yan.tests.maneg.service.dto.UserDTO;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@RolesAllowed(AuthoritiesConstants.ANONYMOUS)
//http://localhost:8080/ngSuitesManage/rest/suites/
public class RunTestsResource {

	private final Logger log = LoggerFactory.getLogger(RunTestsResource.class);
	//private static List<WebDriver> index = Collections.synchronizedList(new ArrayList<WebDriver>());
	
	@Inject
    private TestsRepository testsRepository;
	
	@Inject
    private SuiteRepository suiteRepository;
	
	@Inject
    private JenkinsService runJenkins;
	
	/**
     * GET  /getAllTests.
     */
	@RolesAllowed(AuthoritiesConstants.ANONYMOUS)
    @RequestMapping(value = "/run_tests",
            method = RequestMethod.GET//,
            //produces = MediaType.APPLICATION_JSON_VALUE
            )
    @Timed
  	public ResponseEntity<List<RunTestsDTO>> getAllTests() throws IOException {
		List<Suite> suites = suiteRepository.findAll();
		//List<Tests> tests = testsRepository.findAll();
		List<RunTestsDTO> RunTestsDTOList = new ArrayList<RunTestsDTO>();
		for (Suite suite : suites) {
			RunTestsDTO suiteDTO = new RunTestsDTO();
			suiteDTO.setData(Ints.checkedCast(suite.getId()));
			suiteDTO.setLabel(suite.getSuiteName());
			suiteDTO.setChildren(new ArrayList<RunTestsDTO>());
			List<Tests> tests = testsRepository.findSuiteTests(suite.getSuiteName());
			List<String> testList = new ArrayList<String>();
			for (Tests test : tests) {
				RunTestsDTO testDTO = new RunTestsDTO();
				testDTO.setData(Ints.checkedCast(test.getId()));
				testDTO.setLabel(test.getTestName());
				testDTO.setChildren(new ArrayList<RunTestsDTO>());
				suiteDTO.getChildren().add(testDTO);
			}
			RunTestsDTOList.add(suiteDTO);
		}
		//return RunTestsDTOList;
		return new ResponseEntity<>(RunTestsDTOList, HttpStatus.OK);
  	}
  	
    /**
     * POST  /runManualTest.
     * @throws IOException 
     */
    @RolesAllowed(AuthoritiesConstants.ANONYMOUS)
    @RequestMapping(value = "/run_tests",
            method = RequestMethod.POST,
            params={"envirment","email"}//,
            //consumes = MediaType.APPLICATION_JSON_VALUE,
            //produces = MediaType.TEXT_PLAIN_VALUE
            )
    @Timed
  	public @ResponseBody ResponseEntity<String> runManualTest(@Valid @RequestBody List<RunTestsDTO> runData,
            @RequestParam("envirment") String envirment,
            @RequestParam(value = "per_page", required = false) String email) throws IOException{
  			//@RequestBody List<RunTestsDTO> runData) throws IOException {
    	//return runJenkins.runTests(runData);
    	String res = runJenkins.runTests(runData, envirment, email);
    	return new ResponseEntity<String>(res, HttpStatus.OK);
  	}
    
}

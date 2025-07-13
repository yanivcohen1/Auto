package com.who.auto.web.rest;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import com.google.common.primitives.Ints;
import com.codahale.metrics.annotation.Timed;
import com.who.auto.domain.Authority;
import com.who.auto.domain.Suite;
import com.who.auto.domain.Tests;
import com.who.auto.domain.User;
import com.who.auto.repository.SuiteRepository;
import com.who.auto.repository.TestsRepository;
import com.who.auto.repository.UserRepository;
import com.who.auto.security.AuthoritiesConstants;
import com.who.auto.security.SecurityUtils;
import com.who.auto.service.JenkinsService;
import com.who.auto.service.MailService;
import com.who.auto.service.UserService;
import com.who.auto.web.rest.dto.ManualTestInDTO;
import com.who.auto.web.rest.dto.ManualTestOutDTO;
import com.who.auto.web.rest.dto.RunTestsDTO;
import com.who.auto.web.rest.dto.UserDTO;

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
	private static List<WebDriver> index = Collections.synchronizedList(new ArrayList<WebDriver>());
	
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
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
  	public ResponseEntity<List<RunTestsDTO>> getAllTests() throws IOException {
		List<Suite> suites = suiteRepository.findAll();
		//List<Tests> tests = testsRepository.findAll();
		List<RunTestsDTO> RunTestsDTOList = new ArrayList<RunTestsDTO>();
		for (Suite suite : suites) {
			RunTestsDTO suiteDTO = new RunTestsDTO();
			suiteDTO.setId(Ints.checkedCast(suite.getId()));
			suiteDTO.setTitle(suite.getSuite_name());
			suiteDTO.setNodes(new ArrayList<RunTestsDTO>());
			List<Tests> tests = testsRepository.findSuiteTests(suite.getSuite_name());
			List<String> testList = new ArrayList<String>();
			for (Tests test : tests) {
				RunTestsDTO testDTO = new RunTestsDTO();
				testDTO.setId(Ints.checkedCast(test.getId()));
				testDTO.setTitle(test.getTest_name());
				testDTO.setNodes(new ArrayList<RunTestsDTO>());
				suiteDTO.getNodes().add(testDTO);
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
            params={"envirment","email"},
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.TEXT_PLAIN_VALUE)
    @Timed
  	public @ResponseBody String runManualTest(@Valid @RequestBody List<RunTestsDTO> runData,
            @RequestParam("envirment") String envirment,
            @RequestParam(value = "per_page", required = false) String email) throws IOException{
  			//@RequestBody List<RunTestsDTO> runData) throws IOException {
    	//return runJenkins.runTests(runData);
    	String res = runJenkins.runTests(runData, envirment, email);
    	return res;
  	}
    
}

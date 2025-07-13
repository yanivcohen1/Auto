package com.who.auto.web.rest;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

//import org.neo4j.cypher.internal.compiler.v2_1.planner.logical.findShortestPaths;
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
//import com.who.auto.domain.PersistentToken;
import com.who.auto.domain.User;
//import com.who.auto.repository.PersistentTokenRepository;
import com.who.auto.repository.SuiteRepository;
import com.who.auto.repository.UserRepository;
import com.who.auto.security.AuthoritiesConstants;
import com.who.auto.security.SecurityUtils;
import com.who.auto.service.MailService;
import com.who.auto.service.UserService;
import com.who.auto.web.rest.dto.ManualTestInDTO;
import com.who.auto.web.rest.dto.ManualTestOutDTO;
import com.who.auto.web.rest.dto.RunTestsDTO;
import com.who.auto.web.rest.dto.UserDTO;
import com.who.auto.web.rest.util.RunTestsUtil;

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
@RequestMapping("/api/runTests")
//http://localhost:8080/ngSuitesManage/rest/suites/
public class RunTestsResource {

	private final Logger log = LoggerFactory.getLogger(RunTestsResource.class);
	private static List<WebDriver> index = Collections.synchronizedList(new ArrayList<WebDriver>());
	
	@Inject
    private RunTestsUtil runTestsUtil;
	
	/**
     * GET  /getPortNumber.
     */
	@RolesAllowed(AuthoritiesConstants.ANONYMOUS)
    @RequestMapping(value = "/urlTest",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
  	public List<RunTestsDTO> getPortNumber() throws IOException {
  		return runTestsUtil.fillStartupData();//"70" + Integer.toString(port);// manualUtil.RunManualTest(testData, testData.getTestContent());//, String testManualContent
  	}
  	
    /**
     * POST  /runManualTest.
     */
    @RolesAllowed(AuthoritiesConstants.ANONYMOUS)
    @RequestMapping(value = "/urlTest",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.TEXT_PLAIN_VALUE)
    @Timed
  	public String runManualTest(@RequestBody List<RunTestsDTO> runData) throws IOException {
    	return runTestsUtil.runTest(runData);
  	}
  	
}

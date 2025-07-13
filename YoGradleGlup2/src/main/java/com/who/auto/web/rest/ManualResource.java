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
//import com.who.auto.domain.PersistentToken;
import com.who.auto.domain.User;
//import com.who.auto.repository.PersistentTokenRepository;
import com.who.auto.repository.UserRepository;
import com.who.auto.security.AuthoritiesConstants;
import com.who.auto.security.SecurityUtils;
import com.who.auto.service.MailService;
import com.who.auto.service.UserService;
import com.who.auto.web.rest.dto.ManualTestInDTO;
import com.who.auto.web.rest.dto.ManualTestOutDTO;
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
@RequestMapping("/api/manualTests")
//http://localhost:8080/ngSuitesManage/rest/suites/
public class ManualResource {

	private final Logger log = LoggerFactory.getLogger(ManualResource.class);
	private static List<WebDriver> index = Collections.synchronizedList(new ArrayList<WebDriver>());
	
	/**
     * GET  /getPortNumber.
     */
	@RolesAllowed(AuthoritiesConstants.ANONYMOUS)
    @RequestMapping(value = "/urlTest",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_PLAIN_VALUE)
    @Timed
  	public String getPortNumber() throws IOException {
  		//Random randomGenerator = new Random();
  		//int port = randomGenerator.nextInt(90) +10;
  		//int port = 7055 + index.size();
  		//index.add(Integer.toString(port));
  		index.add(null);
  		return Integer.toString(index.size() - 1);//"70" + Integer.toString(port);// manualUtil.RunManualTest(testData, testData.getTestContent());//, String testManualContent
  	}
  	
    /**
     * GET  /stopPortNumber.
     */
    @RolesAllowed(AuthoritiesConstants.ANONYMOUS)
    @RequestMapping(value = "/urlTest/{id}",
            method = RequestMethod.GET)
    @Timed
  	public void stopPortNumber(@PathVariable String id) throws IOException {
  		
  		//URL uri = new URL("http://localhost:" + id + "/hub");
  		try {
  			index.get(Integer.parseInt(id)).quit();
			//WebDriver driver = new RemoteWebDriver(uri, DesiredCapabilities.firefox());
			//driver.quit();
		} catch (Exception e) {	}
  		index.remove(Integer.parseInt(id));
  	}
  	
    /**
     * POST  /runManualTest.
     */
    @RolesAllowed(AuthoritiesConstants.ANONYMOUS)
    @RequestMapping(value = "/urlTest",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
  	public ManualTestOutDTO runManualTest(@RequestBody ManualTestInDTO manualTestIn) throws IOException {
  		ManualTestOutDTO manualTestOut = new ManualTestOutDTO();
  		manualTestOut.setExpectedUrl(manualTestIn.getExpectedUrl());
  		WebDriver driver;
  		try
		{
  		  if (index.get(Integer.parseInt(manualTestIn.getSesion())) != null) {
  			driver = index.get(Integer.parseInt(manualTestIn.getSesion()));
		}else{
			driver = new FirefoxDriver();
		}
		  //URL uri = new URL("http://localhost:" + manualTestIn.getSesion() + "/hub");
		  //driver = new RemoteWebDriver(uri, DesiredCapabilities.firefox());
		}
		catch (Exception e)
		{
			driver = new FirefoxDriver();
		}
  		index.set(Integer.parseInt(manualTestIn.getSesion()), driver);
		driver.get(manualTestIn.getInUrl());
		String urlRet = driver.getCurrentUrl();
		manualTestOut.setOutUrl(urlRet.toString());
		boolean status = false;
		if (manualTestIn.getExpectedUrl().toLowerCase().contentEquals(urlRet.toString().toLowerCase())) {
			status = true;
		}
		manualTestOut.setStatus(status);
  		/*try {
  			
			URL url = new URL(manualTestIn.getInUrl());
			HttpURLConnection connection = (HttpURLConnection)url.openConnection();
			connection.setRequestMethod("GET");
			connection.connect();
			int code = connection.getResponseCode();
			InputStream is = connection.getInputStream();
			URL urlRet = connection.getURL();
			manualTestOut.setOutUrl(urlRet.toString());
			boolean status = false;
			if (manualTestIn.getExpectedUrl().toLowerCase().contentEquals(urlRet.toString().toLowerCase())) {
				status = true;
			}
			manualTestOut.setStatus(status);
		} catch (Exception e) {
			manualTestOut.setOutUrl(""); 
			manualTestOut.setStatus(false);
		}*/
  		/*if (manualTestIn.getInUrl().contentEquals(manualTestIn.getExpectedUrl())) {
  			manualTestOut.setOutUrl(manualTestIn.getExpectedUrl());
  			manualTestOut.setStatus(true);
		}else{
			manualTestOut.setOutUrl(manualTestIn.getExpectedUrl());
  			manualTestOut.setStatus(false);
		}
  		try {Thread.sleep(1000);} catch (InterruptedException e) {}*/
  		return manualTestOut;
  	}
  	
}

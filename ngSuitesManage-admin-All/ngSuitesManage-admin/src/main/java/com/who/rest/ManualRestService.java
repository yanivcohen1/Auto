package com.who.rest;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.ObjectWriter;
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
import com.who.rest.db.model.Suites;
import com.who.rest.dto.ManualTestIn;
import com.who.rest.dto.ManualTestOut;
import com.who.rest.dto.SuitesData;
import com.who.rest.dto.SuitesDto;
import com.who.rest.service.ManualUtil;
import com.who.rest.service.SuitesUtil;
import com.who.rest.service.TestsUtil;
import com.who.rest.users.User;
import com.who.rest.users.UserService;
import com.who.rest.users.Users;
import com.who.rest.util.Common;
import com.who.security.JsonViews;

//@Component
@Path("/manualTests")
//http://localhost:8080/ngSuitesManage/rest/suites/
public class ManualRestService {

	private static final ManualUtil manualUtil = Common.getApplicationContext().getBean(ManualUtil.class);
	private static List<WebDriver> index = new ArrayList<WebDriver>();
	
  	//POST rest/Suites/5
  	@GET
  	@Path("/urlTest")
  	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
  	public String getPortNumber() throws JsonParseException, JsonMappingException, IOException {
  		//Random randomGenerator = new Random();
  		//int port = randomGenerator.nextInt(90) +10;
  		//int port = 7055 + index.size();
  		//index.add(Integer.toString(port));
  		index.add(null);
  		return Integer.toString(index.size() - 1);//"70" + Integer.toString(port);// manualUtil.RunManualTest(testData, testData.getTestContent());//, String testManualContent
  	}
  	
  	@GET
  	@Path("/urlTest/{id}")
  	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
  	public void stopPortNumber(@PathParam("id") String id) throws JsonParseException, JsonMappingException, IOException {
  		
  		//URL uri = new URL("http://localhost:" + id + "/hub");
  		try {
  			index.get(Integer.parseInt(id)).quit();
			//WebDriver driver = new RemoteWebDriver(uri, DesiredCapabilities.firefox());
			//driver.quit();
		} catch (Exception e) {	}
  		index.remove(Integer.parseInt(id));
  	}
  	
  	@POST
  	@Path("/urlTest")
  	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
  	public ManualTestOut runManualTest(ManualTestIn manualTestIn) throws JsonParseException, JsonMappingException, IOException {
  		ManualTestOut manualTestOut = new ManualTestOut();
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

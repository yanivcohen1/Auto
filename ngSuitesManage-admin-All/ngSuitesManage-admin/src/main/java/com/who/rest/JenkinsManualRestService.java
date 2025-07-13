package com.who.rest;

import java.io.IOException;
import java.util.List;

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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import com.google.common.primitives.Ints;
import com.who.rest.db.model.Suites;
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
@Path("/jenkinsManualTests")
//http://localhost:8080/ngSuitesManage/rest/suites/
public class JenkinsManualRestService {

	private static final ManualUtil manualUtil = Common.getApplicationContext().getBean(ManualUtil.class);
	
	@GET
	@Path("/urlTest")
	@Produces(MediaType.APPLICATION_JSON)
	public List<String> getManuals()
	{
		return manualUtil.getAllManualTets();
	}
  	
  	//POST rest/Suites/5
  	@POST
  	@Path("/urlTest")
  	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
  	public String runManualTest(SuitesData testData) throws JsonParseException, JsonMappingException, IOException {
  		System.out.println(testData.getTestContent());
  		System.out.println(testData.getTestName());
  		return manualUtil.RunManualTest(testData, testData.getTestContent());//, String testManualContent
  	}
  	
}

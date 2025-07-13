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
import com.who.rest.dto.SuitesDto;
import com.who.rest.service.SuitesUtil;
import com.who.rest.service.TestsUtil;
import com.who.rest.users.User;
import com.who.rest.users.UserService;
import com.who.rest.users.Users;
import com.who.rest.util.Common;
import com.who.security.JsonViews;

//@Component
@Path("/suites")
//http://localhost:8080/ngSuitesManage/rest/suites/
public class SuiteRestService {

	private static final SuitesUtil suitesUtil = Common.getApplicationContext().getBean(SuitesUtil.class);
	
	//@Autowired
	//private ObjectMapper mapper = new ObjectMapper();
	
	//GET rest/suites
  	@GET
  	@Produces(MediaType.APPLICATION_JSON)
  	public List<SuitesDto> list(  ) throws JsonGenerationException, JsonMappingException, IOException {
  		
  		return suitesUtil.getAllSuites();
  	}
  	
  	//GET rest/suites/5
  	@GET
  	@Path("{id}")
  	@Produces(MediaType.APPLICATION_JSON)
  	public SuitesDto read( @PathParam("id") Long id) {
  		
  		return suitesUtil.getSuite(Ints.checkedCast(id));
  	}
  	
  	//POST rest/Suites/5
  	@POST
  	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
  	public SuitesDto create(SuitesDto suiteDto) throws JsonParseException, JsonMappingException, IOException {
  		
  		return suitesUtil.addUpdateSuite(suiteDto);
  	}
    
  	//POST rest/Suites
  	@POST
  	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
  	@Path("{id}")
  	public SuitesDto update(@PathParam("id") Long id, SuitesDto suiteDto) {

  		return suitesUtil.addUpdateSuite(suiteDto);
  	}
  	
  	//DELETE rest/Suites/5
  	@DELETE
  	@Produces(MediaType.APPLICATION_JSON)
  	@Path("{id}")
  	public void delete(@PathParam("id") String id) {
  		
  		@SuppressWarnings("unused")
		boolean res = suitesUtil.removeSuite(Integer.parseInt(id));
  	}
  	
}

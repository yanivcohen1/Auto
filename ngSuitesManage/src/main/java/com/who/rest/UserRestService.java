package com.who.rest;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.context.ApplicationContext;

import com.who.domain.User;
import com.who.domain.Users;
import com.who.rest.data.SuitesData;
import com.who.rest.data.SuitesDatas;
import com.who.rest.db.SuitesUtil;
import com.who.rest.db.TestsUtil;
import com.who.rest.db.model.Suites;
import com.who.rest.util.Common;
import com.who.service.UserService;

@Path("/suites")
public class UserRestService extends Common{

	private static final SuitesUtil suitesUtil = getApplicationContext().getBean(SuitesUtil.class);
    
  //http://localhost:8080/ngSuitesManage/rest/suites/readAllSuites/all
  	@GET
  	@Path("/readAllSuites")
  	@Produces(MediaType.APPLICATION_JSON)
  	public SuitesDatas readAllSuites(  ) throws JsonGenerationException, JsonMappingException, IOException {
  		
  		return suitesUtil.getAllSuites();
  	}
  	
  //http://localhost:8080/ngSuitesManage/rest/suites/updateSuites
  	@POST
  	@Path("/updateSuites")
  	@Consumes(MediaType.APPLICATION_JSON)
  	public Response updateSuites( SuitesDatas suitesDatas ) throws JsonParseException, JsonMappingException, IOException {
  		
  		suitesUtil.updateSuites(suitesDatas.getSuites());
  		return Response.status(200).entity(suitesDatas.getSuites().size()).build();
  	}
  	
  	//http://localhost:8080/ngSuitesManage/rest/suites/newSuite
  	@POST
  	@Path("/newSuite")
  	@Consumes(MediaType.APPLICATION_JSON)
  	public Response newSuite( SuitesData suitesData ) throws JsonParseException, JsonMappingException, IOException {
  		
  		suitesUtil.addSuite(suitesData.getSuiteName(), suitesData.getXmlFileLocation(), suitesData.getJenkinsURL());
  		return Response.status(200).entity(suitesData.getSuiteName()).build();
  	}
    
  //http://localhost:8080/ngSuitesManage/rest/suites/updateSuite
  	@POST
  	@Path("/updateSuite")
  	@Consumes(MediaType.APPLICATION_JSON)
  	public Response updateSuite( SuitesData suitesData ) throws JsonParseException, JsonMappingException, IOException {
  		
  		suitesUtil.updateSuite(suitesData.getSuiteName(), suitesData.getXmlFileLocation(), 
  				suitesData.getJenkinsURL(), suitesData.getSuiteId());
  		return Response.status(200).entity(suitesData.getSuiteName()).build();
  	}
  	
  //http://localhost:8080/ngSuitesManage/rest/suites/deleteSuite/{id}
  	@GET
  	@Path("/deleteSuite/{id}")
  	@Produces(MediaType.APPLICATION_JSON)
  	public Response deleteSuite( @PathParam("id") String id ) throws JsonGenerationException, JsonMappingException, IOException {
  		
  		boolean res = suitesUtil.removeSuite(Integer.parseInt(id));
  		return Response.status(200).entity(String.valueOf(res)).build();
  	}
  	
	//http://localhost:8080/ngSuitesManage/rest/suites/getTest
    @GET
    @Path("/getTest")
    @Produces(MediaType.APPLICATION_JSON)
    public Users getDefaultUserInJSON() {
        UserService userService = new UserService();
        User user1 = userService.getDefaultUser();
        UserService userService2 = new UserService();
        User user2 = userService2.getDefaultUser();
        user2.setFirstName("yaniv");
        Users users = new Users();
        users.getUsers().add(user1);
        users.getUsers().add(user2);
        return users;
    }
    
  //http://localhost:8080/ngSuitesManage/rest/suites/postTest
  	@POST
  	@Path("/postTest")
  	@Consumes(MediaType.APPLICATION_JSON)
  	public Response consumeJSON_StringTest( String test ) throws JsonParseException, JsonMappingException, IOException {
  		
  		System.out.println(test);
  		return Response.status(200).entity(test).build();
  	}
  	
}

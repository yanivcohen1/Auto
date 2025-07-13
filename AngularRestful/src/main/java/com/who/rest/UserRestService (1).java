package com.who.rest;

import java.io.IOException;
import java.util.Arrays;
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
import org.codehaus.jackson.type.TypeReference;
import org.springframework.context.ApplicationContext;

import com.who.domain.User;
import com.who.domain.Users;
import com.who.rest.db.Suites;
import com.who.rest.db.TestsUtil;
import com.who.rest.util.Common;
import com.who.service.UserService;

@Path("/users")
public class UserRestService extends Common{

	private static ApplicationContext context = getApplicationContext();
	private static final TestsUtil testsUtil = getTestsUtil();
	
	//http://localhost:8080/ngdemo/rest/users/test
    @GET
    @Path("/test")
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
    
  //http://localhost:8080/ngdemo/rest/users/print/all
  	@GET
  	@Path("/print/{name}")
  	@Produces(MediaType.APPLICATION_JSON)
  	public SuitesDatas produceJSON( @PathParam("name") String all ) throws JsonGenerationException, JsonMappingException, IOException {
  		
  		//String HQL = "select suitess from Suites as suitess "+ 
  		//		"where suitess.suitesId ='" + id + "' ";
  		String HQL = "select suitess from Suites as suitess "+ 
  				 "order by suitess.suiteName";
  		List<Suites> suites = getEntityManager().createQuery(HQL).getResultList();
  		List<SuitesData> SuitesDataList = getTestsUtil().convertSuitesToSuitesData(suites);
  		SuitesDatas SuitesDatas = new SuitesDatas();
  		SuitesDatas.getSuites().addAll(SuitesDataList);
  		return SuitesDatas;
  	}
  	
  	//http://localhost:8080/ngdemo/rest/users/send
  	@POST
  	@Path("/send")
  	@Consumes(MediaType.APPLICATION_JSON)
  	public Response consumeJSON_String(SuitesDatas suitesDatas ) throws JsonParseException, JsonMappingException, IOException {
  		
  		
  		List<Suites> suites = getTestsUtil().convertSuitesDataToSuites(suitesDatas.getSuites());
  		List<SuitesData> SuitesDataList = getTestsUtil().convertSuitesToSuitesData(suites);
  		String output = Integer.toString(SuitesDataList.size());
  		//ObjectMapper mapper = new ObjectMapper();
  		//String output = mapper.writeValueAsString(SuitesDataList);
  		//String output = mapper.writeValueAsString(suites);
  		return Response.status(200).entity(output).build();
  	}
    
}

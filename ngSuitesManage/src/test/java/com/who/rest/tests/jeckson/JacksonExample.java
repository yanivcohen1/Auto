package com.who.rest.tests.jeckson;
import java.io.File;
import java.io.IOException;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
 
public class JacksonExample {
    public static void main(String[] args) {
 
	User user = new User();
	user.setAge(5);
	user.setName("yaniv");
	ObjectMapper mapper = new ObjectMapper();
 
	try {
 
		// convert user object to json string, and save to a file
		//mapper.writeValue(new File("c:\\user.json"), user);
		String userString = mapper.writeValueAsString(user);
		// display to console
		System.out.println(userString);
 
		ObjectMapper mapper2 = new ObjectMapper();
		// read from file, convert it to user class
		User user2 = mapper2.readValue(userString, User.class);
 
		// display to console
		System.out.println(mapper.writeValueAsString(user2));
				
	} catch (Exception e) {
		e.printStackTrace();
	}
 
  }
 
}
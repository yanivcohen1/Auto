package sample.hello.resources;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import sample.hello.bean.Address;
import sample.hello.bean.Contact;
import sample.hello.storage.ContactStore;

//http://localhost:8080/RestfulAPI/rest/hello/ID=1&Name=yaniv
@Path("/hello")
public class HelloResource {
	@Context
	UriInfo uriInfo;
	
//	@GET
//	@Produces(MediaType.TEXT_PLAIN)
//	public String sayHello() {
//		return "Hello Yaniv";
//	}
	
	@GET
	@Path("{contact}")
	//@Produces(MediaType.TEXT_HTML)
	@Produces(MediaType.TEXT_PLAIN)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String newContact(
			@PathParam("contact") String contact
			//@FormParam("id") String id,
			//@FormParam("name") String name
			//@Context HttpServletResponse servletResponse
	) throws IOException {
		return "Hello Yaniv you insert: " + contact;
//		Contact c = new Contact(id,name,new ArrayList<Address>());
//		ContactStore.getStore().put(id, c);
//		
//		URI uri = uriInfo.getAbsolutePathBuilder().path(id).build();
//		Response.created(uri).build();
//		
//		servletResponse.sendRedirect("../pages/new_contact.html");
	}
}

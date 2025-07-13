package org.gradle;

//import org.apache.commons.collections.list.GrowthList;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class WD_Server {

	  public static void main(String[] args) throws Exception {
	    HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
	    server.createContext("/info", new InfoHandler());
	    server.createContext("/get", new GetHandler());
	    server.createContext("/GetLastReadDate", new LastReadDateHandler());
	    server.setExecutor(null); // creates a default executor
	    server.start();
	    System.out.println("The server is running");
	  }

	// http://localhost:8000/GetLastReadDate
		  static class LastReadDateHandler implements HttpHandler {
		    public void handle(HttpExchange httpExchange) throws IOException {
		    	// the string representation of date (month/day/year)
		    	DateFormat df = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");

		    	// Get the date today using Calendar object.
		    	Date today = Calendar.getInstance().getTime();        
		    	// Using DateFormat format method we can create a string 
		    	// representation of a date with the defined format.
		    	String reportDate = df.format(today);
		    	// Print what date is today!
		    	Date date = null;
		    	try {
					date = df.parse(reportDate);
				} catch (ParseException e) {
					
				}
		    	System.out.println("Send" + df.format(date));
		    	//String response = "Use /get?hello=word&foo=bar to see how to handle url parameters";
		    	WD_Server.writeResponse(httpExchange, reportDate);
		    }
		  }
	  
	  // http://localhost:8000/info
	  static class InfoHandler implements HttpHandler {
	    public void handle(HttpExchange httpExchange) throws IOException {
	      String response = "Use /get?hello=word&foo=bar to see how to handle url parameters";
	      WD_Server.writeResponse(httpExchange, response.toString());
	    }
	  }

	  //http://localhost:8000/get?hello=word&foo=bar
	  static class GetHandler implements HttpHandler {
	    public void handle(HttpExchange httpExchange) throws IOException {
	      StringBuilder response = new StringBuilder();
	      Map <String,String>parms = WD_Server.queryToMap(httpExchange.getRequestURI().getQuery());
	      response.append("<html><body>");
	      response.append("hello : " + parms.get("hello") + "<br/>");
	      response.append("foo : " + parms.get("foo") + "<br/>");
	      response.append("</body></html>");
	      WD_Server.writeResponse(httpExchange, response.toString());
	    }
	  }

	  public static void writeResponse(HttpExchange httpExchange, String response) throws IOException {
	    httpExchange.sendResponseHeaders(200, response.length());
	    OutputStream os = httpExchange.getResponseBody();
	    os.write(response.getBytes());
	    os.close();
	  }


	  /**
	   * returns the url parameters in a map
	   * @param query
	   * @return map
	   */
	  public static Map<String, String> queryToMap(String query){
	    Map<String, String> result = new HashMap<String, String>();
	    for (String param : query.split("&")) {
	        String pair[] = param.split("=");
	        if (pair.length>1) {
	            result.put(pair[0], pair[1]);
	        }else{
	            result.put(pair[0], "");
	        }
	    }
	    return result;
	  }

	}

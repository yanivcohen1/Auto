package com.who.mail;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

//import org.junit.Test;




import org.testng.annotations.Test;

import com.google.common.collect.Multimap;

import static org.junit.Assert.*;

public class HtmlParserTest {
    @Test
    public void readLinksTest() throws IOException {
    	//String test = "http://t.my.williamhill.com/r/?id=t3715ef06,d1439c3,d1446e6";
        //Person person = new Person("Larry");
        //assertEquals("Larry", person.getName());
    	URL uRLnew = null;
    	System.out.println(uRLnew);
    	String htmlContent = "";
    	HtmlParse htmlParse = new HtmlParse();
    	BufferedReader br = new BufferedReader(new FileReader(
				"C:\\Temp\\Welcome to William Hill Scratchcards.htm"));
		String line;
		while ((line = br.readLine()) != null) {
			htmlContent = htmlContent + line;
		}
		br.close();
		List<URL> links = htmlParse.readLinks(htmlContent);
		assertTrue("no links", links.size() != 0);
		//Multimap<Integer, URL> linksMap = htmlParse.fillStatus(links);
		//String mailContent = htmlParse.buildEmail(linksMap);
		//System.out.println(mailContent);
    }
    
    @Test
    public void redirectTest() throws IOException {
    	URL url = new URL("http://t.my.williamhill.com/r/?id=t3804cade,d3066b7,d306736");
	    HttpURLConnection connection = (HttpURLConnection)url.openConnection();
		connection.setRequestMethod("GET");
		connection.connect();
		InputStream is = connection.getInputStream();
		URL urlRet = connection.getURL();
		int code = connection.getResponseCode();
		System.out.println(url);
		System.out.println(urlRet);
		System.out.println(code);
    }
}

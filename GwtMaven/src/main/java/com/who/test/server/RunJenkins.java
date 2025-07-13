package com.who.test.server;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.commons.io.FileUtils;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;

public class RunJenkins {

	private String xmlFileLocation;
	private String jenkinsURL;
	
	public String getXmlFileLocation() {
		return xmlFileLocation;
	}

	public String getJenkinsURL() {
		return jenkinsURL;
	}

	public void setJenkinsURL(String jenkinsURL) {
		this.jenkinsURL = jenkinsURL;
	}

	public void setXmlFileLocation(String xmlFileLocation) {
		this.xmlFileLocation = xmlFileLocation;
	}
	
	public void runJenkinsSelectedTests(String xmlContent) throws IOException{
		
		Path path = Paths.get(xmlFileLocation);
		String file = path.getFileName().toString();
		File folder = path.getParent().toFile();
		Common.RunProcces(folder, "svn" , "revert "+ file);
		FileUtils.writeStringToFile(path.toFile(), xmlContent);
		Common.RunProcces(folder, "svn", "commit --force-log --file "+ file);
		runTest(getJenkinsURL()+ "build?token=RUN");
	}
	
	public void runTest(String testURL) throws IOException {
	        HttpClient client = new HttpClient();

	        //String hostName = "http://localhost:8080/";
	        GetMethod runMethod = new GetMethod(testURL);//hostName+"loginEntry");
	        client.executeMethod(runMethod);
	        checkResult(runMethod.getStatusCode());

	      /*String location = hostName+"j_security_check";
	        while(true) {
	            PostMethod loginMethod = new PostMethod(location);
	            loginMethod.addParameter("j_username", "username"); // TODO: replace with real user name and password
	            loginMethod.addParameter("j_password", "password");
	            loginMethod.addParameter("action", "login");
	            client.executeMethod(loginMethod);
	            if(loginMethod.getStatusCode()/100==3) {
	                // Commons HTTP client refuses to handle redirects for POST
	                // so we have to do it manually.
	                location = loginMethod.getResponseHeader("Location").getValue();
	                continue;
	            }
	            checkResult(loginMethod.getStatusCode());
	            break;
	        }

	        HttpMethod method = new GetMethod(hostName+"log");
	        client.executeMethod(method);
	        checkResult(method.getStatusCode());*/

	        //System.out.println(runMethod.getResponseBodyAsString());
	    }

	    private static void checkResult(int i) throws IOException {
	        if(i/100!=2)
	            throw new IOException();
	    }
	
}

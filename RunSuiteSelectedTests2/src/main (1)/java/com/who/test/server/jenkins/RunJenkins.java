package com.who.test.server.jenkins;

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

import com.who.test.server.util.Common;
import com.who.test.server.util.Utility;

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
	
	public void runJenkinsSelectedTests(String xmlContent, String suiteName) throws IOException{
		
		Path path = Paths.get(xmlFileLocation);
		String file = path.getFileName().toString();
		File folder = path.getParent().toFile();
		Utility.RunProcces(folder, "svn" , "update "+ file);
		Utility.RunProcces(folder, "svn" , "revert "+ file);
		FileUtils.writeStringToFile(path.toFile(), xmlContent);
		Utility.RunProcces(folder, "svn", "commit --force-log --file "+ file);
		runTest(getJenkinsURL()+ "build?token=RUN");
	}
	
	public void runTest(String testURL) throws IOException {
	        HttpClient client = new HttpClient();

	        //String hostName = "http://localhost:8080/";
	        GetMethod runMethod = new GetMethod(testURL);//hostName+"loginEntry");
	        client.executeMethod(runMethod);
	        checkResult(runMethod.getStatusCode());
	    }

	    private static void checkResult(int i) throws IOException {
	        if(i/100!=2)
	            throw new IOException();
	    }
	
}

package com.who.rest.dto;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

//import com.google.gwt.user.client.rpc.IsSerializable;

@XmlRootElement
public class SuitesData {

	//public enum Command { GetSuits, GetTests, RunTests};
	private List<String> suiteNames = new ArrayList<String>();
	private List<String> testsName = new ArrayList<String>();;
	private String suiteName;
	private String testContent;
	private String testName;

	public String getTestContent() {
		return testContent;
	}

	public void setTestContent(String testContent) {
		this.testContent = testContent;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public String getSuiteName() {
		return suiteName;
	}

	public void setSuiteName(String suiteName) {
		this.suiteName = suiteName;
	}

	public List<String> getTestsName() {
		return testsName;
	}

	public void setTestsName(List<String> testName) {
		this.testsName = testName;
	}
	
	public List<String> getSuiteNames() {
		return suiteNames;
	}

	public void setSuiteNames(List<String> suiteNames) {
		this.suiteNames = suiteNames;
	}
}

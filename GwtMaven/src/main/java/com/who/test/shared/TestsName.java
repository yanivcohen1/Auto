package com.who.test.shared;

import java.util.List;

import com.google.gwt.user.client.rpc.IsSerializable;

public class TestsName implements IsSerializable {

	private List<String> testName;
	private String suiteName;

	public String getSuiteName() {
		return suiteName;
	}

	public void setSuiteName(String suiteName) {
		this.suiteName = suiteName;
	}

	public List<String> getTestName() {
		return testName;
	}

	public void setTestName(List<String> testName) {
		this.testName = testName;
	}
	
}

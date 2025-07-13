package com.who.test.shared;

import java.util.List;

import com.google.gwt.user.client.rpc.IsSerializable;

public class SuitesData implements IsSerializable {

	public enum Command { GetSuits, GetTests, RunTests};
	private List<String> suiteNames;
	private List<String> testsName;
	private String suiteName;
	private Command command;

	public Command getCommand() {
		return command;
	}

	public void setCommand(Command command) {
		this.command = command;
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

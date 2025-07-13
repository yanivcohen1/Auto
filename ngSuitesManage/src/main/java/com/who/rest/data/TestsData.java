package com.who.rest.data;

import java.util.Date;
import java.util.List;

import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonSerialize()
public class TestsData {
	
	private Integer suiteId;
	private String suiteName;
	private Integer testId;
    private String testName;
    private List<Integer> parametersIDs;
    private List<String> parametersNames;
    private List<String> parametersValues;
    private List<Integer> classesIDs;
    private List<String> classesNames;
    
	public Integer getSuiteId() {
		return suiteId;
	}
	
	public void setSuiteId(Integer suiteId) {
		this.suiteId = suiteId;
	}
	
	public String getSuiteName() {
		return suiteName;
	}
	
	public void setSuiteName(String suiteName) {
		this.suiteName = suiteName;
	}
	
	public Integer getTestId() {
		return testId;
	}
	
	public void setTestId(Integer testId) {
		this.testId = testId;
	}
	
	public String getTestName() {
		return testName;
	}
	
	public void setTestName(String testName) {
		this.testName = testName;
	}
	
	public List<Integer> getParametersIDs() {
		return parametersIDs;
	}
	
	public void setParametersIDs(List<Integer> parametersIDs) {
		this.parametersIDs = parametersIDs;
	}
	
	public List<String> getParametersNames() {
		return parametersNames;
	}
	
	public void setParametersNames(List<String> parametersNames) {
		this.parametersNames = parametersNames;
	}
	
	public List<String> getParametersValues() {
		return parametersValues;
	}
	
	public void setParametersValues(List<String> parametersValues) {
		this.parametersValues = parametersValues;
	}
	
	public List<Integer> getClassesIDs() {
		return classesIDs;
	}
	
	public void setClassesIDs(List<Integer> classesIDs) {
		this.classesIDs = classesIDs;
	}
	
	public List<String> getClassesNames() {
		return classesNames;
	}
	
	public void setClassesNames(List<String> classesNames) {
		this.classesNames = classesNames;
	}

	public TestsData(Integer suiteId, String suiteName, Integer testId,
			String testName, List<Integer> parametersIDs,
			List<String> parametersNames, List<String> parametersValues,
			List<Integer> classesIDs, List<String> classesNames) {

		this.suiteId = suiteId;
		this.suiteName = suiteName;
		this.testId = testId;
		this.testName = testName;
		this.parametersIDs = parametersIDs;
		this.parametersNames = parametersNames;
		this.parametersValues = parametersValues;
		this.classesIDs = classesIDs;
		this.classesNames = classesNames;
	}

	public TestsData(String suiteName, String testName,
			List<String> parametersNames, List<String> parametersValues,
			List<String> classesNames) {

		this.suiteName = suiteName;
		this.testName = testName;
		this.parametersNames = parametersNames;
		this.parametersValues = parametersValues;
		this.classesNames = classesNames;
	}

	public TestsData(){
		
	}
	
}

package com.who.rest.dto;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TestsDatasf {

	List<TestsDataFlat> testsFlat = new ArrayList<TestsDataFlat>();
	
	public List<TestsDataFlat> getTestsFlat() {
		return testsFlat;
	}

	public void setTestsFlat(List<TestsDataFlat> testsFlat) {
		this.testsFlat = testsFlat;
	}
	
}

package com.who.rest;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class SuitesDatas {

	List<SuitesData> Suites = new ArrayList<SuitesData>();

	public List<SuitesData> getSuites() {
		return Suites;
	}

	public void setSuites(List<SuitesData> suites) {
		Suites = suites;
	}

	
}

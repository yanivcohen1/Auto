package com.who.rest.dto;

import javax.xml.bind.annotation.XmlRootElement;

import com.who.rest.service.SuitesUtil;
import com.who.rest.util.Common;

@XmlRootElement
public class SuitesDto {
	
	private Integer suiteId ;
	private String suiteName ;
    private String xmlFileLocation ;
    private String jenkinsURL;
    
    private static final SuitesUtil suitesUtil = Common.getApplicationContext().getBean(SuitesUtil.class);
    
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
	public String getXmlFileLocation() {
		return xmlFileLocation;
	}
	public void setXmlFileLocation(String xmlFileLocation) {
		this.xmlFileLocation = xmlFileLocation;
	}
	public String getJenkinsURL() {
		return jenkinsURL;
	}
	public void setJenkinsURL(String jenkinsURL) {
		this.jenkinsURL = jenkinsURL;
	}

}
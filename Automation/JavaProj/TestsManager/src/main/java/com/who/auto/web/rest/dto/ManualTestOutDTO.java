package com.who.auto.web.rest.dto;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

//@XmlRootElement
public class ManualTestOutDTO {

	private String outUrl;
	private String expectedUrl;
	private boolean status;
	
	public String getExpectedUrl() {
		return expectedUrl;
	}
	public void setExpectedUrl(String expectedUrl) {
		this.expectedUrl = expectedUrl;
	}
	public String getOutUrl() {
		return outUrl;
	}
	public void setOutUrl(String outUrl) {
		this.outUrl = outUrl;
	}
	
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
}

package com.who.auto.web.rest.dto;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

//@XmlRootElement
public class ManualTestIn {

	private String sesion;
	private String inUrl;
	private String expectedUrl;
	
	public String getSesion() {
		return sesion;
	}
	public void setSesion(String sesion) {
		this.sesion = sesion;
	}
	public String getInUrl() {
		return inUrl;
	}
	public void setInUrl(String inUrl) {
		this.inUrl = inUrl;
	}
	public String getExpectedUrl() {
		return expectedUrl;
	}
	public void setExpectedUrl(String expectedUrl) {
		this.expectedUrl = expectedUrl;
	}
	
}

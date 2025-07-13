package com.yan.manag.service.dto;

import java.util.List;

public class RunTestsDTO {

	private int data;
	private String label;
	private List<RunTestsDTO> children;
	public int getData() {
		return data;
	}
	public void setData(int data) {
		this.data = data;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public List<RunTestsDTO> getChildren() {
		return children;
	}
	public void setChildren(List<RunTestsDTO> children) {
		this.children = children;
	}
	
}

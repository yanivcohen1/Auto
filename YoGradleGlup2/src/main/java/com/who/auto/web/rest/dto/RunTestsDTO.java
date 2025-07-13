package com.who.auto.web.rest.dto;

import java.util.List;

public class RunTestsDTO {

	private int id;
	private String title;
	private List<RunTestsDTO> nodes;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public List<RunTestsDTO> getNodes() {
		return nodes;
	}
	public void setNodes(List<RunTestsDTO> nodes) {
		this.nodes = nodes;
	}
	
}

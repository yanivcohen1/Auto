package com.yan.manag.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "senario")
public class Senario{
	
	@Id
    private String id;
	private String _id2;
	private String description;
	private String name;
    private List<Step> steps;
    private int status;
    private List<String> tags;
    private String testingTip;
	private String envirment;
    private String pictureName;
    private int line;
    
    public String get_id() {
		return _id2;
	}
	public void set_id(String _id) {
		this._id2 = _id;
	}
	public int getLine() {
		return line;
	}
	public void setLine(int line) {
		this.line = line;
	}
	public List<Step> getSteps() {
		return steps;
	}
	public void setSteps(List<Step> steps) {
		this.steps = steps;
	}
	public String getTestingTip() {
		return testingTip;
	}
	public void setTestingTip(String testingTip) {
		this.testingTip = testingTip;
	}
	public String getEnvirment() {
		return envirment;
	}
	public void setEnvirment(String envirment) {
		this.envirment = envirment;
	}
	public String getPictureName() {
		return pictureName;
	}
	public void setPictureName(String pictureName) {
		this.pictureName = pictureName;
	}
    
    public List<String> getTags() {
		return tags;
	}
	public void setTags(List<String> tags) {
		this.tags = tags;
	}
    public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
    
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
    
    public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Step> getBrands() {
		return steps;
	}
	public void setBrands(List<Step> steps) {
		this.steps = steps;
	}

}

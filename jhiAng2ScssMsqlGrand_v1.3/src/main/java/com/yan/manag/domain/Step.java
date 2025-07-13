package com.yan.manag.domain;

import java.io.Serializable;
import java.time.Instant;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "step")
public class Step implements Serializable {

    private static final long serialVersionUID = 1L;
    
	@Id
    private String id;
	private String name;
	private String status;
	private String errorMsg;
	private Instant time;
	private boolean hidden;
	private int duration;
	private String location;
	private int line;
	private boolean isBackground;
	private List<Embedding> Embeddings;
	
	public List<Embedding> getEmbeddings() {
		return Embeddings;
	}
	public void setEmbeddings(List<Embedding> embeddings) {
		Embeddings = embeddings;
	}
	public boolean isBackground() {
		return isBackground;
	}
	public void setBackground(boolean isBackground) {
		this.isBackground = isBackground;
	}
	public int getLine() {
		return line;
	}
	public void setLine(int line) {
		this.line = line;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String isStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public boolean isHidden() {
		return hidden;
	}
	public void setHidden(boolean hidden) {
		this.hidden = hidden;
	}
	public List<Embedding> getEmbedding() {
		return embedding;
	}
	public void setEmbedding(List<Embedding> embedding) {
		this.embedding = embedding;
	}
	private List<Embedding> embedding;
	
   public Instant getTime() {
		return time;
	}
	public void setTime(Instant time) {
		this.time = time;
	}
	/*@JsonIgnore	
   public Step(String id, String name, int status, String errorMsg) {
		this.name = name;
		this.status = status;
		this.errorMsg = errorMsg;
		this.id = id;
	}*/
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
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

}

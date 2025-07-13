package com.yan.manag.domain;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Document(collection = "embedding")
public class Embedding implements Serializable {

    private static final long serialVersionUID = 1L;
    
	@Id
    private String fileID;
	private String mime_type;
	private String message;
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getFileID() {
		return fileID;
	}
	public void setFileID(String fileID) {
		this.fileID = fileID;
	}
	public String getMime_type() {
		return mime_type;
	}
	public void setMime_type(String mime_type) {
		this.mime_type = mime_type;
	}
	
}

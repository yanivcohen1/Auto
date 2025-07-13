package com.yan.manag.domain;

import java.time.Instant;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@org.springframework.data.mongodb.core.mapping.Document(collection = "customer")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "customer")
public class Customer {

    @Id
    public String id;

    public String name;
    public String description;
    private Instant time;
	
    public Instant getTime() {
 		return time;
 	}
 	public void setTime(Instant time) {
 		this.time = time;
 	}

    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", description=" + description + ", time=" + time + "]";
	}

}


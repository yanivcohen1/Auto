package com.yan.manag.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

@org.springframework.data.mongodb.core.mapping.Document(collection = "product")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "product")
public class Product{
	
	@Id
    private String id;
	private String name;
	private String description;
	@DBRef
    private List<Customer> customers;
	
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

    public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public List<Customer> getCustomers() {
		return customers;
	}
	public void setCustomers(List<Customer> customers) {
		this.customers = customers;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

}

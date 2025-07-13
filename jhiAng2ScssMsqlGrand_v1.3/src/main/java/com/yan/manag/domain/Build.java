package com.yan.manag.domain;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;


@org.springframework.data.mongodb.core.mapping.Document(collection = "build")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "build")
public class Build{
	
	@Id
    private String id;
	private Customer customer;
	private String description;
	private String name;
    private List<Feature> features;
    private Product product;
    private LocalDate loadTime;
    private LocalDate saveTime;
    private boolean last;
    
    public LocalDate getLoadTime() {
		return loadTime;
	}
	public void setLoadTime(LocalDate loadTime) {
		this.loadTime = loadTime;
	}
	public LocalDate getSaveTime() {
		return saveTime;
	}
	public void setSaveTime(LocalDate saveTime) {
		this.saveTime = saveTime;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public boolean isLast() {
		return last;
	}
	public void setLast(boolean last) {
		this.last = last;
	}
	public List<Feature> getFeatures() {
		return features;
	}
	public void setFeaturess(List<Feature> features) {
		this.features = features;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
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

}

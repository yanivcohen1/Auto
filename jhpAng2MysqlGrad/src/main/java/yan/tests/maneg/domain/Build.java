package yan.tests.maneg.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


public class Build{
	
	@Id
    private String id;
	private String description;
	private String name;
    private List<Feature> features;
    private Product product;
    
    public List<Feature> getFeatures() {
		return features;
	}
	public void setFeatures(List<Feature> features) {
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
	public List<Feature> getBrands() {
		return features;
	}
	public void setBrands(List<Feature> brand) {
		this.features = brand;
	}

}

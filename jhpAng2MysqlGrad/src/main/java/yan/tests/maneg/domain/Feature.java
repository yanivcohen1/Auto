package yan.tests.maneg.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


public class Feature{
	
	@Id
    private String id;
	private String description;
	private String name;
    private List<Senario> senario;
    private int status;
    private List<String> tags;
    
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
	public List<Senario> getSenario() {
		return senario;
	}
	public void setSenario(List<Senario> senario) {
		this.senario = senario;
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
	public List<Senario> getBrands() {
		return senario;
	}
	public void setBrands(List<Senario> brand) {
		this.senario = brand;
	}

}

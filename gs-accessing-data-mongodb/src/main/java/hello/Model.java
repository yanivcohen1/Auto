package hello;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="models")
public class Model{
	
    @Override
	public String toString() {
		return "Model [name=" + name + ", brands=" + brands + "]";
	}
	public Model(String name, List<Brand> brands) {
		this.name = name;
		this.brands = brands;
	}
    
	@Id
    private String id;
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	private String name;
    @DBRef
    private List<Brand> brands;
    
    public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Brand> getBrands() {
		return brands;
	}
	public void setBrands(List<Brand> brand) {
		this.brands = brand;
	}

}

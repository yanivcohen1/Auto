package lankydan.tutorial.mongodb.documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection="brands")
public class Brand{
    
	public Brand(String name) {
		this.name = name;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Brand [name=" + name + "]";
	}
    
}

package hello;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="brands")
public class Brand{

	public Brand(String name, Date date) {
		this.date = date;
		this.name = name;
	}

	@Id
    private String id;
	private Date date;
	
    public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

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
		return "Brand [date=" + date + ", name=" + name + "]";
	}
    
}

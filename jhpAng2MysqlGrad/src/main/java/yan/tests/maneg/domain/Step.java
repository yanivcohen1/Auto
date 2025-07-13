package yan.tests.maneg.domain;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Document(indexName = "step")
public class Step implements Serializable {

    private static final long serialVersionUID = 1L;
    
	@Id
    private String id;
	private String name;
	private int status;
	private String errorMsg;
	private Instant time;
	
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
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
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

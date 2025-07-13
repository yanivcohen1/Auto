/*package hello;

import java.util.HashSet;
import java.util.Set;


import javax.persistence.Entity;
//import javax.persistence.OneToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

//@Entity
@Table(name = "Person")
public class Person {

	@Id private String id;

	private String firstName;
	private String lastName;
	
	@OneToMany(mappedBy = "person")
    @JsonIgnore
    private Set<Tests> testss = new HashSet<>();
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
*/
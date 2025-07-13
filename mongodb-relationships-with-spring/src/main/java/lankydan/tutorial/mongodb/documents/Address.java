package lankydan.tutorial.mongodb.documents;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@Document(collection = "addresses")
public class Address {

	@Override
	public String toString() {
		return "Address [addressLineOne=" + addressLineOne + ", addressLineTwo=" + addressLineTwo + ", city=" + city
				+ ", country=" + country + "]";
	}

	private String addressLineOne;
	private String addressLineTwo;
	private String city;
	private String country;

	public Address(final String addressLineOne, final String addressLineTwo, final String city, final String country) {
		this.addressLineOne = addressLineOne;
		this.addressLineTwo = addressLineTwo;
		this.city = city;
		this.country = country;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

}

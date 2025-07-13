package model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2015-06-13T15:18:40.978+0300")
@StaticMetamodel(Address.class)
public class Address_ {
	public static volatile SingularAttribute<Address, String> street;
	public static volatile SingularAttribute<Address, String> city;
	public static volatile SingularAttribute<Address, String> province;
	public static volatile SingularAttribute<Address, String> country;
	public static volatile SingularAttribute<Address, String> postalCode;
}

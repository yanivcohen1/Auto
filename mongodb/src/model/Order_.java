package model;

import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2015-06-13T15:18:41.022+0300")
@StaticMetamodel(Order.class)
public class Order_ {
	public static volatile SingularAttribute<Order, String> id;
	public static volatile SingularAttribute<Order, Long> version;
	public static volatile SingularAttribute<Order, String> description;
	public static volatile SingularAttribute<Order, Double> totalCost;
	public static volatile SingularAttribute<Order, Address> billingAddress;
	public static volatile SingularAttribute<Order, Address> shippingAddress;
	public static volatile ListAttribute<Order, OrderLine> orderLines;
	public static volatile SingularAttribute<Order, Customer> customer;
}

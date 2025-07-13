package model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2015-06-13T15:18:41.023+0300")
@StaticMetamodel(OrderLine.class)
public class OrderLine_ {
	public static volatile SingularAttribute<OrderLine, Integer> lineNumber;
	public static volatile SingularAttribute<OrderLine, String> description;
	public static volatile SingularAttribute<OrderLine, Double> cost;
}

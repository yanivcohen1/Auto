package com.who.test.server.db.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2014-06-22T12:56:32.260+0300")
@StaticMetamodel(Suites.class)
public class Suites_ {
	public static volatile SingularAttribute<Suites, Integer> suitesId;
	public static volatile SingularAttribute<Suites, String> suiteName;
	public static volatile SetAttribute<Suites, Tests> testses;
	public static volatile SingularAttribute<Suites, String> xmlFileLocation;
	public static volatile SingularAttribute<Suites, String> jenkinsURL;
}

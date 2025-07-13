package com.who.rest.db;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2014-06-15T13:44:07.561+0300")
@StaticMetamodel(Tests.class)
public class Tests_ {
	public static volatile SingularAttribute<Tests, Integer> testsId;
	public static volatile SingularAttribute<Tests, Suites> suites;
	public static volatile SingularAttribute<Tests, String> testName;
	public static volatile SetAttribute<Tests, Parameters> parameterses;
	public static volatile SetAttribute<Tests, Classe> classes;
}

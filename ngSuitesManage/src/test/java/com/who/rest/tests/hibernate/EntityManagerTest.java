package com.who.rest.tests.hibernate;

import com.who.rest.db.model.Classe;
import com.who.rest.db.model.Suites;

public class EntityManagerTest extends BaseTest {

	public void testLeerEntityManager() throws Exception {
		// No hacemos nada. Se ejecuta el validador de hibernate

		Suites suites = getEntityManager().find(Suites.class, 1);
		System.out.println(suites.getSuiteName());
	}

}

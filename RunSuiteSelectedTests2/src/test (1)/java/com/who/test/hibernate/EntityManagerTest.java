package com.who.test.hibernate;

import com.who.test.server.db.model.Suites;


public class EntityManagerTest extends BaseTest {

	public void testLeerEntityManager() throws Exception {

		Suites suites = getEntityManager().find(Suites.class, 1);
		System.out.println(suites.getSuiteName());
	}

}

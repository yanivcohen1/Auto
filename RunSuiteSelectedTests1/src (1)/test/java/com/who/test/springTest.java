package com.who.test;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;

import org.springframework.context.ApplicationContext;

import com.who.test.server.db.TestsUtil;
import com.who.test.server.util.Common;
import com.who.test.shared.Suites;

public class springTest {
	
	@PersistenceContext
	private static EntityManager entityManager;
	
	public static void main(String[] args) {
		//entityManager = Persistence.createEntityManagerFactory("RunSuiteSelectedTests").createEntityManager();
		//String HQL = "select suitess from Suites as suitess "+ 
		//     	 "order by suitess.suiteName";

		//@SuppressWarnings({ "unchecked", "unused" })
		//List<Suites> suites = entityManager.createQuery(HQL).getResultList();
		ApplicationContext context = Common.getApplicationContext();
		TestsUtil testsUtil = context.getBean(TestsUtil.class);
		testsUtil.getAllSuits(null);
	}
	
}

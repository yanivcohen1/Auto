package com.who.test;


import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.springframework.context.ApplicationContext;
import org.testng.annotations.*;

import com.who.test.server.util.Common;



public abstract class BaseTest {

	private static Map<String, EntityManagerFactory> emfPUs = new HashMap<String, EntityManagerFactory>();

	//private EntityManagerFactory entityManagerFactory;
	private ApplicationContext context;

	@BeforeClass
	protected void setUp() throws Exception {
		context = Common.getApplicationContext();
	}

	@AfterClass
	protected void tearDown() throws Exception {
		Common.getEntityManager().close();
	}

}

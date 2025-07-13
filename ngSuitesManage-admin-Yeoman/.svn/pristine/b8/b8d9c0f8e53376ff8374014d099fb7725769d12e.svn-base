package com.who.rest.tests.testService;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import com.who.rest.util.Common;

import junit.framework.TestCase;

@ContextConfiguration("file:src/main/resources/applicationContext.xml")
public class BaseTest extends AbstractTestNGSpringContextTests {
 
	@Autowired
	protected static ApplicationContext ac;

	@BeforeClass
	protected void setUp() {
		Common.setApplicationContext(ac);
	}

	@AfterClass
	protected void tearDown() {

	}

}

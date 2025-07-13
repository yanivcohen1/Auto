package com.who.test;

import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.Test;

import com.who.test.server.db.TestsUtil;
import com.who.test.server.db.model.Suites;
import com.who.test.server.util.Common;

@ContextConfiguration("file:src/main/resources/applicationContext.xml")
public class springTest extends AbstractTestNGSpringContextTests {
	
	@Autowired
	protected ApplicationContext context;
	 
	@Test
	public void springTest() {
		TestsUtil testsUtil = context.getBean(TestsUtil.class);
		List<String> suitesNames = testsUtil.getAllSuitesNames();
		System.out.println(Arrays.toString(suitesNames.toArray()));
		org.testng.Assert.assertTrue(suitesNames != null, "Spring fail");
	}
	
}

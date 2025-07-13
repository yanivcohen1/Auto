package com.who.test.server;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

import com.who.test.client.MainService;
import com.who.test.server.db.BuildTests;
import com.who.test.server.db.EntityUtil;
import com.who.test.server.db.Tests;
import com.who.test.shared.FieldVerifier;
import com.who.test.shared.TestsName;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class MainServiceImpl extends RemoteServiceServlet implements
		MainService {

	@Autowired
	private static EntityUtil entityUtil;
	
	//@PersistenceContext
	private static EntityManager entityManager = Common.getEntityManager();
	
	@Override
	public String[] runTests(TestsName testsName) {
		//ApplicationContext context = Common.getApplicationContext();
		//entityUtil = context.getBean(EntityUtil.class);
		//entityManager = entityUtil.getEntityManager();
		String HQL = "select testss from Tests as testss "+ 
				     "where testss.suites.suiteName ='"+testsName.getSuiteName()+"' "+
				     "order by testss.testName";

		List<Tests> tests = entityManager.createQuery(HQL).getResultList();
		
		List<String> returnList = new ArrayList<String>();
		if (testsName.getTestName().get(0).equals("")) {
			for (Tests test : tests) {
				returnList.add(test.getTestName());
			}
		}else{	
			try {
				String xmlSuiteContent = BuildTests.buildTestsXML(testsName);
				GWT.log(xmlSuiteContent);
				RunJenkins runJenkins = Common.getApplicationContext().getBean(RunJenkins.class);
				runJenkins.runJenkinsSelectedTests(xmlSuiteContent);
				returnList.add(runJenkins.getJenkinsURL());//"pass");
			} catch (Exception e) {
				throw new IllegalArgumentException("Name must be at least 1 characters long");
			}
		}
		String[] returnArray = new String[returnList.size()];
		returnList.toArray(returnArray); // fill the array
		return returnArray;
	}

	/**
	 * Escape an html string. Escaping data received from the client helps to
	 * prevent cross-site script vulnerabilities.
	 * 
	 * @param html the html string to escape
	 * @return the escaped string
	 */
	private String escapeHtml(String html) {
		if (html == null) {
			return null;
		}
		return html.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
				.replaceAll(">", "&gt;");
	}
}

package com.who.test;

import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.context.ApplicationContext;

import com.who.test.server.MainServiceImpl;
import com.who.test.server.db.model.Classe;
import com.who.test.server.db.model.Parameters;
import com.who.test.server.db.model.Suites;
import com.who.test.server.db.model.Tests;
import com.who.test.server.util.Common;
import com.who.test.shared.SuitesData;
import com.who.test.shared.TestsData;
import com.who.test.shared.SuitesData.Command;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = Common.getApplicationContext();
		MainServiceImpl msi = new MainServiceImpl();
		List<TestsData> ld = msi.GetTests();
		System.out.println(ld.size());
		//SuitesData testsName = new SuitesData();
		//testsName.setSuiteName("BAU Tests");
		//testsName.setTestsName(Arrays.asList("Affutd"));
		//testsName.setCommand(Command.GetSuits);
		//msi.runTests(testsName);
	}
	
	public List<Tests> getTestsEM() {
		List<Tests> testss = null;
		try {
			EntityManager entityManager = Common.getEntityManager();
			Session session = (Session) entityManager.getDelegate();
			session.beginTransaction();
			
			Suites suites = new Suites();
			suites.setSuiteName("Suite1");
			entityManager.persist(suites);
			
			Tests test = new Tests();
			test.setTestName("test1");
			test.setSuites(suites);
			suites.getTestses().add(test);
			entityManager.persist(test);
			
			Classe classes = new Classe(test,"who.class1");
			test.getClasses().add(classes);
			entityManager.persist(classes);
			Classe classes2 = new Classe(test,"who.class2");
			test.getClasses().add(classes2);
			entityManager.persist(classes2);
			Parameters parameters = new Parameters(test, "param1", "val1");
			test.getParameterses().add(parameters);
			entityManager.persist(parameters);
			Parameters parameters2 = new Parameters(test, "param2", "val2");
			test.getParameterses().add(parameters2);
			entityManager.persist(parameters2);
			session.getTransaction().commit();
			
			String HQL = "select testss from Tests as testss "+ 
						 "where testss.suites.suiteName ='Suite1' "+
				 	 	 "order by testss.testName";

			testss = entityManager.createQuery(HQL).getResultList();
			
			for (Tests tests : testss) {
				System.out.println("TaskName:"+ tests.getTestName());
				for (Parameters parameterss : tests.getParameterses()) {
					System.out.println("parameterName:"+ parameterss.getParameterName());
				}
			}
		}
		catch (HibernateException e) {
			Common.getLoger().error("getTests error", e);
			System.out.println("getTests error"+ e);
		}
		return testss;
	}
	
	public List<Tests> getTests() {
		List<Tests> testss = null;
		try {
			EntityManager entityManager = Common.getEntityManager();
			Session session = (Session) entityManager.getDelegate();
			session.beginTransaction();
			
			Suites suites = new Suites();
			suites.setSuiteName("Suite1");
			session.save(suites);
			
			Tests test = new Tests();
			test.setTestName("test1");
			test.setSuites(suites);
			suites.getTestses().add(test);
			session.save(test);
			
			Classe classes = new Classe(test,"who.class1");
			test.getClasses().add(classes);
			session.save(classes);
			Classe classes2 = new Classe(test,"who.class2");
			test.getClasses().add(classes2);
			session.save(classes2);
			Parameters parameters = new Parameters(test, "param1", "val1");
			test.getParameterses().add(parameters);
			session.save(parameters);
			Parameters parameters2 = new Parameters(test, "param2", "val2");
			test.getParameterses().add(parameters2);
			session.save(parameters2);
			
			session.getTransaction().commit();
			
			String HQL = "select testss from Tests as testss "+ 
						 "where testss.suites.suiteName ='Suite1' "+
				 	 	 "order by testss.testName";

			testss = entityManager.createQuery(HQL).getResultList();
			
			for (Tests tests : testss) {
				System.out.println("TaskName:"+ tests.getTestName());
				for (Parameters parameterss : tests.getParameterses()) {
					System.out.println("parameterName:"+ parameterss.getParameterName());
				}
			}
		}
		catch (HibernateException e) {
			Common.getLoger().error("getTests error", e);
			Common.getLoger().error("getTests error", e);
			System.out.println("getTests error"+ e);
		}
		return testss;
	}
	
	public void getTest(){
		List<Tests> testss = null;
		try {
			EntityManager entityManager = Common.getEntityManager();
			String HQL = "select testss from Tests as testss "+
					 	 "where testss.suites.suitesId ='1' "+
					 	 "order by testss.testName";

			testss = entityManager.createQuery(HQL).getResultList();
			
			for (Tests tests : testss) {
				System.out.println("TaskName:"+ tests.getTestName());
			}
			entityManager.persist(testss.get(0));
		}
		catch (HibernateException e) {
			Common.getLoger().error("getTests error", e);
			Common.getLoger().error("getTests error", e);
			System.out.println("getTests error"+ e.getMessage());
			
		}
		
	}
	
	public List<Tests> getTestsSesion() {
		List<Tests> testss = null;
		try {
			EntityManager entityManager = Common.getEntityManager();
			Session session = (Session) entityManager.getDelegate();
			session.beginTransaction();
			
			Suites suites = new Suites();
			suites.setSuiteName("Suite1");
			session.save(suites);
			
			Tests test = new Tests();
			test.setTestName("test1");
			test.setSuites(suites);
			suites.getTestses().add(test);
			session.save(test);
			
			Classe classes = new Classe(test,"who.class1");
			test.getClasses().add(classes);
			session.save(classes);
			Classe classes2 = new Classe(test,"who.class2");
			test.getClasses().add(classes2);
			session.save(classes2);
			Parameters parameters = new Parameters(test, "param1", "val2");
			test.getParameterses().add(parameters);
			session.save(parameters);
			Parameters parameters2 = new Parameters(test, "param2", "val2");
			test.getParameterses().add(parameters2);
			session.save(parameters2);
			
			session.getTransaction().commit();
			
			String HQL = "select testss from Tests as testss "+ 
						 "where testss.suites.suiteName ='Suite1' "+
				 	 	 "order by testss.testName";

			testss = entityManager.createQuery(HQL).getResultList();
			
			for (Tests tests : testss) {
				System.out.println("TaskName:"+ tests.getTestName());
			}
		}
		catch (HibernateException e) {
			Common.getLoger().error("getTests error", e);
			System.out.println("getTests error"+ e);
		}
		return testss;
	}
	
}

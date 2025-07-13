package com.who.test.server.db;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Arrays;
import java.util.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

public class TestsUtil {

	//@Autowired
	//private static HibernateUtil SessionFactory;
	@Autowired
	private static Loger loger;

	@Autowired
	private static EntityUtil entityUtil;
	
	@PersistenceContext
	private static EntityManager entityManager = entityUtil.getEntityManager();
	
	private static final Log log = LogFactory.getLog(TestsUtil.class);
	
	public static void main(String[] args) throws IOException, InterruptedException {
		TestsUtil tcr = new TestsUtil();
		tcr.getTests();
		//tcr.getTestsEM();
		//tcr.getTestsSesion();
		//tcr.zzz();
	}
	
	public static List<Tests> getTestsEM() {
		List<Tests> testss = null;
		try {
			//entityUtil.getEntityManager();
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
			
			Classes classes = new Classes(test,"who.class1");
			test.getClasses().add(classes);
			entityManager.persist(classes);
			Classes classes2 = new Classes(test,"who.class2");
			test.getClasses().add(classes2);
			entityManager.persist(classes2);
			Parameters parameters = new Parameters(test, "param1", "val1");
			test.getParameterses().add(parameters);
			entityManager.persist(parameters);
			Parameters parameters2 = new Parameters(test, "param2", "val2");
			test.getParameterses().add(parameters2);
			entityManager.persist(parameters2);
			
			//entityManager.getTransaction().commit();
			//Session session = (Session) entityManager.getDelegate();
			//session.beginTransaction();
			//em.persist(suites);
			//entityManager.persist(suites);
			session.getTransaction().commit();
			//session.close();
			
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
			log.error("getTests error", e);
			System.out.println("getTests error"+ e);
		}
		return testss;
	}
	
	public static List<Tests> getTests() {
		List<Tests> testss = null;
		try {
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
			
			Classes classes = new Classes(test,"who.class1");
			test.getClasses().add(classes);
			session.save(classes);
			Classes classes2 = new Classes(test,"who.class2");
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
			Loger.getLoger().error("getTests error", e);
			log.error("getTests error", e);
			System.out.println("getTests error"+ e);
		}
		return testss;
	}
	
	public static void getTest(){
		List<Tests> testss = null;
		try {
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
			Loger.getLoger().error("getTests error", e);
			log.error("getTests error", e);
			System.out.println("getTests error"+ e.getMessage());
			
		}
		
	}
	
	public static List<Tests> getTestsSesion() {
		List<Tests> testss = null;
		try {
			Session session = null; //= SessionFactory.getSessionFactory().openSession();
			session.beginTransaction();
			
			Suites suites = new Suites();
			suites.setSuiteName("Suite1");
			session.save(suites);
			
			Tests test = new Tests();
			test.setTestName("test1");
			test.setSuites(suites);
			suites.getTestses().add(test);
			session.save(test);
			
			Classes classes = new Classes(test,"who.class1");
			test.getClasses().add(classes);
			session.save(classes);
			Classes classes2 = new Classes(test,"who.class2");
			test.getClasses().add(classes2);
			session.save(classes2);
			Parameters parameters = new Parameters(test, "param1", "val2");
			test.getParameterses().add(parameters);
			session.save(parameters);
			Parameters parameters2 = new Parameters(test, "param2", "val2");
			test.getParameterses().add(parameters2);
			session.save(parameters2);
			
			session.getTransaction().commit();
			session.close();
			
			String HQL = "select testss from Tests as testss "+ 
						 "where testss.suites.suiteName ='Suite1' "+
				 	 	 "order by testss.testName";

			testss = entityManager.createQuery(HQL).getResultList();
			
			for (Tests tests : testss) {
				System.out.println("TaskName:"+ tests.getTestName());
			}
		}
		catch (HibernateException e) {
			Loger.getLoger().error("getTests error", e);
			log.error("getTests error", e);
			System.out.println("getTests error"+ e);
		}
		return testss;
	}
	
}

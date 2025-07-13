package com.who.tlv.ServicesWebsites.server.DB;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.who.tlv.ServicesWebsites.server.Common;
import com.who.tlv.ServicesWebsites.shared.TestsData;

public class TestsUtil {

	//@Autowired
	//private static HibernateUtil SessionFactory ;
	@Autowired
	private static Loger loger;
	
	/**
	 * @param args
	 */
	public static List<TestsData> GetTestsData() {
		return ConvertTestToTestData(getTests());
	}

	public static List<Tests> getTests() {
		List<Tests> testss = null;
		try {
			SessionFactory sessionFactory = Common.getSessionFactory();
			Session session = sessionFactory.openSession();
			session.beginTransaction();
			
			String HQL = "select tests from Computers as computers inner join computers.testss as tests "+//inner join employee.tasks.subtask as subtask " +
						 "where computers.computerIP='"+GetComputerIP()+"' " +
						 "order by tests.Result, tests.testName";
			testss = session.createQuery(HQL).list();
			for (Tests tests : testss) {
				System.out.println("TaskName:"+ tests.getTestName());
				loger.getLoger().debug("TaskName:"+ tests.getTestName());
				System.out.println("taskId:"+ tests.getTestsId());
				loger.getLoger().debug("taskId:"+ tests.getTestsId());
			}
			
			session.getTransaction().commit();
			session.close();
		}
		catch (HibernateException e) {
			Loger.getLoger().error("getTests error", e);
		}
		return testss;
	}

	public static List<TestsData> ConvertTestToTestData(List<Tests> testss) {
		List<TestsData> testData = new ArrayList<TestsData>();
		for (Tests tests : testss) {
			TestsData testsData = new TestsData();
			testsData.setId(tests.getTestsId());
			testsData.setTestName(tests.getTestName());
			testsData.setProcessName(tests.getProcessName());
			testsData.setParams(tests.getParams());
			testsData.setTimeOut(Integer.toString(tests.getTimeOut()));
			testsData.setCronExpress(tests.getCronExpress());
			testsData.setLastRun(tests.getLastRun());
			testsData.setErrorDesc(tests.getErrorDesc());
			testsData.setResult(tests.getResult());
			testsData.setRetry(Integer.toString(tests.getRetry()));
			testsData.setRetryDelay(Integer.toString(tests.getRetryDelay()));
			testsData.setEmail(tests.getEmail());
			testData.add(testsData);
		}
		return testData;
	}
	
	public static boolean UpdateTests(List<TestsData> testsData) {
		try {
			List<Tests> tests = ConvertTestDataToTests(testsData);
			SessionFactory sessionFactory = Common.getSessionFactory();
			Session session = sessionFactory.openSession();
			session.beginTransaction();
			
			for (Tests test : tests) {
				session.update(test);
				loger.getLoger().debug("taskId:"+ test.getTestsId());
			}
			
			session.getTransaction().commit();
			session.close();
		}
		catch (HibernateException e) {
			Loger.getLoger().error("UpdateTests error", e);
		}
		return true;
	}

	public static boolean RemoveTests(List<TestsData> testsData) {
		try {
			//List<TestsData> testsDatas = new ArrayList<TestsData>();
			//testsDatas.add(testsData);
			List<Tests> tests = ConvertTestDataToTests(testsData);
			SessionFactory sessionFactory = Common.getSessionFactory();
			Session session = sessionFactory.openSession();
			session.beginTransaction();
			
			for (Tests test : tests) {
				session.delete(test);
				loger.getLoger().debug("taskId:"+ test.getTestsId());
			}
			
			session.getTransaction().commit();
			session.close();
		}
		catch (HibernateException e) {
			Loger.getLoger().error("RemoveTest error", e);
		}
		return true;
	}
	
	public static boolean AddTests(List<TestsData> testsData) {
		try {
			//List<TestsData> testsDatas = new ArrayList<TestsData>();
			//testsDatas.add(testsData);
			List<Tests> tests = ConvertTestDataToTests(testsData);
			SessionFactory sessionFactory = Common.getSessionFactory();
			String HQL = "select computers from Computers as computers "+//inner join employee.tasks.subtask as subtask " +
					 "where computers.computerIP='"+GetComputerIP()+"' ";
			
			Session session = sessionFactory.openSession();
			session.beginTransaction();
			List<Computers> computers = session.createQuery(HQL).list();
			Computers computer = computers.get(0);
			for (Tests test : tests) {
				session.save(test);
				computer.getTestss().add(test);
				session.saveOrUpdate(computer);
				loger.getLoger().debug("taskId:"+ test.getTestsId());
			}
			
			session.getTransaction().commit();
			session.close();
		}
		catch (HibernateException e) {
			Loger.getLoger().error("AddTest error", e);
		}
		return true;
	}
	
	private static List<Tests> ConvertTestDataToTests(List<TestsData> testss) {
		List<Tests> tests = new ArrayList<Tests>();
		for (TestsData testData : testss) {
			Tests _tests = new Tests();
			_tests.setTestsId(testData.getId());
			_tests.setTestName(testData.getTestName());
			_tests.setProcessName(testData.getProcessName());
			_tests.setParams(testData.getParams());
			_tests.setTimeOut(Integer.parseInt(testData.getTimeOut()));
			_tests.setCronExpress(testData.getCronExpress());
			_tests.setLastRun(testData.getLastRun());
			_tests.setErrorDesc(testData.getErrorDesc());
			_tests.setResult(testData.getResult());
			_tests.setRetry(Integer.parseInt(testData.getRetry()));
			_tests.setRetryDelay(Integer.parseInt(testData.getRetryDelay()));
			_tests.setEmail(testData.getEmail());
			tests.add(_tests);
		}
		return tests;
	}
	
	public static String GetComputerIP(){
		InetAddress inetAddress = null;
		try {
			inetAddress = InetAddress.getLocalHost();
		}
		catch (UnknownHostException e) {
			Loger.getLoger().error("GetComputerIP error", e);
		}  
		  
		//Get a string representation of the ip address  
		String ipAddress = inetAddress.getHostAddress();
		return ipAddress;
	}
	
}

package com.who.rest.db;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.ejb.Stateless;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;








import com.who.rest.data.SuitesData;
import com.who.rest.data.SuitesDatas;
import com.who.rest.data.TestsData;
import com.who.rest.db.model.Classe;
import com.who.rest.db.model.Parameters;
import com.who.rest.db.model.Suites;
import com.who.rest.db.model.Tests;
import com.who.rest.util.Common;
import com.who.rest.util.Loger;

@Service
@Stateless
public class TestsUtil extends Common{
	
	Logger logger = Loger.getLoger();
	
	public static void main(String[] args) throws IOException, InterruptedException {
		TestsUtil tcr = new TestsUtil();
		//tcr.getTests();
	}
	
	//@Transactional
	public List<String> GetSuiteTests(String suiteName) {
		
		String HQL = "select testss from Tests as testss "+ 
			     "where testss.suites.suiteName ='"+suiteName+"' "+
			     "order by testss.testName";
		List<String> returnList = null;
		@SuppressWarnings("unchecked")
		List<Tests> tests = Common.getEntityManager().createQuery(HQL).getResultList();
		for (Tests test : tests) {
			returnList.add(test.getTestName());
		}
		return returnList;
	}
	
	//@Transactional
	public List<String> getAllSuitsNames() {
		List<String> returnList = new ArrayList<String>();
		String HQL = "select suitess from Suites as suitess "+ 
			     	 "order by suitess.suiteName";

		@SuppressWarnings("unchecked")
		List<Suites> suites = Common.getEntityManager().createQuery(HQL).getResultList();
		for (Suites suite : suites) {
			returnList.add(suite.getSuiteName());
		}
		return returnList;
	}
	
	//@Transactional
	public List<TestsData> getTestsData() throws IllegalArgumentException {
		//EntityManager entityManager = getEntityManager();
		Session session = (Session) Common.getEntityManager().getDelegate();
		String HQL = "select testss from Tests as testss "+
					 "order by testss.testName, testss.suites.suiteName ";
		//session.clear();
		//session.evict(suites);
		List<Tests> tests = session.createQuery(HQL).list();	
		return convertTestsToTestData(tests);
	}

	public List<Tests> getTestsNames(String suitName) throws IllegalArgumentException {
		List<Tests> returnList = new ArrayList<Tests>();
		String[] returnArray = null;
		String HQL = "select testss from Tests as testss "+ 
			     "where testss.suites.suiteName ='"+ suitName +"' "+
			     "order by testss.testName";

		List<Tests> tests = Common.getEntityManager().createQuery(HQL).getResultList();
		for (Tests test : tests) {
			returnList.add(test);
		}
		return returnList;	
	}
	
	public List<TestsData> convertTestsToTestData(List<Tests> tests) {
		List<TestsData> testData = new ArrayList<TestsData>();
		for (Tests test : tests) {
			//for (Tests test : suite.getTestses()) {
				List<Integer> parametersIDs = new ArrayList<Integer>();
				List<String> parametersNames = new ArrayList<String>();
				List<String> parametersValues = new ArrayList<String>();
				List<Integer> classesIDs = new ArrayList<Integer>();
				List<String> classesNames = new ArrayList<String>();
				for (Parameters parameter : test.getParameterses()) {
					parametersIDs.add(parameter.getParameterId());
					parametersNames.add(parameter.getParameterName());
					parametersValues.add(parameter.getParameterValue());
				}
				for (Classe classe : test.getClasses()) {
					classesIDs.add(classe.getClassId());
					classesNames.add(classe.getClassName());
				}
				TestsData testsData = new TestsData();
				testsData.setTestId(test.getTestsId());
				testsData.setTestName(test.getTestName());
				testsData.setSuiteId(test.getSuites().getSuitesId());
				testsData.setSuiteName(test.getSuites().getSuiteName());
				testsData.setParametersIDs(parametersIDs);
				testsData.setParametersNames(parametersNames);
				testsData.setParametersValues(parametersValues);
				testsData.setClassesIDs(classesIDs);
				testsData.setClassesNames(classesNames);
				testData.add(testsData);
			//}
		}
		return testData;
	}
	
	//@Transactional
	public boolean updateTests(List<TestsData> testsData) throws IllegalArgumentException {
		try {
			List<Suites> suites = convertTestDataToTests(testsData);
			//EntityManager entityManager = getEntityManager();
			Session session = (Session) Common.getEntityManager().getDelegate();
			session.beginTransaction();
			
			for (Suites suite : suites) {
				session.persist(suite);
				logger.debug("taskId:"+ suite.getSuitesId());
			}
			
			session.getTransaction().commit();
			//session.close();
		}
		catch (HibernateException e) {
			logger.error("UpdateTests error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
		
	//@Transactional
	public boolean removeTests(List<TestsData> _testsData) throws IllegalArgumentException {
		try {
			//EntityManager entityManager = getEntityManager();
			Tests test = Common.getEntityManager().find(Tests.class, _testsData.get(0).getTestId());
			Session session = (Session) Common.getEntityManager().getDelegate();
			session.beginTransaction();
			String testName = test.getTestName();
			
			session.delete(test);
			logger.debug("taskId:"+ testName);
			
			session.getTransaction().commit();
			//session.close();
		}
		catch (HibernateException e) {
			logger.error("RemoveTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	//@Transactional
	public boolean addTests(List<TestsData> _testsData) throws IllegalArgumentException {
		try {
			TestsData testsData = _testsData.get(0);
			//EntityManager entityManager = getEntityManager();
			String HQL = "select suite from Suites as suite " + //inner join employee.tasks.subtask as subtask " +
					"where suite.suiteName='" + testsData.getSuiteName() + "' ";
			List<Suites> suites = Common.getEntityManager().createQuery(HQL).getResultList();
			
			Session session = (Session) Common.getEntityManager().getDelegate();
			session.beginTransaction();
			Suites suite;
			if (suites.size() != 0) {
				suite = suites.get(0);
			}else{
				suite = new Suites();
				suite.setSuiteName(testsData.getSuiteName());
				session.save(suite);
			}
			suite.setSuiteName(testsData.getSuiteName());
			Tests test = new Tests();
			test.setTestName(testsData.getTestName());
			test.setTestsId(testsData.getTestId());
			test.setSuites(suite);
			suite.getTestses().add(test);
			session.save(test);		
			for (int i = 0; i < testsData.getParametersNames().size(); i++) {
				Parameters parameters = new Parameters(test, testsData.getParametersNames().get(i),
						testsData.getParametersValues().get(i));
				test.getParameterses().add(parameters);
				session.save(parameters);
			}
			
			for (int i = 0; i < testsData.getClassesNames().size(); i++) {
				Classe classes = new Classe(test, testsData.getClassesNames().get(i));
				test.getClasses().add(classes);
				session.save(classes);
			}
			session.saveOrUpdate(test);
			session.saveOrUpdate(suite);
			logger.debug("taskId:" + test.getTestsId());
			session.getTransaction().commit();
			//session.close();
		}
		catch (HibernateException e) {
			logger.error("AddTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	public List<Suites> convertTestDataToTests(List<TestsData> testsDatas) {
		List<Suites> suites = new ArrayList<Suites>();
		for (TestsData testData : testsDatas) {
			Suites suite = getSuite(testData.getSuiteId(), suites);
			suite.setSuiteName(testData.getSuiteName());
			Tests test = Common.getEntityManager().find(Tests.class, testData.getTestId());
			test.setTestName(testData.getTestName());
			for (int i = 0; i < testData.getParametersIDs().size(); i++) {
				Parameters parameters = Common.getEntityManager().find(Parameters.class, testData.getParametersIDs().get(i));
				parameters.setParameterName(testData.getParametersNames().get(i));
				parameters.setParameterValue(testData.getParametersValues().get(i));
			}
			for (int i = 0; i < testData.getClassesIDs().size(); i++) {
				Classe classes = Common.getEntityManager().find(Classe.class, testData.getClassesIDs().get(i));
				classes.setClassName(testData.getClassesNames().get(i));
			}
		}
		return suites;
	}
	
	private Suites getSuite(Integer suiteId ,List<Suites> suites) {
		Suites suite = null;
		boolean find = false;
		for (Suites suite2 : suites) {
			if(suite2.getSuitesId() == suiteId){
				suite = suite2;
				find = true;
				break;
			}
		}
		if (!find) {
			suite  = Common.getEntityManager().find(Suites.class, suiteId);//new Suites();
			suites.add(suite);
		}
		return suite;
	}
	
	private Tests getTest(int testId ,List<Tests> tests) {
		Tests test = null;
		boolean find = false;
		for (Tests test2 : tests) {
			if(test2.getTestsId() == testId){
				test = test2;
				find = true;
				break;
			}
		}
		if (!find) {
			test = Common.getEntityManager().find(Tests.class, testId);//new Tests();
			tests.add(test);
		}
		return test;
	}
	
	public List<SuitesData> convertSuitesToSuitesData(List<Suites> suitesList) {
		//List<SuitesData> suitesDatas = new ArrayList<SuitesData>();
		List<SuitesData> suitesDatas = new ArrayList<SuitesData>();
		for (Suites suites : suitesList) {
			SuitesData SuitesData = new SuitesData();
			SuitesData.setSuiteId(suites.getSuitesId());
			SuitesData.setSuiteName(suites.getSuiteName());
			SuitesData.setJenkinsURL(suites.getJenkinsURL());
			SuitesData.setXmlFileLocation(suites.getXmlFileLocation());
			suitesDatas.add(SuitesData);
		}
		return suitesDatas;
	}
	
	public List<Suites> convertSuitesDataToSuites(List<SuitesData> suitesDataList) {
		List<Suites> suites = new ArrayList<Suites>();
		for (SuitesData suite : suitesDataList) {
			Suites _suite = Common.getEntityManager().find(Suites.class, suite.getSuiteId());
			_suite.setSuiteName(suite.getSuiteName());
			_suite.setJenkinsURL(suite.getJenkinsURL());
			_suite.setXmlFileLocation(suite.getXmlFileLocation());
			suites.add(_suite);
		}
		return suites;
	}

	
	//@Transactional
	public boolean updateSuites(List<SuitesData> suitesData) throws IllegalArgumentException {
		try {
			List<Suites> suites = convertSuitesDataToSuites(suitesData);
			//EntityManager entityManager = getEntityManager();
			Session session = (Session) Common.getEntityManager().getDelegate();
			session.beginTransaction();
			
			for (Suites suite : suites) {
				session.persist(suite);
				logger.debug("taskId:"+ suite.getSuitesId());
			}
			
			session.getTransaction().commit();
			//session.close();
		}
		catch (HibernateException e) {
			logger.error("UpdateTests error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}

	//@Transactional
	public SuitesDatas getAllSuites() throws IllegalArgumentException {
		//EntityManager entityManager = getEntityManager();
		String HQL = "select suitess from Suites as suitess "+ 
  				 "order by suitess.suiteName";
  		List<Suites> suites = getEntityManager().createQuery(HQL).getResultList();
  		List<SuitesData> SuitesDataList = getTestsUtil().convertSuitesToSuitesData(suites);
  		SuitesDatas SuitesDatas = new SuitesDatas();
  		SuitesDatas.getSuites().addAll(SuitesDataList);
		return SuitesDatas;
	}
	
	public boolean removeSuite(int id) throws IllegalArgumentException {
		try {
			//EntityManager entityManager = getEntityManager();
			Suites suite = Common.getEntityManager().find(Suites.class, id);
			Session session = (Session) Common.getEntityManager().getDelegate();
			session.beginTransaction();
			String suiteName = suite.getSuiteName();
			
			session.delete(suite);
			logger.debug("Del suiteId:"+ suiteName);
			
			session.getTransaction().commit();
			//session.close();
		}
		catch (HibernateException e) {
			logger.error("RemoveTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	//@Transactional
		public boolean addSuite(String suiteName,String xmlFileLocation, String jenkinsURL) throws IllegalArgumentException {
			try {
				
				Session session = (Session) Common.getEntityManager().getDelegate();
				session.beginTransaction();
				
				Suites suite = new Suites(suiteName, xmlFileLocation, jenkinsURL, null);
				session.saveOrUpdate(suite);
				
				logger.debug("new suiteId:" + suite.getSuitesId());
				session.getTransaction().commit();
				//session.close();
			}
			catch (HibernateException e) {
				logger.error("AddTest error", e);
				throw new IllegalArgumentException("Error:" + e.getMessage());
			}
			return true;
		}
	
}

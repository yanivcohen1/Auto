package com.who.test.server.db;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.who.test.server.db.model.Classe;
import com.who.test.server.db.model.Parameters;
import com.who.test.server.db.model.Suites;
import com.who.test.server.db.model.Tests;
import com.who.test.server.util.Common;
import com.who.test.server.util.Loger;
import com.who.test.shared.SuitesData;
import com.who.test.shared.TestsData;

@Repository
public class TestsUtil extends Common{
	
	@Autowired
	private Loger log;
	
	public static void main(String[] args) throws IOException, InterruptedException {
		TestsUtil tcr = new TestsUtil();
		//tcr.getTests();
	}
	
	@Transactional
	public List<String> GetSuiteTests(SuitesData suitesData) {
		List<String> returnList = new ArrayList<String>();
		String HQL = "select testss from Tests as testss "+ 
			     "where testss.suites.suiteName ='"+suitesData.getSuiteName()+"' "+
			     "order by testss.testName";

		@SuppressWarnings("unchecked")
		List<Tests> tests = getEntityManager().createQuery(HQL).getResultList();
		for (Tests test : tests) {
			returnList.add(test.getTestName());
		}
		return returnList;
	}
	
	@Transactional
	public List<String> getAllSuitesNames() {
		List<String> returnList = new ArrayList<String>();
		String HQL = "select suitess from Suites as suitess "+ 
			     	 "order by suitess.suiteName";

		@SuppressWarnings("unchecked")
		List<Suites> suites = getEntityManager().createQuery(HQL).getResultList();
		for (Suites suite : suites) {
			returnList.add(suite.getSuiteName());
		}
		return returnList;
	}
	
	@Transactional
	public List<TestsData> getTestsData() throws IllegalArgumentException {

		String HQL = "select testss from Tests as testss "+
					 "order by testss.testName, testss.suites.suiteName ";
		List<Tests> tests = getEntityManager().createQuery(HQL).getResultList();	
		return convertTestsToTestData(tests);
	}

	@Transactional
	public List<Tests> getTestsNames(String suitName) throws IllegalArgumentException {
		List<Tests> returnList = new ArrayList<Tests>();
		String[] returnArray = null;
		String HQL = "select testss from Tests as testss "+ 
			     "where testss.suites.suiteName ='"+ suitName +"' "+
			     "order by testss.testName";

		List<Tests> tests = getEntityManager().createQuery(HQL).getResultList();
		for (Tests test : tests) {
			returnList.add(test);
		}
		return returnList;	
	}
	
	public List<TestsData> convertTestsToTestData(List<Tests> tests) {
		List<TestsData> testData = new ArrayList<TestsData>();
		for (Tests test : tests) {
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
		}
		return testData;
	}
	
	@Transactional
	public boolean updateTests(List<TestsData> testsData) throws IllegalArgumentException {
		try {
			List<Suites> suites = convertTestDataToTests(testsData);
			
			for (Suites suite : suites) {
				getEntityManager().persist(suite);
				log.getLoger().debug("taskId:"+ suite.getSuitesId());
			}
		}
		catch (HibernateException e) {
			log.getLoger().error("UpdateTests error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}

	@Transactional
	public boolean removeTests(List<TestsData> _testsData) throws IllegalArgumentException {
		try {
			Tests test = getEntityManager().find(Tests.class, _testsData.get(0).getTestId());
			String testName = test.getTestName();
			getEntityManager().remove(test);
			log.getLoger().debug("taskId:"+ testName);
		}
		catch (HibernateException e) {
			log.getLoger().error("RemoveTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	@Transactional
	public boolean addTests(List<TestsData> _testsData) throws IllegalArgumentException {
		try {
			TestsData testsData = _testsData.get(0);
			String HQL = "select suite from Suites as suite " + //inner join employee.tasks.subtask as subtask " +
					"where suite.suiteName='" + testsData.getSuiteName() + "' ";
			List<Suites> suites = getEntityManager().createQuery(HQL).getResultList();
			Suites suite;
			if (suites.size() != 0) {
				suite = suites.get(0);
			}else{
				suite = new Suites();
				suite.setSuiteName(testsData.getSuiteName());
				getEntityManager().persist(suite);
			}
			suite.setSuiteName(testsData.getSuiteName());
			Tests test = new Tests();
			test.setTestName(testsData.getTestName());
			test.setTestsId(testsData.getTestId());
			test.setSuites(suite);
			suite.getTestses().add(test);
			getEntityManager().persist(test);
			
			for (int i = 0; i < testsData.getParametersNames().size(); i++) {
				Parameters parameters = new Parameters(test, testsData.getParametersNames().get(i),
						testsData.getParametersValues().get(i));
				test.getParameterses().add(parameters);
				getEntityManager().persist(parameters);
			}
			
			for (int i = 0; i < testsData.getClassesNames().size(); i++) {
				Classe classes = new Classe(test, testsData.getClassesNames().get(i));
				test.getClasses().add(classes);
				getEntityManager().persist(classes);
			}
			getEntityManager().merge(test);
			getEntityManager().merge(suite);
			log.getLoger().debug("taskId:" + test.getTestsId());
		}
		catch (HibernateException e) {
			log.getLoger().error("AddTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	@Transactional
	public List<Suites> convertTestDataToTests(List<TestsData> testsDatas) {
		List<Suites> suites = new ArrayList<Suites>();
		for (TestsData testData : testsDatas) {
			Suites suite = getSuite(testData.getSuiteId(), suites);
			suite.setSuiteName(testData.getSuiteName());
			Tests test =getEntityManager().find(Tests.class, testData.getTestId());
			test.setTestName(testData.getTestName());
			for (int i = 0; i < testData.getParametersIDs().size(); i++) {
				Parameters parameters = getEntityManager().find(Parameters.class, testData.getParametersIDs().get(i));
				parameters.setParameterName(testData.getParametersNames().get(i));
				parameters.setParameterValue(testData.getParametersValues().get(i));
			}
			for (int i = 0; i < testData.getClassesIDs().size(); i++) {
				Classe classes = getEntityManager().find(Classe.class, testData.getClassesIDs().get(i));
				classes.setClassName(testData.getClassesNames().get(i));
			}
		}
		return suites;
	}

	@Transactional
	private Suites getSuite(int suiteId ,List<Suites> suites) {
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
			suite  = getEntityManager().find(Suites.class, suiteId);//new Suites();
			suites.add(suite);
		}
		return suite;
	}
	
	@Transactional
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
			test = getEntityManager().find(Tests.class, testId);//new Tests();
			tests.add(test);
		}
		return test;
	}
	
	@Transactional
	public List<Suites> getAllSuites() throws IllegalArgumentException {
		String HQL = "select suitess from Suites as suitess "+ 
  				 "order by suitess.suiteName";
  		List<Suites> suites = getEntityManager().createQuery(HQL).getResultList();
		return suites;
	}
	
}

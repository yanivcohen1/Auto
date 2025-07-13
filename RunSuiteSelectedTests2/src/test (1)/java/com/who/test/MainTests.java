package com.who.test;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.who.test.server.MainServiceImpl;
import com.who.test.server.db.TestsUtil;
import com.who.test.server.util.Common;
import com.who.test.shared.Classe;
import com.who.test.shared.Parameters;
import com.who.test.shared.Suites;
import com.who.test.shared.SuitesData;
import com.who.test.shared.SuitesData.Command;
import com.who.test.shared.Tests;
import com.who.test.shared.TestsData;

public class MainTests extends BaseTest {

	List<TestsData> ReturnTests;
	MainServiceImpl msi = new MainServiceImpl();
	
/**
 * Get Suits Test
 * @throws Exception
 */
	@Test
	public void GetSuitsTest() throws Exception {
		MainServiceImpl msi = new MainServiceImpl();
		SuitesData testsName = new SuitesData();
		testsName.setSuiteName("BAU Tests");
		testsName.setTestsName(Arrays.asList("Affutd"));
		testsName.setCommand(Command.GetSuits);
		String[] Return = msi.runTests(testsName);
		Assert.assertTrue(Return.length > 0, "return suits list empty");
	}

	/**
	 * Get Tests Test
	 * @throws Exception
	 */
	@Test
	public void GetTests() throws Exception {
		msi = new MainServiceImpl();
		ReturnTests= msi.GetTests();
		Assert.assertTrue(ReturnTests.size() > 0, "return tests list empty");
	}
	
	
	@Test(dependsOnMethods = { "GetTests" })
	public void updateTest() throws Exception {
		//GetTests();
		msi = new MainServiceImpl();
		ReturnTests.get(0).setTestName(ReturnTests.get(0).getTestName() + "5");
		msi.UpdateTests(ReturnTests);
		Assert.assertTrue(ReturnTests.get(0).getTestName().contains("5"), "update sucsses");
	}
	
	@Test
	public void UpdateTest(){
		try {
			EntityManager entityManager = Common.getEntityManager();
			String HQL = "select suite from Suites as suite ";
			List<Suites> suites = entityManager.createQuery(HQL).getResultList();
			Set<Tests> testsSet1 = suites.get(1).getTestses();
			Tests[] tests = testsSet1.toArray(new Tests[testsSet1.size()]);
			tests[0].setTestName(tests[0].getTestName());// + "5"
			
			Set<Parameters> parameters1 = tests[0].getParameterses();
			Parameters[] parameters = parameters1.toArray(new Parameters[parameters1.size()]);
			parameters[0].setParameterName(parameters[0].getParameterName());// + "5"
			Set<Parameters> testsSet2 = new HashSet<Parameters>(Arrays.asList(parameters));
			tests[0].setParameterses(testsSet2);
			
			Set<Tests> testsSet = new HashSet<Tests>(Arrays.asList(tests));
			suites.get(1).setTestses(testsSet);
			entityManager = Common.getEntityManager();
			Session session = (Session) entityManager.getDelegate();
			session.beginTransaction();
			for (Suites suite : suites) {
				session.persist(suite);
				Common.getLoger().debug("taskId:" + suite.getSuitesId());
			}
			session.getTransaction().commit();
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
			// TODO: handle exception
		}
	}
		
	@Test
	public void UpdateConvertedTest(){
		try {
			EntityManager entityManager = Common.getEntityManager();
			String HQL = "select testss from Tests as testss "+
					 "order by testss.testName, testss.suites.suiteName ";
			List<Tests> tests = entityManager.createQuery(HQL).getResultList();
			//Set<Tests> testsSet1 = suites.get(1).getTestses();
			List<TestsData> testsDataList = Common.getTestsUtil().convertTestsToTestData(tests);
			List<Suites> suitesConverted =  Common.getTestsUtil().convertTestDataToTests(testsDataList);
			for (Suites suite : suitesConverted) {
				System.out.println("suitName: " + suite.getSuiteName());
				System.out.println("suitId: " + suite.getSuitesId() + "---------------");
				for (Tests test : suite.getTestses()) {
					System.out.println("testName: " + test.getTestName());
					System.out.println("testId: " + test.getTestsId() + "---------------");
					for (Parameters parameter : test.getParameterses()) {
						System.out.println("parameterName: " + parameter.getParameterName());
						System.out.println("parameterID: " + parameter.getParameterId());
						System.out.println("parameterVal: " + parameter.getParameterValue());
					}
					for (Classe classe : test.getClasses()) {
						System.out.println("ClassName: " + classe.getClassName());
						System.out.println("ClassId: " + classe.getClassId());
					}
				} 
			}
			//Tests[] tests = testsSet1.toArray(new Tests[testsSet1.size()]);
			//tests[0].setTestName(tests[0].getTestName());// + "5"
			//Set<Tests> testsSet = new HashSet<Tests>(Arrays.asList(tests));
			//suites.get(1).setTestses(testsSet);
			entityManager = Common.getEntityManager();
			Session session = (Session) entityManager.getDelegate();
			session.beginTransaction();
			for (Suites suite : suitesConverted) {
				session.persist(suite);
				Common.getLoger().debug("taskId:" + suite.getSuitesId());
			}
			session.getTransaction().commit();
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
			// TODO: handle exception
		}
	}
}
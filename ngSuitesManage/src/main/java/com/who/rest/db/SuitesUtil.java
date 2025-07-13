package com.who.rest.db;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.who.rest.data.SuitesData;
import com.who.rest.data.SuitesDatas;
import com.who.rest.data.TestsData;
import com.who.rest.db.model.Classe;
import com.who.rest.db.model.Parameters;
import com.who.rest.db.model.Suites;
import com.who.rest.db.model.Tests;
import com.who.rest.util.Common;
import com.who.rest.util.Loger;

@Repository
@Transactional
public class SuitesUtil extends Common{
	
	Logger logger = Loger.getLoger();
	
	/*@Autowired
	@PersistenceContext
	private EntityManager entityManager;*/
	
	public static void main(String[] args) throws IOException, InterruptedException {
		SuitesUtil tcr = new SuitesUtil();
		//tcr.getTests();
	}
	
	public List<SuitesData> convertSuitesToSuitesData(List<Suites> suitesList) {
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

	public boolean updateSuites(List<SuitesData> suitesData) throws IllegalArgumentException {
		try {
			List<Suites> suites = convertSuitesDataToSuites(suitesData);
			//EntityManager entityManager = getEntityManager();
			//Session session = (Session) Common.getEntityManager().getDelegate();
			//session.beginTransaction();
			
			for (Suites suite : suites) {
				getEntityManager().persist(suite);
				logger.debug("UpdateTests taskId:"+ suite.getSuitesId());
			}
			
			//session.getTransaction().commit();
			//session.close();
		}
		catch (HibernateException e) {
			logger.error("UpdateTests error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}

	public SuitesDatas getAllSuites() throws IllegalArgumentException {
		SuitesDatas SuitesDatas = null;
		try {
			String HQL = "select suitess from Suites as suitess "+ 
					 "order by suitess.suiteName";
			List<Suites> suites = getEntityManager().createQuery(HQL).getResultList();
			List<SuitesData> SuitesDataList = getTestsUtil().convertSuitesToSuitesData(suites);
			SuitesDatas = new SuitesDatas();
			SuitesDatas.getSuites().addAll(SuitesDataList);
		} catch (Exception e) {
			logger.error("getAllSuites error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return SuitesDatas;
	}
	
	public boolean removeSuite(int id) throws IllegalArgumentException {
		try {
			//EntityManager entityManager = getEntityManager();
			Suites suite = getEntityManager().find(Suites.class, id);
			//Session session = (Session) Common.getEntityManager().getDelegate();
			//session.beginTransaction();
			String suiteName = suite.getSuiteName();
			
			getEntityManager().remove(suite);
			logger.debug("RemoveTest suiteName:"+ suiteName);
			
			//session.getTransaction().commit();
			//session.close();
		}
		catch (HibernateException e) {
			logger.error("RemoveTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	public boolean addSuite(String suiteName,String xmlFileLocation, String jenkinsURL) throws IllegalArgumentException {
		try {
			
			//Session session = (Session) Common.getEntityManager().getDelegate();
			//session.beginTransaction();
			
			Suites suite = new Suites(suiteName, xmlFileLocation, jenkinsURL, null);
			getEntityManager().persist(suite);
			
			logger.debug("AddTest suiteId:" + suite.getSuitesId());
			//session.getTransaction().commit();
			//session.close();
		}
		catch (HibernateException e) {
			logger.error("AddTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	public boolean updateSuite(String suiteName,String xmlFileLocation, String jenkinsURL ,int suiteId) throws IllegalArgumentException {
		try {
			Suites suite = getEntityManager().find(Suites.class, suiteId);
			suite.setSuiteName(suiteName);
			suite.setXmlFileLocation(xmlFileLocation);
			suite.setJenkinsURL(jenkinsURL);
			
			getEntityManager().persist(suite);
			
			logger.debug("updateSuite suiteId:" + suite.getSuitesId());
		}
		catch (HibernateException e) {
			logger.error("updateSuite error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
}

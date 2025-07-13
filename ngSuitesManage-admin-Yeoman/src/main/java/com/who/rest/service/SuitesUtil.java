package com.who.rest.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.sun.jersey.api.spring.Autowire;
import com.who.rest.dao.jpa.IJpaSuitesDao;
import com.who.rest.dao.jpa.JpaSuitesDao;
import com.who.rest.db.model.Classe;
import com.who.rest.db.model.Parameters;
import com.who.rest.db.model.Suites;
import com.who.rest.db.model.Tests;
import com.who.rest.dto.SuitesDto;
import com.who.rest.util.Common;
import com.who.rest.util.Loger;

@Repository
public class SuitesUtil {
	
	Logger logger = Loger.getLoger();

	@Autowired
	private IJpaSuitesDao jpaSuitesDao;
	
	public static void main(String[] args) throws IOException, InterruptedException {
		SuitesUtil tcr = new SuitesUtil();
		//tcr.getTests();
	}

	@Transactional
	public List<SuitesDto> getAllSuites() throws IllegalArgumentException {
		List<Suites> suites = null;
		List<SuitesDto> suitesDto = new ArrayList<SuitesDto>();
		try {
			String HQL = "select suitess from Suites as suitess "+ 
					 "order by suitess.suiteName";
			Query query = Common.getEntityManager().createQuery(HQL);
			suites = jpaSuitesDao.runQuery(query);
			for (Suites suites2 : suites) {
				suitesDto.add(convertSuiteToSuiteDto(suites2));
			}
//			List<SuitesData> SuitesDataList = convertSuitesToSuitesData(suites);
//			SuitesDatas = new SuitesDatas();
//			SuitesDatas.getSuites().addAll(SuitesDataList);
		} catch (Exception e) {
			logger.error("getAllSuites error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return suitesDto;
	}

	@Transactional
	public SuitesDto getSuite(int id) throws IllegalArgumentException {
		Suites suite = null;
		try {
			suite = jpaSuitesDao.find(id);
		} catch (Exception e) {
			logger.error("getAllSuites error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return convertSuiteToSuiteDto(suite);
	}
	
	@Transactional
	public boolean removeSuite(int id) throws IllegalArgumentException {
		try {
			Suites suite = jpaSuitesDao.find(id);
			String suiteName = suite.getSuiteName();
			
			jpaSuitesDao.delete(suite.getSuitesId());
			logger.debug("RemoveTest suiteName:"+ suiteName);
		}
		catch (HibernateException e) {
			logger.error("RemoveTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	@Transactional
	public SuitesDto addUpdateSuite(SuitesDto suiteDto) throws IllegalArgumentException {
		SuitesDto suitesDto = null;
		try {
			suitesDto = convertSuiteToSuiteDto(jpaSuitesDao.save(convertSuiteDtoToSuite(suiteDto)));
			logger.debug("AddTest suiteId:" + suitesDto.getSuiteId());
		}
		catch (HibernateException e) {
			logger.error("AddTest error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return suitesDto;
	}
	
	public Suites convertSuiteDtoToSuite(SuitesDto suitesDto){
		Suites suites = null;
		if (suitesDto.getSuiteId() != null) {
			suites = jpaSuitesDao.find(suitesDto.getSuiteId());
		}
		if (suites == null) {
			suites = new Suites();
		}
		suites.setJenkinsURL(suitesDto.getJenkinsURL());
		suites.setSuiteName(suitesDto.getSuiteName());
		suites.setXmlFileLocation(suitesDto.getXmlFileLocation());
		suites.setSuitesId(suitesDto.getSuiteId());
		return suites;
	}
	
	public SuitesDto convertSuiteToSuiteDto(Suites suites){
		SuitesDto suitesDto = new SuitesDto();
		suitesDto.setJenkinsURL(suites.getJenkinsURL());
		suitesDto.setSuiteName(suites.getSuiteName());
		suitesDto.setXmlFileLocation(suites.getXmlFileLocation());
		suitesDto.setSuiteId(suites.getSuitesId());
		return suitesDto;
	}
	
	/*@Transactional
	public boolean updateSuites(List<SuitesDto> suitesData) throws IllegalArgumentException {
		try {
			List<Suites> suites = convertSuitesDataToSuites(suitesData);
			for (Suites suite : suites) {
				jpaSuitesDao.save(suite);
				logger.debug("UpdateTests taskId:"+ suite.getSuitesId());
			}
		}
		catch (HibernateException e) {
			logger.error("UpdateTests error", e);
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		return true;
	}
	
	public List<SuitesDto> convertSuitesToSuitesData(List<Suites> suitesList) {
		List<SuitesDto> suitesDatas = new ArrayList<SuitesDto>();
		for (Suites suites : suitesList) {
			SuitesDto SuitesData = new SuitesDto();
			SuitesData.setSuiteId(suites.getSuitesId());
			SuitesData.setSuiteName(suites.getSuiteName());
			SuitesData.setJenkinsURL(suites.getJenkinsURL());
			SuitesData.setXmlFileLocation(suites.getXmlFileLocation());
			suitesDatas.add(SuitesData);
		}
		return suitesDatas;
	}
	
	public List<Suites> convertSuitesDataToSuites(List<SuitesDto> suitesDataList) {
		List<Suites> suites = new ArrayList<Suites>();
		for (SuitesDto suite : suitesDataList) {
			Suites _suite = jpaSuitesDao.find(suite.getSuiteId());
			_suite.setSuiteName(suite.getSuiteName());
			_suite.setJenkinsURL(suite.getJenkinsURL());
			_suite.setXmlFileLocation(suite.getXmlFileLocation());
			suites.add(_suite);
		}
		return suites;
	}*/

}

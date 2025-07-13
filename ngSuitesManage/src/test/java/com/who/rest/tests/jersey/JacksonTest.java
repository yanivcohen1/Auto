package com.who.rest.tests.jersey;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.PathParam;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.who.rest.data.SuitesData;
import com.who.rest.data.SuitesDatas;
import com.who.rest.db.model.Suites;
import com.who.rest.util.Common;

public class JacksonTest extends Common {
	
	public static void main(String[] args) throws JsonGenerationException, JsonMappingException, IOException {
		
	  		//String HQL = "select suitess from Suites as suitess "+ 
	  		//		"where suitess.suitesId ='" + id + "' ";
	  		String HQL = "select suitess from Suites as suitess "+ 
	  				 "order by suitess.suiteName";
	  		List<Suites> suites = getEntityManager().createQuery(HQL).getResultList();
	  		List<SuitesData> SuitesDataList = getTestsUtil().convertSuitesToSuitesData(suites);
	  		SuitesDatas SuitesDatas = new SuitesDatas();
	  		SuitesDatas.getSuites().addAll(SuitesDataList);
			List<SuitesData> suitesData = SuitesDatas.getSuites();
			List<Suites> suites2 = getTestsUtil().convertSuitesDataToSuites(suitesData);
			for (Suites suite : suites2) {
				System.out.println(suite);
			}
			getEntityManager().close();
		
	}
	
}

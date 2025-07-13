package com.who.rest.tests.jeckson;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.PathParam;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.who.rest.SuitesData;
import com.who.rest.db.Suites;
import com.who.rest.util.Common;

public class JacksonTest extends Common {
	
	public static void main(String[] args) throws JsonGenerationException, JsonMappingException, IOException {
		
		//Student newStudent = new Student(name, "Diaz",22,1);
		//Suites suites = getEntityManager().find(Suites.class, id);
		String HQL = "select suitess from Suites as suitess "+ 
					 "order by suitess.suiteName";
				//"where suitess.suitesId ='" + id + "' ";
		List<Suites> suites = getEntityManager().createQuery(HQL).getResultList();
		List<SuitesData> SuitesDataList = getTestsUtil().convertSuitesToSuitesData(suites);
		ObjectMapper mapper = new ObjectMapper();
		String studentJson = mapper.writeValueAsString(SuitesDataList);
		System.out.println(studentJson);
		mapper = new ObjectMapper();
		List<SuitesData> suitesData = mapper.readValue(studentJson, new TypeReference<List<SuitesData>>() {});
		List<Suites> suites2 = getTestsUtil().convertSuitesDataToSuites(suitesData);
		for (Suites suite : suites2) {
			System.out.println(suite);
		}
		getEntityManager().close();
		
	}
	
}

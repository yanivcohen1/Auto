package com.who.auto.web.rest.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;
//import org.boon.primitive.Arry;
import org.springframework.stereotype.Component;

import com.google.common.primitives.Ints;
import com.who.auto.domain.Suite;
import com.who.auto.domain.Tests;
import com.who.auto.jenkins.RunJenkins;
import com.who.auto.repository.SuiteRepository;
//import com.who.auto.domain.Suite;
//import com.who.auto.domain.Tests;
//import com.who.auto.jenkins.RunJenkins;
//import com.who.auto.repository.SuiteRepository;
//import com.who.auto.repository.TestsRepository;
//import com.who.auto.web.rest.dto.RunTestsDTO;
import com.who.auto.repository.TestsRepository;
import com.who.auto.web.rest.dto.RunTestsDTO;

@Component
public class RunTestsUtil {
	
	@Inject
    private TestsRepository testsRepository;
	
	@Inject
    private SuiteRepository suiteRepository;
	
	@Inject
    private RunJenkins runJenkins;
	
	public List<RunTestsDTO> fillStartupData() {
		//RunTestsDTO
		List<Suite> suites = suiteRepository.findAll();
		//List<Tests> tests = testsRepository.findAll();
		List<RunTestsDTO> RunTestsDTOList = new ArrayList<RunTestsDTO>();
		for (Suite suite : suites) {
			RunTestsDTO suiteDTO = new RunTestsDTO();
			suiteDTO.setId(Ints.checkedCast(suite.getId()));
			suiteDTO.setTitle(suite.getSuite_name());
			suiteDTO.setNodes(new ArrayList<RunTestsDTO>());
			List<Tests> tests = testsRepository.findSuiteTests(suite.getSuite_name());
			List<String> testList = new ArrayList<String>();
			for (Tests test : tests) {
				RunTestsDTO testDTO = new RunTestsDTO();
				testDTO.setId(Ints.checkedCast(test.getId()));
				testDTO.setTitle(test.getTest_name());
				testDTO.setNodes(new ArrayList<RunTestsDTO>());
				suiteDTO.getNodes().add(testDTO);
			}
			RunTestsDTOList.add(suiteDTO);
		}
		return RunTestsDTOList;
	}
	
	public String runTest(List<RunTestsDTO> runData) throws IOException {
		return runJenkins.runTests(runData);
		/*for (RunTestsDTO runTestsDTO : runData) {
			
		}*/
	}
}

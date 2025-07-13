package com.who.test.server;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.log4j.Logger;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.test.client.IMainService;
import com.who.test.server.db.BuildTests;
import com.who.test.server.db.EntityUtil;
import com.who.test.server.db.TestsUtil;
import com.who.test.server.jenkins.RunJenkins;
import com.who.test.server.util.Common;
import com.who.test.server.util.Utility;
import com.who.test.shared.FieldVerifier;
import com.who.test.shared.Suites;
import com.who.test.shared.SuitesData;
import com.who.test.shared.Tests;
import com.who.test.shared.SuitesData.Command;
import com.who.test.shared.TestsData;
import com.who.test.shared.UserDto;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class MainServiceImpl extends RemoteServiceServlet implements
		IMainService {
	
	private static final String ADMIN = Common.getUserDto().getPassword();
	private static final String USER = Common.getUserDto().getPassword();
	private static final Logger LOG = Common.getLoger();
	private static final TestsUtil testsUtil = Common.getTestsUtil();
	
	public MainServiceImpl(){
	}
	
	@Override
	public String[] runTests(SuitesData suitesData) throws IllegalArgumentException {
		List<String> returnList = new ArrayList<String>();
		String[] returnArray = null;
		try {
			if (suitesData.getCommand() == Command.GetTests) {
				testsUtil.GetSuiteTests(suitesData, returnList);
			}else if(suitesData.getCommand() == Command.GetSuits){
				testsUtil.getAllSuits(returnList);
			}else if(suitesData.getCommand() == Command.RunTests){
				runTests(suitesData, returnList);
			}
		} catch (Exception e) {
			LOG.error("runTests error", e);
			e.printStackTrace();
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		returnArray = new String[returnList.size()];
		return returnList.toArray(returnArray); // fill the array
	}

	private void runTests(SuitesData suitesData, List<String> returnList)
			throws IOException {
		String xmlSuiteContent = BuildTests.buildTestsXML(suitesData);
		//GWT.log(xmlSuiteContent);
		RunJenkins runJenkins = (RunJenkins) Common.getApplicationContext().getBean(suitesData.getSuiteName());
		runJenkins.runJenkinsSelectedTests(xmlSuiteContent, suitesData.getSuiteName());
		returnList.add(runJenkins.getJenkinsURL());
	}

	public String isRegister() throws IllegalArgumentException {
		return IsRegisterFromFile();
	}

	private String IsRegisterFromFile() {
		
		String LogIn =(String)getThreadLocalRequest().getSession().getAttribute("LogIn");
		if (LogIn != null) {
			if (LogIn.contentEquals(ADMIN)) {
				LogIn = "Admin";
			}
			else if (LogIn.contentEquals(USER)) {
				LogIn = "User";
			}
			else {
				LogIn = "nan";
			}
		}else{
			LogIn = "nan";
		}
		return LogIn;
	}
	
	public Boolean UnRegister() {
		getThreadLocalRequest().getSession().setAttribute("LogIn", "");
		return true;//LogIn != null ? 1 : 0;
	}
	
	@Override
	public String Register(UserDto UserData) {
		Boolean Pass = false;
		getThreadLocalRequest().getSession().setAttribute("LogIn", UserData.getPassword());
		return IsRegisterFromFile();
	}

	@Override
	public List<TestsData> GetTests() throws IllegalArgumentException {
		return testsUtil.getTestsData();
	}
	
	@Override
	public Boolean UpdateTests(List<TestsData> testsData) throws IllegalArgumentException {
		return new Boolean(testsUtil.updateTests(testsData));
	}

	@Override
	public Boolean RemoveTests(List<TestsData> testsData) throws IllegalArgumentException {
		return new Boolean(testsUtil.removeTests(testsData));
	}
	
	@Override
	public Boolean AddTests(List<TestsData> testsData) throws IllegalArgumentException {
		return new Boolean(testsUtil.addTests(testsData));
	}
	
}

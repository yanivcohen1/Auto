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

import com.who.test.BuildTests;
import com.who.test.client.IMainService;
import com.who.test.server.db.EntityUtil;
import com.who.test.server.db.TestsUtil;
import com.who.test.server.db.model.Suites;
import com.who.test.server.db.model.Tests;
import com.who.test.server.jenkins.RunJenkins;
import com.who.test.server.util.Common;
import com.who.test.server.util.Utility;
import com.who.test.shared.FieldVerifier;
import com.who.test.shared.SuitesData;
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
				returnList.addAll(testsUtil.GetSuiteTests(suitesData));
			}else if(suitesData.getCommand() == Command.GetSuits){
				returnList.addAll(testsUtil.getAllSuitesNames());
			}else if(suitesData.getCommand() == Command.RunTests){
				returnList.addAll(RunJenkins.runTests(suitesData));
			}
		} catch (Exception e) {
			LOG.error("runTests error", e);
			e.printStackTrace();
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		returnArray = new String[returnList.size()];
		return returnList.toArray(returnArray); // fill the array
	}

	@Override
	public String isRegister() throws IllegalArgumentException {
		return Utility.isRegisterFromFile(getThreadLocalRequest(), ADMIN);
	}
	
	@Override
	public Boolean UnRegister() throws IllegalArgumentException {
		getThreadLocalRequest().getSession().setAttribute("LogIn", "");
		return true;//LogIn != null ? 1 : 0;
	}
	
	@Override
	public String Register(UserDto UserData) throws IllegalArgumentException {
		getThreadLocalRequest().getSession().setAttribute("LogIn", UserData.getPassword());
		return Utility.isRegisterFromFile(getThreadLocalRequest(), ADMIN);
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

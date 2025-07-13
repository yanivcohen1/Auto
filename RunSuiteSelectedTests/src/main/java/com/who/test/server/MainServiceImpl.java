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

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.test.client.IMainService;
import com.who.test.server.db.BuildTests;
import com.who.test.server.db.EntityUtil;
import com.who.test.server.db.Loger;
import com.who.test.server.db.TestsUtil;
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
	
	private String Admin;
	private String User;
	
	public MainServiceImpl(){
		java.util.Properties prop = new Properties();
    	Resource resource = new ClassPathResource("Config.properties");
    	try {
			File configFile = resource.getFile();
			prop.load(new FileInputStream(configFile));
			Admin = prop.getProperty("Web.Admin.password");
			User = prop.getProperty("Web.User.password");
    	}
		catch (Exception e) {
			Common.getLoger().error("SessionServiceImpl error config file", e);
			throw new IllegalArgumentException("Password file Error");
		}
	}
	
	@Override
	public String[] runTests(SuitesData suitesData) throws IllegalArgumentException {
		List<String> returnList = new ArrayList<String>();
		String[] returnArray = null;
		try {
			if (suitesData.getCommand() == Command.GetTests) {
				String HQL = "select testss from Tests as testss "+ 
					     "where testss.suites.suiteName ='"+suitesData.getSuiteName()+"' "+
					     "order by testss.testName";

				List<Tests> tests = Common.getEntityManager().createQuery(HQL).getResultList();
				for (Tests test : tests) {
					returnList.add(test.getTestName());
				}
			}else if(suitesData.getCommand() == Command.GetSuits){
				String HQL = "select suitess from Suites as suitess "+ 
					     	 "order by suitess.suiteName";

				List<Suites> suites = Common.getEntityManager().createQuery(HQL).getResultList();
				for (Suites suite : suites) {
					returnList.add(suite.getSuiteName());
				}
			}else if(suitesData.getCommand() == Command.RunTests){
				String xmlSuiteContent = BuildTests.buildTestsXML(suitesData);
				GWT.log(xmlSuiteContent);
				RunJenkins runJenkins = (RunJenkins) Common.getApplicationContext().getBean(suitesData.getSuiteName());//RunJenkins.class
				runJenkins.runJenkinsSelectedTests(xmlSuiteContent, suitesData.getSuiteName());
				returnList.add(runJenkins.getJenkinsURL());//"pass");
			}
		} catch (Exception e) {
			Common.getLoger().error("runTests error", e);
			e.printStackTrace();
			throw new IllegalArgumentException("Error:" + e.getMessage());
		}
		returnArray = new String[returnList.size()];
		return returnList.toArray(returnArray); // fill the array
	}

	/**
	 * Escape an html string. Escaping data received from the client helps to
	 * prevent cross-site script vulnerabilities.
	 * 
	 * @param html the html string to escape
	 * @return the escaped string
	 */
	private String escapeHtml(String html) {
		if (html == null) {
			return null;
		}
		return html.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
				.replaceAll(">", "&gt;");
	}
	
	public String isRegister() throws IllegalArgumentException {
		return IsRegisterFromFile();
	}

	private String IsRegisterFromFile() {
		
		String LogIn =(String)getThreadLocalRequest().getSession().getAttribute("LogIn");
		if (LogIn != null) {
			if (LogIn.contentEquals(Admin)) {
				LogIn = "Admin";
			}
			else if (LogIn.contentEquals(User)) {
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
		getThreadLocalRequest().getSession().setAttribute("LogIn", UserData.getEmail());
		return IsRegisterFromFile();
	}

	@Override
	public List<TestsData> GetTests() throws IllegalArgumentException {
		return Common.getTestsUtil().GetTestsData();
	}
	
	@Override
	public Boolean UpdateTests(List<TestsData> testsData) throws IllegalArgumentException {
		return new Boolean(Common.getTestsUtil().UpdateTests(testsData));
	}

	@Override
	public Boolean RemoveTests(List<TestsData> testsData) throws IllegalArgumentException {
		return new Boolean(Common.getTestsUtil().RemoveTests(testsData));
	}
	
	@Override
	public Boolean AddTests(List<TestsData> testsData) throws IllegalArgumentException {
		return new Boolean(Common.getTestsUtil().AddTests(testsData));
	}
	
}

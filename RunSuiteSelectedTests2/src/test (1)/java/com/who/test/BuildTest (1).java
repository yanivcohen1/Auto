package com.who.test;

import java.io.File;
import java.io.IOException;
import java.io.StringWriter;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;
import org.apache.commons.io.FileUtils;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;

import com.who.test.shared.Classe;
import com.who.test.shared.Parameters;
import com.who.test.shared.Suites;
import com.who.test.shared.SuitesData;
import com.who.test.shared.Tests;
import com.who.test.server.db.EntityUtil;
import com.who.test.server.util.Common;
import com.who.test.server.util.Loger;
import com.who.test.server.util.Utility;

public class BuildTest {

	@Autowired
	private static Loger loger;

	@Autowired
	private static EntityUtil entityUtil;
	
	//@PersistenceContext
	private static EntityManager entityManager = Common.getEntityManager();
	
	public static void main(String[] args) throws Exception {
		BuildTest tcr = new BuildTest();
		//tcr.buildSuiteXML("ClientTests");
		tcr.xmlParse("C:\\Temp\\testngClients.xml");
		//tcr.setTest("Suite1", "test2", Arrays.asList("who.class11", "who.class12"), Arrays.asList("param11", "param12"));//Suite1
	}
	
	private void xmlParse(String filePath) throws ParserConfigurationException, SAXException, IOException {
		File fXmlFile = new File(filePath);
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		DocumentBuilder db = dbf.newDocumentBuilder();
		Document doc = db.parse(fXmlFile);
		doc.getDocumentElement().normalize();
		NodeList suite = doc.getElementsByTagName("suite");
		String suiteName = suite.item(0).getAttributes().getNamedItem("name").getTextContent();
		NodeList nList = ((Element)suite.item(0)).getElementsByTagName("test");
		for (int i = 0; i < nList.getLength(); i++) {//tests loop
			Node nNode = nList.item(i);
			List<String> prameterNames = new ArrayList<String>();
			List<String> prameterValues = new ArrayList<String>();
			List<String> classNames = new ArrayList<String>();
			String testName = nNode.getAttributes().getNamedItem("name").getTextContent();
			NodeList nTests = nNode.getChildNodes();
			for (int j = 0; j < nTests.getLength(); j++) {//test loop
				Node nTest = nTests.item(j);
				if (nTest.getNodeType() == Node.ELEMENT_NODE) {
					Element element = (Element) nTest;
					if (element.getTagName().contains("parameter")) {
						prameterNames.add(element.getAttribute("name"));
						prameterValues.add(element.getAttribute("value"));
					}
					if (element.getTagName().contains("classes")) {
						NodeList nClasses = nTest.getChildNodes();
						for (int k = 0; k < nClasses.getLength(); k++) {//classes loop
							Node nClass = nClasses.item(k);
							if (nClass.getNodeType() == Node.ELEMENT_NODE) {
								Element nElement = (Element) nClass;
								if (nElement.getTagName().contains("class")) {
									classNames.add(nElement.getAttribute("name"));
								}
							}
						}
					}
				}
			}
			setTest(suiteName, testName, classNames, prameterNames, prameterValues);
		}
		//XPath xPath = XPathFactory.newInstance().newXPath();
		//String expression = "/Employees/Employee[@emplid='3333']/email";
		//read a string value
		//String email = xPath.compile(expression).evaluate(xmlDocument);
		//read an xml node using xpath
		//Node node = (Node) xPath.compile(expression).evaluate(xmlDocument, XPathConstants.NODE);*/
	}

	public void setTest(String suiteName, String testName, List<String> classNames, List<String> parameterNames, List<String> parameterValues) {
		//List<Tests> tests = null;
		try {
			String HQL = "select Suitess from Suites as Suitess "+ 
					 	 "where Suitess.suiteName ='"+suiteName+"' ";
			
			List<Suites> suites = entityManager.createQuery(HQL).getResultList();
			
			Session session = (Session) entityManager.getDelegate();
			session.beginTransaction();
			Suites suite = null;
			if (suites.size() == 0) {
				suite = new Suites();
				suite.setSuiteName(suiteName);
				session.save(suite);
			}else{
				suite = suites.get(0);
			}
			Tests test = new Tests();
			test.setTestName(testName);
			test.setSuites(suite);
			suite.getTestses().add(test);
			session.save(test);
			
			for (String className : classNames) {
				Classe classes = new Classe(test, className);
				test.getClasses().add(classes);
				session.save(classes);
			}
			
			int i = 0;
			for (String parameterName : parameterNames) {
				Parameters parameters = new Parameters(test, parameterName, parameterValues.get(i));
				test.getParameterses().add(parameters);
				session.save(parameters);
				i++;
			}
			
			session.getTransaction().commit();
			
			HQL = "select testss from Tests as testss "+ 
				  "where testss.suites.suiteName ='"+suiteName+"' "+
				  "order by testss.testName";

			List<Tests> testss = entityManager.createQuery(HQL).getResultList();
			
			for (Tests testse : testss) {
				System.out.println("TaskName:"+ testse.getTestName());
				for (Parameters parameterss : testse.getParameterses()) {
					System.out.println("parameterName:"+ parameterss.getParameterName());
				}
			}
		}
		catch (HibernateException e) {
			Common.getLoger().error("getTests error", e);
			loger.getLoger().error("getTests error", e);
			System.out.println("getTests error"+ e);
		}
		//return tests;
	}
	
	public static String buildSuiteXML(String suiteName) throws IOException {
        String HQL = "select testss from Tests as testss "+ 
				  "where testss.suites.suiteName ='"+suiteName+"' "+
				  "order by testss.testName";

		List<Tests> tests = entityManager.createQuery(HQL).getResultList();
		
		return buildTestsXML(tests);
	}
	
	public static String buildTestsXML(SuitesData testsName) throws IOException {
		List<Tests> testss = new ArrayList<Tests>();
		for (String testName : testsName.getTestsName()) {		
			  if (!testName.contentEquals("")) {
				String HQL = "select testss from Tests as testss "
						+ "where testss.testName ='" + testName + "' ";
				//"order by testss.testName";
				List<Tests> tests = entityManager.createQuery(HQL).getResultList();
				testss.add(tests.get(0));
			}
		}
		return buildTestsXML(testss);
	}
	
	private static String buildTestsXML(List<Tests> tests) throws IOException {
		ArrayList<String> testNames = new ArrayList<String>();
        ArrayList<ArrayList<String>> parameterNames = new ArrayList<ArrayList<String>>();
        ArrayList<ArrayList<String>> parameterValues = new ArrayList<ArrayList<String>>();
        ArrayList<ArrayList<String>> classNames = new ArrayList<ArrayList<String>>();
		for (Tests test : tests) {
			
			if (test.getTestName().contains("BuildClients")) {
				Session session = (Session) entityManager.getDelegate();
				session.beginTransaction();
				entityManager.remove(test);
				session.getTransaction().commit();
			}else{
				testNames.add(test.getTestName());
				ArrayList<String> parameterName = new ArrayList<String>();
				ArrayList<String> parameterValue = new ArrayList<String>();
				for (Parameters parameterss : test.getParameterses()) {
					parameterName.add(parameterss.getParameterName());
					parameterValue.add(parameterss.getParameterValue());
				}
				parameterNames.add(parameterName);
				parameterValues.add(parameterValue);
				
				ArrayList<String> className = new ArrayList<String>();
				for (Classe classe : test.getClasses()) {
					className.add(classe.getClassName());
				}
				classNames.add(className);
			}
		}
		
		VelocityEngine ve = new VelocityEngine();
        //String vmPath = request.getSession().getServletContext().getRealPath("${your dir}");
        String templateFile = "TemplateOnlyTable.html";
        String vmPath = Utility.getResourcePath(templateFile).
        		replace(templateFile, "");
        Properties p = new Properties();
        p.setProperty("file.resource.loader.path", vmPath);//vmPath+"//");
        ve.init(p);
        /*  add that list to a VelocityContext  */
        VelocityContext context = new VelocityContext();
        context.put("testNames", testNames);
        context.put("parameterNames", parameterNames);
        context.put("parameterValues", parameterValues);
        context.put("classNames", classNames);
        /*  get the Template  */
        Template t;
        try {
        	//System.out.println(ve.templateExists("TemplateOnlyTable.html"));
			t = ve.getTemplate(templateFile);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			//t = ve.getTemplate("./src/main/resources/TemplateOnlyTable.html");
			throw new IllegalArgumentException("coldn't find tamplate file: 'TemplateOnlyTable.html'", e);
		}
        
        /*  now render the template into a Writer  */
        StringWriter writer = new StringWriter();
        t.merge( context, writer );
        //System.out.println(writer.toString());
        return writer.toString();
		
	}

}

package com.who.auto.tool;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

import com.who.auto.util.Utility;

import org.w3c.dom.Node;
import org.w3c.dom.Element;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import java.awt.*;
import java.awt.event.KeyEvent;

public class XmlAutoFillTool {
	
	public static void main(String argv[]) throws MalformedURLException {
		NodeList nodeList = null;
		AddTest addTest = new AddTest();
		//addTest.add(test_name, class_name, method_name, parameter_name, parameter_value, suiteName);
		try {
			FileInputStream fXmlFile = new FileInputStream(
					new File("C:/SVN/BAU_Automation_Tests/trunk/BauAutomationTests/testngClientsDebug.xml"));
			String suiteNameManual = "BAU";
					//new File("C:\\SVN\\BAU_Automation_Tests\\trunk\\BauAutomationTests\\testngMarkting.xml"));
			// private void xmlParse(String filePath) throws
			// ParserConfigurationException, SAXException, IOException {
			// File fXmlFile = new File(filePath);
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			DocumentBuilder db = dbf.newDocumentBuilder();
			Document doc = db.parse(fXmlFile);
			doc.getDocumentElement().normalize();
			NodeList suite = doc.getElementsByTagName("suite");
			String suiteName = suite.item(0).getAttributes()
					.getNamedItem("name").getTextContent();
			NodeList nList = ((Element) suite.item(0))
					.getElementsByTagName("test");
			for (int i = 0; i < nList.getLength(); i++) {// tests loop
				Node nNode = nList.item(i);
				List<String> prameterNames = new ArrayList<String>();
				List<String> prameterValues = new ArrayList<String>();
				List<String> classNames = new ArrayList<String>();
				List<String> methodsNames = new ArrayList<String>();
				String testName = nNode.getAttributes().getNamedItem("name")
						.getTextContent();
				NodeList nTests = nNode.getChildNodes();
				for (int j = 0; j < nTests.getLength(); j++) {// test loop
					Node nTest = nTests.item(j);
					if (nTest.getNodeType() == Node.ELEMENT_NODE) {
						Element element = (Element) nTest;
						if (element.getTagName().contains("parameter")) {
							prameterNames.add(element.getAttribute("name"));
							prameterValues.add(element.getAttribute("value"));
						}
						if (element.getTagName().contains("classes")) {
							NodeList nClasses = nTest.getChildNodes();
							for (int k = 0; k < nClasses.getLength(); k++) {// classes loop
								Node nClass = nClasses.item(k);
								if (nClass.getNodeType() == Node.ELEMENT_NODE) {
									Element nElement = (Element) nClass;
									if (nElement.getTagName().contains("class")) {
										classNames.add(nElement
												.getAttribute("name"));
										//if (nElement.getTagName().contains("methods")) {
											NodeList nMethods = nElement.getChildNodes();
											for (int l = 0; l < nMethods.getLength(); l++) {// methods loop
												Node nMethodi = nMethods.item(l);
												NodeList nlMethod = nMethodi.getChildNodes();//includes
												for (int m = 0; m < nlMethod.getLength(); m++) {// include loop
													Node nMethod = nlMethod.item(m);
													if (nMethod.getNodeType() == Node.ELEMENT_NODE) {
														Element method = (Element) nMethod;
														if (method.getTagName().contains("include")) {
															methodsNames.add(method.getAttribute("name"));
														}
													} 
												}
											}
										//}
									}
								}
							}
						}
					}
				}
				//setTest(suiteName, testName, classNames, prameterNames,prameterValues, methodsNames);
				addTest.add(suiteNameManual, testName, classNames, prameterNames,
						prameterValues, methodsNames);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static void setTest(String suiteName, String testName,
			List<String> classNames, List<String> prameterNames,
			List<String> prameterValues, List<String> methodsNames) throws IOException, AWTException, InterruptedException {
		
		String param = "";
		if (prameterNames != null) {
			param = arryToSpredArry(methodsNames);
		}
		try {
			System.out.println(suiteName + " " + testName + " " + classNames.get(0)
					+ " " + prameterNames.get(0) + " " + prameterValues.get(0) + param);
		} catch (Exception e) {
			System.out.println(suiteName + " " + testName + " " + classNames.get(0)
			+ " " + param);
		}
		BufferedReader bufferRead = new BufferedReader(new InputStreamReader(
				System.in));
		String s = bufferRead.readLine();
		if (!s.contentEquals("a")) {
			Thread.sleep(3000);
			Robot robot = new Robot();
			//robot.keyPress(KeyEvent.VK_PERIOD);
			typeCharacter(robot, testName);
			robot.keyPress(KeyEvent.VK_TAB);
			typeCharacter(robot, classNames.get(0));
			robot.keyPress(KeyEvent.VK_TAB);
			if (methodsNames.size() != 0) {
				typeCharacter(robot, arryToSpredArry(methodsNames));
			}else{
				Thread.sleep(1000);
			}
			robot.keyPress(KeyEvent.VK_TAB);
			if (prameterNames.size() != 0) {
				typeCharacter(robot, prameterNames.get(0));
				robot.keyPress(KeyEvent.VK_TAB);
				typeCharacter(robot, prameterValues.get(0));
			}
		}
	}

	public static void typeCharacter(Robot robot, String letter) {

		for (int i = 0; i < letter.length(); i++) {
			try {
				boolean upperCase = Character.isUpperCase(letter.charAt(i));
				String KeyVal = Character.toString(letter.charAt(i));
				String variableName = "VK_" + KeyVal.toUpperCase();
				if (variableName.contentEquals("VK_.")) {
					variableName = "VK_PERIOD";
				}
				if (variableName.contentEquals("VK_-")) {
					variableName = "VK_MINUS";
				}
				if (variableName.contentEquals("VK_\\")) {
					variableName = "VK_BACK_SLASH";
				}
				if (variableName.contentEquals("VK__")) {
					variableName = "VK_UNDERSCORE";
				}
				if (variableName.contentEquals("VK_,")) {
					variableName = "VK_COMMA";
				}
				Class clazz = KeyEvent.class;
				Field field = clazz.getField(variableName);
				int keyCode = field.getInt(null);
				if (variableName.contentEquals("VK_UNDERSCORE")) {
					robot.keyPress(KeyEvent.VK_SHIFT);
					robot.keyPress(KeyEvent.VK_MINUS);
					robot.keyRelease(KeyEvent.VK_SHIFT);
				}else{
					robot.delay(100);
	
					if (upperCase)
						robot.keyPress(KeyEvent.VK_SHIFT);
	
					robot.keyPress(keyCode);
					robot.keyRelease(keyCode);
	
					if (upperCase)
						robot.keyRelease(KeyEvent.VK_SHIFT);
				}
			} catch (Exception e) {
				System.out.println(e);
			}
		}

	}

	public static String arryToSpredArry(List<String> spredArry) throws IllegalArgumentException {
    	if (spredArry != null ){
    		if (spredArry.size() == 0 ) {
    			return null;
			}else{
				String ret = "";
				for (int i = 0; i < spredArry.size(); i++) {
					if (i == 0) {
						ret = spredArry.get(0);
					}else{
						ret = ret + "," + spredArry.get(i);
					}
				}
				return ret;
			}
		}else{
			return null;
		}
	}
	
}


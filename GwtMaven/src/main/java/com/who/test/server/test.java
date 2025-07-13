package com.who.test.server;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.ApplicationContext;

import com.who.test.shared.TestsName;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = Common.getApplicationContext();
		MainServiceImpl MSI = new MainServiceImpl();
		TestsName testsName = new TestsName();
		testsName.setSuiteName("ClientTests");
		testsName.setTestName(Arrays.asList("Affutd"));
		MSI.runTests(testsName);
	}
	
}

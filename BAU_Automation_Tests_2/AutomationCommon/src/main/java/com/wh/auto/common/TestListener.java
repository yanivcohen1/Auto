package com.wh.auto.common;

import org.testng.ITestContext;
import org.testng.ITestResult;

/**
* @author pavely
* Test monitor, start, status and finish printed for report
*
*/

public class TestListener implements org.testng.ITestListener {

	@Override
	public void onFinish(ITestContext arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onStart(ITestContext arg0) {

	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onTestFailure(ITestResult arg0) {
		// TODO Auto-generated method stub
		org.testng.Reporter.setCurrentTestResult(arg0);
		//Reporter.log(e.getMessage(), true, Style.REGULAR, Color.RED);
		org.testng.Reporter.log("<h3 style='color:red'>Test Fail </h3>", true);
	}

	@Override
	public void onTestSkipped(ITestResult arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onTestStart(ITestResult arg0) {
		System.out.println(" ");
		System.out.println("----------------------------");
		System.out.println("start test: "+arg0.getTestContext().getName());
		System.out.println("----------------------------");
		//String s = "<style> img { height: 200px; width: 300px;} img:hover {height: 100%; width: 100%;} </style>";
		//arg0.addInjector(moduleInstances, injector);
		org.testng.Reporter.setCurrentTestResult(arg0);
		org.testng.Reporter.log("<style> img { height: 200px; width: 300px;} img:hover {height: 100%; width: 100%;} </style>");
	}

	@Override
	public void onTestSuccess(ITestResult arg0) {
		// TODO Auto-generated method stub
		
	}
	
}

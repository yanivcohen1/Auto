package com.wh.auto.utils;

import java.util.ArrayList;
import java.util.List;
import org.junit.Assert;
import org.testng.ITestContext;
import org.testng.TestNG;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class MyGroupsTest {
	ITestContext  myTestContext;
	TestNG tng = new TestNG();
	int a = init();
	
	public int init() {
		//tla = new TestListenerAdapter();
		//tng.addListener(tla);
		
		//tng.setAnnotationTransformer(new MyTransformer());
		return 1;
	}
	
	@DataProvider(name = "browserTarget")
	public Object[][] languages() {
		System.out.println();
		Object[][] DP = new Object[][] {{"a","1", true }, {"a","2",false },{"b","11", true }, {"b","22",true }};
		List<Object[]> Result = new ArrayList<Object[]>();
		for (int i = 0; i < DP.length; i++) {
			if (myTestContext.getName().equalsIgnoreCase(DP[i][0].toString())) {
				Result.add(DP[i]);	
			}
		}
		Object[][] obj = new Object[Result.size()][3];
		for (int i=0; i < obj.length ; i++)
			obj[i] = Result.get(i);
		return obj;
	}

	@Test(dataProvider = "browserTarget", description = "Test The Browser Targeting in Firefox")
	public void browserTarget(String suite, String test, boolean pass){
		//if (suite.equalsIgnoreCase(myTestContext.getName())) {
			Assert.assertTrue(pass);			
		//}
		
	}
	
	//@Test(invocationCount = 3)
    public void verify() {
    // ...
    }
    
	@BeforeTest
	public void TEST_BEFOFRE(ITestContext myTestContext1){
		myTestContext = myTestContext1;
	}
	
}

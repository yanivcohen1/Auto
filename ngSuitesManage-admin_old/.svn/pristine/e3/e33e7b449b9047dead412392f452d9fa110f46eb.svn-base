package com.who.rest.tests.testService;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.who.rest.dto.TestsDatasf;
import com.who.rest.util.Common;

public class TestServiceTests extends BaseTest {

	@Test
	public void getTestsData() {
		
		TestsDatasf testsDatasf = new TestsDatasf();
		testsDatasf.getTestsFlat().addAll(Common.getTestsUtil().getTestsData(-1));
		boolean res = Common.getTestsUtil().updateTests(testsDatasf.getTestsFlat());
		Assert.assertTrue(res, "Test Fail");
	}
	
}

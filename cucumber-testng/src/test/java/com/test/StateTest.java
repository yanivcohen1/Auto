package com.test;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.legalmonkeys.test.CucumberTestsStateUtil;

public class StateTest {

    @Test(priority = -1)
    public void testState() {
        // setup

        // act
        String result = CucumberTestsStateUtil.checkTests();

        // verify
        Assert.assertNull(result, result);
    }
}

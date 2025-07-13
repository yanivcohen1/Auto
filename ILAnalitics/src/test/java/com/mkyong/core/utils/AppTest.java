package com.mkyong.core.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testApp()
    {
    	Date date = new Date();
    	String newstring = new SimpleDateFormat("yyyy_MM_dd").format(date);
    	System.out.println(newstring);
        assertTrue( true );
    }
}

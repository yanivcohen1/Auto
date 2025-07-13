package com.wh.auto.utils;
import java.io.IOException;

import org.sikuli.script.*;
import org.testng.annotations.Test;

import com.wh.auto.common.Utility;
import com.wh.auto.cucumber.annotation.Scenario;

public class SikuliTest {

	public static void main(String[] args) throws IOException {
		SikuliTest sikuliTest = new SikuliTest();
		sikuliTest.loginWithGuestAccount();
	}
	
	@Test
    public void loginWithGuestAccount() throws IOException {
		Screen s = new Screen();
        try{
	           /* s.click("imgs/spotlight.png", 0);
	            s.wait("imgs/spotlight-input.png");
	            s.type(null, "hello world\n", 0);*/
        		String path =Utility.getResourcePath("sikuli/3Usorsyaniuc.png");
	        	Match mach = s.find(path);
		        	//s.click("imgs/1435673026216.png");
	        	mach.click();
	        	mach.type("dir c:");
        	}
        catch(FindFailed e){
                e.printStackTrace();
        }
    }

}

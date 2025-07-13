package com.who.test.server;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.test.server.db.EntityUtil;
import com.who.test.server.db.Loger;
import com.who.test.server.db.TestsUtil;
import com.who.test.shared.SuitesData;

public class Common {

	private static ApplicationContext context  = buildApplicationContext();
	
	private static ApplicationContext buildApplicationContext() {
		context = new ClassPathXmlApplicationContext("applicationContext.xml");
		return context;
	}
	
	public static ApplicationContext getApplicationContext() {
		return context;
	}
 
    public static Logger getLoger() {
        return getApplicationContext().getBean(Loger.class).getLoger();//logger;
    }
    
    public static TestsUtil getTestsUtil() {
        return getApplicationContext().getBean(TestsUtil.class);
    }
    
	public static EntityManager getEntityManager() {
		return getApplicationContext().getBean(EntityUtil.class).getEntityManager();
	}
	
	/**
	 * get the Resource Path
	 * @param driver
	 * @return
	 * @throws IOException
	 */
	public static String getResourcePath(String driver) {
		Resource resource = new ClassPathResource(driver);
		String path = null;
		try {
			path = resource.getFile().getPath();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return path;
	}
	
	public static String RunProcces(File workingDir, String mainCommand, String args) throws IOException{
		List<String> returnFromCommand = new ArrayList<>();
		String[] command =  new String[3];
        command[0] = "cmd";
        command[1] = "/C";
        command[2] = "\"" + mainCommand + "\" " + args;
        Process p = Runtime.getRuntime().exec(command, null, workingDir);
        BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
        BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
        // read the output from the command
        String s = null;
        boolean isFirst = true;
        //System.out.println("Here is the standard output of the command:\n");
        while ((s = stdInput.readLine()) != null) {
            returnFromCommand.add(s);
        }
        // read any errors from the attempted command
        isFirst = true;
        while ((s = stdError.readLine()) != null) {
        	if (isFirst) {
        	   System.out.println("Here is the standard error of the command: \n");
           	   isFirst = false;
             }
        	 System.out.println(s);
        	 returnFromCommand.add(s);
        }
        return StringUtils.join(returnFromCommand, '\n');
	}
	
}

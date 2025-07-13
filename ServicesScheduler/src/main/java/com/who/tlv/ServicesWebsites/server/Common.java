package com.who.tlv.ServicesWebsites.server;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.lang.StringUtils;
import org.hibernate.SessionFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.tlv.ServicesWebsites.server.DB.HibernateUtil;

public class Common {

	private static ApplicationContext context  = buildApplicationContext();
	
	private static ApplicationContext buildApplicationContext() {
		context = new ClassPathXmlApplicationContext("applicationContext.xml");
		return context;
	}
	
	public static ApplicationContext getApplicationContext() {
		return context;
	}
	
	public static SessionFactory getSessionFactory() {
		return getApplicationContext().getBean(HibernateUtil.class).getSessionFactory();
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
        while ((s = stdInput.readLine()) != null) {//p.exitValue());System.exit(code);
            returnFromCommand.add(s);
        }
        // read any errors from the attempted command
        isFirst = true;
        while ((s = stdError.readLine()) != null) {
        	if (isFirst) {
        	   System.out.println("Here is the standard error of the command: \n");
        	   System.out.println(s);
           	   isFirst = false;
             }
        	 //System.out.println(s);
        	 returnFromCommand.add(s);
        }
        //String[] strarray = new String[returnFromCommand.size()];
        //returnFromCommand.toArray(strarray);
        return StringUtils.join(returnFromCommand, '\n');//strarray.toString();
	}
	
}

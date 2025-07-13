package com.who.auto.jenkins;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.auto.web.websocket.ActivityService;

public class Utility {

	static Properties prop;
	private static final Logger log = LoggerFactory.getLogger(ActivityService.class);
	static{
		
		prop = new Properties();
    	/*Resource resource = new ClassPathResource("config.properties");
    	try {
			File configFile = resource.getFile();
			prop.load(new FileInputStream(configFile));
    	}catch (Exception e) {
			log.error("config file error", e);
			throw new IllegalArgumentException("Error" + e.getMessage());
		}*/
	}
	
	public static String getProperty(String key) throws IllegalArgumentException {
    	return prop.getProperty(key);
	}
	
	/**
	 * get the Resource Path
	 * @param driver
	 * @return
	 * @throws IOException
	 */
	public static String getResourcePath(String driver) throws IOException{
		Resource resource = new ClassPathResource(driver);
		String path = resource.getFile().getPath();
		return path;
	}
	
	public static String RunProcces(File workingDir, String mainCommand, String args) throws IOException{
		List<String> returnFromCommand = new ArrayList<String>();
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

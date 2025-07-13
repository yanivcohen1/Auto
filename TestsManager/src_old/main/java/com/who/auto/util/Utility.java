package com.who.auto.util;

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
	
	public static String[] spredArryToArry(String spredArry) throws IllegalArgumentException {
    	if (spredArry != null ){
    		if (spredArry.trim().isEmpty() ) {
    			return new String[0];
			}else{
				return spredArry.split(",");
			}
		}else{
			return new String[0];
		}
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
	public static String getResourcePath(String resurce) throws IOException{
		String PROGRAM_DIRECTORY = null;
		try {
		    //Attempt to get the path of the actual JAR file, because the working directory is frequently not where the file is.
		    //Example: file:/D:/all/Java/TitanWaterworks/TitanWaterworks-en.jar!/TitanWaterworks.class
		    //Another example: /D:/all/Java/TitanWaterworks/TitanWaterworks.class
			Utility currentClass= new Utility();
		    PROGRAM_DIRECTORY = currentClass.getClass().getClassLoader().getResource(resurce).getPath(); // Gets the path of the class or jar.

		    //Find the last ! and cut it off at that location. If this isn't being run from a jar, there is no !, so it'll cause an exception, which is fine.
		    try {
		        PROGRAM_DIRECTORY = PROGRAM_DIRECTORY.substring(0, PROGRAM_DIRECTORY.lastIndexOf('!'));
		    } catch (Exception e) { }

		    //Find the last / and cut it off at that location.
		    PROGRAM_DIRECTORY = PROGRAM_DIRECTORY.substring(0, PROGRAM_DIRECTORY.lastIndexOf('/') + 1);
		    //If it starts with /, cut it off.
		    if (PROGRAM_DIRECTORY.startsWith("/")) PROGRAM_DIRECTORY = PROGRAM_DIRECTORY.substring(1, PROGRAM_DIRECTORY.length());
		    //If it starts with file:/, cut that off, too.
		    if (PROGRAM_DIRECTORY.startsWith("file:/")) PROGRAM_DIRECTORY = PROGRAM_DIRECTORY.substring(6, PROGRAM_DIRECTORY.length());
		} catch (Exception e) {
		    PROGRAM_DIRECTORY = ""; //Current working directory instead.
		}
		//Resource resource = new ClassPathResource(driver);
		//String path = resource.getFile().getPath();
		return PROGRAM_DIRECTORY;
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
	
	private static String sourceFolder = null;
	
	public static String getFileFromResource(String fileName) {
		if (sourceFolder == null) {
			Utility utility = new Utility();
			try {
				File file = new File(utility.getResourcePath(fileName)).getParentFile();
				sourceFolder = file.getAbsolutePath();
			} catch (Exception e) {
				//logger.info("Prod Mode");
				try {
					String location = utility.GetExecutionPath();
					System.out.println("Exe Dir: " + location);
					//logger.info("Exe Dir: " + location);
					sourceFolder = location + "/classes/";
				} catch (Exception ex) {
					System.out.println("error: " + ex);
					//logger.error(ex);
				}
			}
		}
		return sourceFolder + "/" + fileName;
	}
	
	private String GetExecutionPath(){
	    String absolutePath = getClass().getProtectionDomain().getCodeSource().getLocation().getPath();
	    absolutePath = absolutePath.substring(0, absolutePath.lastIndexOf("/"));
	    absolutePath = absolutePath.replaceAll("%20"," "); // Surely need to do this here
	    return absolutePath;
	}
	
}

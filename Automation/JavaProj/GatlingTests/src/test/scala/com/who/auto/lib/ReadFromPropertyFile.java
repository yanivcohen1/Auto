package com.who.auto.lib;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ReadFromPropertyFile {

	private static final String ENV_JVM_ARG = "env";
	private static Properties PROP_FILE = ReadFromPropertyFile();
    private static final String PROP_FILE_ROOT = "src/test/resources/";
    private static final String PROP_FILE_SUFFIX = ".environment.properties";
    private static String propFilePath;
    private static Logger logger = LoggerFactory.getLogger(ReadFromPropertyFile.class);
	
	static public String systemProperty(String prop){
		return System.getProperty(prop);
	}
	
	static public String getFromEnvirmentProperty(String prop){
		return PROP_FILE.getProperty(prop);
	}
	
	/**
     * Default constructor
     * Initialises the target environment variable using JVM arg
     */
    public static Properties ReadFromPropertyFile() {

        final String environment = System.getProperty(ENV_JVM_ARG);

        if (environment == null)
        	throw new IllegalArgumentException("Null JVM arg " + ENV_JVM_ARG);
            //throw new NullArgumentException("Null JVM arg " + ENV_JVM_ARG);
        else if (environment.isEmpty())
        	throw new IllegalArgumentException("Empty JVM arg " + ENV_JVM_ARG);
            //throw new EmptyArgumentException("Empty JVM arg " + ENV_JVM_ARG);
        else {
            propFilePath = PROP_FILE_ROOT + environment.toLowerCase().trim() + PROP_FILE_SUFFIX;
            if (isPropFileThere(propFilePath)) loadPropFile();
            else throw new IllegalArgumentException("Property file doesn't exist in path " + propFilePath);
        }
        return PROP_FILE;
    }
    
    /**
     * Check if file exists in given path
     *
     * @param path file path
     * @return boolean
     */
    private static boolean isPropFileThere(final String path) {
        return new File(path).exists();
    }

    /**
     * Load property file
     */
    private static void loadPropFile() {

        try (FileReader fileReader = new FileReader(propFilePath)) {
        	PROP_FILE = new Properties();
            PROP_FILE.load(fileReader);
        } catch (FileNotFoundException e) {
            logger.error("****** Unable to find property file " + propFilePath, e);
        } catch (IOException e) {
            logger.error("****** Unable to read Property file " + propFilePath, e);
        }

    }
}

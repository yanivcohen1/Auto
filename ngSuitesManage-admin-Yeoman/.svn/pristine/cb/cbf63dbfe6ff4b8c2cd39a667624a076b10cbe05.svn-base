package com.who.rest.util;

import java.io.File;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

public class Loger {

	private static Logger logger = buildLoger();// = Logger.getLogger("name");
	
    private static Logger buildLoger() {
    	 try {
    		 logger = Logger.getLogger("name");
    		 Resource resource = new ClassPathResource("Log4j.xml");
         	 File URLsFile = resource.getFile();
	         DOMConfigurator.configure(URLsFile.getAbsolutePath());//src/log4j.xml
			}catch (Exception ex) {
	            ex.printStackTrace();
	            throw new RuntimeException(ex.getMessage());
			}
    	 return logger;
    }
 
    public static Logger getLoger() {
        return logger;
    }

}

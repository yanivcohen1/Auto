package com.who.test.server.db;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.loader.custom.Return;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

@Service
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

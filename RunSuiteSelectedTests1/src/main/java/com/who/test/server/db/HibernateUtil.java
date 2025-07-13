package com.who.test.server.db;
 
import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
 
@Service
public class HibernateUtil {
 
    private static SessionFactory sessionFactory = buildSessionFactory();
 
    private static SessionFactory buildSessionFactory() {
        try {
        	java.util.Properties prop = new Properties();
        	Resource resource = new ClassPathResource("Config.properties");
        	File configFile = resource.getFile();
        	prop.load(new FileInputStream(configFile));//("src/Config.properties"));
        	Resource resource2 = new ClassPathResource("hibernate.cfg.xml");
        	File ConfigFile = resource2.getFile();
        	Configuration config = new Configuration();
        	config.configure(ConfigFile);
        	config.setProperty("hibernate.connection.url", prop.getProperty("DB.url") );
        	config.setProperty("hibernate.connection.username", prop.getProperty("DB.username") );
        	config.setProperty("hibernate.connection.password", prop.getProperty("DB.password") );
        	sessionFactory = config.buildSessionFactory();
        	return sessionFactory;
        	
        } catch (Throwable ex) {
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
 
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}
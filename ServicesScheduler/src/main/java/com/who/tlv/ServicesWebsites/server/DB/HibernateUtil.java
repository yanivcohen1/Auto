package com.who.tlv.ServicesWebsites.server.DB;
 
import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
 
//@Service
public class HibernateUtil {
 
    private SessionFactory sessionFactory;// = buildSessionFactory();
    private String dbUrl;
    private String dbUsername;
    private String dbPassword;
    
    public String getDbUrl() {
		return dbUrl;
	}

	public void setDbUrl(String dbUrl) {
		this.dbUrl = dbUrl;
	}

	public String getDbUsername() {
		return dbUsername;
	}

	public void setDbUsername(String dbUsername) {
		this.dbUsername = dbUsername;
	}

	public String getDbPassword() {
		return dbPassword;
	}

	public void setDbPassword(String dbPassword) {
		this.dbPassword = dbPassword;
	}

	public void init() {
        try {
        	//java.util.Properties prop = new Properties();
        	//Resource resource = new ClassPathResource("Config.properties");
        	//File configFile = resource.getFile();
        	//prop.load(new FileInputStream(configFile));//("src/Config.properties"));
        	Resource resource2 = new ClassPathResource("hibernate.cfg.xml");
        	File ConfigFile = resource2.getFile();
        	Configuration config = new Configuration();
        	config.configure(ConfigFile);
        	config.setProperty("hibernate.connection.url", getDbUrl());//prop.getProperty("DB.url") );
        	config.setProperty("hibernate.connection.username", getDbUsername());//prop.getProperty("DB.username") );
        	config.setProperty("hibernate.connection.password", getDbPassword());//prop.getProperty("DB.password") );
        	sessionFactory = config.buildSessionFactory();
            // Create the SessionFactory from hibernate.cfg.xml
        	//return sessionFactory;
        	
        } catch (Throwable ex) {
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
 
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}
package com.who.test.server.db;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;

import org.hibernate.ejb.Ejb3Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

@Service
public class EntityUtil {	
	//@PersistenceContext
	private EntityManager  entityManager ; //= buildEntityManagerFactory();
	//private static EntityManagerFactory emf;
	
	EntityUtil() {
        try {
        	java.util.Properties prop = new Properties();
        	Resource resource = new ClassPathResource("Config.properties");
        	File configFile = resource.getFile();
        	prop.load(new FileInputStream(configFile));//("src/Config.properties"));
        	//Resource resource2 = new ClassPathResource("hibernate.cfg.xml");
        	//File ConfigFile = resource2.getFile();
        	Ejb3Configuration config = new Ejb3Configuration();
        	config.configure("hibernate.cfg.xml");
        	config.setProperty("hibernate.connection.url", prop.getProperty("DB.url") );
        	config.setProperty("hibernate.connection.username", prop.getProperty("DB.username") );
        	config.setProperty("hibernate.connection.password", prop.getProperty("DB.password") );
        	config.setProperty("hibernate.connection.driver_class", "org.gjt.mm.mysql.Driver" );
        	config.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5InnoDBDialect" );
        	config.setProperty("hibernate.show_sql", prop.getProperty("DB.show_sql") );
        	config.setProperty("hibernate.format_sql", "true" );
        	config.setProperty("hibernate.hbm2ddl.auto", prop.getProperty("DB.create") );
        	config.setProperty("isolationLevelForCreate", "ISOLATION_DEFAULT");
        	//config.setProperty("hibernate.hbm2ddl.auto", "validate" );//create-drop validate
        	config.addAnnotatedClass( Tests.class ); //add a class to be mapped
        	config.addAnnotatedClass( Suites.class );
        	config.addAnnotatedClass( Parameters.class );
        	config.addAnnotatedClass( Classes.class );
        	//EntityManagerFactory emf = 
            //    	  cfg.addProperties( properties ) //add some properties
            //    	     .setInterceptor( myInterceptorImpl ) // set an interceptor
            //    	     .addAnnotatedClass( MyAnnotatedClass.class ) //add a class to be mapped
            //    	     .addClass( NonAnnotatedClass.class ) //add an hbm.xml file using the Hibernate convention
            //    	     .addRerousce( "mypath/MyOtherCLass.hbm.xml ) //add an hbm.xml file
            //    	     .addRerousce( "mypath/orm.xml ) //add an EJB3 deployment descriptor
            // 	      cfg.configure("/mypath/hibernate.cfg.xml") //add a regular hibernate.cfg.xml
        	//emf = Persistence.createEntityManagerFactory("manager1");
        	EntityManagerFactory emf = config.buildEntityManagerFactory(); //Create the entity manager factory
        	//sessionFactory = config.buildSessionFactory();
            // Create the SessionFactory from hibernate.cfg.xml
        	//return emf.createEntityManager();//sessionFactory;
        	entityManager = emf.createEntityManager();//sessionFactory;
        	
        } catch (Throwable ex) {
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
 
    public EntityManager  getEntityManager() {
        return entityManager ;
    }
	
}

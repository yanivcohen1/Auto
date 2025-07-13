package com.who.test.server.db;

import java.io.File;
import java.io.FileInputStream;
import java.sql.Connection;
import java.util.List;
import java.util.Properties;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;

import org.hibernate.Session;
import org.hibernate.ejb.Ejb3Configuration;
import org.hibernate.engine.spi.SessionFactoryImplementor;
import org.hibernate.service.jdbc.connections.spi.ConnectionProvider;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import com.who.test.server.util.Common;
import com.who.test.shared.Classe;
import com.who.test.shared.Parameters;
import com.who.test.shared.Suites;
import com.who.test.shared.Tests;

@Service
public class EntityUtil {	

	private EntityManager  entityManager = buildEntityManagerFactory();
	
	private EntityManager buildEntityManagerFactory() {
        try {
        	java.util.Properties prop = new Properties();
        	Resource resource = new ClassPathResource("Config.properties");
        	File configFile = resource.getFile();
        	prop.load(new FileInputStream(configFile));
        	Ejb3Configuration config = new Ejb3Configuration();
        	config.configure("hibernate.cfg.xml");
        	config.setProperty("hibernate.connection.url", prop.getProperty("DB.url") );
        	config.setProperty("hibernate.connection.username", prop.getProperty("DB.username") );
        	config.setProperty("hibernate.connection.password", prop.getProperty("DB.password") );
        	config.setProperty("hibernate.connection.driver_class", "com.mysql.jdbc.Driver" );
        	config.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5InnoDBDialect" );
        	config.setProperty("hibernate.show_sql", prop.getProperty("DB.show_sql") );
        	config.setProperty("hibernate.format_sql", "true" );
        	config.setProperty("hibernate.hbm2ddl.auto", prop.getProperty("DB.create") );
        	//config.setProperty("hibernate.hbm2ddl.auto", "validate" );//create-drop validate
        	config.addAnnotatedClass( Tests.class ); //add a class to be mapped
        	config.addAnnotatedClass( Suites.class );
        	config.addAnnotatedClass( Parameters.class );
        	config.addAnnotatedClass( Classe.class );
        	EntityManagerFactory emf = config.buildEntityManagerFactory(); //Create the entity manager factory
        	entityManager = emf.createEntityManager();//sessionFactory;
        } catch (Throwable ex) {
        	Common.getLoger().error("Initial SessionFactory creation failed error", ex);
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
        return entityManager;
    }
 
    public EntityManager getEntityManager() {
    	try {	
    		//Suites suites = entityManager.find(Suites.class, 1);
    		String HQL = "select suitess from Suites as suitess "+ 
    				"where suitess.suitesId ='1' ";
    		List<Suites> suites = entityManager.createQuery(HQL).getResultList();
    		//entityManager.getTransaction()
    		//Session session = (Session) entityManager.getDelegate();
    		//SessionFactoryImplementor sfi = (SessionFactoryImplementor) session.getSessionFactory();
    		//ConnectionProvider cp = sfi.getConnectionProvider();
    		//Connection connection = cp.getConnection();
    		//if(connection.isClosed()){
    		//	buildEntityManagerFactory();
    		//}
		} catch (Exception e) {
			Common.getLoger().error("getEntityManager error", e);
			buildEntityManagerFactory();
		}
        return entityManager ;
    }
	
}

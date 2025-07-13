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
import org.hibernate.cfg.Configuration;
import org.hibernate.ejb.Ejb3Configuration;
import org.hibernate.engine.spi.SessionFactoryImplementor;
import org.hibernate.service.jdbc.connections.spi.ConnectionProvider;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.who.test.server.util.Common;
import com.who.test.shared.Classe;
import com.who.test.shared.Parameters;
import com.who.test.shared.Suites;
import com.who.test.shared.Tests;

@Repository
public class EntityUtil {
	
	//@PersistenceContext(unitName="RunSuiteSelectedTests")
	//@Qualifier(value = "appEntityManagerFactory")
	@PersistenceContext
	private EntityManager entityManager;
	//private EntityManagerFactory emf;
 	private String dbUrl;
    private String dbUsername;
    private String dbPassword;
    private String show_sql;
    private String createDB;
    private String driver_class;
    private String dialect;
    private String format_sql;
    
	
	/*public void init() {
		try {
        	Ejb3Configuration config = new Ejb3Configuration();
        	//config.configure("hibernate.cfg.xml");
        	config.setProperty("hibernate.connection.url", getDbUrl() );
        	config.setProperty("hibernate.connection.username", getDbUsername() );
        	config.setProperty("hibernate.connection.password", getDbPassword() );
        	config.setProperty("hibernate.connection.driver_class", getDriver_class() );
        	config.setProperty("hibernate.dialect", getDialect() );
        	config.setProperty("hibernate.show_sql", getShow_sql() );
        	config.setProperty("hibernate.format_sql", getFormat_sql() );
        	config.setProperty("hibernate.hbm2ddl.auto",getCreateDB() );
        	//emf = config.buildEntityManagerFactory(); //Create the entity manager factory
        	emf = Persistence.createEntityManagerFactory("RunSuiteSelectedTests");
        	entityManager = emf.createEntityManager();
        } catch (Throwable ex) {
        	Common.getLoger().error("Initial SessionFactory creation failed error", ex);
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }    */
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
	
		public String getShow_sql() {
			return show_sql;
		}

		public void setShow_sql(String show_sql) {
			this.show_sql = show_sql;
		}

		public String getCreateDB() {
			return createDB;
		}

		public void setCreateDB(String createDB) {
			this.createDB = createDB;
		}
 
		public String getDriver_class() {
			return driver_class;
		}
		public void setDriver_class(String driver_class) {
			this.driver_class = driver_class;
		}
		public String getDialect() {
			return dialect;
		}
		public void setDialect(String dialect) {
			this.dialect = dialect;
		}
		public String getFormat_sql() {
			return format_sql;
		}
		public void setFormat_sql(String format_sql) {
			this.format_sql = format_sql;
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
			entityManager = Persistence.createEntityManagerFactory("RunSuiteSelectedTests").createEntityManager();
		}
        return entityManager ;
    }
	
}

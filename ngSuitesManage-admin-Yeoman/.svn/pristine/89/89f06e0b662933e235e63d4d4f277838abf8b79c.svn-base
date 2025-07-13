package com.who.rest.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.InitialContext;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.rest.dao.jpa.IJpaSuitesDao;
import com.who.rest.dao.jpa.JpaSuitesDao;
import com.who.rest.service.SuitesUtil;
import com.who.rest.service.TestsUtil;

public class Common {

	private static ApplicationContext context;//  = buildApplicationContext();
	
	/*private static ApplicationContext buildApplicationContext() {
		
		context = new ClassPathXmlApplicationContext("applicationContext.xml");
		context.getBean(EntityUtil.class).getEntityManager();
		return context;
	}*/
	
	public static void setApplicationContext(ApplicationContext applicationContext){
		context = applicationContext;
	}
	
	public static ApplicationContext getApplicationContext() {
		return context;
	}
 
    public static Logger getLoger() {
        return getApplicationContext().getBean(Loger.class).getLoger();//logger;
    }
    
    public static SuitesUtil getSuitsUtil() {
        return getApplicationContext().getBean(SuitesUtil.class);
    }
    
    public static TestsUtil getTestsUtil() {
        return getApplicationContext().getBean(TestsUtil.class);
    }
    
	public static EntityManager getEntityManager() {
		return getApplicationContext().getBean(EntityUtil.class).getEntityManager();
	}

	public static JpaSuitesDao getJpaSuitesDao() {
		return getApplicationContext().getBean(JpaSuitesDao.class);
	}
	
	public static <T> T getBean(String id) throws BeansException
    {
		return (T) context.getBean(id);
    }
	
}

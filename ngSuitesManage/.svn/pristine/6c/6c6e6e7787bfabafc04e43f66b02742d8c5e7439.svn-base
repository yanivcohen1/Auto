package com.who.rest.util;

import javax.persistence.EntityManager;
import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.who.rest.db.EntityUtil;
import com.who.rest.db.TestsUtil;

public class Common {

	private static ApplicationContext context  = buildApplicationContext();
	private static ApplicationContext buildApplicationContext() {
		
		context = new ClassPathXmlApplicationContext("applicationContext.xml");
		context.getBean(EntityUtil.class).getEntityManager();
		return context;
	}
	
	public static ApplicationContext getApplicationContext() {
		return context;
	}
 
    public static Logger getLoger() {
        return getApplicationContext().getBean(Loger.class).getLoger();//logger;
    }
    
    public static TestsUtil getTestsUtil() {
        return getApplicationContext().getBean(TestsUtil.class);
    }
    
	public static EntityManager getEntityManager() {
		return getApplicationContext().getBean(EntityUtil.class).getEntityManager();
	}

}

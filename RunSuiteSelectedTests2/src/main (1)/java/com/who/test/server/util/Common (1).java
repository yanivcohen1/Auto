package com.who.test.server.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.test.server.db.EntityUtil;
import com.who.test.server.db.TestsUtil;
import com.who.test.shared.SuitesData;
import com.who.test.shared.UserDto;

public class Common {

	private static ApplicationContext context  = buildApplicationContext();
	
	private static ApplicationContext buildApplicationContext() {
		context = new ClassPathXmlApplicationContext("applicationContext.xml");
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
    
    public static UserDto getUserDto() {
        return getApplicationContext().getBean(UserDto.class);
    }
    
	public static EntityManager getEntityManager() {
		return getApplicationContext().getBean(EntityUtil.class).getEntityManager();
	}

}

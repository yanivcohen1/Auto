package com.who.test.server.util;

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

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanCreationException;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.support.GenericBeanDefinition;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.test.server.db.EntityUtil;
import com.who.test.server.db.TestsUtil;
import com.who.test.shared.SuitesData;
import com.who.test.shared.UserDto;

public class Common {

	private static ApplicationContext applicationContext;
	
	public static void setApplicationContext(ApplicationContext _applicationContext){
		applicationContext = _applicationContext;
	}
	
	public static ApplicationContext getApplicationContext() {
		return applicationContext;
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

	/**
     * Returns a bean of specified ID.
     * 
      * @param id
     *            specifies the bean.
     * @return the bean of specified ID.
     * @throws BeansException
     *             if no bean was found.
     */
     @SuppressWarnings("unchecked")
     public static <T> T getBean(String id) throws BeansException
     {
                    return (T) applicationContext.getBean(id);
     }

     /**
     * Load Spring Batch Job
     * 
      * @param taskName
     *            specifies the bean name to add
     * @param configXMLFileName
     *            the task xml configuration file path
     */
     public static void loadDaynamicTask(String taskName, String configXMLFileName)
     {
    	 getLoger().debug("Start adding taskName:{}, configXMLFileName:{} to the applicationContext" + taskName + configXMLFileName);

                    if (applicationContext.containsBean(taskName))
                    {
                                   return;
                    }
                    ClassPathXmlApplicationContext jobCtx = null;
                    try
                    {
                                   // load the job from the configuration File and create new context
                                   jobCtx = new ClassPathXmlApplicationContext(new String[] { configXMLFileName }, true, applicationContext);

                                   // get the Job Bean

                                   Object myBean = jobCtx.getBean(taskName);

                                   // get the ConfigurableApplicationContext from the job context
                                   ConfigurableApplicationContext jobConfigApx = (ConfigurableApplicationContext) jobCtx;
                                   DefaultListableBeanFactory jobConfigBeanFactory = (DefaultListableBeanFactory) jobConfigApx.getBeanFactory();

                                   // get the ConfigurableApplicationContext from the application
                                   // context
                                   ConfigurableApplicationContext configurableApplicationContext = (ConfigurableApplicationContext) applicationContext;
                                   DefaultListableBeanFactory appBeanFactory = (DefaultListableBeanFactory) configurableApplicationContext.getBeanFactory();

                                   // create beans beanDefinition for the Job
                                   GenericBeanDefinition jobBeanDefinition = (GenericBeanDefinition) jobConfigBeanFactory.getBeanDefinition(taskName);
                                   // register Job Bean
                                   appBeanFactory.registerBeanDefinition(taskName, jobBeanDefinition);

                    }
                    catch (Exception e)
                    {
                                   String message = "Fail to load Dynamic taskName:" + taskName;
                                   getLoger().error(message);
                                   throw new RuntimeException(message, e);
                    }
                    finally
                    {
                                   if (jobCtx != null)
                                   {
                                                  ((AbstractApplicationContext) jobCtx).close();
                                                  jobCtx = null;
                                   }
                    }
     }

     /**
     * Removes a Bean from application context.
     * 
      * @param beanName
     *            specifies the bean name to add
     */
     public static void removeDynamicBean(String beanName)
     {
    	 getLoger().debug("Start removing beanName:{} from the applicationContext" + beanName);

                    // get the ConfigurableApplicationContext from the application context
                    ConfigurableApplicationContext configurableApplicationContext = (ConfigurableApplicationContext) applicationContext;
                    DefaultListableBeanFactory appBeanFactory = (DefaultListableBeanFactory) configurableApplicationContext.getBeanFactory();
                    try
                    {
                                   if (configurableApplicationContext.containsBean(beanName))
                                   {
                                                  Object bean = configurableApplicationContext.getBean(beanName);

                                                  appBeanFactory.removeBeanDefinition(beanName);
                                   }
                    }
                    catch (NoSuchBeanDefinitionException e)
                    {
                    	getLoger().warn("Failed to remove bean, no such bean beanName:{} in the applicationContext" + beanName);
                    }
                    catch (BeanCreationException e) {
                    	getLoger().warn("Failed to create bean for removal"+ beanName);
                    }

     }
	
}

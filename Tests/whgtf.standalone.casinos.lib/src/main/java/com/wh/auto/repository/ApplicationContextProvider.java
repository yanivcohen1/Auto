package com.wh.auto.repository;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * Provides an application-wide access to the Spring ApplicationContext.
 * 
 * The ApplicationContext is injected in a static method of the class
 * {@link AppContext}.
 * 
 * Use AppContext.getApplicationContext() to get access to all Spring Beans.
 * 
 * @author Yuriy Stul
 * @see AppContext
 * 
 */
public class ApplicationContextProvider implements ApplicationContextAware {
	/**
	 * Unique ID of ApplicationContextProvider bean.
	 */
	public static final String UID = "applicationContextProvider";
	private static ApplicationContext context;
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.springframework.context.ApplicationContextAware#setApplicationContext
	 * (org.springframework.context.ApplicationContext)
	 */
	//@Override
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		if (applicationContext == null) {
			throw new NullPointerException("applicationContext is null.");
		} else {
			context = applicationContext;
			AppContextRepository.setAc(context);
			//SessionRepository.setAppContext(context, Thread.currentThread().getId());
			//Common.setApplicationContext(applicationContext);
		}
	}
	
	public static ApplicationContext getApplicationContext() {
		return context;
	}
}

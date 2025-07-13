package com.wh.auto.common;

import java.io.File;
import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.metamodel.MetadataSources;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class HibernateUtil
{
    private static SessionFactory sessionFactory;
    private static ServiceRegistry serviceRegistry;

    static
    {
        try
        {
        	Resource resource = new ClassPathResource("hibernate.cfg.xml");
        	File ConfigFile = resource.getFile();
        	Configuration config = new Configuration();
        	config.configure(ConfigFile);
            Configuration configuration = new Configuration().configure();
            serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
            sessionFactory = configuration.buildSessionFactory(serviceRegistry);
        }
        catch (Exception he)
        {
            System.err.println("Error creating Session: " + he);
            throw new ExceptionInInitializerError(he);
        }
    }

    public static SessionFactory getSessionFactory()
    {
        return sessionFactory;
    } 
}
package com.wh.auto.hibernate;

import java.math.BigDecimal;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Notification.
 * @see com.wh.auto.hibernate.Notification
 * @author yanivc
 */
@Stateless
public class NotificationHome {

	private static final Log log = LogFactory.getLog(NotificationHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Notification transientInstance) {
		log.debug("persisting Notification instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		}
		catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Notification persistentInstance) {
		log.debug("removing Notification instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		}
		catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Notification merge(Notification detachedInstance) {
		log.debug("merging Notification instance");
		try {
			Notification result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		}
		catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Notification findById(BigDecimal id) {
		log.debug("getting Notification instance with id: " + id);
		try {
			Notification instance = entityManager.find(Notification.class, id);
			log.debug("get successful");
			return instance;
		}
		catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

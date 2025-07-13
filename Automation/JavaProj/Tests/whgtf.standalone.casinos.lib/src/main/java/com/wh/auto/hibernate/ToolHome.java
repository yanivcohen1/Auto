package com.wh.auto.hibernate;

import java.math.BigDecimal;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Tool.
 * @see com.wh.auto.hibernate.Tool
 * @author yanivc
 */
@Stateless
public class ToolHome {

	private static final Log log = LogFactory.getLog(ToolHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Tool transientInstance) {
		log.debug("persisting Tool instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		}
		catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Tool persistentInstance) {
		log.debug("removing Tool instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		}
		catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Tool merge(Tool detachedInstance) {
		log.debug("merging Tool instance");
		try {
			Tool result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		}
		catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Tool findById(BigDecimal id) {
		log.debug("getting Tool instance with id: " + id);
		try {
			Tool instance = entityManager.find(Tool.class, id);
			log.debug("get successful");
			return instance;
		}
		catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

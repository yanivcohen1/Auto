package com.wh.auto.hibernate;

import java.math.BigDecimal;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Brand.
 * @see com.wh.auto.hibernate.Brand
 * @author yanivc
 */
@Stateless
public class BrandHome {

	private static final Log log = LogFactory.getLog(BrandHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Brand transientInstance) {
		log.debug("persisting Brand instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		}
		catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Brand persistentInstance) {
		log.debug("removing Brand instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		}
		catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Brand merge(Brand detachedInstance) {
		log.debug("merging Brand instance");
		try {
			Brand result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		}
		catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Brand findById(BigDecimal id) {
		log.debug("getting Brand instance with id: " + id);
		try {
			Brand instance = entityManager.find(Brand.class, id);
			log.debug("get successful");
			return instance;
		}
		catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

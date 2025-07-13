package com.wh.auto.hibernate;

import java.math.BigDecimal;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class BrandsResult.
 * @see com.wh.auto.hibernate.BrandsResult
 * @author yanivc
 */
@Stateless
public class BrandsResultHome {

	private static final Log log = LogFactory.getLog(BrandsResultHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(BrandsResult transientInstance) {
		log.debug("persisting BrandsResult instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		}
		catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(BrandsResult persistentInstance) {
		log.debug("removing BrandsResult instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		}
		catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public BrandsResult merge(BrandsResult detachedInstance) {
		log.debug("merging BrandsResult instance");
		try {
			BrandsResult result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		}
		catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public BrandsResult findById(BigDecimal id) {
		log.debug("getting BrandsResult instance with id: " + id);
		try {
			BrandsResult instance = entityManager.find(BrandsResult.class, id);
			log.debug("get successful");
			return instance;
		}
		catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

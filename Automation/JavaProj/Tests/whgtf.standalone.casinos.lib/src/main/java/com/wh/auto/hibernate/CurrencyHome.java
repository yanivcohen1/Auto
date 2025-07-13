package com.wh.auto.hibernate;

import java.math.BigDecimal;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Currency.
 * @see com.wh.auto.hibernate.Currency
 * @author yanivc
 */
@Stateless
public class CurrencyHome {

	private static final Log log = LogFactory.getLog(CurrencyHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Currency transientInstance) {
		log.debug("persisting Currency instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		}
		catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Currency persistentInstance) {
		log.debug("removing Currency instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		}
		catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Currency merge(Currency detachedInstance) {
		log.debug("merging Currency instance");
		try {
			Currency result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		}
		catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Currency findById(BigDecimal id) {
		log.debug("getting Currency instance with id: " + id);
		try {
			Currency instance = entityManager.find(Currency.class, id);
			log.debug("get successful");
			return instance;
		}
		catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

package com.wh.auto.hibernate;

import java.math.BigDecimal;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class BrandLanguage.
 * @see com.wh.auto.hibernate.BrandLanguage
 * @author yanivc
 */
@Stateless
public class BrandLanguageHome {

	private static final Log log = LogFactory.getLog(BrandLanguageHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(BrandLanguage transientInstance) {
		log.debug("persisting BrandLanguage instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		}
		catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(BrandLanguage persistentInstance) {
		log.debug("removing BrandLanguage instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		}
		catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public BrandLanguage merge(BrandLanguage detachedInstance) {
		log.debug("merging BrandLanguage instance");
		try {
			BrandLanguage result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		}
		catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public BrandLanguage findById(BigDecimal id) {
		log.debug("getting BrandLanguage instance with id: " + id);
		try {
			BrandLanguage instance = entityManager.find(BrandLanguage.class, id);
			log.debug("get successful");
			return instance;
		}
		catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

package com.who.test.server.db;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.who.test.shared.Tests;

/**
 * Home object for domain model class Tests.
 * @see com.who.test.shared.Tests
 * @author Hibernate Tools
 */
@Stateless
public class TestsHome {

	private static final Log log = LogFactory.getLog(TestsHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Tests transientInstance) {
		log.debug("persisting Tests instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Tests persistentInstance) {
		log.debug("removing Tests instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Tests merge(Tests detachedInstance) {
		log.debug("merging Tests instance");
		try {
			Tests result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Tests findById(Integer id) {
		log.debug("getting Tests instance with id: " + id);
		try {
			Tests instance = entityManager.find(Tests.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

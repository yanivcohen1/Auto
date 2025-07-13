package com.who.test.server.db;

// Generated Mar 31, 2014 11:54:45 AM by Hibernate Tools 4.0.0

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Suites.
 * @see com.who.test.server.db.Suites
 * @author Hibernate Tools
 */
@Stateless
public class SuitesHome {

	private static final Log log = LogFactory.getLog(SuitesHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Suites transientInstance) {
		log.debug("persisting Suites instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Suites persistentInstance) {
		log.debug("removing Suites instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Suites merge(Suites detachedInstance) {
		log.debug("merging Suites instance");
		try {
			Suites result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Suites findById(Integer id) {
		log.debug("getting Suites instance with id: " + id);
		try {
			Suites instance = entityManager.find(Suites.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

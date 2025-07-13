package com.who.test.server.db;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.who.test.shared.Parameters;

/**
 * Home object for domain model class Parameters.
 * @see com.who.test.shared.Parameters
 * @author Hibernate Tools
 */
@Stateless
public class ParametersHome {

	private static final Log log = LogFactory.getLog(ParametersHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Parameters transientInstance) {
		log.debug("persisting Parameters instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Parameters persistentInstance) {
		log.debug("removing Parameters instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Parameters merge(Parameters detachedInstance) {
		log.debug("merging Parameters instance");
		try {
			Parameters result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Parameters findById(Integer id) {
		log.debug("getting Parameters instance with id: " + id);
		try {
			Parameters instance = entityManager.find(Parameters.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}

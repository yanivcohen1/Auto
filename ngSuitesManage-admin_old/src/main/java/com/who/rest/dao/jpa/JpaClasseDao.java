package com.who.rest.dao.jpa;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.who.rest.dao.Dao;
import com.who.rest.db.model.Classe;
import com.who.rest.db.model.Parameters;

@Service
public class JpaClasseDao extends Dao<Classe, Integer> implements IJpaClasseDao
{

	public JpaClasseDao()
	{
		super(Classe.class);
	}

}

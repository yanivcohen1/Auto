package com.who.rest.dao;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Query;

import com.who.security.entity.Entity;


public interface IDao<T, I> extends Serializable
{

	List<T> findAll();


	T find(Integer id);


	T save(T newsEntry);


	void delete(Integer id);
	
	List<T> runQuery(Query query);

}
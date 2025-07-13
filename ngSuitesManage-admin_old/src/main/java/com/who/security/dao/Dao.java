package com.who.security.dao;

import java.util.List;

import com.who.security.entity.Entity;


public interface Dao<T extends Entity, I>
{

	List<T> findAll();


	T find(I id);


	T save(T newsEntry);


	void delete(I id);

}
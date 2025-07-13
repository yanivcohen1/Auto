package com.who.security.dao.user;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.who.security.dao.Dao;
import com.who.security.entity.User;


public interface UserDao extends Dao<User, Long>, UserDetailsService
{

	User findByName(String name);

}
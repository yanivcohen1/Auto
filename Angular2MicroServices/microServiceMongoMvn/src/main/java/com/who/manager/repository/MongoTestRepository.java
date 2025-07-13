package com.who.manager.repository;

import com.who.manager.domain.MongoTest;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the MongoTest entity.
 */
@SuppressWarnings("unused")
public interface MongoTestRepository extends MongoRepository<MongoTest,String> {

}

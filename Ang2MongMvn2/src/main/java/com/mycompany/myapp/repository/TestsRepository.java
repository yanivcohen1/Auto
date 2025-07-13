package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Tests;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Tests entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TestsRepository extends MongoRepository<Tests, String> {

}

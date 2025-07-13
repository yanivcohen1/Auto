package com.yan.manag.repository.mongo;

import com.yan.manag.domain.Senario;
import com.yan.manag.domain.Testss;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Testss entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SenarioRepository extends MongoRepository<Senario, String> {

}

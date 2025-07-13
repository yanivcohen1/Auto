package com.who.manager.service;

import com.who.manager.domain.MongoTest;
import com.who.manager.repository.MongoTestRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Implementation for managing MongoTest.
 */
@Service
public class MongoTestService {

    private final Logger log = LoggerFactory.getLogger(MongoTestService.class);
    
    private final MongoTestRepository mongoTestRepository;

    public MongoTestService(MongoTestRepository mongoTestRepository) {
        this.mongoTestRepository = mongoTestRepository;
    }

    /**
     * Save a mongoTest.
     *
     * @param mongoTest the entity to save
     * @return the persisted entity
     */
    public MongoTest save(MongoTest mongoTest) {
        log.debug("Request to save MongoTest : {}", mongoTest);
        MongoTest result = mongoTestRepository.save(mongoTest);
        return result;
    }

    /**
     *  Get all the mongoTests.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<MongoTest> findAll(Pageable pageable) {
        log.debug("Request to get all MongoTests");
        Page<MongoTest> result = mongoTestRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one mongoTest by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public MongoTest findOne(String id) {
        log.debug("Request to get MongoTest : {}", id);
        MongoTest mongoTest = mongoTestRepository.findOne(id);
        return mongoTest;
    }

    /**
     *  Delete the  mongoTest by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete MongoTest : {}", id);
        mongoTestRepository.delete(id);
    }
}

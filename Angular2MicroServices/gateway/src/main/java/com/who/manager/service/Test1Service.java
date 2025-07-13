package com.who.manager.service;

import com.who.manager.domain.Test1;
import com.who.manager.repository.Test1Repository;
import com.who.manager.repository.search.Test1SearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Test1.
 */
@Service
@Transactional
public class Test1Service {

    private final Logger log = LoggerFactory.getLogger(Test1Service.class);
    
    private final Test1Repository test1Repository;

    private final Test1SearchRepository test1SearchRepository;

    public Test1Service(Test1Repository test1Repository, Test1SearchRepository test1SearchRepository) {
        this.test1Repository = test1Repository;
        this.test1SearchRepository = test1SearchRepository;
    }

    /**
     * Save a test1.
     *
     * @param test1 the entity to save
     * @return the persisted entity
     */
    public Test1 save(Test1 test1) {
        log.debug("Request to save Test1 : {}", test1);
        Test1 result = test1Repository.save(test1);
        test1SearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the test1S.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Test1> findAll(Pageable pageable) {
        log.debug("Request to get all Test1S");
        Page<Test1> result = test1Repository.findAll(pageable);
        return result;
    }

    /**
     *  Get one test1 by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public Test1 findOne(Long id) {
        log.debug("Request to get Test1 : {}", id);
        Test1 test1 = test1Repository.findOne(id);
        return test1;
    }

    /**
     *  Delete the  test1 by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Test1 : {}", id);
        test1Repository.delete(id);
        test1SearchRepository.delete(id);
    }

    /**
     * Search for the test1 corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Test1> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Test1S for query {}", query);
        Page<Test1> result = test1SearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}

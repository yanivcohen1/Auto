package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Tests;
import com.mycompany.myapp.repository.TestsRepository;
import com.mycompany.myapp.repository.search.TestsSearchRepository;
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
 * Service Implementation for managing Tests.
 */
@Service
@Transactional
public class TestsService {

    private final Logger log = LoggerFactory.getLogger(TestsService.class);
    
    private final TestsRepository testsRepository;

    private final TestsSearchRepository testsSearchRepository;

    public TestsService(TestsRepository testsRepository, TestsSearchRepository testsSearchRepository) {
        this.testsRepository = testsRepository;
        this.testsSearchRepository = testsSearchRepository;
    }

    /**
     * Save a tests.
     *
     * @param tests the entity to save
     * @return the persisted entity
     */
    public Tests save(Tests tests) {
        log.debug("Request to save Tests : {}", tests);
        Tests result = testsRepository.save(tests);
        testsSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the tests.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Tests> findAll(Pageable pageable) {
        log.debug("Request to get all Tests");
        Page<Tests> result = testsRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one tests by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public Tests findOne(Long id) {
        log.debug("Request to get Tests : {}", id);
        Tests tests = testsRepository.findOne(id);
        return tests;
    }

    /**
     *  Delete the  tests by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Tests : {}", id);
        testsRepository.delete(id);
        testsSearchRepository.delete(id);
    }

    /**
     * Search for the tests corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Tests> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Tests for query {}", query);
        Page<Tests> result = testsSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}

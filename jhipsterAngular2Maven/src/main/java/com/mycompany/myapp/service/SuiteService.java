package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Suite;
import com.mycompany.myapp.repository.SuiteRepository;
import com.mycompany.myapp.repository.search.SuiteSearchRepository;
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
 * Service Implementation for managing Suite.
 */
@Service
@Transactional
public class SuiteService {

    private final Logger log = LoggerFactory.getLogger(SuiteService.class);
    
    private final SuiteRepository suiteRepository;

    private final SuiteSearchRepository suiteSearchRepository;

    public SuiteService(SuiteRepository suiteRepository, SuiteSearchRepository suiteSearchRepository) {
        this.suiteRepository = suiteRepository;
        this.suiteSearchRepository = suiteSearchRepository;
    }

    /**
     * Save a suite.
     *
     * @param suite the entity to save
     * @return the persisted entity
     */
    public Suite save(Suite suite) {
        log.debug("Request to save Suite : {}", suite);
        Suite result = suiteRepository.save(suite);
        suiteSearchRepository.save(result);
        return result;
    }

    /**
     *  Get all the suites.
     *  
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Suite> findAll(Pageable pageable) {
        log.debug("Request to get all Suites");
        Page<Suite> result = suiteRepository.findAll(pageable);
        return result;
    }

    /**
     *  Get one suite by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Transactional(readOnly = true)
    public Suite findOne(Long id) {
        log.debug("Request to get Suite : {}", id);
        Suite suite = suiteRepository.findOne(id);
        return suite;
    }

    /**
     *  Delete the  suite by id.
     *
     *  @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Suite : {}", id);
        suiteRepository.delete(id);
        suiteSearchRepository.delete(id);
    }

    /**
     * Search for the suite corresponding to the query.
     *
     *  @param query the query of the search
     *  @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Suite> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Suites for query {}", query);
        Page<Suite> result = suiteSearchRepository.search(queryStringQuery(query), pageable);
        return result;
    }
}

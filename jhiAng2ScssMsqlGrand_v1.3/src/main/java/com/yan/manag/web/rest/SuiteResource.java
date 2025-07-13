package com.yan.manag.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.yan.manag.domain.Suite;

import com.yan.manag.repository.SuiteRepository;
import com.yan.manag.repository.search.SuiteSearchRepository;
import com.yan.manag.web.rest.util.HeaderUtil;
import com.yan.manag.web.rest.util.PaginationUtil;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Suite.
 */
@RestController
@RequestMapping("/api")
public class SuiteResource {

    private final Logger log = LoggerFactory.getLogger(SuiteResource.class);

    private static final String ENTITY_NAME = "suite";

    private final SuiteRepository suiteRepository;

    private final SuiteSearchRepository suiteSearchRepository;

    public SuiteResource(SuiteRepository suiteRepository, SuiteSearchRepository suiteSearchRepository) {
        this.suiteRepository = suiteRepository;
        this.suiteSearchRepository = suiteSearchRepository;
    }

    /**
     * POST  /suites : Create a new suite.
     *
     * @param suite the suite to create
     * @return the ResponseEntity with status 201 (Created) and with body the new suite, or with status 400 (Bad Request) if the suite has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/suites")
    @Timed
    public ResponseEntity<Suite> createSuite(@Valid @RequestBody Suite suite) throws URISyntaxException {
        log.debug("REST request to save Suite : {}", suite);
        if (suite.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new suite cannot already have an ID")).body(null);
        }
        Suite result = suiteRepository.save(suite);
        suiteSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/suites/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /suites : Updates an existing suite.
     *
     * @param suite the suite to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated suite,
     * or with status 400 (Bad Request) if the suite is not valid,
     * or with status 500 (Internal Server Error) if the suite couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/suites")
    @Timed
    public ResponseEntity<Suite> updateSuite(@Valid @RequestBody Suite suite) throws URISyntaxException {
        log.debug("REST request to update Suite : {}", suite);
        if (suite.getId() == null) {
            return createSuite(suite);
        }
        Suite result = suiteRepository.save(suite);
        suiteSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, suite.getId().toString()))
            .body(result);
    }

    /**
     * GET  /suites : get all the suites.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of suites in body
     */
    @GetMapping("/suites")
    @Timed
    public ResponseEntity<List<Suite>> getAllSuites(@ApiParam Pageable pageable) {
        log.debug("REST request to get a page of Suites");
        Page<Suite> page = suiteRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/suites");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /suites/:id : get the "id" suite.
     *
     * @param id the id of the suite to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the suite, or with status 404 (Not Found)
     */
    @GetMapping("/suites/{id}")
    @Timed
    public ResponseEntity<Suite> getSuite(@PathVariable Long id) {
        log.debug("REST request to get Suite : {}", id);
        Suite suite = suiteRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(suite));
    }

    /**
     * DELETE  /suites/:id : delete the "id" suite.
     *
     * @param id the id of the suite to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/suites/{id}")
    @Timed
    public ResponseEntity<Void> deleteSuite(@PathVariable Long id) {
        log.debug("REST request to delete Suite : {}", id);
        suiteRepository.delete(id);
        suiteSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/suites?query=:query : search for the suite corresponding
     * to the query.
     *
     * @param query the query of the suite search
     * @param pageable the pagination information
     * @return the result of the search
     */
    @GetMapping("/_search/suites")
    @Timed
    public ResponseEntity<List<Suite>> searchSuites(@RequestParam String query, @ApiParam Pageable pageable) {
        log.debug("REST request to search for a page of Suites for query {}", query);
        Page<Suite> page = suiteSearchRepository.search(queryStringQuery(query), pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/suites");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

}

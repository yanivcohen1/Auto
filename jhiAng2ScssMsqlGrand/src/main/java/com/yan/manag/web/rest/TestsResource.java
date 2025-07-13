package com.yan.manag.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.yan.manag.domain.Tests;

import com.yan.manag.repository.TestsRepository;
import com.yan.manag.repository.search.TestsSearchRepository;
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
 * REST controller for managing Tests.
 */
@RestController
@RequestMapping("/api")
public class TestsResource {

    private final Logger log = LoggerFactory.getLogger(TestsResource.class);

    private static final String ENTITY_NAME = "tests";

    private final TestsRepository testsRepository;

    private final TestsSearchRepository testsSearchRepository;

    public TestsResource(TestsRepository testsRepository, TestsSearchRepository testsSearchRepository) {
        this.testsRepository = testsRepository;
        this.testsSearchRepository = testsSearchRepository;
    }

    /**
     * POST  /tests : Create a new tests.
     *
     * @param tests the tests to create
     * @return the ResponseEntity with status 201 (Created) and with body the new tests, or with status 400 (Bad Request) if the tests has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/tests")
    @Timed
    public ResponseEntity<Tests> createTests(@Valid @RequestBody Tests tests) throws URISyntaxException {
        log.debug("REST request to save Tests : {}", tests);
        if (tests.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new tests cannot already have an ID")).body(null);
        }
        Tests result = testsRepository.save(tests);
        testsSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/tests/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /tests : Updates an existing tests.
     *
     * @param tests the tests to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated tests,
     * or with status 400 (Bad Request) if the tests is not valid,
     * or with status 500 (Internal Server Error) if the tests couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/tests")
    @Timed
    public ResponseEntity<Tests> updateTests(@Valid @RequestBody Tests tests) throws URISyntaxException {
        log.debug("REST request to update Tests : {}", tests);
        if (tests.getId() == null) {
            return createTests(tests);
        }
        Tests result = testsRepository.save(tests);
        testsSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, tests.getId().toString()))
            .body(result);
    }

    /**
     * GET  /tests : get all the tests.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of tests in body
     */
    @GetMapping("/tests")
    @Timed
    public ResponseEntity<List<Tests>> getAllTests(@ApiParam Pageable pageable) {
        log.debug("REST request to get a page of Tests");
        Page<Tests> page = testsRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/tests");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /tests/:id : get the "id" tests.
     *
     * @param id the id of the tests to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the tests, or with status 404 (Not Found)
     */
    @GetMapping("/tests/{id}")
    @Timed
    public ResponseEntity<Tests> getTests(@PathVariable Long id) {
        log.debug("REST request to get Tests : {}", id);
        Tests tests = testsRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(tests));
    }

    /**
     * DELETE  /tests/:id : delete the "id" tests.
     *
     * @param id the id of the tests to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/tests/{id}")
    @Timed
    public ResponseEntity<Void> deleteTests(@PathVariable Long id) {
        log.debug("REST request to delete Tests : {}", id);
        testsRepository.delete(id);
        testsSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/tests?query=:query : search for the tests corresponding
     * to the query.
     *
     * @param query the query of the tests search
     * @param pageable the pagination information
     * @return the result of the search
     */
    @GetMapping("/_search/tests")
    @Timed
    public ResponseEntity<List<Tests>> searchTests(@RequestParam String query, @ApiParam Pageable pageable) {
        log.debug("REST request to search for a page of Tests for query {}", query);
        Page<Tests> page = testsSearchRepository.search(queryStringQuery(query), pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/tests");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

}

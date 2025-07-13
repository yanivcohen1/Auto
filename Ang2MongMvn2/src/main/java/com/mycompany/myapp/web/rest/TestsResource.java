package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Tests;

import com.mycompany.myapp.repository.TestsRepository;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import com.mycompany.myapp.web.rest.util.PaginationUtil;
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

/**
 * REST controller for managing Tests.
 */
@RestController
@RequestMapping("/api")
public class TestsResource {

    private final Logger log = LoggerFactory.getLogger(TestsResource.class);

    private static final String ENTITY_NAME = "tests";

    private final TestsRepository testsRepository;
    public TestsResource(TestsRepository testsRepository) {
        this.testsRepository = testsRepository;
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
    public ResponseEntity<Tests> getTests(@PathVariable String id) {
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
    public ResponseEntity<Void> deleteTests(@PathVariable String id) {
        log.debug("REST request to delete Tests : {}", id);
        testsRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id)).build();
    }
}

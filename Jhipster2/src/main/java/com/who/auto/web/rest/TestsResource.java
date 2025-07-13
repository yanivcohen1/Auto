package com.who.auto.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.who.auto.domain.Tests;
import com.who.auto.repository.TestsRepository;
import com.who.auto.repository.search.TestsSearchRepository;
import com.who.auto.web.rest.util.PaginationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
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

    @Inject
    private TestsRepository testsRepository;

    @Inject
    private TestsSearchRepository testsSearchRepository;

    /**
     * POST  /testss -> Create a new tests.
     */
    @RequestMapping(value = "/testss",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> create(@Valid @RequestBody Tests tests) throws URISyntaxException {
        log.debug("REST request to save Tests : {}", tests);
        if (tests.getId() != null) {
            return ResponseEntity.badRequest().header("Failure", "A new tests cannot already have an ID").build();
        }
        testsRepository.save(tests);
        testsSearchRepository.save(tests);
        return ResponseEntity.created(new URI("/api/testss/" + tests.getId())).build();
    }

    /**
     * PUT  /testss -> Updates an existing tests.
     */
    @RequestMapping(value = "/testss",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> update(@Valid @RequestBody Tests tests) throws URISyntaxException {
        log.debug("REST request to update Tests : {}", tests);
        if (tests.getId() == null) {
            return create(tests);
        }
        testsRepository.save(tests);
        testsSearchRepository.save(tests);
        return ResponseEntity.ok().build();
    }

    /**
     * GET  /testss -> get all the testss.
     */
    @RequestMapping(value = "/testss",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<Tests>> getAll(@RequestParam(value = "page" , required = false) Integer offset,
                                  @RequestParam(value = "per_page", required = false) Integer limit)
        throws URISyntaxException {
        //Tests index = testsRepository.countBA("test3");
        Page<Tests> page = testsRepository.findAll(PaginationUtil.generatePageRequest(offset, limit));
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/testss", offset, limit);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /testss/:id -> get the "id" tests.
     */
    @RequestMapping(value = "/testss/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Tests> get(@PathVariable Long id) {
        log.debug("REST request to get Tests : {}", id);
        return Optional.ofNullable(testsRepository.findOne(id))
            .map(tests -> new ResponseEntity<>(
                tests,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /testss/:id -> delete the "id" tests.
     */
    @RequestMapping(value = "/testss/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public void delete(@PathVariable Long id) {
        log.debug("REST request to delete Tests : {}", id);
        testsRepository.delete(id);
        testsSearchRepository.delete(id);
    }

    /**
     * SEARCH  /_search/testss/:query -> search for the tests corresponding
     * to the query.
     */
    @RequestMapping(value = "/_search/testss/{query}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Tests> search(@PathVariable String query) {
        return StreamSupport
            .stream(testsSearchRepository.search(queryString(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}

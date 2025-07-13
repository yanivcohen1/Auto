package com.who.auto.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.who.auto.domain.Suite;
import com.who.auto.repository.SuiteRepository;
import com.who.auto.repository.search.SuiteSearchRepository;
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
 * REST controller for managing Suite.
 */
@RestController
@RequestMapping("/api")
public class SuiteResource {

    private final Logger log = LoggerFactory.getLogger(SuiteResource.class);

    @Inject
    private SuiteRepository suiteRepository;

    @Inject
    private SuiteSearchRepository suiteSearchRepository;

    /**
     * POST  /suites -> Create a new suite.
     */
    @RequestMapping(value = "/suites",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> create(@Valid @RequestBody Suite suite) throws URISyntaxException {
        log.debug("REST request to save Suite : {}", suite);
        if (suite.getId() != null) {
            return ResponseEntity.badRequest().header("Failure", "A new suite cannot already have an ID").build();
        }
        suiteRepository.save(suite);
        suiteSearchRepository.save(suite);
        return ResponseEntity.created(new URI("/api/suites/" + suite.getId())).build();
    }

    /**
     * PUT  /suites -> Updates an existing suite.
     */
    @RequestMapping(value = "/suites",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> update(@Valid @RequestBody Suite suite) throws URISyntaxException {
        log.debug("REST request to update Suite : {}", suite);
        if (suite.getId() == null) {
            return create(suite);
        }
        suiteRepository.save(suite);
        suiteSearchRepository.save(suite);
        return ResponseEntity.ok().build();
    }

    /**
     * GET  /suites -> get all the suites.
     */
    @RequestMapping(value = "/suites",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<List<Suite>> getAll(@RequestParam(value = "page" , required = false) Integer offset,
                                  @RequestParam(value = "per_page", required = false) Integer limit)
        throws URISyntaxException {
        Page<Suite> page = suiteRepository.findAll(PaginationUtil.generatePageRequest(offset, limit));
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/suites", offset, limit);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /suites/:id -> get the "id" suite.
     */
    @RequestMapping(value = "/suites/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Suite> get(@PathVariable Long id) {
        log.debug("REST request to get Suite : {}", id);
        return Optional.ofNullable(suiteRepository.findOne(id))
            .map(suite -> new ResponseEntity<>(
                suite,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /suites/:id -> delete the "id" suite.
     */
    @RequestMapping(value = "/suites/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public void delete(@PathVariable Long id) {
        log.debug("REST request to delete Suite : {}", id);
        suiteRepository.delete(id);
        suiteSearchRepository.delete(id);
    }

    /**
     * SEARCH  /_search/suites/:query -> search for the suite corresponding
     * to the query.
     */
    @RequestMapping(value = "/_search/suites/{query}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Suite> search(@PathVariable String query) {
        return StreamSupport
            .stream(suiteSearchRepository.search(queryString(query)).spliterator(), false)
            .collect(Collectors.toList());
    }
}

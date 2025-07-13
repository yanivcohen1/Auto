package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.AA;

import com.mycompany.myapp.repository.AARepository;
import com.mycompany.myapp.repository.search.AASearchRepository;
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
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing AA.
 */
@RestController
@RequestMapping("/api")
public class AAResource {

    private final Logger log = LoggerFactory.getLogger(AAResource.class);

    private static final String ENTITY_NAME = "aA";
        
    private final AARepository aARepository;

    private final AASearchRepository aASearchRepository;

    public AAResource(AARepository aARepository, AASearchRepository aASearchRepository) {
        this.aARepository = aARepository;
        this.aASearchRepository = aASearchRepository;
    }

    /**
     * POST  /a-as : Create a new aA.
     *
     * @param aA the aA to create
     * @return the ResponseEntity with status 201 (Created) and with body the new aA, or with status 400 (Bad Request) if the aA has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/a-as")
    @Timed
    public ResponseEntity<AA> createAA(@Valid @RequestBody AA aA) throws URISyntaxException {
        log.debug("REST request to save AA : {}", aA);
        if (aA.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new aA cannot already have an ID")).body(null);
        }
        AA result = aARepository.save(aA);
        aASearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/a-as/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /a-as : Updates an existing aA.
     *
     * @param aA the aA to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated aA,
     * or with status 400 (Bad Request) if the aA is not valid,
     * or with status 500 (Internal Server Error) if the aA couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/a-as")
    @Timed
    public ResponseEntity<AA> updateAA(@Valid @RequestBody AA aA) throws URISyntaxException {
        log.debug("REST request to update AA : {}", aA);
        if (aA.getId() == null) {
            return createAA(aA);
        }
        AA result = aARepository.save(aA);
        aASearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, aA.getId().toString()))
            .body(result);
    }

    /**
     * GET  /a-as : get all the aAS.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of aAS in body
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/a-as")
    @Timed
    public ResponseEntity<List<AA>> getAllAAS(@ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to get a page of AAS");
        Page<AA> page = aARepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/a-as");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /a-as/:id : get the "id" aA.
     *
     * @param id the id of the aA to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the aA, or with status 404 (Not Found)
     */
    @GetMapping("/a-as/{id}")
    @Timed
    public ResponseEntity<AA> getAA(@PathVariable Long id) {
        log.debug("REST request to get AA : {}", id);
        AA aA = aARepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(aA));
    }

    /**
     * DELETE  /a-as/:id : delete the "id" aA.
     *
     * @param id the id of the aA to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/a-as/{id}")
    @Timed
    public ResponseEntity<Void> deleteAA(@PathVariable Long id) {
        log.debug("REST request to delete AA : {}", id);
        aARepository.delete(id);
        aASearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/a-as?query=:query : search for the aA corresponding
     * to the query.
     *
     * @param query the query of the aA search 
     * @param pageable the pagination information
     * @return the result of the search
     * @throws URISyntaxException if there is an error to generate the pagination HTTP headers
     */
    @GetMapping("/_search/a-as")
    @Timed
    public ResponseEntity<List<AA>> searchAAS(@RequestParam String query, @ApiParam Pageable pageable)
        throws URISyntaxException {
        log.debug("REST request to search for a page of AAS for query {}", query);
        Page<AA> page = aASearchRepository.search(queryStringQuery(query), pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/a-as");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }


}

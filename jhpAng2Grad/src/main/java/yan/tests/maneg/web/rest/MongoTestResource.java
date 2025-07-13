package yan.tests.maneg.web.rest;

import com.codahale.metrics.annotation.Timed;
import yan.tests.maneg.domain.MongoTest;

import yan.tests.maneg.repository.MongoTestRepository;
import yan.tests.maneg.web.rest.util.HeaderUtil;
import yan.tests.maneg.web.rest.util.PaginationUtil;
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
 * REST controller for managing MongoTest.
 */
@RestController
@RequestMapping("/api")
public class MongoTestResource {

    private final Logger log = LoggerFactory.getLogger(MongoTestResource.class);

    private static final String ENTITY_NAME = "mongoTest";

    private final MongoTestRepository mongoTestRepository;

    public MongoTestResource(MongoTestRepository mongoTestRepository) {
        this.mongoTestRepository = mongoTestRepository;
    }

    /**
     * POST  /mongo-tests : Create a new mongoTest.
     *
     * @param mongoTest the mongoTest to create
     * @return the ResponseEntity with status 201 (Created) and with body the new mongoTest, or with status 400 (Bad Request) if the mongoTest has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/mongo-tests")
    @Timed
    public ResponseEntity<MongoTest> createMongoTest(@Valid @RequestBody MongoTest mongoTest) throws URISyntaxException {
        log.debug("REST request to save MongoTest : {}", mongoTest);
        if (mongoTest.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new mongoTest cannot already have an ID")).body(null);
        }
        MongoTest result = mongoTestRepository.save(mongoTest);
        return ResponseEntity.created(new URI("/api/mongo-tests/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /mongo-tests : Updates an existing mongoTest.
     *
     * @param mongoTest the mongoTest to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated mongoTest,
     * or with status 400 (Bad Request) if the mongoTest is not valid,
     * or with status 500 (Internal Server Error) if the mongoTest couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/mongo-tests")
    @Timed
    public ResponseEntity<MongoTest> updateMongoTest(@Valid @RequestBody MongoTest mongoTest) throws URISyntaxException {
        log.debug("REST request to update MongoTest : {}", mongoTest);
        if (mongoTest.getId() == null) {
            return createMongoTest(mongoTest);
        }
        MongoTest result = mongoTestRepository.save(mongoTest);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, mongoTest.getId().toString()))
            .body(result);
    }

    /**
     * GET  /mongo-tests : get all the mongoTests.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of mongoTests in body
     */
    @GetMapping("/mongo-tests")
    @Timed
    public ResponseEntity<List<MongoTest>> getAllMongoTests(@ApiParam Pageable pageable) {
        log.debug("REST request to get a page of MongoTests");
        Page<MongoTest> page = mongoTestRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/mongo-tests");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /mongo-tests/:id : get the "id" mongoTest.
     *
     * @param id the id of the mongoTest to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the mongoTest, or with status 404 (Not Found)
     */
    @GetMapping("/mongo-tests/{id}")
    @Timed
    public ResponseEntity<MongoTest> getMongoTest(@PathVariable String id) {
        log.debug("REST request to get MongoTest : {}", id);
        MongoTest mongoTest = mongoTestRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(mongoTest));
    }

    /**
     * DELETE  /mongo-tests/:id : delete the "id" mongoTest.
     *
     * @param id the id of the mongoTest to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/mongo-tests/{id}")
    @Timed
    public ResponseEntity<Void> deleteMongoTest(@PathVariable String id) {
        log.debug("REST request to delete MongoTest : {}", id);
        mongoTestRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id)).build();
    }
}

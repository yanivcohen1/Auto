package yan.tests.maneg.web.rest;

import com.codahale.metrics.annotation.Timed;

import yan.tests.maneg.domain.Customer;
import yan.tests.maneg.domain.Step;
import yan.tests.maneg.domain.Testss;
import yan.tests.maneg.repository.TestssRepository;
import yan.tests.maneg.repository.mongo.CustomerRepository;
import yan.tests.maneg.repository.search.StepSearchRepository;
import yan.tests.maneg.repository.search.TestssSearchRepository;
import yan.tests.maneg.web.rest.util.HeaderUtil;
import yan.tests.maneg.web.rest.util.PaginationUtil;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import java.util.UUID;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Testss.
 */
@RestController
@RequestMapping("/api")
public class TestssResource {

    private final Logger log = LoggerFactory.getLogger(TestssResource.class);

    private static final String ENTITY_NAME = "testss";

    private final TestssRepository testssRepository;

    private final TestssSearchRepository testssSearchRepository;

    private final StepSearchRepository stepSearchRepository;
    
    @Inject
	private CustomerRepository customerRepository;
    
    public TestssResource(TestssRepository testssRepository, TestssSearchRepository testssSearchRepository, StepSearchRepository stepSearchRepository) {
        this.testssRepository = testssRepository;
        this.testssSearchRepository = testssSearchRepository;
        this.stepSearchRepository = stepSearchRepository;
    }

    /**
     * POST  /testsses : Create a new testss.
     *
     * @param testss the testss to create
     * @return the ResponseEntity with status 201 (Created) and with body the new testss, or with status 400 (Bad Request) if the testss has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/testsses")
    @Timed
    public ResponseEntity<Testss> createTestss(@Valid @RequestBody Testss testss) throws URISyntaxException {
        log.debug("REST request to save Testss : {}", testss);
        if (testss.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new testss cannot already have an ID")).body(null);
        }
        Testss result = testssRepository.save(testss);
        testssSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/testsses/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /testsses : Updates an existing testss.
     *
     * @param testss the testss to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated testss,
     * or with status 400 (Bad Request) if the testss is not valid,
     * or with status 500 (Internal Server Error) if the testss couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/testsses")
    @Timed
    public ResponseEntity<Testss> updateTestss(@Valid @RequestBody Testss testss) throws URISyntaxException {
        log.debug("REST request to update Testss : {}", testss);
        if (testss.getId() == null) {
            return createTestss(testss);
        }
        Testss result = testssRepository.save(testss);
        testssSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, testss.getId().toString()))
            .body(result);
    }

    /**
     * GET  /testsses : get all the testsses.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of testsses in body
     */
    @GetMapping("/testsses")
    @Timed
    public ResponseEntity<List<Testss>> getAllTestsses(@ApiParam Pageable pageable) {
    	
    	customerRepository.deleteAll();

    	Step step1 = new Step();//UUID.randomUUID().toString(), "step1", 1, "no error");
    	step1.setId(UUID.randomUUID().toString());
    	step1.setName("step1");
    	step1.setTime(new Date().toInstant());
    	step1.setStatus(1);
    	step1.setErrorMsg("no error");
    	
    	stepSearchRepository.save(step1);
    	System.out.println("Step Elastic found with findOne():");
    	System.out.println("-------------------------------");
    	System.out.println(stepSearchRepository.findOne(step1.getId()));
    	System.out.println("Step Elastic found with findAll():");
		System.out.println("-------------------------------");
		//Page<Customer> page1 = customerRepository.findAll(pageable);
		for (Step step : stepSearchRepository.findAll()) {
			if (step.getTime() != null) {
				System.out.println(Date.from(step.getTime()));
			}
		}
		System.out.println();
		
		// save a couple of customers
		customerRepository.save(new Customer("Alice", "Manager"));
		customerRepository.save(new Customer("Bob", "Worker"));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		//Page<Customer> page1 = customerRepository.findAll(pageable);
		for (Customer customer : customerRepository.findAll()) {
			System.out.println(customer);
		}
		System.out.println();

		// fetch an individual customer
		System.out.println("Customer found with findByName('Alice'):");
		System.out.println("--------------------------------");
		System.out.println(customerRepository.findByName("Alice"));
    	
        log.debug("REST request to get a page of Testsses");
        Page<Testss> page = testssRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/testsses");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /testsses/:id : get the "id" testss.
     *
     * @param id the id of the testss to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the testss, or with status 404 (Not Found)
     */
    @GetMapping("/testsses/{id}")
    @Timed
    public ResponseEntity<Testss> getTestss(@PathVariable Long id) {
        log.debug("REST request to get Testss : {}", id);
        Testss testss = testssRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(testss));
    }

    /**
     * DELETE  /testsses/:id : delete the "id" testss.
     *
     * @param id the id of the testss to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/testsses/{id}")
    @Timed
    public ResponseEntity<Void> deleteTestss(@PathVariable Long id) {
        log.debug("REST request to delete Testss : {}", id);
        testssRepository.delete(id);
        testssSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/testsses?query=:query : search for the testss corresponding
     * to the query.
     *
     * @param query the query of the testss search
     * @param pageable the pagination information
     * @return the result of the search
     */
    @GetMapping("/_search/testsses")
    @Timed
    public ResponseEntity<List<Testss>> searchTestsses(@RequestParam String query, @ApiParam Pageable pageable) {
        log.debug("REST request to search for a page of Testsses for query {}", query);
        Page<Testss> page = testssSearchRepository.search(queryStringQuery(query), pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/testsses");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

}

package hello;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

/**
 * REST controller for managing Suite.
 */
@RestController
@RequestMapping("/api")
public class SuiteResource {

    private final Logger log = LoggerFactory.getLogger(SuiteResource.class);

    @Autowired
    private SuiteRepository suiteRepository;
    
/*    *//**
     * POST  /suites -> Create a new suite.
     *//*
    @RequestMapping(value = "/suites",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> create(@Valid @RequestBody Suite suite) throws URISyntaxException {
        log.debug("REST request to save Suite : {}", suite);
        if (suite.getId() != null) {
            return ResponseEntity.badRequest().header("Failure", "A new suite cannot already have an ID").build();
        }
        suiteRepository.save(suite);
        return ResponseEntity.created(new URI("/api/suites/" + suite.getId())).build();
    }

    *//**
     * PUT  /suites -> Updates an existing suite.
     *//*
    @RequestMapping(value = "/suites",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> update(@Valid @RequestBody Suite suite) throws URISyntaxException {
        log.debug("REST request to update Suite : {}", suite);
        if (suite.getId() == null) {
            //create(suite);
        	suite.setJenkinsURL("urs");
        	suite.setSuiteName("suiteName");
        	suite.setXmlFileLocation("xmlFileLocation");
            suiteRepository.save(suite);
            return ResponseEntity.ok().build();
        }
        suiteRepository.save(suite);
        return ResponseEntity.ok().build();
    }*/

    /**
     * GET  /suites -> get all the suites.
     */
    @RequestMapping(value = "/suites",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @Transactional
    public Suite getAll()
        throws URISyntaxException {
    	Suite suite = new Suite();
    	suite.setJenkinsURL("url1");
    	suite.setSuiteName("suiteName1");
    	suite.setXmlFileLocation("xmlFileLocation1");
    	Tests test = new Tests();
    	test.setClassName("className1");
    	test.setTestName("testName1");
    	test.setParameterName("parameterName1");
    	suite.getTestss().add(test);
        suiteRepository.save(suite);
        Suite page = suiteRepository.testSuite("suiteName1");
        //Select o from Order o join o.orderLines l where l.description = :desc"
        //List<Suite> page2 = suiteRepository.findAll();
        return page;
    }

    /**
     * GET  /suites/:id -> get the "id" suite.
     *//*
    @RequestMapping(value = "/suites/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Suite> get(@PathVariable Long id) {
        log.debug("REST request to get Suite : {}", id);
        return Optional.ofNullable(suiteRepository.findOne(id))
            .map(suite -> new ResponseEntity<>(
                suite,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    *//**
     * DELETE  /suites/:id -> delete the "id" suite.
     *//*
    @RequestMapping(value = "/suites/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@PathVariable Long id) {
        log.debug("REST request to delete Suite : {}", id);
        suiteRepository.delete(id);
    }*/

}

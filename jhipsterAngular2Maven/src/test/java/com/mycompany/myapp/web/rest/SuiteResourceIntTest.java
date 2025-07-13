package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.JhipsterAngular2MavenApp;

import com.mycompany.myapp.domain.Suite;
import com.mycompany.myapp.repository.SuiteRepository;
import com.mycompany.myapp.service.SuiteService;
import com.mycompany.myapp.repository.search.SuiteSearchRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the SuiteResource REST controller.
 *
 * @see SuiteResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = JhipsterAngular2MavenApp.class)
public class SuiteResourceIntTest {

    private static final String DEFAULT_SUITE_NAME = "AAAAAAAAAA";
    private static final String UPDATED_SUITE_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_XML_FILE_LOCATION = "AAAAAAAAAA";
    private static final String UPDATED_XML_FILE_LOCATION = "BBBBBBBBBB";

    private static final String DEFAULT_JENKINS_URL = "AAAAAAAAAA";
    private static final String UPDATED_JENKINS_URL = "BBBBBBBBBB";

    @Autowired
    private SuiteRepository suiteRepository;

    @Autowired
    private SuiteService suiteService;

    @Autowired
    private SuiteSearchRepository suiteSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private EntityManager em;

    private MockMvc restSuiteMockMvc;

    private Suite suite;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        SuiteResource suiteResource = new SuiteResource(suiteService);
        this.restSuiteMockMvc = MockMvcBuilders.standaloneSetup(suiteResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Suite createEntity(EntityManager em) {
        Suite suite = new Suite()
                .suite_name(DEFAULT_SUITE_NAME)
                .xml_file_location(DEFAULT_XML_FILE_LOCATION)
                .jenkins_url(DEFAULT_JENKINS_URL);
        return suite;
    }

    @Before
    public void initTest() {
        suiteSearchRepository.deleteAll();
        suite = createEntity(em);
    }

    @Test
    @Transactional
    public void createSuite() throws Exception {
        int databaseSizeBeforeCreate = suiteRepository.findAll().size();

        // Create the Suite

        restSuiteMockMvc.perform(post("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(suite)))
            .andExpect(status().isCreated());

        // Validate the Suite in the database
        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeCreate + 1);
        Suite testSuite = suiteList.get(suiteList.size() - 1);
        assertThat(testSuite.getSuite_name()).isEqualTo(DEFAULT_SUITE_NAME);
        assertThat(testSuite.getXml_file_location()).isEqualTo(DEFAULT_XML_FILE_LOCATION);
        assertThat(testSuite.getJenkins_url()).isEqualTo(DEFAULT_JENKINS_URL);

        // Validate the Suite in Elasticsearch
        Suite suiteEs = suiteSearchRepository.findOne(testSuite.getId());
        assertThat(suiteEs).isEqualToComparingFieldByField(testSuite);
    }

    @Test
    @Transactional
    public void createSuiteWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = suiteRepository.findAll().size();

        // Create the Suite with an existing ID
        Suite existingSuite = new Suite();
        existingSuite.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSuiteMockMvc.perform(post("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingSuite)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkSuite_nameIsRequired() throws Exception {
        int databaseSizeBeforeTest = suiteRepository.findAll().size();
        // set the field null
        suite.setSuite_name(null);

        // Create the Suite, which fails.

        restSuiteMockMvc.perform(post("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(suite)))
            .andExpect(status().isBadRequest());

        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkXml_file_locationIsRequired() throws Exception {
        int databaseSizeBeforeTest = suiteRepository.findAll().size();
        // set the field null
        suite.setXml_file_location(null);

        // Create the Suite, which fails.

        restSuiteMockMvc.perform(post("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(suite)))
            .andExpect(status().isBadRequest());

        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkJenkins_urlIsRequired() throws Exception {
        int databaseSizeBeforeTest = suiteRepository.findAll().size();
        // set the field null
        suite.setJenkins_url(null);

        // Create the Suite, which fails.

        restSuiteMockMvc.perform(post("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(suite)))
            .andExpect(status().isBadRequest());

        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllSuites() throws Exception {
        // Initialize the database
        suiteRepository.saveAndFlush(suite);

        // Get all the suiteList
        restSuiteMockMvc.perform(get("/api/suites?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(suite.getId().intValue())))
            .andExpect(jsonPath("$.[*].suite_name").value(hasItem(DEFAULT_SUITE_NAME.toString())))
            .andExpect(jsonPath("$.[*].xml_file_location").value(hasItem(DEFAULT_XML_FILE_LOCATION.toString())))
            .andExpect(jsonPath("$.[*].jenkins_url").value(hasItem(DEFAULT_JENKINS_URL.toString())));
    }

    @Test
    @Transactional
    public void getSuite() throws Exception {
        // Initialize the database
        suiteRepository.saveAndFlush(suite);

        // Get the suite
        restSuiteMockMvc.perform(get("/api/suites/{id}", suite.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(suite.getId().intValue()))
            .andExpect(jsonPath("$.suite_name").value(DEFAULT_SUITE_NAME.toString()))
            .andExpect(jsonPath("$.xml_file_location").value(DEFAULT_XML_FILE_LOCATION.toString()))
            .andExpect(jsonPath("$.jenkins_url").value(DEFAULT_JENKINS_URL.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingSuite() throws Exception {
        // Get the suite
        restSuiteMockMvc.perform(get("/api/suites/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateSuite() throws Exception {
        // Initialize the database
        suiteService.save(suite);

        int databaseSizeBeforeUpdate = suiteRepository.findAll().size();

        // Update the suite
        Suite updatedSuite = suiteRepository.findOne(suite.getId());
        updatedSuite
                .suite_name(UPDATED_SUITE_NAME)
                .xml_file_location(UPDATED_XML_FILE_LOCATION)
                .jenkins_url(UPDATED_JENKINS_URL);

        restSuiteMockMvc.perform(put("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedSuite)))
            .andExpect(status().isOk());

        // Validate the Suite in the database
        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeUpdate);
        Suite testSuite = suiteList.get(suiteList.size() - 1);
        assertThat(testSuite.getSuite_name()).isEqualTo(UPDATED_SUITE_NAME);
        assertThat(testSuite.getXml_file_location()).isEqualTo(UPDATED_XML_FILE_LOCATION);
        assertThat(testSuite.getJenkins_url()).isEqualTo(UPDATED_JENKINS_URL);

        // Validate the Suite in Elasticsearch
        Suite suiteEs = suiteSearchRepository.findOne(testSuite.getId());
        assertThat(suiteEs).isEqualToComparingFieldByField(testSuite);
    }

    @Test
    @Transactional
    public void updateNonExistingSuite() throws Exception {
        int databaseSizeBeforeUpdate = suiteRepository.findAll().size();

        // Create the Suite

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restSuiteMockMvc.perform(put("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(suite)))
            .andExpect(status().isCreated());

        // Validate the Suite in the database
        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteSuite() throws Exception {
        // Initialize the database
        suiteService.save(suite);

        int databaseSizeBeforeDelete = suiteRepository.findAll().size();

        // Get the suite
        restSuiteMockMvc.perform(delete("/api/suites/{id}", suite.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean suiteExistsInEs = suiteSearchRepository.exists(suite.getId());
        assertThat(suiteExistsInEs).isFalse();

        // Validate the database is empty
        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchSuite() throws Exception {
        // Initialize the database
        suiteService.save(suite);

        // Search the suite
        restSuiteMockMvc.perform(get("/api/_search/suites?query=id:" + suite.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(suite.getId().intValue())))
            .andExpect(jsonPath("$.[*].suite_name").value(hasItem(DEFAULT_SUITE_NAME.toString())))
            .andExpect(jsonPath("$.[*].xml_file_location").value(hasItem(DEFAULT_XML_FILE_LOCATION.toString())))
            .andExpect(jsonPath("$.[*].jenkins_url").value(hasItem(DEFAULT_JENKINS_URL.toString())));
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Suite.class);
    }
}

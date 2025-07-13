package yan.tests.maneg.web.rest;

import yan.tests.maneg.TestManagerApp;

import yan.tests.maneg.domain.Suite;
import yan.tests.maneg.repository.SuiteRepository;
import yan.tests.maneg.repository.search.SuiteSearchRepository;
import yan.tests.maneg.web.rest.errors.ExceptionTranslator;

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
@SpringBootTest(classes = TestManagerApp.class)
public class SuiteResourceIntTest {

    private static final String DEFAULT_SUITE_NAME = "AAAAAAAAAA";
    private static final String UPDATED_SUITE_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_JENKINS_URL = "AAAAAAAAAA";
    private static final String UPDATED_JENKINS_URL = "BBBBBBBBBB";

    @Autowired
    private SuiteRepository suiteRepository;

    @Autowired
    private SuiteSearchRepository suiteSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restSuiteMockMvc;

    private Suite suite;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final SuiteResource suiteResource = new SuiteResource(suiteRepository, suiteSearchRepository);
        this.restSuiteMockMvc = MockMvcBuilders.standaloneSetup(suiteResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
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
            .suiteName(DEFAULT_SUITE_NAME)
            .jenkinsUrl(DEFAULT_JENKINS_URL);
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
        assertThat(testSuite.getSuiteName()).isEqualTo(DEFAULT_SUITE_NAME);
        assertThat(testSuite.getJenkinsUrl()).isEqualTo(DEFAULT_JENKINS_URL);

        // Validate the Suite in Elasticsearch
        Suite suiteEs = suiteSearchRepository.findOne(testSuite.getId());
        assertThat(suiteEs).isEqualToComparingFieldByField(testSuite);
    }

    @Test
    @Transactional
    public void createSuiteWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = suiteRepository.findAll().size();

        // Create the Suite with an existing ID
        suite.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSuiteMockMvc.perform(post("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(suite)))
            .andExpect(status().isBadRequest());

        // Validate the Suite in the database
        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkSuiteNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = suiteRepository.findAll().size();
        // set the field null
        suite.setSuiteName(null);

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
    public void checkJenkinsUrlIsRequired() throws Exception {
        int databaseSizeBeforeTest = suiteRepository.findAll().size();
        // set the field null
        suite.setJenkinsUrl(null);

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
            .andExpect(jsonPath("$.[*].suiteName").value(hasItem(DEFAULT_SUITE_NAME.toString())))
            .andExpect(jsonPath("$.[*].jenkinsUrl").value(hasItem(DEFAULT_JENKINS_URL.toString())));
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
            .andExpect(jsonPath("$.suiteName").value(DEFAULT_SUITE_NAME.toString()))
            .andExpect(jsonPath("$.jenkinsUrl").value(DEFAULT_JENKINS_URL.toString()));
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
        suiteRepository.saveAndFlush(suite);
        suiteSearchRepository.save(suite);
        int databaseSizeBeforeUpdate = suiteRepository.findAll().size();

        // Update the suite
        Suite updatedSuite = suiteRepository.findOne(suite.getId());
        updatedSuite
            .suiteName(UPDATED_SUITE_NAME)
            .jenkinsUrl(UPDATED_JENKINS_URL);

        restSuiteMockMvc.perform(put("/api/suites")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedSuite)))
            .andExpect(status().isOk());

        // Validate the Suite in the database
        List<Suite> suiteList = suiteRepository.findAll();
        assertThat(suiteList).hasSize(databaseSizeBeforeUpdate);
        Suite testSuite = suiteList.get(suiteList.size() - 1);
        assertThat(testSuite.getSuiteName()).isEqualTo(UPDATED_SUITE_NAME);
        assertThat(testSuite.getJenkinsUrl()).isEqualTo(UPDATED_JENKINS_URL);

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
        suiteRepository.saveAndFlush(suite);
        suiteSearchRepository.save(suite);
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
        suiteRepository.saveAndFlush(suite);
        suiteSearchRepository.save(suite);

        // Search the suite
        restSuiteMockMvc.perform(get("/api/_search/suites?query=id:" + suite.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(suite.getId().intValue())))
            .andExpect(jsonPath("$.[*].suiteName").value(hasItem(DEFAULT_SUITE_NAME.toString())))
            .andExpect(jsonPath("$.[*].jenkinsUrl").value(hasItem(DEFAULT_JENKINS_URL.toString())));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Suite.class);
        Suite suite1 = new Suite();
        suite1.setId(1L);
        Suite suite2 = new Suite();
        suite2.setId(suite1.getId());
        assertThat(suite1).isEqualTo(suite2);
        suite2.setId(2L);
        assertThat(suite1).isNotEqualTo(suite2);
        suite1.setId(null);
        assertThat(suite1).isNotEqualTo(suite2);
    }
}

package yan.tests.maneg.web.rest;

import yan.tests.maneg.TestManagerApp;

import yan.tests.maneg.domain.Tests;
import yan.tests.maneg.domain.Suite;
import yan.tests.maneg.repository.TestsRepository;
import yan.tests.maneg.repository.search.TestsSearchRepository;
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
 * Test class for the TestsResource REST controller.
 *
 * @see TestsResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = TestManagerApp.class)
public class TestsResourceIntTest {

    private static final String DEFAULT_TEST_NAME = "AAAAAAAAAA";
    private static final String UPDATED_TEST_NAME = "BBBBBBBBBB";

    @Autowired
    private TestsRepository testsRepository;

    @Autowired
    private TestsSearchRepository testsSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restTestsMockMvc;

    private Tests tests;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestsResource testsResource = new TestsResource(testsRepository, testsSearchRepository);
        this.restTestsMockMvc = MockMvcBuilders.standaloneSetup(testsResource)
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
    public static Tests createEntity(EntityManager em) {
        Tests tests = new Tests()
            .testName(DEFAULT_TEST_NAME);
        // Add required entity
        Suite suite = SuiteResourceIntTest.createEntity(em);
        em.persist(suite);
        em.flush();
        tests.setSuite(suite);
        return tests;
    }

    @Before
    public void initTest() {
        testsSearchRepository.deleteAll();
        tests = createEntity(em);
    }

    @Test
    @Transactional
    public void createTests() throws Exception {
        int databaseSizeBeforeCreate = testsRepository.findAll().size();

        // Create the Tests
        restTestsMockMvc.perform(post("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tests)))
            .andExpect(status().isCreated());

        // Validate the Tests in the database
        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeCreate + 1);
        Tests testTests = testsList.get(testsList.size() - 1);
        assertThat(testTests.getTestName()).isEqualTo(DEFAULT_TEST_NAME);

        // Validate the Tests in Elasticsearch
        Tests testsEs = testsSearchRepository.findOne(testTests.getId());
        assertThat(testsEs).isEqualToComparingFieldByField(testTests);
    }

    @Test
    @Transactional
    public void createTestsWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testsRepository.findAll().size();

        // Create the Tests with an existing ID
        tests.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestsMockMvc.perform(post("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tests)))
            .andExpect(status().isBadRequest());

        // Validate the Tests in the database
        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkTestNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = testsRepository.findAll().size();
        // set the field null
        tests.setTestName(null);

        // Create the Tests, which fails.

        restTestsMockMvc.perform(post("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tests)))
            .andExpect(status().isBadRequest());

        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllTests() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);

        // Get all the testsList
        restTestsMockMvc.perform(get("/api/tests?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tests.getId().intValue())))
            .andExpect(jsonPath("$.[*].testName").value(hasItem(DEFAULT_TEST_NAME.toString())));
    }

    @Test
    @Transactional
    public void getTests() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);

        // Get the tests
        restTestsMockMvc.perform(get("/api/tests/{id}", tests.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(tests.getId().intValue()))
            .andExpect(jsonPath("$.testName").value(DEFAULT_TEST_NAME.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingTests() throws Exception {
        // Get the tests
        restTestsMockMvc.perform(get("/api/tests/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTests() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);
        testsSearchRepository.save(tests);
        int databaseSizeBeforeUpdate = testsRepository.findAll().size();

        // Update the tests
        Tests updatedTests = testsRepository.findOne(tests.getId());
        updatedTests
            .testName(UPDATED_TEST_NAME);

        restTestsMockMvc.perform(put("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTests)))
            .andExpect(status().isOk());

        // Validate the Tests in the database
        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeUpdate);
        Tests testTests = testsList.get(testsList.size() - 1);
        assertThat(testTests.getTestName()).isEqualTo(UPDATED_TEST_NAME);

        // Validate the Tests in Elasticsearch
        Tests testsEs = testsSearchRepository.findOne(testTests.getId());
        assertThat(testsEs).isEqualToComparingFieldByField(testTests);
    }

    @Test
    @Transactional
    public void updateNonExistingTests() throws Exception {
        int databaseSizeBeforeUpdate = testsRepository.findAll().size();

        // Create the Tests

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restTestsMockMvc.perform(put("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tests)))
            .andExpect(status().isCreated());

        // Validate the Tests in the database
        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteTests() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);
        testsSearchRepository.save(tests);
        int databaseSizeBeforeDelete = testsRepository.findAll().size();

        // Get the tests
        restTestsMockMvc.perform(delete("/api/tests/{id}", tests.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean testsExistsInEs = testsSearchRepository.exists(tests.getId());
        assertThat(testsExistsInEs).isFalse();

        // Validate the database is empty
        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchTests() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);
        testsSearchRepository.save(tests);

        // Search the tests
        restTestsMockMvc.perform(get("/api/_search/tests?query=id:" + tests.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tests.getId().intValue())))
            .andExpect(jsonPath("$.[*].testName").value(hasItem(DEFAULT_TEST_NAME.toString())));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Tests.class);
        Tests tests1 = new Tests();
        tests1.setId(1L);
        Tests tests2 = new Tests();
        tests2.setId(tests1.getId());
        assertThat(tests1).isEqualTo(tests2);
        tests2.setId(2L);
        assertThat(tests1).isNotEqualTo(tests2);
        tests1.setId(null);
        assertThat(tests1).isNotEqualTo(tests2);
    }
}

package com.yan.manag.web.rest;

import com.yan.manag.TestsManagerApp;

import com.yan.manag.domain.Testss;
import com.yan.manag.repository.mongo.SenarioRepository;
import com.yan.manag.repository.mongo.TestssRepository;
import com.yan.manag.repository.search.TestssSearchRepository;
import com.yan.manag.web.rest.errors.ExceptionTranslator;

import com.yan.manag.repository.search.CustomerSearchRepository;

import org.junit.After;
import org.junit.AfterClass;
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
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.yan.manag.domain.enumeration.Enums;
/**
 * Test class for the TestssResource REST controller.
 *
 * @see TestssResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = TestsManagerApp.class)
public class TestssResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final Integer DEFAULT_VAL = 1;
    private static final Integer UPDATED_VAL = 2;

    private static final Enums DEFAULT_ENUMS = Enums.one;
    private static final Enums UPDATED_ENUMS = Enums.two;

    private static final LocalDate DEFAULT_DATES = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATES = LocalDate.now(ZoneId.systemDefault());

    @Autowired
    private TestssRepository testssRepository;

    @Autowired
    private TestssSearchRepository testssSearchRepository;
    
    @Autowired
    private CustomerSearchRepository customerSearchRepository;
    
    @Autowired
    private SenarioRepository senarioRepository;
    
    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restTestssMockMvc;

    private Testss testss;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestssResource testssResource = new TestssResource(testssRepository, testssSearchRepository, senarioRepository);
        this.restTestssMockMvc = MockMvcBuilders.standaloneSetup(testssResource)
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
    public static Testss createEntity(EntityManager em) {
        Testss testss = new Testss()
            .name(DEFAULT_NAME)
            .val(DEFAULT_VAL)
            .enums(DEFAULT_ENUMS)
            .dates(DEFAULT_DATES);
        return testss;
    }

    @Before
    public void initTest() {
        testssSearchRepository.deleteAll();
        testss = createEntity(em);
    }

    @Test
    @Transactional
    public void createTestss() throws Exception {
        int databaseSizeBeforeCreate = testssRepository.findAll().size();

        // Create the Testss
        restTestssMockMvc.perform(post("/api/testsses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testss)))
            .andExpect(status().isCreated());

        // Validate the Testss in the database
        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeCreate + 1);
        Testss testTestss = testssList.get(testssList.size() - 1);
        assertThat(testTestss.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testTestss.getVal()).isEqualTo(DEFAULT_VAL);
        assertThat(testTestss.getEnums()).isEqualTo(DEFAULT_ENUMS);
        assertThat(testTestss.getDates()).isEqualTo(DEFAULT_DATES);

        // Validate the Testss in Elasticsearch
        Testss testssEs = testssSearchRepository.findOne(testTestss.getId());
        assertThat(testssEs).isEqualToComparingFieldByField(testTestss);
    }

    @Test
    @Transactional
    public void createTestssWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testssRepository.findAll().size();

        // Create the Testss with an existing ID
        testss.setId("1");

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestssMockMvc.perform(post("/api/testsses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testss)))
            .andExpect(status().isBadRequest());

        // Validate the Testss in the database
        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = testssRepository.findAll().size();
        // set the field null
        testss.setName(null);

        // Create the Testss, which fails.

        restTestssMockMvc.perform(post("/api/testsses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testss)))
            .andExpect(status().isBadRequest());

        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkValIsRequired() throws Exception {
        int databaseSizeBeforeTest = testssRepository.findAll().size();
        // set the field null
        testss.setVal(null);

        // Create the Testss, which fails.

        restTestssMockMvc.perform(post("/api/testsses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testss)))
            .andExpect(status().isBadRequest());

        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkEnumsIsRequired() throws Exception {
        int databaseSizeBeforeTest = testssRepository.findAll().size();
        // set the field null
        testss.setEnums(null);

        // Create the Testss, which fails.

        restTestssMockMvc.perform(post("/api/testsses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testss)))
            .andExpect(status().isBadRequest());

        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkDatesIsRequired() throws Exception {
        int databaseSizeBeforeTest = testssRepository.findAll().size();
        // set the field null
        testss.setDates(null);

        // Create the Testss, which fails.

        restTestssMockMvc.perform(post("/api/testsses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testss)))
            .andExpect(status().isBadRequest());

        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllTestsses() throws Exception {
        // Initialize the database
        testssRepository.save(testss);

        // Get all the testssList
        restTestssMockMvc.perform(get("/api/testsses?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testss.getId())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].val").value(hasItem(DEFAULT_VAL)))
            .andExpect(jsonPath("$.[*].enums").value(hasItem(DEFAULT_ENUMS.toString())))
            .andExpect(jsonPath("$.[*].dates").value(hasItem(DEFAULT_DATES.toString())));
    }

    @Test
    @Transactional
    public void getTestss() throws Exception {
        // Initialize the database
        testssRepository.save(testss);

        // Get the testss
        restTestssMockMvc.perform(get("/api/testsses/{id}", testss.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(testss.getId()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()))
            .andExpect(jsonPath("$.val").value(DEFAULT_VAL))
            .andExpect(jsonPath("$.enums").value(DEFAULT_ENUMS.toString()))
            .andExpect(jsonPath("$.dates").value(DEFAULT_DATES.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingTestss() throws Exception {
        // Get the testss
        restTestssMockMvc.perform(get("/api/testsses/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTestss() throws Exception {
        // Initialize the database
        testssRepository.save(testss);
        testssSearchRepository.save(testss);
        int databaseSizeBeforeUpdate = testssRepository.findAll().size();

        // Update the testss
        Testss updatedTestss = testssRepository.findOne(testss.getId());
        updatedTestss
            .name(UPDATED_NAME)
            .val(UPDATED_VAL)
            .enums(UPDATED_ENUMS)
            .dates(UPDATED_DATES);

        restTestssMockMvc.perform(put("/api/testsses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTestss)))
            .andExpect(status().isOk());

        // Validate the Testss in the database
        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeUpdate);
        Testss testTestss = testssList.get(testssList.size() - 1);
        assertThat(testTestss.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testTestss.getVal()).isEqualTo(UPDATED_VAL);
        assertThat(testTestss.getEnums()).isEqualTo(UPDATED_ENUMS);
        assertThat(testTestss.getDates()).isEqualTo(UPDATED_DATES);

        // Validate the Testss in Elasticsearch
        Testss testssEs = testssSearchRepository.findOne(testTestss.getId());
        assertThat(testssEs).isEqualToComparingFieldByField(testTestss);
    }

    @Test
    @Transactional
    public void updateNonExistingTestss() throws Exception {
        int databaseSizeBeforeUpdate = testssRepository.findAll().size();

        // Create the Testss

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restTestssMockMvc.perform(put("/api/testsses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(testss)))
            .andExpect(status().isCreated());

        // Validate the Testss in the database
        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteTestss() throws Exception {
        // Initialize the database
        testssRepository.save(testss);
        testssSearchRepository.save(testss);
        int databaseSizeBeforeDelete = testssRepository.findAll().size();

        // Get the testss
        restTestssMockMvc.perform(delete("/api/testsses/{id}", testss.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean testssExistsInEs = testssSearchRepository.exists(testss.getId());
        assertThat(testssExistsInEs).isFalse();

        // Validate the database is empty
        List<Testss> testssList = testssRepository.findAll();
        assertThat(testssList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchTestss() throws Exception {
        // Initialize the database
        testssRepository.save(testss);
        testssSearchRepository.save(testss);

        // Search the testss
        restTestssMockMvc.perform(get("/api/_search/testsses?query=id:" + testss.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(testss.getId())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].val").value(hasItem(DEFAULT_VAL)))
            .andExpect(jsonPath("$.[*].enums").value(hasItem(DEFAULT_ENUMS.toString())))
            .andExpect(jsonPath("$.[*].dates").value(hasItem(DEFAULT_DATES.toString())));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Testss.class);
        Testss testss1 = new Testss();
        testss1.setId("1");
        Testss testss2 = new Testss();
        testss2.setId(testss1.getId());
        assertThat(testss1).isEqualTo(testss2);
        testss2.setId("2");
        assertThat(testss1).isNotEqualTo(testss2);
        testss1.setId(null);
        assertThat(testss1).isNotEqualTo(testss2);
    }
    
    @After
    public void end() throws Exception {
    	testssRepository.deleteAll();
    }
}

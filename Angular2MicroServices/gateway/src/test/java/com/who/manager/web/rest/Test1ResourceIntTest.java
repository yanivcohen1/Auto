package com.who.manager.web.rest;

import com.who.manager.GatwayApp;

import com.who.manager.domain.Test1;
import com.who.manager.repository.Test1Repository;
import com.who.manager.service.Test1Service;
import com.who.manager.repository.search.Test1SearchRepository;
import com.who.manager.web.rest.errors.ExceptionTranslator;

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

import com.who.manager.domain.enumeration.Y;
/**
 * Test class for the Test1Resource REST controller.
 *
 * @see Test1Resource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = GatwayApp.class)
public class Test1ResourceIntTest {

    private static final String DEFAULT_TEST = "AAAAAAAAAA";
    private static final String UPDATED_TEST = "BBBBBBBBBB";

    private static final Integer DEFAULT_VALUE = 1;
    private static final Integer UPDATED_VALUE = 2;

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Y DEFAULT_ENUMS = Y.one;
    private static final Y UPDATED_ENUMS = Y.two;

    @Autowired
    private Test1Repository test1Repository;

    @Autowired
    private Test1Service test1Service;

    @Autowired
    private Test1SearchRepository test1SearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restTest1MockMvc;

    private Test1 test1;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        Test1Resource test1Resource = new Test1Resource(test1Service);
        this.restTest1MockMvc = MockMvcBuilders.standaloneSetup(test1Resource)
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
    public static Test1 createEntity(EntityManager em) {
        Test1 test1 = new Test1()
                .test(DEFAULT_TEST)
                .value(DEFAULT_VALUE)
                .date(DEFAULT_DATE)
                .enums(DEFAULT_ENUMS);
        return test1;
    }

    @Before
    public void initTest() {
        test1SearchRepository.deleteAll();
        test1 = createEntity(em);
    }

    @Test
    @Transactional
    public void createTest1() throws Exception {
        int databaseSizeBeforeCreate = test1Repository.findAll().size();

        // Create the Test1

        restTest1MockMvc.perform(post("/api/test-1-s")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(test1)))
            .andExpect(status().isCreated());

        // Validate the Test1 in the database
        List<Test1> test1List = test1Repository.findAll();
        assertThat(test1List).hasSize(databaseSizeBeforeCreate + 1);
        Test1 testTest1 = test1List.get(test1List.size() - 1);
        assertThat(testTest1.getTest()).isEqualTo(DEFAULT_TEST);
        assertThat(testTest1.getValue()).isEqualTo(DEFAULT_VALUE);
        assertThat(testTest1.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testTest1.getEnums()).isEqualTo(DEFAULT_ENUMS);

        // Validate the Test1 in Elasticsearch
        Test1 test1Es = test1SearchRepository.findOne(testTest1.getId());
        assertThat(test1Es).isEqualToComparingFieldByField(testTest1);
    }

    @Test
    @Transactional
    public void createTest1WithExistingId() throws Exception {
        int databaseSizeBeforeCreate = test1Repository.findAll().size();

        // Create the Test1 with an existing ID
        Test1 existingTest1 = new Test1();
        existingTest1.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTest1MockMvc.perform(post("/api/test-1-s")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingTest1)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Test1> test1List = test1Repository.findAll();
        assertThat(test1List).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkTestIsRequired() throws Exception {
        int databaseSizeBeforeTest = test1Repository.findAll().size();
        // set the field null
        test1.setTest(null);

        // Create the Test1, which fails.

        restTest1MockMvc.perform(post("/api/test-1-s")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(test1)))
            .andExpect(status().isBadRequest());

        List<Test1> test1List = test1Repository.findAll();
        assertThat(test1List).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkDateIsRequired() throws Exception {
        int databaseSizeBeforeTest = test1Repository.findAll().size();
        // set the field null
        test1.setDate(null);

        // Create the Test1, which fails.

        restTest1MockMvc.perform(post("/api/test-1-s")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(test1)))
            .andExpect(status().isBadRequest());

        List<Test1> test1List = test1Repository.findAll();
        assertThat(test1List).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllTest1S() throws Exception {
        // Initialize the database
        test1Repository.saveAndFlush(test1);

        // Get all the test1List
        restTest1MockMvc.perform(get("/api/test-1-s?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(test1.getId().intValue())))
            .andExpect(jsonPath("$.[*].test").value(hasItem(DEFAULT_TEST.toString())))
            .andExpect(jsonPath("$.[*].value").value(hasItem(DEFAULT_VALUE)))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].enums").value(hasItem(DEFAULT_ENUMS.toString())));
    }

    @Test
    @Transactional
    public void getTest1() throws Exception {
        // Initialize the database
        test1Repository.saveAndFlush(test1);

        // Get the test1
        restTest1MockMvc.perform(get("/api/test-1-s/{id}", test1.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(test1.getId().intValue()))
            .andExpect(jsonPath("$.test").value(DEFAULT_TEST.toString()))
            .andExpect(jsonPath("$.value").value(DEFAULT_VALUE))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()))
            .andExpect(jsonPath("$.enums").value(DEFAULT_ENUMS.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingTest1() throws Exception {
        // Get the test1
        restTest1MockMvc.perform(get("/api/test-1-s/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTest1() throws Exception {
        // Initialize the database
        test1Service.save(test1);

        int databaseSizeBeforeUpdate = test1Repository.findAll().size();

        // Update the test1
        Test1 updatedTest1 = test1Repository.findOne(test1.getId());
        updatedTest1
                .test(UPDATED_TEST)
                .value(UPDATED_VALUE)
                .date(UPDATED_DATE)
                .enums(UPDATED_ENUMS);

        restTest1MockMvc.perform(put("/api/test-1-s")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTest1)))
            .andExpect(status().isOk());

        // Validate the Test1 in the database
        List<Test1> test1List = test1Repository.findAll();
        assertThat(test1List).hasSize(databaseSizeBeforeUpdate);
        Test1 testTest1 = test1List.get(test1List.size() - 1);
        assertThat(testTest1.getTest()).isEqualTo(UPDATED_TEST);
        assertThat(testTest1.getValue()).isEqualTo(UPDATED_VALUE);
        assertThat(testTest1.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testTest1.getEnums()).isEqualTo(UPDATED_ENUMS);

        // Validate the Test1 in Elasticsearch
        Test1 test1Es = test1SearchRepository.findOne(testTest1.getId());
        assertThat(test1Es).isEqualToComparingFieldByField(testTest1);
    }

    @Test
    @Transactional
    public void updateNonExistingTest1() throws Exception {
        int databaseSizeBeforeUpdate = test1Repository.findAll().size();

        // Create the Test1

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restTest1MockMvc.perform(put("/api/test-1-s")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(test1)))
            .andExpect(status().isCreated());

        // Validate the Test1 in the database
        List<Test1> test1List = test1Repository.findAll();
        assertThat(test1List).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteTest1() throws Exception {
        // Initialize the database
        test1Service.save(test1);

        int databaseSizeBeforeDelete = test1Repository.findAll().size();

        // Get the test1
        restTest1MockMvc.perform(delete("/api/test-1-s/{id}", test1.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean test1ExistsInEs = test1SearchRepository.exists(test1.getId());
        assertThat(test1ExistsInEs).isFalse();

        // Validate the database is empty
        List<Test1> test1List = test1Repository.findAll();
        assertThat(test1List).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchTest1() throws Exception {
        // Initialize the database
        test1Service.save(test1);

        // Search the test1
        restTest1MockMvc.perform(get("/api/_search/test-1-s?query=id:" + test1.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(test1.getId().intValue())))
            .andExpect(jsonPath("$.[*].test").value(hasItem(DEFAULT_TEST.toString())))
            .andExpect(jsonPath("$.[*].value").value(hasItem(DEFAULT_VALUE)))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].enums").value(hasItem(DEFAULT_ENUMS.toString())));
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Test1.class);
    }
}

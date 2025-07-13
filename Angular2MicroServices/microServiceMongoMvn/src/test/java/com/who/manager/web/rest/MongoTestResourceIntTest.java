package com.who.manager.web.rest;

import com.who.manager.MicroServiceMongoMvnApp;

import com.who.manager.domain.MongoTest;
import com.who.manager.repository.MongoTestRepository;
import com.who.manager.service.MongoTestService;
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

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.who.manager.domain.enumeration.Enums;
/**
 * Test class for the MongoTestResource REST controller.
 *
 * @see MongoTestResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = MicroServiceMongoMvnApp.class)
public class MongoTestResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final Integer DEFAULT_VAL = 1;
    private static final Integer UPDATED_VAL = 2;

    private static final LocalDate DEFAULT_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Enums DEFAULT_ENUMS = Enums.one;
    private static final Enums UPDATED_ENUMS = Enums.two;

    @Autowired
    private MongoTestRepository mongoTestRepository;

    @Autowired
    private MongoTestService mongoTestService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    private MockMvc restMongoTestMockMvc;

    private MongoTest mongoTest;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        MongoTestResource mongoTestResource = new MongoTestResource(mongoTestService);
        this.restMongoTestMockMvc = MockMvcBuilders.standaloneSetup(mongoTestResource)
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
    public static MongoTest createEntity() {
        MongoTest mongoTest = new MongoTest()
                .name(DEFAULT_NAME)
                .val(DEFAULT_VAL)
                .date(DEFAULT_DATE)
                .enums(DEFAULT_ENUMS);
        return mongoTest;
    }

    @Before
    public void initTest() {
        mongoTestRepository.deleteAll();
        mongoTest = createEntity();
    }

    @Test
    public void createMongoTest() throws Exception {
        int databaseSizeBeforeCreate = mongoTestRepository.findAll().size();

        // Create the MongoTest

        restMongoTestMockMvc.perform(post("/api/mongo-tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mongoTest)))
            .andExpect(status().isCreated());

        // Validate the MongoTest in the database
        List<MongoTest> mongoTestList = mongoTestRepository.findAll();
        assertThat(mongoTestList).hasSize(databaseSizeBeforeCreate + 1);
        MongoTest testMongoTest = mongoTestList.get(mongoTestList.size() - 1);
        assertThat(testMongoTest.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testMongoTest.getVal()).isEqualTo(DEFAULT_VAL);
        assertThat(testMongoTest.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testMongoTest.getEnums()).isEqualTo(DEFAULT_ENUMS);
    }

    @Test
    public void createMongoTestWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = mongoTestRepository.findAll().size();

        // Create the MongoTest with an existing ID
        MongoTest existingMongoTest = new MongoTest();
        existingMongoTest.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restMongoTestMockMvc.perform(post("/api/mongo-tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingMongoTest)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<MongoTest> mongoTestList = mongoTestRepository.findAll();
        assertThat(mongoTestList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void checkNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = mongoTestRepository.findAll().size();
        // set the field null
        mongoTest.setName(null);

        // Create the MongoTest, which fails.

        restMongoTestMockMvc.perform(post("/api/mongo-tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mongoTest)))
            .andExpect(status().isBadRequest());

        List<MongoTest> mongoTestList = mongoTestRepository.findAll();
        assertThat(mongoTestList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkValIsRequired() throws Exception {
        int databaseSizeBeforeTest = mongoTestRepository.findAll().size();
        // set the field null
        mongoTest.setVal(null);

        // Create the MongoTest, which fails.

        restMongoTestMockMvc.perform(post("/api/mongo-tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mongoTest)))
            .andExpect(status().isBadRequest());

        List<MongoTest> mongoTestList = mongoTestRepository.findAll();
        assertThat(mongoTestList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkDateIsRequired() throws Exception {
        int databaseSizeBeforeTest = mongoTestRepository.findAll().size();
        // set the field null
        mongoTest.setDate(null);

        // Create the MongoTest, which fails.

        restMongoTestMockMvc.perform(post("/api/mongo-tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mongoTest)))
            .andExpect(status().isBadRequest());

        List<MongoTest> mongoTestList = mongoTestRepository.findAll();
        assertThat(mongoTestList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllMongoTests() throws Exception {
        // Initialize the database
        mongoTestRepository.save(mongoTest);

        // Get all the mongoTestList
        restMongoTestMockMvc.perform(get("/api/mongo-tests?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(mongoTest.getId())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].val").value(hasItem(DEFAULT_VAL)))
            .andExpect(jsonPath("$.[*].date").value(hasItem(DEFAULT_DATE.toString())))
            .andExpect(jsonPath("$.[*].enums").value(hasItem(DEFAULT_ENUMS.toString())));
    }

    @Test
    public void getMongoTest() throws Exception {
        // Initialize the database
        mongoTestRepository.save(mongoTest);

        // Get the mongoTest
        restMongoTestMockMvc.perform(get("/api/mongo-tests/{id}", mongoTest.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(mongoTest.getId()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()))
            .andExpect(jsonPath("$.val").value(DEFAULT_VAL))
            .andExpect(jsonPath("$.date").value(DEFAULT_DATE.toString()))
            .andExpect(jsonPath("$.enums").value(DEFAULT_ENUMS.toString()));
    }

    @Test
    public void getNonExistingMongoTest() throws Exception {
        // Get the mongoTest
        restMongoTestMockMvc.perform(get("/api/mongo-tests/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateMongoTest() throws Exception {
        // Initialize the database
        mongoTestService.save(mongoTest);

        int databaseSizeBeforeUpdate = mongoTestRepository.findAll().size();

        // Update the mongoTest
        MongoTest updatedMongoTest = mongoTestRepository.findOne(mongoTest.getId());
        updatedMongoTest
                .name(UPDATED_NAME)
                .val(UPDATED_VAL)
                .date(UPDATED_DATE)
                .enums(UPDATED_ENUMS);

        restMongoTestMockMvc.perform(put("/api/mongo-tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedMongoTest)))
            .andExpect(status().isOk());

        // Validate the MongoTest in the database
        List<MongoTest> mongoTestList = mongoTestRepository.findAll();
        assertThat(mongoTestList).hasSize(databaseSizeBeforeUpdate);
        MongoTest testMongoTest = mongoTestList.get(mongoTestList.size() - 1);
        assertThat(testMongoTest.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testMongoTest.getVal()).isEqualTo(UPDATED_VAL);
        assertThat(testMongoTest.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testMongoTest.getEnums()).isEqualTo(UPDATED_ENUMS);
    }

    @Test
    public void updateNonExistingMongoTest() throws Exception {
        int databaseSizeBeforeUpdate = mongoTestRepository.findAll().size();

        // Create the MongoTest

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restMongoTestMockMvc.perform(put("/api/mongo-tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(mongoTest)))
            .andExpect(status().isCreated());

        // Validate the MongoTest in the database
        List<MongoTest> mongoTestList = mongoTestRepository.findAll();
        assertThat(mongoTestList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    public void deleteMongoTest() throws Exception {
        // Initialize the database
        mongoTestService.save(mongoTest);

        int databaseSizeBeforeDelete = mongoTestRepository.findAll().size();

        // Get the mongoTest
        restMongoTestMockMvc.perform(delete("/api/mongo-tests/{id}", mongoTest.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<MongoTest> mongoTestList = mongoTestRepository.findAll();
        assertThat(mongoTestList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MongoTest.class);
    }
}

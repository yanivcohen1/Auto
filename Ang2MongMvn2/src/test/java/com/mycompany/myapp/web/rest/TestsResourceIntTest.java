package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Ang2MongMvnApp;

import com.mycompany.myapp.domain.Tests;
import com.mycompany.myapp.repository.TestsRepository;
import com.mycompany.myapp.web.rest.errors.ExceptionTranslator;

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

import java.time.Instant;
import java.time.ZonedDateTime;
import java.time.ZoneOffset;
import java.time.ZoneId;
import java.util.List;

import static com.mycompany.myapp.web.rest.TestUtil.sameInstant;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.mycompany.myapp.domain.enumeration.Enm;
/**
 * Test class for the TestsResource REST controller.
 *
 * @see TestsResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Ang2MongMvnApp.class)
public class TestsResourceIntTest {

    private static final Integer DEFAULT_NUM = 3;
    private static final Integer UPDATED_NUM = 4;

    private static final String DEFAULT_STR = "AAAAAAAAAA";
    private static final String UPDATED_STR = "BBBBBBBBBB";

    private static final Enm DEFAULT_ENM = Enm.yaniv;
    private static final Enm UPDATED_ENM = Enm.tamir;

    private static final ZonedDateTime DEFAULT_TIME = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_TIME = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    @Autowired
    private TestsRepository testsRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    private MockMvc restTestsMockMvc;

    private Tests tests;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TestsResource testsResource = new TestsResource(testsRepository);
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
    public static Tests createEntity() {
        Tests tests = new Tests()
            .num(DEFAULT_NUM)
            .str(DEFAULT_STR)
            .enm(DEFAULT_ENM)
            .time(DEFAULT_TIME);
        return tests;
    }

    @Before
    public void initTest() {
        testsRepository.deleteAll();
        tests = createEntity();
    }

    @Test
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
        assertThat(testTests.getNum()).isEqualTo(DEFAULT_NUM);
        assertThat(testTests.getStr()).isEqualTo(DEFAULT_STR);
        assertThat(testTests.getEnm()).isEqualTo(DEFAULT_ENM);
        assertThat(testTests.getTime()).isEqualTo(DEFAULT_TIME);
    }

    @Test
    public void createTestsWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = testsRepository.findAll().size();

        // Create the Tests with an existing ID
        tests.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restTestsMockMvc.perform(post("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tests)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void checkNumIsRequired() throws Exception {
        int databaseSizeBeforeTest = testsRepository.findAll().size();
        // set the field null
        tests.setNum(null);

        // Create the Tests, which fails.

        restTestsMockMvc.perform(post("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tests)))
            .andExpect(status().isBadRequest());

        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkStrIsRequired() throws Exception {
        int databaseSizeBeforeTest = testsRepository.findAll().size();
        // set the field null
        tests.setStr(null);

        // Create the Tests, which fails.

        restTestsMockMvc.perform(post("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tests)))
            .andExpect(status().isBadRequest());

        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllTests() throws Exception {
        // Initialize the database
        testsRepository.save(tests);

        // Get all the testsList
        restTestsMockMvc.perform(get("/api/tests?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tests.getId())))
            .andExpect(jsonPath("$.[*].num").value(hasItem(DEFAULT_NUM)))
            .andExpect(jsonPath("$.[*].str").value(hasItem(DEFAULT_STR.toString())))
            .andExpect(jsonPath("$.[*].enm").value(hasItem(DEFAULT_ENM.toString())))
            .andExpect(jsonPath("$.[*].time").value(hasItem(sameInstant(DEFAULT_TIME))));
    }

    @Test
    public void getTests() throws Exception {
        // Initialize the database
        testsRepository.save(tests);

        // Get the tests
        restTestsMockMvc.perform(get("/api/tests/{id}", tests.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(tests.getId()))
            .andExpect(jsonPath("$.num").value(DEFAULT_NUM))
            .andExpect(jsonPath("$.str").value(DEFAULT_STR.toString()))
            .andExpect(jsonPath("$.enm").value(DEFAULT_ENM.toString()))
            .andExpect(jsonPath("$.time").value(sameInstant(DEFAULT_TIME)));
    }

    @Test
    public void getNonExistingTests() throws Exception {
        // Get the tests
        restTestsMockMvc.perform(get("/api/tests/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateTests() throws Exception {
        // Initialize the database
        testsRepository.save(tests);
        int databaseSizeBeforeUpdate = testsRepository.findAll().size();

        // Update the tests
        Tests updatedTests = testsRepository.findOne(tests.getId());
        updatedTests
            .num(UPDATED_NUM)
            .str(UPDATED_STR)
            .enm(UPDATED_ENM)
            .time(UPDATED_TIME);

        restTestsMockMvc.perform(put("/api/tests")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTests)))
            .andExpect(status().isOk());

        // Validate the Tests in the database
        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeUpdate);
        Tests testTests = testsList.get(testsList.size() - 1);
        assertThat(testTests.getNum()).isEqualTo(UPDATED_NUM);
        assertThat(testTests.getStr()).isEqualTo(UPDATED_STR);
        assertThat(testTests.getEnm()).isEqualTo(UPDATED_ENM);
        assertThat(testTests.getTime()).isEqualTo(UPDATED_TIME);
    }

    @Test
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
    public void deleteTests() throws Exception {
        // Initialize the database
        testsRepository.save(tests);
        int databaseSizeBeforeDelete = testsRepository.findAll().size();

        // Get the tests
        restTestsMockMvc.perform(delete("/api/tests/{id}", tests.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Tests> testsList = testsRepository.findAll();
        assertThat(testsList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Tests.class);
        Tests tests1 = new Tests();
        tests1.setId("id1");
        Tests tests2 = new Tests();
        tests2.setId(tests1.getId());
        assertThat(tests1).isEqualTo(tests2);
        tests2.setId("id2");
        assertThat(tests1).isNotEqualTo(tests2);
        tests1.setId(null);
        assertThat(tests1).isNotEqualTo(tests2);
    }
}

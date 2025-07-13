package com.who.auto.web.rest;

import com.who.auto.Application;
import com.who.auto.domain.Tests;
import com.who.auto.repository.TestsRepository;
import com.who.auto.repository.search.TestsSearchRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.hamcrest.Matchers.hasItem;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the TestsResource REST controller.
 *
 * @see TestsResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
public class TestsResourceTest {

    private static final String DEFAULT_TEST_NAME = "SAMPLE_TEXT";
    private static final String UPDATED_TEST_NAME = "UPDATED_TEXT";
    private static final String DEFAULT_CLASS_NAME = "SAMPLE_TEXT";
    private static final String UPDATED_CLASS_NAME = "UPDATED_TEXT";
    private static final String DEFAULT_METHOD_NAME = "SAMPLE_TEXT";
    private static final String UPDATED_METHOD_NAME = "UPDATED_TEXT";
    private static final String DEFAULT_PARAMETER_NAME = "SAMPLE_TEXT";
    private static final String UPDATED_PARAMETER_NAME = "UPDATED_TEXT";
    private static final String DEFAULT_PARAMETER_VALUE = "SAMPLE_TEXT";
    private static final String UPDATED_PARAMETER_VALUE = "UPDATED_TEXT";

    @Inject
    private TestsRepository testsRepository;

    @Inject
    private TestsSearchRepository testsSearchRepository;

    private MockMvc restTestsMockMvc;

    private Tests tests;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        TestsResource testsResource = new TestsResource();
        ReflectionTestUtils.setField(testsResource, "testsRepository", testsRepository);
        ReflectionTestUtils.setField(testsResource, "testsSearchRepository", testsSearchRepository);
        this.restTestsMockMvc = MockMvcBuilders.standaloneSetup(testsResource).build();
    }

    @Before
    public void initTest() {
        tests = new Tests();
        tests.setTest_name(DEFAULT_TEST_NAME);
        tests.setClass_name(DEFAULT_CLASS_NAME);
        tests.setmethod_name(DEFAULT_METHOD_NAME);
        tests.setParameter_name(DEFAULT_PARAMETER_NAME);
        tests.setParameter_value(DEFAULT_PARAMETER_VALUE);
    }

    @Test
    @Transactional
    public void createTests() throws Exception {
        int databaseSizeBeforeCreate = testsRepository.findAll().size();

        // Create the Tests
        restTestsMockMvc.perform(post("/api/testss")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(tests)))
                .andExpect(status().isCreated());

        // Validate the Tests in the database
        List<Tests> testss = testsRepository.findAll();
        assertThat(testss).hasSize(databaseSizeBeforeCreate + 1);
        Tests testTests = testss.get(testss.size() - 1);
        assertThat(testTests.getTest_name()).isEqualTo(DEFAULT_TEST_NAME);
        assertThat(testTests.getClass_name()).isEqualTo(DEFAULT_CLASS_NAME);
        assertThat(testTests.getmethod_name()).isEqualTo(DEFAULT_METHOD_NAME);
        assertThat(testTests.getParameter_name()).isEqualTo(DEFAULT_PARAMETER_NAME);
        assertThat(testTests.getParameter_value()).isEqualTo(DEFAULT_PARAMETER_VALUE);
    }

    @Test
    @Transactional
    public void checkTest_nameIsRequired() throws Exception {
        // Validate the database is empty
        assertThat(testsRepository.findAll()).hasSize(0);
        // set the field null
        tests.setTest_name(null);

        // Create the Tests, which fails.
        restTestsMockMvc.perform(post("/api/testss")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(tests)))
                .andExpect(status().isBadRequest());

        // Validate the database is still empty
        List<Tests> testss = testsRepository.findAll();
        assertThat(testss).hasSize(0);
    }

    @Test
    @Transactional
    public void checkClass_nameIsRequired() throws Exception {
        // Validate the database is empty
        assertThat(testsRepository.findAll()).hasSize(0);
        // set the field null
        tests.setClass_name(null);

        // Create the Tests, which fails.
        restTestsMockMvc.perform(post("/api/testss")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(tests)))
                .andExpect(status().isBadRequest());

        // Validate the database is still empty
        List<Tests> testss = testsRepository.findAll();
        assertThat(testss).hasSize(0);
    }

    @Test
    @Transactional
    public void getAllTestss() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);

        // Get all the testss
        restTestsMockMvc.perform(get("/api/testss"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.[*].id").value(hasItem(tests.getId().intValue())))
                .andExpect(jsonPath("$.[*].test_name").value(hasItem(DEFAULT_TEST_NAME.toString())))
                .andExpect(jsonPath("$.[*].class_name").value(hasItem(DEFAULT_CLASS_NAME.toString())))
                .andExpect(jsonPath("$.[*].method_name").value(hasItem(DEFAULT_METHOD_NAME.toString())))
                .andExpect(jsonPath("$.[*].parameter_name").value(hasItem(DEFAULT_PARAMETER_NAME.toString())))
                .andExpect(jsonPath("$.[*].parameter_value").value(hasItem(DEFAULT_PARAMETER_VALUE.toString())));
    }

    @Test
    @Transactional
    public void getTests() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);

        // Get the tests
        restTestsMockMvc.perform(get("/api/testss/{id}", tests.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(tests.getId().intValue()))
            .andExpect(jsonPath("$.test_name").value(DEFAULT_TEST_NAME.toString()))
            .andExpect(jsonPath("$.class_name").value(DEFAULT_CLASS_NAME.toString()))
            .andExpect(jsonPath("$.method_name").value(DEFAULT_METHOD_NAME.toString()))
            .andExpect(jsonPath("$.parameter_name").value(DEFAULT_PARAMETER_NAME.toString()))
            .andExpect(jsonPath("$.parameter_value").value(DEFAULT_PARAMETER_VALUE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingTests() throws Exception {
        // Get the tests
        restTestsMockMvc.perform(get("/api/testss/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTests() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);

		int databaseSizeBeforeUpdate = testsRepository.findAll().size();

        // Update the tests
        tests.setTest_name(UPDATED_TEST_NAME);
        tests.setClass_name(UPDATED_CLASS_NAME);
        tests.setmethod_name(UPDATED_METHOD_NAME);
        tests.setParameter_name(UPDATED_PARAMETER_NAME);
        tests.setParameter_value(UPDATED_PARAMETER_VALUE);
        restTestsMockMvc.perform(put("/api/testss")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(tests)))
                .andExpect(status().isOk());

        // Validate the Tests in the database
        List<Tests> testss = testsRepository.findAll();
        assertThat(testss).hasSize(databaseSizeBeforeUpdate);
        Tests testTests = testss.get(testss.size() - 1);
        assertThat(testTests.getTest_name()).isEqualTo(UPDATED_TEST_NAME);
        assertThat(testTests.getClass_name()).isEqualTo(UPDATED_CLASS_NAME);
        assertThat(testTests.getmethod_name()).isEqualTo(UPDATED_METHOD_NAME);
        assertThat(testTests.getParameter_name()).isEqualTo(UPDATED_PARAMETER_NAME);
        assertThat(testTests.getParameter_value()).isEqualTo(UPDATED_PARAMETER_VALUE);
    }

    @Test
    @Transactional
    public void deleteTests() throws Exception {
        // Initialize the database
        testsRepository.saveAndFlush(tests);

		int databaseSizeBeforeDelete = testsRepository.findAll().size();

        // Get the tests
        restTestsMockMvc.perform(delete("/api/testss/{id}", tests.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Tests> testss = testsRepository.findAll();
        assertThat(testss).hasSize(databaseSizeBeforeDelete - 1);
    }
}

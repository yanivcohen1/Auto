package com.who.auto.web.rest;

import com.who.auto.Application;
import com.who.auto.domain.Suite;
import com.who.auto.repository.SuiteRepository;
import com.who.auto.repository.search.SuiteSearchRepository;

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
 * Test class for the SuiteResource REST controller.
 *
 * @see SuiteResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
public class SuiteResourceTest {

    private static final String DEFAULT_SUITE_NAME = "SAMPLE_TEXT";
    private static final String UPDATED_SUITE_NAME = "UPDATED_TEXT";
    private static final String DEFAULT_XML_FILE_LOCATION = "SAMPLE_TEXT";
    private static final String UPDATED_XML_FILE_LOCATION = "UPDATED_TEXT";
    private static final String DEFAULT_JENKINS_URL = "SAMPLE_TEXT";
    private static final String UPDATED_JENKINS_URL = "UPDATED_TEXT";

    @Inject
    private SuiteRepository suiteRepository;

    @Inject
    private SuiteSearchRepository suiteSearchRepository;

    private MockMvc restSuiteMockMvc;

    private Suite suite;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        SuiteResource suiteResource = new SuiteResource();
        ReflectionTestUtils.setField(suiteResource, "suiteRepository", suiteRepository);
        ReflectionTestUtils.setField(suiteResource, "suiteSearchRepository", suiteSearchRepository);
        this.restSuiteMockMvc = MockMvcBuilders.standaloneSetup(suiteResource).build();
    }

    @Before
    public void initTest() {
        suite = new Suite();
        suite.setSuite_name(DEFAULT_SUITE_NAME);
        suite.setXml_file_location(DEFAULT_XML_FILE_LOCATION);
        suite.setJenkins_url(DEFAULT_JENKINS_URL);
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
        List<Suite> suites = suiteRepository.findAll();
        assertThat(suites).hasSize(databaseSizeBeforeCreate + 1);
        Suite testSuite = suites.get(suites.size() - 1);
        assertThat(testSuite.getSuite_name()).isEqualTo(DEFAULT_SUITE_NAME);
        assertThat(testSuite.getXml_file_location()).isEqualTo(DEFAULT_XML_FILE_LOCATION);
        assertThat(testSuite.getJenkins_url()).isEqualTo(DEFAULT_JENKINS_URL);
    }

    @Test
    @Transactional
    public void checkSuite_nameIsRequired() throws Exception {
        // Validate the database is empty
        assertThat(suiteRepository.findAll()).hasSize(0);
        // set the field null
        suite.setSuite_name(null);

        // Create the Suite, which fails.
        restSuiteMockMvc.perform(post("/api/suites")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(suite)))
                .andExpect(status().isBadRequest());

        // Validate the database is still empty
        List<Suite> suites = suiteRepository.findAll();
        assertThat(suites).hasSize(0);
    }

    @Test
    @Transactional
    public void checkXml_file_locationIsRequired() throws Exception {
        // Validate the database is empty
        assertThat(suiteRepository.findAll()).hasSize(0);
        // set the field null
        suite.setXml_file_location(null);

        // Create the Suite, which fails.
        restSuiteMockMvc.perform(post("/api/suites")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(suite)))
                .andExpect(status().isBadRequest());

        // Validate the database is still empty
        List<Suite> suites = suiteRepository.findAll();
        assertThat(suites).hasSize(0);
    }

    @Test
    @Transactional
    public void checkJenkins_urlIsRequired() throws Exception {
        // Validate the database is empty
        assertThat(suiteRepository.findAll()).hasSize(0);
        // set the field null
        suite.setJenkins_url(null);

        // Create the Suite, which fails.
        restSuiteMockMvc.perform(post("/api/suites")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(suite)))
                .andExpect(status().isBadRequest());

        // Validate the database is still empty
        List<Suite> suites = suiteRepository.findAll();
        assertThat(suites).hasSize(0);
    }

    @Test
    @Transactional
    public void getAllSuites() throws Exception {
        // Initialize the database
        suiteRepository.saveAndFlush(suite);

        // Get all the suites
        restSuiteMockMvc.perform(get("/api/suites"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
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
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
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
        suiteRepository.saveAndFlush(suite);

		int databaseSizeBeforeUpdate = suiteRepository.findAll().size();

        // Update the suite
        suite.setSuite_name(UPDATED_SUITE_NAME);
        suite.setXml_file_location(UPDATED_XML_FILE_LOCATION);
        suite.setJenkins_url(UPDATED_JENKINS_URL);
        restSuiteMockMvc.perform(put("/api/suites")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(suite)))
                .andExpect(status().isOk());

        // Validate the Suite in the database
        List<Suite> suites = suiteRepository.findAll();
        assertThat(suites).hasSize(databaseSizeBeforeUpdate);
        Suite testSuite = suites.get(suites.size() - 1);
        assertThat(testSuite.getSuite_name()).isEqualTo(UPDATED_SUITE_NAME);
        assertThat(testSuite.getXml_file_location()).isEqualTo(UPDATED_XML_FILE_LOCATION);
        assertThat(testSuite.getJenkins_url()).isEqualTo(UPDATED_JENKINS_URL);
    }

    @Test
    @Transactional
    public void deleteSuite() throws Exception {
        // Initialize the database
        suiteRepository.saveAndFlush(suite);

		int databaseSizeBeforeDelete = suiteRepository.findAll().size();

        // Get the suite
        restSuiteMockMvc.perform(delete("/api/suites/{id}", suite.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Suite> suites = suiteRepository.findAll();
        assertThat(suites).hasSize(databaseSizeBeforeDelete - 1);
    }
}

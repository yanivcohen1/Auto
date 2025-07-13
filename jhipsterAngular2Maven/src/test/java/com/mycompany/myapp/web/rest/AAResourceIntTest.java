package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.JhipsterAngular2MavenApp;

import com.mycompany.myapp.domain.AA;
import com.mycompany.myapp.repository.AARepository;
import com.mycompany.myapp.repository.search.AASearchRepository;

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
 * Test class for the AAResource REST controller.
 *
 * @see AAResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = JhipsterAngular2MavenApp.class)
public class AAResourceIntTest {

    private static final String DEFAULT_AA_NAME = "AAAAAAAAAA";
    private static final String UPDATED_AA_NAME = "BBBBBBBBBB";

    private static final Integer DEFAULT_VALUE = 1;
    private static final Integer UPDATED_VALUE = 2;

    @Autowired
    private AARepository aARepository;

    @Autowired
    private AASearchRepository aASearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private EntityManager em;

    private MockMvc restAAMockMvc;

    private AA aA;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            AAResource aAResource = new AAResource(aARepository, aASearchRepository);
        this.restAAMockMvc = MockMvcBuilders.standaloneSetup(aAResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static AA createEntity(EntityManager em) {
        AA aA = new AA()
                .aaName(DEFAULT_AA_NAME)
                .value(DEFAULT_VALUE);
        return aA;
    }

    @Before
    public void initTest() {
        aASearchRepository.deleteAll();
        aA = createEntity(em);
    }

    @Test
    @Transactional
    public void createAA() throws Exception {
        int databaseSizeBeforeCreate = aARepository.findAll().size();

        // Create the AA

        restAAMockMvc.perform(post("/api/a-as")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(aA)))
            .andExpect(status().isCreated());

        // Validate the AA in the database
        List<AA> aAList = aARepository.findAll();
        assertThat(aAList).hasSize(databaseSizeBeforeCreate + 1);
        AA testAA = aAList.get(aAList.size() - 1);
        assertThat(testAA.getAaName()).isEqualTo(DEFAULT_AA_NAME);
        assertThat(testAA.getValue()).isEqualTo(DEFAULT_VALUE);

        // Validate the AA in Elasticsearch
        AA aAEs = aASearchRepository.findOne(testAA.getId());
        assertThat(aAEs).isEqualToComparingFieldByField(testAA);
    }

    @Test
    @Transactional
    public void createAAWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = aARepository.findAll().size();

        // Create the AA with an existing ID
        AA existingAA = new AA();
        existingAA.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restAAMockMvc.perform(post("/api/a-as")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingAA)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<AA> aAList = aARepository.findAll();
        assertThat(aAList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkAaNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = aARepository.findAll().size();
        // set the field null
        aA.setAaName(null);

        // Create the AA, which fails.

        restAAMockMvc.perform(post("/api/a-as")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(aA)))
            .andExpect(status().isBadRequest());

        List<AA> aAList = aARepository.findAll();
        assertThat(aAList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkValueIsRequired() throws Exception {
        int databaseSizeBeforeTest = aARepository.findAll().size();
        // set the field null
        aA.setValue(null);

        // Create the AA, which fails.

        restAAMockMvc.perform(post("/api/a-as")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(aA)))
            .andExpect(status().isBadRequest());

        List<AA> aAList = aARepository.findAll();
        assertThat(aAList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllAAS() throws Exception {
        // Initialize the database
        aARepository.saveAndFlush(aA);

        // Get all the aAList
        restAAMockMvc.perform(get("/api/a-as?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(aA.getId().intValue())))
            .andExpect(jsonPath("$.[*].aaName").value(hasItem(DEFAULT_AA_NAME.toString())))
            .andExpect(jsonPath("$.[*].value").value(hasItem(DEFAULT_VALUE)));
    }

    @Test
    @Transactional
    public void getAA() throws Exception {
        // Initialize the database
        aARepository.saveAndFlush(aA);

        // Get the aA
        restAAMockMvc.perform(get("/api/a-as/{id}", aA.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(aA.getId().intValue()))
            .andExpect(jsonPath("$.aaName").value(DEFAULT_AA_NAME.toString()))
            .andExpect(jsonPath("$.value").value(DEFAULT_VALUE));
    }

    @Test
    @Transactional
    public void getNonExistingAA() throws Exception {
        // Get the aA
        restAAMockMvc.perform(get("/api/a-as/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateAA() throws Exception {
        // Initialize the database
        aARepository.saveAndFlush(aA);
        aASearchRepository.save(aA);
        int databaseSizeBeforeUpdate = aARepository.findAll().size();

        // Update the aA
        AA updatedAA = aARepository.findOne(aA.getId());
        updatedAA
                .aaName(UPDATED_AA_NAME)
                .value(UPDATED_VALUE);

        restAAMockMvc.perform(put("/api/a-as")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedAA)))
            .andExpect(status().isOk());

        // Validate the AA in the database
        List<AA> aAList = aARepository.findAll();
        assertThat(aAList).hasSize(databaseSizeBeforeUpdate);
        AA testAA = aAList.get(aAList.size() - 1);
        assertThat(testAA.getAaName()).isEqualTo(UPDATED_AA_NAME);
        assertThat(testAA.getValue()).isEqualTo(UPDATED_VALUE);

        // Validate the AA in Elasticsearch
        AA aAEs = aASearchRepository.findOne(testAA.getId());
        assertThat(aAEs).isEqualToComparingFieldByField(testAA);
    }

    @Test
    @Transactional
    public void updateNonExistingAA() throws Exception {
        int databaseSizeBeforeUpdate = aARepository.findAll().size();

        // Create the AA

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restAAMockMvc.perform(put("/api/a-as")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(aA)))
            .andExpect(status().isCreated());

        // Validate the AA in the database
        List<AA> aAList = aARepository.findAll();
        assertThat(aAList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteAA() throws Exception {
        // Initialize the database
        aARepository.saveAndFlush(aA);
        aASearchRepository.save(aA);
        int databaseSizeBeforeDelete = aARepository.findAll().size();

        // Get the aA
        restAAMockMvc.perform(delete("/api/a-as/{id}", aA.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean aAExistsInEs = aASearchRepository.exists(aA.getId());
        assertThat(aAExistsInEs).isFalse();

        // Validate the database is empty
        List<AA> aAList = aARepository.findAll();
        assertThat(aAList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchAA() throws Exception {
        // Initialize the database
        aARepository.saveAndFlush(aA);
        aASearchRepository.save(aA);

        // Search the aA
        restAAMockMvc.perform(get("/api/_search/a-as?query=id:" + aA.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(aA.getId().intValue())))
            .andExpect(jsonPath("$.[*].aaName").value(hasItem(DEFAULT_AA_NAME.toString())))
            .andExpect(jsonPath("$.[*].value").value(hasItem(DEFAULT_VALUE)));
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AA.class);
    }
}

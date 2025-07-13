package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Suite;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Suite entity.
 */
public interface SuiteSearchRepository extends ElasticsearchRepository<Suite, Long> {
}

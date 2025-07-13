package com.who.manager.repository.search;

import com.who.manager.domain.Suite;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Suite entity.
 */
public interface SuiteSearchRepository extends ElasticsearchRepository<Suite, Long> {
}

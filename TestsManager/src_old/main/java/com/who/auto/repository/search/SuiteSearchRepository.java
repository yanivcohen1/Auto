package com.who.auto.repository.search;

import com.who.auto.domain.Suite;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Suite entity.
 */
public interface SuiteSearchRepository extends ElasticsearchRepository<Suite, Long> {
}

package com.who.manager.repository.search;

import com.who.manager.domain.Tests;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tests entity.
 */
public interface TestsSearchRepository extends ElasticsearchRepository<Tests, Long> {
}

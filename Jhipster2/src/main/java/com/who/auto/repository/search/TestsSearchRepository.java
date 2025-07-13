package com.who.auto.repository.search;

import com.who.auto.domain.Tests;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Tests entity.
 */
public interface TestsSearchRepository extends ElasticsearchRepository<Tests, Long> {
}

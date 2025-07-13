package com.yan.manag.repository.search;

import com.yan.manag.domain.Tests;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tests entity.
 */
public interface TestsSearchRepository extends ElasticsearchRepository<Tests, Long> {
}

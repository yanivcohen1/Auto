package com.yan.manag.repository.search;

import com.yan.manag.domain.Suite;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Suite entity.
 */
public interface SuiteSearchRepository extends ElasticsearchRepository<Suite, Long> {
}

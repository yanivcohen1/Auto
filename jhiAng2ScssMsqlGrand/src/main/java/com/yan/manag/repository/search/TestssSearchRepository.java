package com.yan.manag.repository.search;

import com.yan.manag.domain.Testss;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Testss entity.
 */
public interface TestssSearchRepository extends ElasticsearchRepository<Testss, String> {
}

package com.who.manager.repository.search;

import com.who.manager.domain.Test1;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Test1 entity.
 */
public interface Test1SearchRepository extends ElasticsearchRepository<Test1, Long> {
}

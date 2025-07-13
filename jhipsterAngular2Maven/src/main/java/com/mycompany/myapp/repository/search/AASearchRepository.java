package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.AA;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the AA entity.
 */
public interface AASearchRepository extends ElasticsearchRepository<AA, Long> {
}

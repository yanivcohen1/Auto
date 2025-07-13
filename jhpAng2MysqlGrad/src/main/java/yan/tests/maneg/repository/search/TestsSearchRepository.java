package yan.tests.maneg.repository.search;

import yan.tests.maneg.domain.Tests;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tests entity.
 */
public interface TestsSearchRepository extends ElasticsearchRepository<Tests, Long> {
}

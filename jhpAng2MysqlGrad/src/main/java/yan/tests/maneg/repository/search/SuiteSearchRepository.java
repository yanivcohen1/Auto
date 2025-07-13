package yan.tests.maneg.repository.search;

import yan.tests.maneg.domain.Suite;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Suite entity.
 */
public interface SuiteSearchRepository extends ElasticsearchRepository<Suite, Long> {
}

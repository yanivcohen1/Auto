package yan.tests.maneg.repository.search;

import yan.tests.maneg.domain.Testss;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Testss entity.
 */
public interface TestssSearchRepository extends ElasticsearchRepository<Testss, Long> {
}

package yan.tests.maneg.repository.search;

import yan.tests.maneg.domain.Step;
import yan.tests.maneg.domain.Suite;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Suite entity.
 */
public interface StepSearchRepository extends ElasticsearchRepository<Step, String> {
}

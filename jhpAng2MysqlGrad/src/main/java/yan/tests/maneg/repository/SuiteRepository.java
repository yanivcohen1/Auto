package yan.tests.maneg.repository;

import yan.tests.maneg.domain.Suite;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Suite entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SuiteRepository extends JpaRepository<Suite, Long> {

}

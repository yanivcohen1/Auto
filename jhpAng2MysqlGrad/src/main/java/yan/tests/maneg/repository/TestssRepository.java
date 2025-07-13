package yan.tests.maneg.repository;

import yan.tests.maneg.domain.Testss;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Testss entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TestssRepository extends JpaRepository<Testss, Long> {

}

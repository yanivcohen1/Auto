package com.who.auto.repository;

import com.who.auto.domain.Suite;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Suite entity.
 */
public interface SuiteRepository extends JpaRepository<Suite,Long> {

}

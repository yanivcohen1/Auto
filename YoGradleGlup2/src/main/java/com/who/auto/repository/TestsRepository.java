package com.who.auto.repository;

import com.who.auto.domain.Tests;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Tests entity.
 */
public interface TestsRepository extends JpaRepository<Tests,Long> {

	@Query( "SELECT a FROM Tests a INNER JOIN a.suite b WHERE b.suite_name = :suiteName")
    List<Tests> findSuiteTests(@Param("suiteName") String suiteName);
	
}

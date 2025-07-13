package com.yan.manag.repository;

import com.yan.manag.domain.Tests;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Tests entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TestsRepository extends JpaRepository<Tests, Long> {

	@Query( "SELECT a FROM Tests a INNER JOIN a.suite b WHERE b.suiteName = :suiteName ORDER BY a.testName ASC")
    List<Tests> findSuiteTests(@Param("suiteName") String suiteName);
	
}

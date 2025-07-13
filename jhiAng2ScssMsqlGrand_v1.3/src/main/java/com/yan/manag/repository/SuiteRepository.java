package com.yan.manag.repository;

import com.yan.manag.domain.Suite;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Suite entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SuiteRepository extends JpaRepository<Suite, Long> {

}

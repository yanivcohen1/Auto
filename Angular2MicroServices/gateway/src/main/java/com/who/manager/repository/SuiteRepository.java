package com.who.manager.repository;

import com.who.manager.domain.Suite;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Suite entity.
 */
@SuppressWarnings("unused")
public interface SuiteRepository extends JpaRepository<Suite,Long> {

}

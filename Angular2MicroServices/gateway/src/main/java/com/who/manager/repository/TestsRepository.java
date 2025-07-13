package com.who.manager.repository;

import com.who.manager.domain.Tests;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Tests entity.
 */
@SuppressWarnings("unused")
public interface TestsRepository extends JpaRepository<Tests,Long> {

}

package com.who.manager.repository;

import com.who.manager.domain.Test1;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Test1 entity.
 */
@SuppressWarnings("unused")
public interface Test1Repository extends JpaRepository<Test1,Long> {

}

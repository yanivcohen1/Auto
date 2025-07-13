package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.AA;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the AA entity.
 */
@SuppressWarnings("unused")
public interface AARepository extends JpaRepository<AA,Long> {

}

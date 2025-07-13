package yan.tests.maneg.repository;

import yan.tests.maneg.domain.MongoTest;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the MongoTest entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MongoTestRepository extends MongoRepository<MongoTest, String> {

}

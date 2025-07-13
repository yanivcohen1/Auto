package hello;


import java.util.List;

//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Spring Data JPA repository for the Suite entity.
 */
public interface SuiteRepository {

	//@Query( "SELECT s FROM Suite s WHERE s.suiteName = :username")
	Suite testSuite(@Param("username") String username);
	void save(Suite suite);
	//@Query( "SELECT COUNT(mu.id) FROM MessageUser mu WHERE mu.receiver = :username")
    //Long countBA(@Param("username") String username);
}

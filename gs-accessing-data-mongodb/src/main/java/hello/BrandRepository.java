package hello;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
//import lankydan.tutorial.mongodb.documents.Brand;
//import lankydan.tutorial.mongodb.documents.Model;
//import lankydan.tutorial.mongodb.documents.Person;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.Instant;
import java.util.Date;
import java.util.List;

public interface BrandRepository extends PagingAndSortingRepository<Brand, String> {

	/*@Query(value="{ 'brand.$id' : ?0 }")
    public List<Model> findByBrandId(Integer id); */
	
	@Query(value="{ 'Model.id' : ?0 }")
    public List<Brand> findByModelId(String id);

    public Page<Brand> findByNameContains(String name, Pageable pageable);
    
    @Query(value = "{'name': {$regex: ?0}, 'date':{ $lte: ?1, $gte: ?2}}")
    public Page<Brand> findByNameContainsAndDateBetween(String name, Instant to, Instant from, Pageable pageable);
    
    @Query(value = "{'name': ?0, 'date':{ $lte: ?1, $gte: ?2}}")
    public Page<Brand> findByNameAndDateBetween(String name, Instant to, Instant from, Pageable pageable);
}

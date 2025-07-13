package hello;

//import lankydan.tutorial.mongodb.documents.Brand;
//import lankydan.tutorial.mongodb.documents.Model;
//import lankydan.tutorial.mongodb.documents.Person;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ModelRepository extends MongoRepository<Model, String> {

	@Query(value="{ 'brands.id' : ?0 }")
    public List<Model> findByBrandId(String id);
	
	/*@Query(value="{ 'brand.name' : ?0 }")
    public List<Model> findByBrandName(String name);*/
	
}

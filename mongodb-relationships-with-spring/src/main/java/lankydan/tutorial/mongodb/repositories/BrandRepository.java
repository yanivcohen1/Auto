package lankydan.tutorial.mongodb.repositories;

import lankydan.tutorial.mongodb.documents.Brand;
import lankydan.tutorial.mongodb.documents.Model;
import lankydan.tutorial.mongodb.documents.Person;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface BrandRepository extends MongoRepository<Brand, String> {

	/*@Query(value="{ 'brand.$id' : ?0 }")
    public List<Model> findByBrandId(Integer id); */
	
	@Query(value="{ 'Model.id' : ?0 }")
    public List<Brand> findByModelId(String id);

    public List<Brand> findByName(String name);
}

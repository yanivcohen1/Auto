package lankydan.tutorial.mongodb.application;

import lankydan.tutorial.mongodb.documents.Address;
import lankydan.tutorial.mongodb.documents.Brand;
import lankydan.tutorial.mongodb.documents.Hobby;
import lankydan.tutorial.mongodb.documents.Model;
import lankydan.tutorial.mongodb.documents.Person;
import lankydan.tutorial.mongodb.repositories.BrandRepository;
import lankydan.tutorial.mongodb.repositories.ModelRepository;
import lankydan.tutorial.mongodb.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = {PersonRepository.class, Model.class, Brand.class})
public class Application implements CommandLineRunner {

  @Autowired 
  private PersonRepository personRepository;

  @Autowired 
  private ModelRepository modelRepository;
  
  @Autowired 
  private BrandRepository brandRepository;
  
  public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	
	modelRepository.deleteAll();
	brandRepository.deleteAll();
	List<Brand> brands = new ArrayList<Brand>();
	final Brand brand1 = new Brand("barnd1");
	brandRepository.save(brand1);
	brands.add(brand1);
	final Model model1 = new Model("model1", brands);
	modelRepository.save(model1);
	final Brand brand2 = new Brand("barnd2");
	brandRepository.save(brand2);
	brands.add(brand2);
	final Model model2 = new Model("model2", brands);
	modelRepository.save(model2);
	System.out.println("Find by Brand Id");
	modelRepository.findByBrandId(brand2.getId()).forEach(System.out::println);
	System.out.println("Find by Modal Id");
	Brand b = brandRepository.findOne(brand1.getId());
	b.setName("brand11");
	brandRepository.save(b);
	modelRepository.findOne(model1.getId()).getBrands().forEach(System.out::println);
	System.out.println("Find by Brand name");
	brandRepository.findByName("brand11").forEach(System.out::println);
	//brandRepository.findByModelId(model1.getId()).forEach(System.out::println);
	//brandRepository.findByModelId(id)
	/*personRepository.deleteAll();

    final Address address = new Address("19 Imaginary Road", "Imaginary Place", "Imaginary City", "UK");

    final Hobby badminton = new Hobby("Badminton");
    final Hobby tv = new Hobby("TV");
    final List<Hobby> hobbies = Arrays.asList(badminton, tv);

    final Person john = new Person("John", "Doe", LocalDateTime.now(), address, "Winner", 100, hobbies);
    personRepository.save(john);

    System.out.println("Find by first name");
    personRepository.findByFirstName("John").forEach(System.out::println);

    System.out.println("Find by country (UK)");
    personRepository.findByCountry("UK").forEach(System.out::println);

    address.setCountry("US");
    personRepository.save(john);
    System.out.println("Find by country (US)");
    personRepository.findByCountry("US").forEach(System.out::println);*/
  }
}

package hello;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

@SpringBootApplication
public class Application implements CommandLineRunner {

	@Autowired
	private CustomerRepository repository;
	
	@Autowired 
	private ModelRepository modelRepository;
	  
	@Autowired 
	private BrandRepository brandRepository;
	
	@Autowired 
	private MongoTemplate mongoTemplate;
	  
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		DateFormat formatter = new SimpleDateFormat("dd/MM/yy");
		modelRepository.deleteAll();
		brandRepository.deleteAll();
		List<Brand> brands = new ArrayList<Brand>();
		Brand brand1 = new Brand("barnd1", formatter.parse("10/10/17"));
		brandRepository.save(brand1);
		brand1 = new Brand("barnd1", formatter.parse("11/10/17"));
		brandRepository.save(brand1);
		 brand1 = new Brand("barnd1", formatter.parse("12/10/17"));
		brandRepository.save(brand1);
		brands.add(brand1);
		final Model model1 = new Model("model1", brands);
		modelRepository.save(model1);
		final Brand brand2 = new Brand("barnd2", formatter.parse("13/10/17"));
		brandRepository.save(brand2);
		brands.add(brand2);
		final Model model2 = new Model("model2", brands);
		modelRepository.save(model2);
		System.out.println("Find by Brand Id");
		modelRepository.findByBrandId(brand2.getId()).forEach(System.out::println);
		System.out.println("Find by Modal Id");
		//Brand b = brandRepository.findOne(brand1.getId());
		//b.setName("brand11");
		//brandRepository.save(b);
		modelRepository.findOne(model1.getId()).getBrands().forEach(System.out::println);
		System.out.println("Find by Brand date");
		Page<Brand> brandsAll = brandRepository.findAll(new PageRequest(0, 10));
		Page<Brand> brandPage = brandRepository.findByNameContains("barnd", new PageRequest(0, 4));//.forEach(System.out::println);
		
		Date dateFrom = formatter.parse("11/10/17");
		Date dateTo = formatter.parse("12/10/17");
		Page<Brand> brandPageDateContain = brandRepository.findByNameContainsAndDateBetween("rn", dateTo.toInstant(), 
				dateFrom.toInstant(), new PageRequest(0, 4));
		
		Page<Brand> brandPageDate = brandRepository.findByNameAndDateBetween("barnd1", dateTo.toInstant(), 
				dateFrom.toInstant(), new PageRequest(0, 4));
		
		final Pageable pageableRequest = new PageRequest(0, 2);
		Query query = new Query(
				Criteria.where("name").regex("ba")
				.andOperator(
					Criteria.where("date").lte(dateTo),
					Criteria.where("date").gte(dateFrom)
				)
			);
		query.with(new Sort(Sort.Direction.ASC, "name"));
    	query.with(pageableRequest);
		List<Brand> brandPageDateQuery = mongoTemplate.find(query, Brand.class);
		
		brandPageDateQuery.forEach(System.out::println);
		System.out.println("All brands");
		brandsAll.getContent().forEach(System.out::println);
		//Query query = new Query();
		//query.addCriteria(Criteria.where("name").regex("^b"));
		
		/*Query query = new Query(
				Criteria.where("ip").is(ip)
				.andOperator(
					Criteria.where("createdDate").lt(endDate),
					Criteria.where("createdDate").gte(startDate)
				)
			);*/
		
		/*repository.deleteAll();

		// save a couple of customers
		repository.save(new Customer("Alice", "Smith"));
		repository.save(new Customer("Bob", "Smith"));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (Customer customer : repository.findAll()) {
			System.out.println(customer);
		}
		System.out.println();

		// fetch an individual customer
		System.out.println("Customer found with findByFirstName('Alice'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByFirstName("Alice"));

		System.out.println("Customers found with findByLastName('Smith'):");
		System.out.println("--------------------------------");
		for (Customer customer : repository.findByLastName("Smith")) {
			System.out.println(customer);
		}*/

	}

}

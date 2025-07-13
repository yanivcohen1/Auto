package yan.tests.maneg.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import yan.tests.maneg.domain.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {

    public Customer findByName(String name);
    public List<Customer> findByDescription(String description);

}

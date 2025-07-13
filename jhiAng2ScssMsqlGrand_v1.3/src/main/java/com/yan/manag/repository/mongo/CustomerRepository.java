package com.yan.manag.repository.mongo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.yan.manag.domain.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {

    public List<Customer> findByName(String name);
    public List<Customer> findByDescription(String description);

}

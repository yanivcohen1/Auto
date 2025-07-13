package com.yan.manag.repository.search;

import java.util.List;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.yan.manag.domain.Customer;

public interface CustomerSearchRepository extends ElasticsearchRepository<Customer, String> {

    public List<Customer> findByName(String name);
    public List<Customer> findByDescription(String description);

}

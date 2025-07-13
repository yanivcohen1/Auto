package com.yan.manag.repository.search;

import java.util.List;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.yan.manag.domain.Build;
import com.yan.manag.domain.Customer;

public interface BuildSearchRepository extends ElasticsearchRepository<Build, String> {

}

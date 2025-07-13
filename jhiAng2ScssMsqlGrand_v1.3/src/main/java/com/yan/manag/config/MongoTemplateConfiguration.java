package com.yan.manag.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.mongodb.core.*;
 
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.yan.manag.repository.mongo.CoreDBMarker;
 
@Configuration
@EnableMongoRepositories(basePackageClasses = CoreDBMarker.class, mongoTemplateRef = "primaryMongoTemplate")
public class MongoTemplateConfiguration  extends AbstractMongoConfiguration{
	
	@Value("${spring.data.mongodb.host}")
	private String mongoAddress; 
	
	@Value("${spring.data.mongodb.database}")
	private String mongoDatabase;
	
	@Value("${spring.data.mongodb.database2}")
	private String mongoDatabase2;
	
	@Value("${spring.data.mongodb.port}")
	private String mongoPort;
	
	@Override @Primary
	protected String getDatabaseName() {
		return mongoDatabase;
	}
 
	@Override
	public MongoClient mongo() throws Exception {
		return new MongoClient(mongoAddress + ":" + mongoPort);
	}
	
	@Bean 
	public MongoDbFactory mongoRestDbFactory() throws Exception { 
		return new SimpleMongoDbFactory(mongo(), mongoDatabase);
	}

	@Override
	public @Bean(name = "primaryMongoTemplate") MongoTemplate mongoTemplate() throws Exception{ //hay que cambiar el nombre de los templates para que el contendor de beans sepa la diferencia  
	    return new MongoTemplate(mongoRestDbFactory());    
	}
}
package com.yan.manag.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.DbRefResolver;
import org.springframework.data.mongodb.core.convert.DefaultDbRefResolver;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.mongodb.core.*;
 
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.yan.manag.repository.mongo.CoreDBMarker;
 
@Configuration
//@EnableMongoRepositories(basePackageClasses = GridFsDBMarker.class, mongoTemplateRef = "secondaryMongoTemplate")
public class MongoGridFsTemplate  extends AbstractMongoConfiguration{
	
	@Value("${spring.data.mongodb.host}")
	private String mongoAddress; 
	
	@Value("${spring.data.mongodb.database}")
	private String mongoDatabase;
	
	@Value("${spring.data.mongodb.database2}")
	private String mongoDatabase2;
	
	@Value("${spring.data.mongodb.port}")
	private String mongoPort;
	
	public @Bean(name = "secondaryGridFsTemplate") GridFsTemplate gridFsTemplate() throws Exception {
	    return new GridFsTemplate(this.mongoRestDbFactory(), this.mongoTemplate().getConverter());
	}
	
	@Override
	protected String getDatabaseName() {
		return mongoDatabase2;
	}
 
	@Override
	public MongoClient mongo() throws Exception {
		return new MongoClient(mongoAddress + ":" + mongoPort);
	}
	 
	public MongoDbFactory mongoRestDbFactory() throws Exception { 
		return new SimpleMongoDbFactory(mongo(), mongoDatabase2);
	}

	@Override
	public @Bean(name = "secondaryMongoTemplate") MongoTemplate mongoTemplate() throws Exception{ //hay que cambiar el nombre de los templates para que el contendor de beans sepa la diferencia  
	    return new MongoTemplate(this.mongoRestDbFactory());    
	}
}
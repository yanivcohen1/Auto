package com.yan.manag.service.util;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.limit;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.skip;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.sort;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.unwind;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.MetricFilterAutoConfiguration;
import org.springframework.boot.actuate.autoconfigure.MetricRepositoryAutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.mongodb.AggregationOptions;
import com.mongodb.BasicDBObject;
import com.mongodb.Cursor;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.gridfs.GridFSDBFile;
import com.mongodb.util.JSON;
import com.yan.manag.TestsManagerApp;
import com.yan.manag.config.ApplicationProperties;
import com.yan.manag.config.DefaultProfileUtil;
import com.yan.manag.domain.Suite;
import com.yan.manag.domain.Testss;
import com.yan.manag.files.util.StorageProperties;
import com.yan.manag.repository.mongo.SenarioRepository;
import com.yan.manag.repository.mongo.TestssRepository;
import com.yan.manag.repository.search.TestssSearchRepository;

@Component
public class MongoDbTest {

	private final GridFsTemplate secondaryGridFsTemplate;

	private final  MongoTemplate primaryMongoTemplate;
    
    public MongoDbTest(GridFsTemplate secondaryGridFsTemplate, MongoTemplate primaryMongoTemplate) {
        this.secondaryGridFsTemplate = secondaryGridFsTemplate;
        this.primaryMongoTemplate = primaryMongoTemplate;
    }
    
	public void test() throws IOException {
		writeImageToDB();  
	}
	
	public void writeImageToDB() throws IOException{
    	DBObject metaData = new BasicDBObject();
		metaData.put("organization", "JavaSampleApproach");
		
		/**
		 * 1. save an image file to MongoDB
		 */
		
		// Get input file
		InputStream iamgeStream = new FileInputStream("C:\\Git\\XBDD\\src\\main\\webapp\\templates\\docs\\image\\build-page-search.png");
		
		metaData.put("type", "image");
		
		// Store file to MongoDB
		String imageFileId = secondaryGridFsTemplate.store(iamgeStream, "jsa-logo.png", "image/png", metaData).getId().toString();
		System.out.println("ImageFileId = " + imageFileId);
		
		GridFSDBFile imageFile = secondaryGridFsTemplate.findOne(new org.springframework.data.mongodb.core.query.Query(Criteria.where("_id").is(imageFileId)));
		
		// Save file back to local disk
		imageFile.writeTo("C:\\Git\\XBDD\\src\\main\\webapp\\templates\\docs\\image\\build-page-search-copy.png");
		
		System.out.println("Image File Name:" + imageFile.getFilename());
    }
    
    public <T> Page<T> mongoAgregate(int pageNumber, int pageSize, String sortField, boolean sortAsd, T retType){
    	/*db.getCollection('testss').aggregate([ 
		{ "$unwind" : "$step"} ,
		{ "$match" : { "step.name" : { "$regex" : "step2"}}} ,
		{ "$group": {_id: '$_id', 'stepName': {$push: '$step.name'}, 'stepErrorMsg': {$push: '$step.errorMsg'},
		'name': {$push: '$name'}}},
		])*/
		//if inner array in array
		//{ "$unwind": "$parentArry" },
		//{ "$unwind" : "$parentArry.childArray"} ,
    	MongoTemplate primaryMongoTemplate1 = Common.getBean("primaryMongoTemplate");
		DBCollection collection = primaryMongoTemplate1.getCollection("testss");
		int orderASD = sortAsd ? 1 : -1 ;
		Cursor output = collection.aggregate(Arrays.asList(
				(DBObject) JSON.parse("{ '$unwind' : '$step'}"),
				(DBObject) JSON.parse("{ '$match' : { 'step.name' : { '$regex' : 'step2'}}}"),
				(DBObject) JSON.parse("{ '$group': {_id: '$_id', 'stepName': {$push: '$step.name'},"
						+ " 'stepErrorMsg': {$push: '$step.errorMsg'}, 'name': {$push: '$name'}, "
						+ "'count': {$sum: 1}}}"),
		        //(DBObject) new BasicDBObject("$sort", new BasicDBObject("views.date", 1)),
				(DBObject) new BasicDBObject("$skip", Long.valueOf(pageSize*pageNumber)),
				(DBObject) new BasicDBObject("$limit", pageSize),
				//(DBObject) new BasicDBObject("$count", "count_res"),
				(DBObject) new BasicDBObject("$sort", new BasicDBObject(sortField, orderASD))
		        //(DBObject) new BasicDBObject("$project", new BasicDBObject("name", 1) 
		                    //.append("step", "$step"))
		        ),
				AggregationOptions.builder()
				//To avoid the sort exceeded memory limit error, enable the allowDiskUse option
                .allowDiskUse(true)
                .build());

		System.out.println(output);
		//output.forEachRemaining(action);
		List<T> returnList = new ArrayList<T>();
		int total_size = 0;
		// Print for demo
		while ( output.hasNext() ) {
	        DBObject dbObject = output.next();
	        System.out.println(dbObject);
	        dbObject.get("step");
	        dbObject.get("_id");
	        total_size = Integer.valueOf(dbObject.get("count").toString());
	        dbObject.removeField("count");
	        T foo = (T) primaryMongoTemplate.getConverter().read(retType.getClass() , dbObject);  
		    returnList.add(foo);
	    }
		Direction direction = sortAsd ? Direction.ASC : Direction.DESC;
		PageRequest pageRequest = new PageRequest(pageNumber, pageSize, new Sort(direction, sortField));
		return new PageImpl<T>(returnList, pageRequest, total_size);
		//return returnList;
    }
    
    public <T> T mongoAggragate2(T typeIn, int pageNumber, int pageSize) {
    	/*db.getCollection('testss').aggregate(
	    { $unwind: '$step'},
	    { $match: {'step.name': {$regex: 'step'}}},
	    { $group: {_id: '$_id', step: {$push: '$step.name'}}})*/

		 TypedAggregation<Testss> aggregation = newAggregation(Testss.class, //
				unwind("step"), //
				match(Criteria.where("step.name").regex("step")),
				group("id").push("step.name").as("name"),
				skip(Long.valueOf(pageSize*pageNumber)),
				limit(pageSize),//
				sort(Direction.ASC, "name") //
		);
		System.out.println(aggregation);
		T aggregateRes = (T) primaryMongoTemplate.aggregate(aggregation, typeIn.getClass()).getUniqueMappedResult();
		//for list<Customer> use getMappedResults()
		return aggregateRes;
    }
    
    public Page<Testss> basicQuery(String _stringQuery, int pageNumber, int pageSize){
    	//return _id & name & step.name
		//mongoDB in embedded(not reference) save father update all children
		//or operation
		//db.getCollection('testss').find({$or: [{'step.name': {$in: [ '5', 'step']}}, {'step.name': {$regex: 'step'}}]})
    	BasicQuery textQuery = new BasicQuery("{$and: [{'step.name': {$regex: 'step1'}}, {'step.hidden': false}]}", "{_id: 1, name: -1, 'step.name': 1}");
    	BasicQuery textQuery2 = new BasicQuery(_stringQuery);
    	int totalElements = primaryMongoTemplate.find(textQuery, Testss.class).size();
    	//testssRepository.findAll(example, sort)
    	List<Testss> queryRes = primaryMongoTemplate.find(textQuery, Testss.class).subList(pageSize*pageNumber, pageSize*(pageNumber + 1));
		PageRequest pageRequest = new PageRequest(pageNumber, pageSize);
		return new PageImpl<Testss>(queryRes, pageRequest, totalElements);
    }
        /*return jdbcOperations.query(query2, (rs, rowNum) -> 
            { 
            	Suite suite = new Suite();
            	suite.setSuiteName(rs.getString("suite_name"));
            	suite.setJenkinsUrl(rs.getString("test_name"));
            	int count = rs.getInt("count(*)");
            	return suite;
            }
        );
    };*/
    
    public List<Testss> mongoSortByDate(int pageNumber, int pageSize) throws ParseException{
    	DateFormat formatter = new SimpleDateFormat("dd/MM/yy");
    	Date dateFrom = formatter.parse("11/10/17");
		Date dateTo = formatter.parse("12/10/17");
    	//final Pageable pageableRequest = new PageRequest(0, 2);
    	org.springframework.data.mongodb.core.query.Query query = new org.springframework.data.mongodb.core.query.Query(
		// Query query = new Query(
				Criteria.where("name").regex("ba")
				.andOperator(
					Criteria.where("date").lte(dateTo),
					Criteria.where("date").gte(dateFrom)
				)
			);
		query.with(new Sort(Sort.Direction.ASC, "name"));
    	query.with(new PageRequest(pageNumber, pageSize));
    	//int maxSize = primaryMongoTemplate.find(query, Testss.class).size();
		List<Testss> brandPageDateQuery = primaryMongoTemplate.find(query, Testss.class);
		return brandPageDateQuery;
    }
    
}
//mongodb-query-multiple-collections-at-once
// https://stackoverflow.com/questions/6502541/mongodb-query-multiple-collections-at-once
/* db.getCollection('doc1').aggregate([

  { $match: { _id: ObjectId("5901a4c63541b7d5d3293766")} },
  {
      $lookup:
      {
          from: "doc2",
          localField: "_id",
          foreignField: "userId",
          as: "address"
      }
  },
  {
      $unwind: "$address"
  },
  {
      $project: {
          __v: 0,
          "address.__v": 0,
          "address._id": 0,
          "address.userId": 0,
          "address.mob": 0
      }
  },
  {
      $lookup:
      {
          from: "doc3",
          localField: "_id",
          foreignField: "userId",
          as: "social"
      }
  },
  {
      $unwind: "$social"
  },

{   
  $project: {      
         __v: 0,      
         "social.__v": 0,      
         "social._id": 0,      
         "social.userId": 0
     }
},
{ $match: { $and : [{ _id: ObjectId("5901a4c63541b7d5d3293766")}, {'social.fbURLs': 'http://www.facebook.com'}]} }
])


The collection are as:

db.doc1.find().pretty();

{
  "_id" : ObjectId("5901a4c63541b7d5d3293766"),
  "firstName" : "shubham",
  "lastName" : "verma"
}
db.doc2.find().pretty();

{
  "_id" : ObjectId("5901a5f83541b7d5d3293768"),
  "userId" : ObjectId("5901a4c63541b7d5d3293766"),
  "address" : "Gurgaon",
  "mob" : "9876543211"
}
db.doc3.find().pretty();

{
  "_id" : ObjectId("5901b0f6d318b072ceea44fb"),
  "userId" : ObjectId("5901a4c63541b7d5d3293766"),
  "fbURLs" : "http://www.facebook.com",
  "twitterURLs" : "http://www.twitter.com"
}

Then Your result will be:

{
  "_id" : ObjectId("5901a4c63541b7d5d3293766"),
  "firstName" : "shubham",
  "lastName" : "verma",

  "address" : {
      "address" : "Gurgaon"
  },
  "social" : {
      "fbURLs" : "http://www.facebook.com",
      "twitterURLs" : "http://www.twitter.com"
  }
}
*/
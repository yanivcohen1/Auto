package com.yan.manag.service.util;

import static org.elasticsearch.index.query.QueryBuilders.matchQuery;
import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;
import static org.elasticsearch.index.query.QueryBuilders.termQuery;
import static org.elasticsearch.index.query.QueryBuilders.termsQuery;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.sort.SortBuilder;
import org.elasticsearch.search.sort.SortBuilders;
import org.elasticsearch.search.sort.SortOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yan.manag.TestsManagerApp;
import com.yan.manag.config.DefaultProfileUtil;
import com.yan.manag.domain.Step;
import com.yan.manag.domain.Testss;

@Component
public class ElasticSearchTest {

	private final ElasticsearchTemplate elasticsearchTemplate;
	
	public ElasticSearchTest(ElasticsearchTemplate elasticsearchTemplate) {
        this.elasticsearchTemplate = elasticsearchTemplate;
    }
	
	public void test() throws IOException {
		searchQueryElastic(0, 0, null, false);
	}
	
	public Page<Testss> searchQueryElastic(int pageNumber, int pageSize, String sortField, boolean sortAsd) {
    	/*QueryBuilder qb = queryStringQuery("Email OR @gmail.com @yahoo.com").defaultField("file");
    	// And the full example would be:

    	SearchRequestBuilder searchRequestBuilder = elasticsearchTemplate.getClient().prepareSearch()
    	 .setIndices("resume")
    	 .setTypes("docs").setQuery(qb)
    	 .setQuery(QueryBuilders.boolQuery().must(QueryBuilders.boolQuery()))
    	 .addHighlightedField("file");
    	SearchResponse response = searchRequestBuilder.execute().actionGet();
    	
    	Set<String> result = new HashSet<String>();
        for (SearchHit hit : response.getHits()) {
            Long id = hit.field("id").<Long>getValue();
            result.add(String.valueOf(id));
        }*/
    	SortBuilder sortBuilder = SortBuilders.fieldSort(sortField);
        sortBuilder.order(sortAsd ? SortOrder.ASC : SortOrder.DESC);
        
    	QueryBuilder stringQuery = queryStringQuery("Email OR @gmail.com @yahoo.com").defaultField("file");
    	QueryBuilder queryBuilder = QueryBuilders
    		    .boolQuery()
    		    .must(termQuery("component", 1))//and
    		    .should(matchQuery("userId", 1))//or
    		    .should(termsQuery("customerId", new int[]{1, 2}))//or
    		    .should(QueryBuilders.boolQuery().must(stringQuery).must(stringQuery));//or(and and)
    		    //.minimumShouldMatch("1"); // or .minimumNumberShouldMatch(1)   
		SearchQuery searchQuery = new NativeSearchQueryBuilder()
				.withQuery(queryBuilder)
				.withQuery(stringQuery)
				.withQuery(termQuery("message", "test"))
				.withSort(sortBuilder)
				//.withHighlightFields(new HighlightBuilder.Field("name").preTags("<em>").postTags("</em>").fragmentSize(250))
				//.withHighlightFields(new HighlightBuilder.Field("desc").preTags("<em>").postTags("</em>").fragmentSize(250))
				.withPageable(new PageRequest(pageNumber, pageSize))
				.build();
 			
		Page<Testss> testss = elasticsearchTemplate.queryForPage(searchQuery, Testss.class);
		System.out.println("Find count:" + testss.getTotalPages());
		return testss;
    }
    
    public <T> Page<T> searchQueryElastic2(String stringQuery, PageRequest pageRequest, T typeOut) throws JsonParseException, JsonMappingException, IOException {
    	//PageRequest _pageRequest = new PageRequest(pageNumber, pageSize, new Sort(Direction.ASC, "fieldToSort"));
    	int pageNumber = pageRequest.getPageNumber();
    	int pageSize = pageRequest.getPageSize();
    	Iterator<Order> order = pageRequest.getSort().iterator();
    	Order firstOrder = order.next();
    	String orderName = firstOrder.getProperty();
    	String scending = firstOrder.isAscending() ? "asc" : "desc";
    	String stringQuery2 = "{\"query\":{\"match_all\":{}}," +
    				"'sort' : {" + orderName +": { 'order': "+scending+"}" + "}}";
    	//"sort": { "date": { "order": "desc" }}
    	SearchRequestBuilder searchRequestBuilder = elasticsearchTemplate.getClient().prepareSearch()
    	    	 .setIndices("testss")
    	    	 .setTypes("testss")
    	    	 .setSource(stringQuery2);
    	    	 //.addHighlightedField("step");
    	SearchResponse response = searchRequestBuilder.setFrom(pageNumber*pageSize).setSize(pageSize).execute().actionGet();
		
    	long totalElements = response.getHits().getTotalHits();
    	ObjectMapper MAPPER = new ObjectMapper();
    	MAPPER.findAndRegisterModules();
    	System.out.println(response);
    	System.out.println("Find count:" + totalElements);
    	List<T> testsss = new ArrayList<T>();
        for (SearchHit hit : response.getHits().getHits()) {
        	Testss testss = new Testss();
        	String id = hit.getId();
            testss.setId(id);
            String name = hit.getSource().get("name").toString();
            testss.setName(name);
            List<Step> step = (List<Step>) hit.getSource().get("step");
            //Overall type converter
            T testss2 = (T) MAPPER.readValue(hit.sourceAsString(), typeOut.getClass());
            testsss.add(testss2);
        }
        //return testsss;
        //PageImpl<T>(elements, pageRequest, totalElements);
        //PageRequest _pageRequest = new PageRequest(pageNumber, pageSize, new Sort(Direction.ASC, "title"));
        return new PageImpl<T>(testsss, pageRequest, totalElements);
    }
    
} 
/*		GET /tweets/_search
		{
		  "query": {
		    "bool": {
		      "must": [
		        {
		          "terms": {
		            "user": {
		              "index": "users",
		              "type": "user",
		              "id": "2",
		              "path": "followers"
		            }
		          }
		        },
		        {
		          "term": {
		            "yan.keyword": "co 2"
		          }
		        },
		        {
		        "terms" : { "yan.keyword" : ["co", "co 2"]}
		        },
		        {
		          "match" : {
		            "yan" : "co*"
		        }
		        }
		      ]
		    }
		  }
		}*/



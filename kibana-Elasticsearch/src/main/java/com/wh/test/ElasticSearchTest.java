package com.wh.test;

import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.elasticsearch.action.admin.indices.create.CreateIndexRequestBuilder;
import org.elasticsearch.action.admin.indices.create.CreateIndexResponse;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequestBuilder;
import org.elasticsearch.action.admin.indices.exists.indices.IndicesExistsResponse;
import org.elasticsearch.action.admin.indices.mapping.put.PutMappingResponse;
import org.elasticsearch.action.get.GetRequestBuilder;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.index.IndexRequestBuilder;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
//import org.elasticsearch.common.inject.Injector;
//import org.elasticsearch.common.settings.ImmutableSettings;
//import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.xcontent.XContentBuilder;
//import org.elasticsearch.index.mapper.core.DateFieldMapper;
import org.elasticsearch.transport.client.PreBuiltTransportClient;

import com.google.gson.Gson;
//import org.apache.logging.log4j.core.*;

//get index mapping
//curl -XGET 'http://localhost:9200/shakespeare'

//./curl -XGET 'localhost:9200/logstash-2017.10.12/_count'

//delete index mapping
//curl -XDELETE 'http://localhost:9200/shakespeare/'

//read all indexs
//curl 'localhost:9200/_cat/indices?v'

//set index mapping
//curl -XPUT http://localhost:9200/logstash-2015.05.20 -d '
//{
//  "mappings": {
//    "log": {
//      "properties": {
//        "geo": {
//          "properties": {
//            "coordinates": {
//              "type": "geo_point"
//            }
//          }
//        }
//      }
//    }
//  }
//}
//';

//get all data for index logstash-2016.10.18
//curl -XGET 'http://localhost:9200/logstash-2016.10.18/_search?v'

//get match data for index logstash-2016.10.18 @timestamp=2016-10-18T00:26:18.384Z
/*curl -XGET 'http://localhost:9200/logstash-2016.10.18/_search?pretty=true&search_type=count' -d '{
"query": {
    "match": {
        "@timestamp" : "2016-10-18T00:26:18.384Z"
    }
}
}
'
*/
public class ElasticSearchTest {

    private static final String ID_NOT_FOUND = "<ID NOT FOUND>";

    //static Client client;
    //final static byte[] ipAddr = new byte[]{127, 0, 0, 1};//"{192, 168,33, 10}"; // Your ElasticSearch node ip goes here
    //final static byte[] ipAddr = new byte[]{192, 168, 72, 128};
    //final static String addr = "127.0.0.1";
    final static String addr = "127.0.0.1";//"192.168.72.128"; 127.0.0.1
    final static String indexName;//in url
    final static String documentType = "log";//document type log
    static TransportClient client = null;

    static{
    	 SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd");
         String date = sdf.format(new Date());
         System.out.println(date); //2015.05.18
         indexName = "logstash-" + date;
         getClient();
    }
    
    public static void getClient() {
    	//Client client = null;
		try {
			//Settings settings = Settings.builder()
			        //.put("cluster.name", "myClusterName").build();
			client = new PreBuiltTransportClient(Settings.EMPTY)
	        //.addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(addr), 9300))
	        .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(addr), 9300));
			
			
			//client = TransportClient..builder().build()
			    //.addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(addr), 9300));
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        //return client;
    }

    public static void main(final String[] args) throws IOException, InterruptedException {

    	String tweetID = UUID.randomUUID().toString();
		String userID = UUID.randomUUID().toString();
		Tweet tweet = new Tweet(tweetID, userID, "This is a message!", System.currentTimeMillis(), 1l);
		Twitter twitter = new Twitter(client);
		twitter.indexTweet(tweet);
		twitter.getTweet(tweetID);
        //final Client client = getClient();
        // Create Index and set settings and mappings
       

        //createMaping();
        
        // Add documents
        final IndexRequestBuilder indexRequestBuilder = client.prepareIndex(indexName, documentType);//, documentId);
        // build json object
        XContentBuilder contentBuilder = jsonBuilder().prettyPrint();
        contentBuilder
        .startObject()
	        .field("@timestamp", new Date())
	        .field("suite", "bau")
	        .field("test", "login")
	        .field("pass", true)
	        .field("error_msg", "")
        .endObject();
		System.out.println(contentBuilder.string());
        indexRequestBuilder.setSource(contentBuilder);
        IndexResponse response = indexRequestBuilder.execute().actionGet();
        String id = response.getId().toString();
        String index = response.getIndex();
        
        //delete
        client.prepareDelete(indexName, documentType, id).execute().actionGet().getId();
        // build json object2
        contentBuilder = jsonBuilder().prettyPrint();
        contentBuilder
        .startObject()
	        .field("@timestamp", new Date())
	        .field("suite", "bau2")
	        .field("test", "login")
	        .field("pass", false)
	        .field("error_msg", "error login")
        .endObject();
        System.out.println(contentBuilder.string());
        indexRequestBuilder.setSource(contentBuilder);
        indexRequestBuilder.execute().actionGet();
        
        client.close();
        // Get document
        //System.out.println(getValue(client, indexName, documentType, documentId, fieldName));

        /*int idx = 0;
        while (true) {
            Thread.sleep(10000L);
            idx++;
            System.out.println(idx * 10 + " seconds passed");
            final String name = getValue(client, indexName, documentType, documentId, fieldName);
            if (ID_NOT_FOUND.equals(name)) {
                break;
            } else {
                // Try again
                System.out.println(name);
            }
        }
        System.out.println("Document was garbage collected");*/
    }

    private static void clearIndexes(List<String> indices) {
    	client
				.admin()
				//.cluster().prepareDeletePipeline(indices.get(0)).execute()
				.indices()
				.delete(new DeleteIndexRequest(indices.toArray(new String[0])))//(String[]) indices.toArray()))
				.actionGet();
    }
    
    public IndexResponse indexTweet(Tweet tweet) {
        // Tweet to Json
    	Gson  mapper = new Gson();
        String json = mapper.toJson(tweet, Tweet.class);
    		
        // Prepare the Sharding info
        String id = tweet.getId(); // can be null
    		
        // Prepare for the Indexation
        IndexRequestBuilder indexRequestBuilder = client.prepareIndex(indexName, documentType, id);

        // Perform the Indexation
        return indexRequestBuilder.setSource(json).execute().actionGet();
    }
    
    private static void createMaping() throws IOException {
        final IndicesExistsResponse res = client.admin().indices().prepareExists(indexName).execute().actionGet();
        if (res.isExists()) {
            //final DeleteIndexRequestBuilder delIdx = client.admin().indices().prepareDelete(indexName);
            //delIdx.execute().actionGet();
        }else{

	        final CreateIndexRequestBuilder createIndexRequestBuilder = client.admin().indices().prepareCreate(indexName);
	
	        // MAPPING GOES HERE
	
	        XContentBuilder mapping = jsonBuilder()
	                .startObject()
	                	.startObject("log")
	                        .startObject("properties")
				                .startObject("@timestamp")
				                  .field("type", "date")
				                  //.field("index", "not_analyzed")
				               .endObject()
				               .startObject("suite")
				                  .field("type", "string")
//				                  //.field("index", "not_analyzed")
				               .endObject()  
//				               .startObject("result")
//				                  .field("type", "boolean")
//				               .endObject()
				            .endObject()
				        .endObject()
	                .endObject();
	        System.out.println(mapping.string());
	        
	        createIndexRequestBuilder.addMapping(documentType, mapping);
	        /*{
	        	  "mappings": {
	        	    "log": {
	        	      "properties": {
	    						"suite" : {"type": "string", "index" : "not_analyzed" },
	        	              	"test" : {"type": "string", "index" : "not_analyzed" },
	        	              	"result" : {"type": "boolean" }
	        	            		}
	        	          }
	        	   }
	        }*/
	        // MAPPING DONE
	        createIndexRequestBuilder.execute().actionGet();
        }
		
	}

//	protected static String getValue(final Client client, final String indexName, final String documentType,
//            final String documentId, final String fieldName) {
//        final GetRequestBuilder getRequestBuilder = client.prepareGet(indexName, documentType, documentId);
//        getRequestBuilder.setFields(new String[] { fieldName });
//        final GetResponse response2 = getRequestBuilder.execute().actionGet();
//        if (response2.isExists()) {
//            final String name = response2.getField(fieldName).getValue().toString();
//            return name;
//        } else {
//            return ID_NOT_FOUND;
//        }
//    }

}

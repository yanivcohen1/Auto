package com.wh.test;

import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.elasticsearch.action.admin.indices.create.CreateIndexRequestBuilder;
import org.elasticsearch.action.admin.indices.create.CreateIndexResponse;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequestBuilder;
import org.elasticsearch.action.admin.indices.exists.indices.IndicesExistsResponse;
import org.elasticsearch.action.admin.indices.mapping.put.PutMappingResponse;
import org.elasticsearch.action.get.GetRequestBuilder;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.index.IndexRequestBuilder;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
//import org.elasticsearch.common.inject.Injector;
//import org.elasticsearch.common.settings.ImmutableSettings;
//import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.index.mapper.core.DateFieldMapper;

//get index mapping
//curl -XGET 'http://localhost:9200/shakespeare'

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
    final static String ipAddr = "192.168.99.100" ;
    static String indexName = "";//in url
    final static String documentType = "log";//document type log
    static Client client;

    public static Client getClient() throws UnknownHostException {
    	client = TransportClient.builder().build()
            .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(ipAddr), 9300));
        return client;
    }

    public static void main(final String[] args) throws IOException, InterruptedException {

        final Client client = getClient();
        // Create Index and set settings and mappings
        //final String indexName = "test";
        //final String documentType = "index";
        final String documentId = null;
        final String fieldName = "@timestamp";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd");
        String date = sdf.format(new Date());
        System.out.println(date); //2015.05.18
        indexName = "logstash-" + date;

        //createMaping();
        
        // Add documents
        final IndexRequestBuilder indexRequestBuilder = client.prepareIndex(indexName, documentType);//, documentId);
        // build json object
        XContentBuilder contentBuilder = jsonBuilder().startObject().prettyPrint();
        contentBuilder
        .field("@timestamp", new Date())
        .field("suite", "bau")
        .field("test", "login")
        .field("pass", true)
        .field("error_msg", "");
        System.out.println(contentBuilder.string());
        indexRequestBuilder.setSource(contentBuilder);
        indexRequestBuilder.execute().actionGet();

        // build json object2
        contentBuilder = jsonBuilder().startObject().prettyPrint();
        contentBuilder
        .field("@timestamp", new Date())
        .field("suite", "bau")
        .field("test", "login")
        .field("pass", false)
        .field("error_msg", "error login");
        System.out.println(contentBuilder.string());
        indexRequestBuilder.setSource(contentBuilder);
        indexRequestBuilder.execute().actionGet();
        
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
				                .startObject("suite")
				                  .field("type", "string")
				                  //.field("index", "not_analyzed")
				               .endObject()
				               .startObject("test")
				                  .field("type", "string")
				                  //.field("index", "not_analyzed")
				               .endObject()  
				               .startObject("result")
				                  .field("type", "boolean")
				               .endObject()
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

	protected static String getValue(final Client client, final String indexName, final String documentType,
            final String documentId, final String fieldName) {
        final GetRequestBuilder getRequestBuilder = client.prepareGet(indexName, documentType, documentId);
        getRequestBuilder.setFields(new String[] { fieldName });
        final GetResponse response2 = getRequestBuilder.execute().actionGet();
        if (response2.isExists()) {
            final String name = response2.getField(fieldName).getValue().toString();
            return name;
        } else {
            return ID_NOT_FOUND;
        }
    }

}

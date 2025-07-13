package be.heydari.elastic.nativeapi;


import com.google.gson.Gson;
import org.elasticsearch.action.get.GetRequest;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.index.IndexRequestBuilder;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.collect.Lists;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;


import java.util.ArrayList;
import java.util.List;

public class Twitter {
	private final static String INDEX_NAME = "twitter";
	private final static String TYPE = "tweet";
	
	private Gson mapper;
	private Client client;
	
	public Twitter(Client client){
		this.mapper = new Gson();
		this.client = client;
	}
	
	
	public IndexResponse indexTweet(Tweet tweet) {
		// Tweet to Json
		String json = mapper.toJson(tweet, Tweet.class);
		
		// Prepare the Sharding info
		String id = tweet.getId(); // can be null
		
		// Prepare for the Indexation
		IndexRequestBuilder indexRequestBuilder = client.prepareIndex(INDEX_NAME, TYPE, id);

		// Perform the Indexation
		return indexRequestBuilder.setSource(json).execute().actionGet();
	}

	public void indexTweets(Tweet... tweet) {
		for(Tweet t : tweet) {
			indexTweet(t);
		}
	}
	
	public Tweet getTweet(String id) {
		// Request
		GetRequest gr = new GetRequest(INDEX_NAME, TYPE, id);
		GetResponse response = client.get(gr).actionGet();
		
		// Response
		if (response.isExists()) {
			String json = response.getSourceAsString();
			return mapper.fromJson(json, Tweet.class);
		} else {
			return null;
		}
	}

	
	public List<Tweet> searchTweetsBy(String searchKey) {
		SearchResponse response = client.prepareSearch(INDEX_NAME)
				.setTypes(TYPE)
				.setSearchType(SearchType.DEFAULT)
				//.setQuery(QueryBuilders.fuzzyQuery("message", searchKey).maxExpansions(10))
				//.setQuery(QueryBuilders.queryStringQuery("*"+ searchKey + "*").field("message"))
				.setQuery(QueryBuilders.termQuery("message", searchKey))
				.setFrom(0).setSize(60).setExplain(true)
				.execute()
				.actionGet();
		SearchHits hits = response.getHits();
		
		// hits
		ArrayList<Tweet> results = Lists.newArrayList();
		if (hits.getTotalHits() == 0) {
			return results;
		}
		
		for (SearchHit sh : hits.getHits()) {
			results.add(mapper.fromJson(sh.getSourceAsString(), Tweet.class));
		}
		return results;
	}
}

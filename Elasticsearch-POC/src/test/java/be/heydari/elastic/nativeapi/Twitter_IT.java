package be.heydari.elastic.nativeapi;


import com.google.gson.Gson;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public class Twitter_IT extends TwitterIntegration {

	@After
	public void _cleanup() {
		cleanup();
	}
	
	@Test
	public void indexTweet() {
		Tweet tweet = Mocks.tweet("1");
		IndexResponse response = twitter.indexTweet(tweet);

		assertNotNull(response);
		assertNotNull(response.getId());
		assertNotNull(response.getIndex());
		assertNotNull(response.getType());
		assertNotNull(response.getVersion());
	}

	@Test
	public void fetchTweet() {
		Tweet tweet = Mocks.tweet("2");
		
		// index using native api
		IndexRequest request = new IndexRequest("twitter", "tweet", tweet.getId());
		request.source(new Gson().toJson(tweet));
		esClient().index(request).actionGet();

		Tweet fetchedTweet = twitter.getTweet(tweet.getId());
		
		assertNotNull(fetchedTweet);
		assertEquals(tweet, fetchedTweet);
	}
	
	
	@Test
	public void searchTweets() throws InterruptedException {
		Tweet t1 = new Tweet(UUID.randomUUID().toString(), "1", "Hey!", Instant.now());
		Tweet t2 = new Tweet(UUID.randomUUID().toString(), "1", "There is a dog here!", Instant.now());
		Tweet t3 = new Tweet(UUID.randomUUID().toString(), "2", "This dog is aggressive.", Instant.now());
		Tweet t4 = new Tweet(UUID.randomUUID().toString(), "2", "Hey! What's up?", Instant.now());
		Tweet t5 = new Tweet(UUID.randomUUID().toString(), "2", "That's a dog.", Instant.now());

		twitter.indexTweets(t1,t2,t3,t4,t5);
		
		Thread.sleep(5000l);
		List<Tweet> result4 = twitter.searchTweetsBy("dog");

		assertEquals(3, result4.size());
	}
	
	public static class Mocks {
		public static Tweet tweet() {
			return  new Tweet(
					"1",
					"2",
					"My name is Heisenberg",
					Instant.now()
			);
		}

		public static Tweet tweet(String id) {
			return  new Tweet(
					id,
					"2",
					"My name is Heisenberg",
					Instant.now()
			);
		}
	}
}

package be.heydari.elastic.spring.twitter;

import org.junit.Before;
import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.query.GetQuery;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.UUID;

/**
 * Created by Emad Heydari Beni
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:/context.xml")
public class TweetRepositoryTest {

	@Resource
	public TweetRepository repository;
	
	@Resource
	public ElasticsearchTemplate elasticsearchTemplate;

	@Before
	public void cleanup(){
		repository.deleteAll();
	}
	
	@Test
	public void testBean() {
		assertNotNull(repository);
		assertNotNull(elasticsearchTemplate);
	}

	@Test
	public void index() {
		String tweetID = UUID.randomUUID().toString();
		String userID = UUID.randomUUID().toString();
		Tweet tweet = new Tweet(tweetID, userID, "This is a message!", System.currentTimeMillis(), 1l);

		Tweet save = repository.save(tweet);

		GetQuery getQuery = new GetQuery();
		getQuery.setId(tweetID);
		Tweet indexedTweet = elasticsearchTemplate.queryForObject(getQuery, Tweet.class);
	}
	

	@Test
	public void findById() throws InterruptedException {
		Tweet t1 = Tweets.newInstance("This is a dog!");
		Tweet t2 = Tweets.newInstance("This is a cat!");

		repository.save(t1);
		repository.save(t2);

		Thread.sleep(3000l);
		
		Page<Tweet> tweets = repository.findById(t2.getId(), new PageRequest(0, 10));

		assertNotNull(tweets);
		assertEquals(1, tweets.getContent().size());
		assertEquals(t2, tweets.getContent().get(0));
	}

	@Test
	public void findByMessageLike() throws InterruptedException {
		Tweet t1 = Tweets.newInstance("This is a dog!");
		Tweet t2 = Tweets.newInstance("This is a cat!");
		Tweet t3 = Tweets.newInstance("Dog is a kind animal!");

		repository.save(t1);
		repository.save(t2);
		repository.save(t3);

		Thread.sleep(3000l);

		Page<Tweet> tweets = repository.findByMessageLike("dog", new PageRequest(0, 10));

		assertNotNull(tweets);
		assertEquals(2, tweets.getContent().size());
	}
	
	
	public static class Tweets {
		
		public static Tweet newInstance(String message) {
			return new Tweet(
					UUID.randomUUID().toString(),
					UUID.randomUUID().toString(),
					message, 
					System.currentTimeMillis(), 1l
			);
		}
	}
}

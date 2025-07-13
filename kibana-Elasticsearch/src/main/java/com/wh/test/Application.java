/*package com.wh.test;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.query.GetQuery;

@SpringBootApplication
public class Application implements CommandLineRunner {

	@Autowired
	private TweetRepository tweetRepository;
	
	@Autowired
	public ElasticsearchTemplate elasticsearchTemplate;
	
	  
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		String tweetID = UUID.randomUUID().toString();
		String userID = UUID.randomUUID().toString();
		Tweet tweet = new Tweet(tweetID, userID, "This is a message!", System.currentTimeMillis(), 1l);

		Tweet save = tweetRepository.save(tweet);

		GetQuery getQuery = new GetQuery();
		getQuery.setId(tweetID);
		Tweet indexedTweet = elasticsearchTemplate.queryForObject(getQuery, Tweet.class);

		tweetRepository.delete(indexedTweet);
	}

}
*/
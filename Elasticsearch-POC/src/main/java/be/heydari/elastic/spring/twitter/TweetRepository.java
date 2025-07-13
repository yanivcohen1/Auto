package be.heydari.elastic.spring.twitter;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Created by Emad Heydari Beni
 */
public interface TweetRepository extends ElasticsearchRepository<Tweet, String> {
	Page<Tweet> findByMessageLike(String message, Pageable pageable);
	Page<Tweet> findById(String id, Pageable pageable);
}

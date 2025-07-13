package be.heydari.elastic.spring.users.users;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface UserRepository extends ElasticsearchRepository<User, String> {
	Page<User> findByUsername(String username, Pageable pageable);
	Page<User> findByUsernameContaining(String username, Pageable pageable);
}

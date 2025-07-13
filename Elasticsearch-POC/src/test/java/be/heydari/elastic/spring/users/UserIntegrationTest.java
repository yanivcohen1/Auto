package be.heydari.elastic.spring.users;

import be.heydari.elastic.spring.users.users.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
@Configuration
@EnableAutoConfiguration
@SpringApplicationConfiguration(classes = UserApplication.class)
public class UserIntegrationTest {

	@Resource
	public UserRepository repository;

	@Resource
	public ElasticsearchTemplate elasticsearchTemplate;

	@Before
	public void cleanup() {
		repository.deleteAll();
	}

	@Test
	public void testBean() {
		assertNotNull(repository);
		assertNotNull(elasticsearchTemplate);
	}
}

package be.heydari.elastic.spring.users.users;

import be.heydari.elastic.spring.users.UserIntegrationTest;
import org.junit.Test;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.query.GetQuery;

import java.util.UUID;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by Emad Heydari Beni
 */

public class UsersRepositoryTest extends UserIntegrationTest {

	@Test
	public void index() {
		String username = UUID.randomUUID().toString();
		User user = new User(username, 1l);
		User save = repository.save(user);

		GetQuery getQuery = new GetQuery();
		getQuery.setId(username);
		User indexedUser = elasticsearchTemplate.queryForObject(getQuery, User.class);
	}

	@Test
	public void findByUsernameShiva() throws InterruptedException {
		User u1 = Users.build("Kasia");

		Thread.sleep(3000l);

		Page<User> users = repository.findByUsername(u1.getUsername(), new PageRequest(0, 10));

		assertNotNull(users);
		assertEquals(1, users.getContent().size());
	}


	@Test
	public void findByUsername() throws InterruptedException {
		User u1 = Users.build("emad7105");
		User u2 = Users.build("katarzynakochanowska");

		repository.save(u1);
		repository.save(u2);

		Thread.sleep(3000l);

		Page<User> users = repository.findByUsername(u2.getUsername(), new PageRequest(0, 10));

		assertNotNull(users);
		assertEquals(1, users.getContent().size());
		assertEquals(u2, users.getContent().get(0));
	}

	@Test
	public void findByUsernameLike() throws InterruptedException {
		User u1 = Users.build("emad7105");
		User u2 = Users.build("emadHeydariBeni");
		User u3 = Users.build("emadTehran");
		User u4 = Users.build("emadDiego");
		User u5 = Users.build("emadLeuven");
		User u6 = Users.build("katarzynakochanowska");
		User u7 = Users.build("theBestEmad");
		User u8 = Users.build("EmADWithUpperCases");
		User u9 = Users.build("emaXd");

		repository.save(u1);
		repository.save(u2);
		repository.save(u3);
		repository.save(u4);
		repository.save(u5);
		repository.save(u6);
		repository.save(u7);
		repository.save(u8);
		repository.save(u9);

		Thread.sleep(3000l);

		Page<User> usersPage1 = repository.findByUsernameContaining("emad", new PageRequest(0, 3));
		Page<User> usersPage2 = repository.findByUsernameContaining("emad", new PageRequest(1, 3));
		Page<User> usersPage3 = repository.findByUsernameContaining("emad", new PageRequest(2, 3));

		assertNotNull(usersPage1);
		assertNotNull(usersPage2);
		assertNotNull(usersPage3);
		assertEquals(3, usersPage1.getContent().size());
		assertEquals(3, usersPage2.getContent().size());
		assertEquals(1, usersPage3.getContent().size());
	}

	public static class Users {

		public static User build(String username) {
			return new User(username, 1l);
		}
	}
}

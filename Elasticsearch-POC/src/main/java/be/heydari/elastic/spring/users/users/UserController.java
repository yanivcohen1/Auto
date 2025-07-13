package be.heydari.elastic.spring.users.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/rest/users")
@RestController
public class UserController {

	public UserRepository userRepository;

	@Autowired
	public UserController(UserRepository repository) {
		this.userRepository = repository;
	}

	@RequestMapping(value = "/{username}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> saveUser(@PathVariable String username) {
		User u = userRepository.save(new User(username));
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}

	@RequestMapping(value = "/{username}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getUser(@PathVariable String username) {
		User u = userRepository.findOne(username);
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}
}

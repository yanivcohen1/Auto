package com.who.security.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.who.security.dao.newsentry.NewsEntryDao;
import com.who.security.dao.user.UserDao;
import com.who.security.entity.NewsEntry;
import com.who.security.entity.User;


/**
 * Initialize the database with some test entries.
 * 
 * @author Philip W. Sorst <philip@sorst.net>
 */
public class DataBaseInitializer
{

	private NewsEntryDao newsEntryDao;

	private UserDao userDao;

	private PasswordEncoder passwordEncoder;
	
	private String users;


	protected DataBaseInitializer()
	{
		/* Default constructor for reflection instantiation */
	}


	public DataBaseInitializer(UserDao userDao, NewsEntryDao newsEntryDao, PasswordEncoder passwordEncoder, String users)
	{
		this.userDao = userDao;
		this.newsEntryDao = newsEntryDao;
		this.passwordEncoder = passwordEncoder;
		this.users = users;
	}


	public void initDataBase()
	{
		try {
			List<String> usersData = new ArrayList<String>(Arrays.asList(users.split(";")));
			for (String _userData : usersData) {
				List<String> userData = new ArrayList<String>(Arrays.asList(_userData.split(",")));
				if (this.userDao.findByName(userData.get(1).trim()) == null) {
					User userUser = new User(userData.get(1).trim(),
							this.passwordEncoder.encode(userData.get(2).trim()));
					userUser.addRole("user");
					if (userData.get(0).contains("admin")) {
						userUser.addRole("admin");
					}
					this.userDao.save(userUser);
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
		}
		/*User userUser = new User("user", this.passwordEncoder.encode("user"));
		userUser.addRole("user");
		this.userDao.save(userUser);

		User adminUser = new User("yaniv", this.passwordEncoder.encode("yanivc"));
		adminUser.addRole("user");
		adminUser.addRole("admin");
		this.userDao.save(adminUser);*/

		long timestamp = System.currentTimeMillis() - 1000 * 60 * 60 * 24;
		for (int i = 0; i < 10; i++) {
			NewsEntry newsEntry = new NewsEntry();
			newsEntry.setContent("This is example content " + i);
			newsEntry.setDate(new Date(timestamp));
			this.newsEntryDao.save(newsEntry);
			timestamp += 1000 * 60 * 60;
		}
	}

}
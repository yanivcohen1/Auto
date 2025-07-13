package com.yan.manag.service.util;

import java.io.IOException;
import java.util.Iterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.yan.manag.TestsManagerApp;
import com.yan.manag.config.DefaultProfileUtil;
import com.yan.manag.domain.Suite;

@Component
public class MySqlTest {

    private final JdbcTemplate JdbcTemplate;
	
	public MySqlTest(JdbcTemplate JdbcTemplate) {
        this.JdbcTemplate = JdbcTemplate;
    }
	
	public void test() throws IOException {
        //findSuiteNativeMysql(null, null);
	}
	
	public Page<Suite> findSuiteNativeMysql(String string, PageRequest pageRequest){
    	int pageNumber = pageRequest.getPageNumber();
    	int pageSize = pageRequest.getPageSize();
    	Iterator<Order> order = pageRequest.getSort().iterator();
    	Order firstOrder = order.next();
    	String orderName = firstOrder.getProperty();
    	String ascending = firstOrder.isAscending() ? "ASC" : "DESC";
    	String query = "SELECT * FROM tests  WHERE `tests`.`test_name` = " + string;
        String query2 = "SELECT `suite`.`suite_name`, `tests`.`test_name` " + //, count(*)
        				"FROM `suite` LEFT JOIN `tests` ON `suite`.`id` = `tests`.`suite_id` " +
        				"LIMIT "+(pageNumber*pageSize)+"," + pageSize+
        				"ORDER BY "+ orderName +","+ ascending + ";"; // # Retrieve rows 6-15";
        //let's pretend that Country has constructor Conutry(String name, int age)
        //PageRequest _pageRequest = new PageRequest(pageNumber, pageSize, new Sort(Direction.ASC, "fieldToSort", "field2ToSort"));
        return new JdbcPage<Suite>(
        		pageRequest,
    			(int) pageNumber,
    			(int) pageNumber*pageSize,
    			JdbcTemplate.queryForList(query2, Suite.class)
    	);
    }
}

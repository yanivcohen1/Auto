package be.heydari.elastic.spring.users.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;


import static org.elasticsearch.node.NodeBuilder.nodeBuilder;


@Configuration
@EnableElasticsearchRepositories(basePackages = "org/springframework/data/elasticsearch/repositories")
public class ElasticsearchConfiguration {
	
	@Bean
	public ElasticsearchOperations elasticsearchTemplate() {
		return new ElasticsearchTemplate(nodeBuilder().local(true).node().client());
	}
}

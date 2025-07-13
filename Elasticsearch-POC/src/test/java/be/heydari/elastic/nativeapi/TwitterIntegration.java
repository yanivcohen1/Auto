package be.heydari.elastic.nativeapi;


import be.heydari.elastic.nativeapi.server.EmbeddedElasticServer;
import org.elasticsearch.client.Client;

import java.util.Arrays;
import java.util.List;

public class TwitterIntegration {
	private static List<String> indices = Arrays.asList("twitter");
	private static EmbeddedElasticServer embeddedESServer;
	
	protected Twitter twitter;
	
	public TwitterIntegration() {
		embeddedESServer = EmbeddedElasticServer.getInstance();
		twitter = new Twitter(esClient());
	}
	
	public Client esClient() {
		return embeddedESServer.getClient();
	}
	
	public void cleanup() {
		embeddedESServer.cleanup(indices);
	}
}

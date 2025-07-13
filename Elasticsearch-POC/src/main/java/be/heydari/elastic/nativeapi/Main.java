package be.heydari.elastic.nativeapi;

import be.heydari.elastic.nativeapi.Twitter;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.node.Node;

import java.time.Instant;

import static org.elasticsearch.node.NodeBuilder.*;

public class Main {

	public static void main(String[] args) {

		// on startup
		System.out.println("Starting up ...");
		
		Node node = nodeBuilder().node();
		Client client = node.client();

		// on shutdown
		System.out.println("Shutting down ...");
		node.close();
	}

}

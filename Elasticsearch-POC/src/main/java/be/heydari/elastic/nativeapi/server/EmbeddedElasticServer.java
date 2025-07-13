package be.heydari.elastic.nativeapi.server;


import org.apache.commons.io.FileUtils;
import org.elasticsearch.action.admin.indices.cache.clear.ClearIndicesCacheRequest;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.settings.ImmutableSettings;
import org.elasticsearch.node.Node;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.locks.ReentrantLock;

import static org.elasticsearch.node.NodeBuilder.*;

public class EmbeddedElasticServer {
	private static final String DEFAULT_DATA_DIRECTORY = "target/elastic-data";
	private static EmbeddedElasticServer embeddedESServer;

	private final Node node;
	private final String dataDirectory;

	public static EmbeddedElasticServer getInstance() {
		if (embeddedESServer == null) {
			ReentrantLock lock = new ReentrantLock();
			lock.lock();
			try {
				if (embeddedESServer == null) {
					embeddedESServer = new EmbeddedElasticServer();
				}
			} finally {
				lock.unlock();
			}
		}
		return embeddedESServer;
	}

	private EmbeddedElasticServer() {
		this(DEFAULT_DATA_DIRECTORY);
	}

	private EmbeddedElasticServer(String dataDirectory) {
		this.dataDirectory = dataDirectory;

		ImmutableSettings.Builder elasticSettings = ImmutableSettings.settingsBuilder()
				.put("http.enabled", "false")
				.put("path.data", dataDirectory);

		node = nodeBuilder()
				.local(true)
				.settings(elasticSettings.build())
				.node();
	}

	public Client getClient() {
		return node.client();
	}

	public void shutdown() {
		node.close();
		cleanup();
	}

	public void cleanup(String... indices) {
		cleanup(Arrays.asList(indices));
	}

	public void cleanup(List<String> indices) {
		try {
			FileUtils.deleteDirectory(new File(dataDirectory));
			clearCache(indices);
			clearIndexes(indices);
		} catch (IOException e) {
			throw new RuntimeException("Could not delete data directory of embedded elastic server", e);
		}
	}

	private void clearIndexes(List<String> indices) {
		getClient()
				.admin()
				.indices()
				.delete(new DeleteIndexRequest((String[]) indices.toArray()))
				.actionGet();
	}

	public void clearCache(List<String> indices) {
		getClient()
				.admin()
				.indices()
				.clearCache(new ClearIndicesCacheRequest((String[]) indices.toArray()))
				.actionGet();
	}
}

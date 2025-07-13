package be.heydari.elastic.spring.twitter;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Version;
import org.springframework.data.elasticsearch.annotations.Document;


@Document(indexName = "tweets", type = "tweet", shards = 1, replicas = 0, indexStoreType = "memory")
public class Tweet {
	@Id
	public String id;
	public String userId;
	public String message;
	public Long timestamp;
	@Version
	private Long version;

	public Tweet(String id, String userId, String message, Long timestamp, Long version) {
		this.id = id;
		this.userId = userId;
		this.message = message;
		this.timestamp = timestamp;
		this.version = version;
	}

	public Tweet() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}


	public Long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Long timestamp) {
		this.timestamp = timestamp;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}


	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Tweet tweet = (Tweet) o;

		if (id != null ? !id.equals(tweet.id) : tweet.id != null) return false;
		if (message != null ? !message.equals(tweet.message) : tweet.message != null) return false;
		if (timestamp != null ? !timestamp.equals(tweet.timestamp) : tweet.timestamp != null) return false;
		if (userId != null ? !userId.equals(tweet.userId) : tweet.userId != null) return false;
		if (version != null ? !version.equals(tweet.version) : tweet.version != null) return false;

		return true;
	}

	@Override
	public int hashCode() {
		int result = id != null ? id.hashCode() : 0;
		result = 31 * result + (userId != null ? userId.hashCode() : 0);
		result = 31 * result + (message != null ? message.hashCode() : 0);
		result = 31 * result + (timestamp != null ? timestamp.hashCode() : 0);
		result = 31 * result + (version != null ? version.hashCode() : 0);
		return result;
	}
}

package be.heydari.elastic.nativeapi;

import java.time.Instant;

public class Tweet {
	
	public String id;
	public String userId;
	public String message;
	public Instant timestamp;

	public Tweet(String id, String userId, String message, Instant timestamp) {
		this.id = id;
		this.userId = userId;
		this.message = message;
		this.timestamp = timestamp;
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

	public Instant getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Instant timestamp) {
		this.timestamp = timestamp;
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

		return true;
	}

	@Override
	public int hashCode() {
		int result = id != null ? id.hashCode() : 0;
		result = 31 * result + (userId != null ? userId.hashCode() : 0);
		result = 31 * result + (message != null ? message.hashCode() : 0);
		result = 31 * result + (timestamp != null ? timestamp.hashCode() : 0);
		return result;
	}
}

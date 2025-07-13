/**
 * Copyright (C) 2015 Orion Health (Orchestral Development Ltd)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package xbdd.webapp.resource.feature;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.BeanParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import xbdd.webapp.factory.MongoDBAccessor;
import xbdd.webapp.util.Coordinates;

import com.mongodb.BasicDBList;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;

@Path("/rest/search")
public class Search {

	private final MongoDBAccessor client;
	public final static int SEARCH_LIMIT = 50;

	@Inject
	public Search(final MongoDBAccessor client) {
		this.client = client;
	}

	@GET
	@Path("/{product}/{major}.{minor}.{servicePack}/{build}")
	@Produces("application/json")
	public BasicDBList getSearchResults(@BeanParam final Coordinates coordinates, @QueryParam("keywords") final String keyword) {
		final String[] searchCategories = { "name", "description", "tags.name", "elements.name", "elements.description",
				"elements.steps.name", "elements.tags.name" };
		final List<String> searchWords = Arrays.asList(keyword.split("\\s+"));
		final DB db = this.client.getDB("bdd");
		final DBCollection collection = db.getCollection("features");
		final List<DBObject> searchResults = new ArrayList<DBObject>();

		final QueryBuilder queryBuilder = QueryBuilder.getInstance();
		final DBCursor results = collection.find(queryBuilder.getSearchQuery(searchWords, coordinates, searchCategories));

		while (results.hasNext()) {
			final DBObject doc = results.next();
			searchResults.add(doc);
		}

		Collections.sort(searchResults, new DBObjectComparator(searchWords));

		while (searchResults.size() > SEARCH_LIMIT) {
			searchResults.remove(searchResults.size() - 1);
		}

		final BasicDBList basicDBList = new BasicDBList();
		basicDBList.addAll(searchResults);
		return basicDBList;
	}
}
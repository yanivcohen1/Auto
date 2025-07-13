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
package xbdd.webapp.util;

import javax.ws.rs.PathParam;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

public class Coordinates {

	private String product;
	private Integer major;
	private Integer minor;
	private Integer servicePack;
	private String build;

	public Coordinates() {
	}

	public Coordinates(final DBObject coordinates) {
		this.product = (String) coordinates.get("product");
		this.major = (Integer) coordinates.get("major");
		this.minor = (Integer) coordinates.get("minor");
		this.servicePack = (Integer) coordinates.get("servicePack");
		this.build = (String) coordinates.get("build");
	}

	public Coordinates(final String product, final Integer major, final Integer minor, final Integer servicePack, final String build) {
		this.product = product;
		this.major = major;
		this.minor = minor;
		this.servicePack = servicePack;
		this.build = build;
	}

	public String getProduct() {
		return this.product;
	}

	@PathParam("product")
	public void setProduct(final String product) {
		this.product = product;
	}

	public Integer getMajor() {
		return this.major;
	}

	@PathParam("major")
	public void setMajor(final Integer major) {
		this.major = major;
	}

	public Integer getMinor() {
		return this.minor;
	}

	@PathParam("minor")
	public void setMinor(final Integer minor) {
		this.minor = minor;
	}

	public Integer getServicePack() {
		return this.servicePack;
	}

	@PathParam("servicePack")
	public void setServicePack(final Integer servicePack) {
		this.servicePack = servicePack;
	}

	public String getBuild() {
		return this.build;
	}

	@PathParam("build")
	public void setBuild(final String build) {
		this.build = build;
	}

	public String getVersionString() {
		return this.major + "." + this.minor + "." + this.servicePack;
	}

	public BasicDBObject getReportCoordinates() {
		return new BasicDBObject().append("product", this.product).append("major", this.major).append("minor", this.minor)
				.append("servicePack", this.servicePack)
				.append("build", this.build).append("version", getVersionString());
	}

	/**
	 * Query object that can be used to find a report (can't use the raw co-ordinates object as that would require a direct match of all
	 * fields inside co-ordinates and we only want to match a few fields.
	 *
	 * @return
	 */
	public BasicDBObject getReportCoordinatesQueryObject() {
		return new BasicDBObject().append("coordinates.product", this.product).append("coordinates.major", this.major)
				.append("coordinates.minor", this.minor)
				.append("coordinates.servicePack", this.servicePack).append("coordinates.build", this.build);
	}

	public BasicDBObject getQueryObject() {
		return new BasicDBObject().append("coordinates.product", this.product).append("coordinates.major", this.major)
				.append("coordinates.minor", this.minor)
				.append("coordinates.servicePack", this.servicePack).append("coordinates.build", this.build);
	}

	public BasicDBObject getTestingTipsCoordinates(final String featureId, final String scenarioId) {
		return getReportCoordinates().append("featureId", featureId).append("scenarioId", scenarioId);
	}

	public String getTestingTipsId(final String featureId, final String scenarioId) {
		return this.product + "/" + getVersionString() + "/" + getBuild() + "/" + featureId + "/" + scenarioId;
	}

	/**
	 * Query object that can be used to find a testing tip (can't use the raw co-ordinates object as that would require a direct match of
	 * all fields inside co-ordinates and we only want to match a few fields. We are looking for the tip for the current build or earlier.
	 *
	 * @return
	 */
	public BasicDBObject getTestingTipsCoordinatesQueryObject(final String featureId, final String scenarioId) {
		return new BasicDBObject().append("coordinates.product", this.product)
				.append("coordinates.major", new BasicDBObject("$lte", this.major))
				.append("coordinates.minor", new BasicDBObject("$lte", this.minor))
				.append("coordinates.servicePack", new BasicDBObject("$lte", this.servicePack))
				.append("coordinates.build", new BasicDBObject("$lte", this.build))
				.append("coordinates.featureId", featureId)
				.append("coordinates.scenarioId", scenarioId);
	}

	public BasicDBObject getRollupCoordinates() {
		return new BasicDBObject().append("product", this.product).append("major", this.major).append("minor", this.minor)
				.append("servicePack", this.servicePack);
	}

	public BasicDBObject getRollupQueryObject(final String featureId) {
		return new BasicDBObject().append("coordinates.product", this.product).append("coordinates.major", this.major)
				.append("coordinates.minor", this.minor)
				.append("coordinates.servicePack", this.servicePack).append("id", featureId);
	}

	/**
	 * Returns a queryObject with the _id, product and version populated sufficient for both querying as well as an upsert operation.
	 *
	 * @return
	 */
	public BasicDBObject getSummaryReportQueryObject() {
		return new BasicDBObject("_id", this.product + "/" + getVersionString()).append("product", this.product)
				.append("version", getVersionString());
	}

	/**
	 * Takes in a feature id, and qualifies it in to an _id (prefixed with co-ordinates) "product/version/buiid/id"
	 *
	 * @param id
	 * @return
	 */
	public String getFeature_Id(final String id) {
		return this.product + "/" + getVersionString() + "/" + getBuild() + "/" + id;
	}

	/**
	 * We only really want to order on URI, but prepending with the other co-ordinates allows the compound index that should exist for the
	 * purposes of lookup to be re-used for sorting.
	 *
	 * @return
	 */
	public static BasicDBObject getFeatureSortingObject() {
		return new BasicDBObject("coordinates.product", 1).append("coordinates.major", -1).append("coordinates.minor", -1)
				.append("coordinates.build", -1).append("uri", 1);
	}

	public BasicDBObject getQueryObject(final Field... fields) {
		final BasicDBObject o = new BasicDBObject();
		for (final Field f : fields) {
			switch (f) {
				case PRODUCT:
					o.append("coordinates.product", this.product);
					break;
				case MAJOR:
					o.append("coordinates.major", this.major);
					break;
				case MINOR:
					o.append("coordinates.minor", this.minor);
					break;
				case SERVICEPACK:
					o.append("coordinates.servicePack", this.servicePack);
					break;
				case VERSION:
					o.append("coordinates.major", this.major).append("coordinates.minor", this.minor)
							.append("coordinates.servicePack", this.servicePack);
					break;
				case VERSION_AS_STRING:
					o.append("coordinates.version", getVersionString());
					break;
				case BUILD:
					o.append("coordinates.build", this.build);
					break;
			}
		}
		return o;
	}

	/**
	 * Utility for creating DBObjects with coordinates. e.g. getObject(Field.PRODUCT,Field.BUILD); will return
	 * {"product":<product>,"build",<build>}
	 *
	 * @param fields
	 * @return a BasicDBOBject populated with the appropriate fields from this coordinate object.
	 */
	public BasicDBObject getObject(final Field... fields) {
		final BasicDBObject o = new BasicDBObject();
		for (final Field f : fields) {
			switch (f) {
				case PRODUCT:
					o.append("product", this.product);
					break;
				case MAJOR:
					o.append("major", this.major);
					break;
				case MINOR:
					o.append("minor", this.minor);
					break;
				case SERVICEPACK:
					o.append("servicePack", this.servicePack);
					break;
				case VERSION:
					o.append("major", this.major).append("minor", this.minor).append("servicePack", this.servicePack);
					break;
				case VERSION_AS_STRING:
					o.append("version", getVersionString());
					break;
				case BUILD:
					o.append("build", this.build);
					break;
			}
		}
		return o;
	}
}

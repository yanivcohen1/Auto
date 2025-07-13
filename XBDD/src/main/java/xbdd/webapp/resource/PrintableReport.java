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
package xbdd.webapp.resource;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.ws.rs.BeanParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.server.mvc.Viewable;

import xbdd.webapp.util.Coordinates;

@Path("/print/{product}/{major}.{minor}.{servicePack}/{build}")
public class PrintableReport {

	private static final String VIEW_ID = "/printableReport";

	@GET
	@Produces(MediaType.TEXT_HTML)
	public Response getIt(@BeanParam final Coordinates coordinates, @Context final ServletContext context) {
		final Map<String, Object> map = new HashMap<String, Object>();
		map.put("product", coordinates.getProduct());
		map.put("version", coordinates.getVersionString());
		map.put("build", coordinates.getBuild());
		return Response.ok(new Viewable(VIEW_ID, map)).build();
	}
}

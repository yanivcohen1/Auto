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

import java.util.Collection;
import java.util.Comparator;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

import org.apache.commons.lang.StringUtils;

import com.google.common.base.Function;
import com.google.common.collect.Collections2;
import com.mongodb.DBObject;

/**
 * Matcher that compares two DBObjects by the number of times they match a set of regular expressions
 */
public class DBObjectComparator implements Comparator<DBObject> {

	final private ConcurrentMap<DBObject, Integer> cachedCounts = new ConcurrentHashMap<>();

	private Pattern pattern;

	/**
	 * Construct a {@link Comparator} with the given set of expressions
	 * 
	 * @param searchExpressions a list of regular expressions
	 * @throws PatternSyntaxException if any of the expressions are not valid regex
	 */
	public DBObjectComparator(final Collection<String> searchExpressions) {
		final String regex = StringUtils.join(Collections2.transform(searchExpressions, new Function<String, String>() {
			@Override
			public String apply(final String input) {
				return "(" + input + ")";
			}
		}), "|");
		this.pattern = Pattern.compile(regex);
	}

	@Override
	public int compare(final DBObject obj1, final DBObject obj2) {
		final int obj1Count = getCount(obj1);
		final int obj2Count = getCount(obj2);

		return obj2Count - obj1Count;
	}

	private int getCount(final DBObject obj) {
		int count;
		if (obj == null) {
			count = 0;
		} else if (this.cachedCounts.containsKey(obj)) {
			count = this.cachedCounts.get(obj);
		} else {
			count = countMatches(this.pattern.matcher(obj.toString()));
			this.cachedCounts.put(obj, count);
		}
		return count;
	}

	private int countMatches(final Matcher matcher) {
		int accumulator = 0;
		while (matcher.find()) {
			accumulator++;
		}
		return accumulator;
	}
}

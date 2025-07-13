package com.who.rest.db;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import javax.persistence.IdClass;

@Entity
@Table(name = "suites")//, catalog = "testsdb"
@JsonSerialize()
public class Suites implements java.io.Serializable {

	private Integer suitesId;
	private String suiteName;
	private String xmlFileLocation;
	private String jenkinsURL;
	
	private Set<Tests> testses = new HashSet<Tests>(0);

	public Suites() {
	}

	public Suites(String suiteName,String xmlFileLocation, String jenkinsURL, Set<Tests> testses) {
		this.suiteName = suiteName;
		this.testses = testses;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "SuitesId", unique = true, nullable = false)
	public Integer getSuitesId() {
		return this.suitesId;
	}

	public void setSuitesId(Integer suitesId) {
		this.suitesId = suitesId;
	}

	@Column(name = "SuiteName", length = 255)
	public String getSuiteName() {
		return this.suiteName;
	}

	public void setSuiteName(String suiteName) {
		this.suiteName = suiteName;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "suites")
	@Cascade({CascadeType.SAVE_UPDATE, CascadeType.DELETE})
	public Set<Tests> getTestses() {
		return this.testses;
	}

	public void setTestses(Set<Tests> testses) {
		this.testses = testses;
	}

	@Column(name = "xmlFileLocation", length = 255)
	public String getXmlFileLocation() {
		return xmlFileLocation;
	}

	public void setXmlFileLocation(String xmlFileLocation) {
		this.xmlFileLocation = xmlFileLocation;
	}

	@Column(name = "jenkinsURL", length = 255)
	public String getJenkinsURL() {
		return jenkinsURL;
	}

	public void setJenkinsURL(String jenkinsURL) {
		this.jenkinsURL = jenkinsURL;
	}
	
	@Override
	public String toString() {
		return new StringBuffer(" suitesId : ").append(this.suitesId)
				.append(" suiteName : ").append(this.suiteName)
				.append(" xmlFileLocation : ").append(this.xmlFileLocation)
				.append(" jenkinsURL : ").append(this.jenkinsURL).toString();
	}
	
}

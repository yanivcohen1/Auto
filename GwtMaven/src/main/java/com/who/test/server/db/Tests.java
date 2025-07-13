package com.who.test.server.db;

// Generated Mar 31, 2014 11:54:45 AM by Hibernate Tools 4.0.0

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name = "tests", catalog = "testsdb")
public class Tests implements java.io.Serializable {

	private Integer testsId;
	private Suites suites;
	private String testName;
	//private int parametersId;
	private Set<Parameters> parameterses = new HashSet<Parameters>(0);
	//private int classId;
	private Set<Classes> classes = new HashSet<Classes>(0);

	public Tests() {
	}

	public Tests(Suites suites, String testName, Set<Parameters> parameterses, Set<Classes> classes) {
		this.suites = suites;
		this.testName = testName;
		this.parameterses = parameterses;
		this.classes = classes;
	}

	/*public Tests(Suites suites, String testName, int parametersId,
			Set<Parameters> parameterses, int classId, Set<Classes> classes) {
		this.suites = suites;
		this.testName = testName;
		this.parametersId = parametersId;
		this.parameterses = parameterses;
		this.classes = classes;
	}*/

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "TestsId", unique = true, nullable = false)
	public Integer getTestsId() {
		return this.testsId;
	}

	public void setTestsId(Integer testsId) {
		this.testsId = testsId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "SuitesId", nullable = false)
	public Suites getSuites() {
		return this.suites;
	}

	public void setSuites(Suites suites) {
		this.suites = suites;
	}

	@Column(name = "TestName", nullable = false, length = 255)
	public String getTestName() {
		return this.testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	/*@Column(name = "ParametersId", nullable = false)
	public int getParametersId() {
		return this.parametersId;
	}

	public void setParametersId(int parametersId) {
		this.parametersId = parametersId;
	}*/

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tests")
	@Cascade({CascadeType.SAVE_UPDATE, CascadeType.DELETE})
	public Set<Parameters> getParameterses() {
		return this.parameterses;
	}

	public void setParameterses(Set<Parameters> parameterses) {
		this.parameterses = parameterses;
	}

	/*@Column(name = "ClassId", nullable = false)
	public int getClassId() {
		return this.classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}*/

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tests")
	@Cascade({CascadeType.SAVE_UPDATE, CascadeType.DELETE})
	public Set<Classes> getClasses() {
		return this.classes;
	}

	public void setClasses(Set<Classes> classes) {
		this.classes = classes;
	}
}

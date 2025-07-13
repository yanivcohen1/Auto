package com.who.test.shared;

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
@Table(name = "tests")//, catalog = "testsdb"
public class Tests implements java.io.Serializable {

	private Integer testsId;
	private Suites suites;
	private String testName;
	private Set<Parameters> parameterses = new HashSet<Parameters>(0);
	private Set<Classe> classes = new HashSet<Classe>(0);

	public Tests() {
	}

	public Tests(Suites suites, String testName, Set<Parameters> parameterses, Set<Classe> classes) {
		this.suites = suites;
		this.testName = testName;
		this.parameterses = parameterses;
		this.classes = classes;
	}

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

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tests")
	@Cascade({CascadeType.SAVE_UPDATE, CascadeType.DELETE})
	public Set<Parameters> getParameterses() {
		return this.parameterses;
	}

	public void setParameterses(Set<Parameters> parameterses) {
		this.parameterses = parameterses;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tests")
	@Cascade({CascadeType.SAVE_UPDATE, CascadeType.DELETE})
	public Set<Classe> getClasses() {
		return this.classes;
	}

	public void setClasses(Set<Classe> classes) {
		this.classes = classes;
	}
}

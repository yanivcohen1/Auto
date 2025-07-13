package com.who.test.shared;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name = "classes")//, catalog = "testsdb"
public class Classe implements java.io.Serializable {

	private Integer classId;
	private Tests tests;
	private String className;

	public Classe() {
	}

	public Classe(Tests tests) {
		this.tests = tests;
	}

	public Classe(Tests tests, String className) {
		this.tests = tests;
		this.className = className;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ClassID", unique = true, nullable = false)
	public Integer getClassId() {
		return this.classId;
	}

	public void setClassId(Integer classId) {
		this.classId = classId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "TestId", nullable = false)
	@Cascade({CascadeType.SAVE_UPDATE, CascadeType.DELETE})
	public Tests getTests() {
		return this.tests;
	}

	public void setTests(Tests tests) {
		this.tests = tests;
	}

	@Column(name = "ClassName", length = 255)
	public String getClassName() {
		return this.className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

}

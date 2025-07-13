package com.who.rest.db.model;

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
@Table(name = "parameters")//, catalog = "testsdb"
public class Parameters implements java.io.Serializable {

	private Integer parameterId;
	private Tests tests;
	private String parameterName;
	private String parameterValue;
	
	public Parameters() {
	}

	public Parameters(Tests tests) {
		this.tests = tests;
	}

	public Parameters(Tests tests, String parameterName, String parameterValue) {
		this.tests = tests;
		this.parameterName = parameterName;
		this.parameterValue = parameterValue;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ParameterID", unique = true, nullable = false)
	public Integer getParameterId() {
		return this.parameterId;
	}

	public void setParameterId(Integer parameterId) {
		this.parameterId = parameterId;
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

	@Column(name = "ParameterName", length = 255)
	public String getParameterName() {
		return this.parameterName;
	}

	public void setParameterName(String parameterName) {
		this.parameterName = parameterName;
	}
	
	@Column(name = "ParameterValue", length = 255)
	public String getParameterValue() {
		return this.parameterValue;
	}

	public void setParameterValue(String parameterValue) {
		this.parameterValue = parameterValue;
	}

}

package com.wh.auto.hibernate;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "BrandsResult", schema = "dbo", catalog = "Automation")
public class BrandsResult implements java.io.Serializable {

	private BigDecimal brandResultId;
	private Brand brand;
	private String toolName;
	private Boolean toolResult;
	private Date toolLastRunDate;

	public BrandsResult() {
	}

	public BrandsResult(BigDecimal brandResultId, Brand brand, String toolName) {
		this.brandResultId = brandResultId;
		this.brand = brand;
		this.toolName = toolName;
	}

	public BrandsResult(BigDecimal brandResultId, Brand brand, String toolName, Boolean toolResult, Date toolLastRunDate) {
		this.brandResultId = brandResultId;
		this.brand = brand;
		this.toolName = toolName;
		this.toolResult = toolResult;
		this.toolLastRunDate = toolLastRunDate;
	}

	@Id
	@Column(name = "Brand_Result_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getBrandResultId() {
		return this.brandResultId;
	}

	public void setBrandResultId(BigDecimal brandResultId) {
		this.brandResultId = brandResultId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Brand_ID", nullable = false)
	public Brand getBrand() {
		return this.brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	@Column(name = "Tool_Name", nullable = false, length = 60)
	public String getToolName() {
		return this.toolName;
	}

	public void setToolName(String toolName) {
		this.toolName = toolName;
	}

	@Column(name = "Tool_Result")
	public Boolean getToolResult() {
		return this.toolResult;
	}

	public void setToolResult(Boolean toolResult) {
		this.toolResult = toolResult;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "Tool_last_Run_Date", length = 23)
	public Date getToolLastRunDate() {
		return this.toolLastRunDate;
	}

	public void setToolLastRunDate(Date toolLastRunDate) {
		this.toolLastRunDate = toolLastRunDate;
	}

}

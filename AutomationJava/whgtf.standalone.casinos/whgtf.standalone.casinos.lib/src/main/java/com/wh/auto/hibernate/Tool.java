package com.wh.auto.hibernate;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Tool", schema = "dbo", catalog = "Automation")
public class Tool implements java.io.Serializable {

	private BigDecimal toolId;
	private BrandLanguage brandLanguage;
	private String toolName;
	private String toolType;
	private String toolDescription;
	private String toolSmsMessageFormat;
	private String toolEmailMessageFormat;
	private String toolArgument;
	private String toolFilePath;
	private String toolIpaddress;
	private BigDecimal groupNumber;
	private BigDecimal toolTimeOut;
	private BigDecimal toolRunOrder;
	private Date toolStartTime;
	private BigDecimal estimateRunTimeMin;
	private BigDecimal runFreqMinutes;
	private Boolean parallelEnable;
	private Boolean isSkip;
	private Boolean isRunning;
	private Boolean running;
	private Set<ToolResult> toolResults = new HashSet<ToolResult>(0);

	public Tool() {
	}

	public Tool(BigDecimal toolId, BrandLanguage brandLanguage) {
		this.toolId = toolId;
		this.brandLanguage = brandLanguage;
	}

	public Tool(BigDecimal toolId, BrandLanguage brandLanguage, String toolName, String toolType, String toolDescription,
			String toolSmsMessageFormat, String toolEmailMessageFormat, String toolArgument, String toolFilePath, String toolIpaddress,
			BigDecimal groupNumber, BigDecimal toolTimeOut, BigDecimal toolRunOrder, Date toolStartTime, BigDecimal estimateRunTimeMin,
			BigDecimal runFreqMinutes, Boolean parallelEnable, Boolean isSkip, Boolean isRunning, Boolean running, Set<ToolResult> toolResults) {
		this.toolId = toolId;
		this.brandLanguage = brandLanguage;
		this.toolName = toolName;
		this.toolType = toolType;
		this.toolDescription = toolDescription;
		this.toolSmsMessageFormat = toolSmsMessageFormat;
		this.toolEmailMessageFormat = toolEmailMessageFormat;
		this.toolArgument = toolArgument;
		this.toolFilePath = toolFilePath;
		this.toolIpaddress = toolIpaddress;
		this.groupNumber = groupNumber;
		this.toolTimeOut = toolTimeOut;
		this.toolRunOrder = toolRunOrder;
		this.toolStartTime = toolStartTime;
		this.estimateRunTimeMin = estimateRunTimeMin;
		this.runFreqMinutes = runFreqMinutes;
		this.parallelEnable = parallelEnable;
		this.isSkip = isSkip;
		this.isRunning = isRunning;
		this.running = running;
		this.toolResults = toolResults;
	}

	@Id
	@Column(name = "Tool_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getToolId() {
		return this.toolId;
	}

	public void setToolId(BigDecimal toolId) {
		this.toolId = toolId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Brand_Language_ID", nullable = false)
	public BrandLanguage getBrandLanguage() {
		return this.brandLanguage;
	}

	public void setBrandLanguage(BrandLanguage brandLanguage) {
		this.brandLanguage = brandLanguage;
	}

	@Column(name = "Tool_Name", length = 60)
	public String getToolName() {
		return this.toolName;
	}

	public void setToolName(String toolName) {
		this.toolName = toolName;
	}

	@Column(name = "Tool_Type", length = 60)
	public String getToolType() {
		return this.toolType;
	}

	public void setToolType(String toolType) {
		this.toolType = toolType;
	}

	@Column(name = "Tool_Description", length = 60)
	public String getToolDescription() {
		return this.toolDescription;
	}

	public void setToolDescription(String toolDescription) {
		this.toolDescription = toolDescription;
	}

	@Column(name = "Tool_SMS_Message_Format", length = 60)
	public String getToolSmsMessageFormat() {
		return this.toolSmsMessageFormat;
	}

	public void setToolSmsMessageFormat(String toolSmsMessageFormat) {
		this.toolSmsMessageFormat = toolSmsMessageFormat;
	}

	@Column(name = "Tool_Email_Message_Format", length = 60)
	public String getToolEmailMessageFormat() {
		return this.toolEmailMessageFormat;
	}

	public void setToolEmailMessageFormat(String toolEmailMessageFormat) {
		this.toolEmailMessageFormat = toolEmailMessageFormat;
	}

	@Column(name = "Tool_Argument", length = 60)
	public String getToolArgument() {
		return this.toolArgument;
	}

	public void setToolArgument(String toolArgument) {
		this.toolArgument = toolArgument;
	}

	@Column(name = "Tool_FilePath", length = 60)
	public String getToolFilePath() {
		return this.toolFilePath;
	}

	public void setToolFilePath(String toolFilePath) {
		this.toolFilePath = toolFilePath;
	}

	@Column(name = "Tool_IPAddress", length = 60)
	public String getToolIpaddress() {
		return this.toolIpaddress;
	}

	public void setToolIpaddress(String toolIpaddress) {
		this.toolIpaddress = toolIpaddress;
	}

	@Column(name = "Group_Number", precision = 20, scale = 0)
	public BigDecimal getGroupNumber() {
		return this.groupNumber;
	}

	public void setGroupNumber(BigDecimal groupNumber) {
		this.groupNumber = groupNumber;
	}

	@Column(name = "Tool_TimeOut", precision = 20, scale = 0)
	public BigDecimal getToolTimeOut() {
		return this.toolTimeOut;
	}

	public void setToolTimeOut(BigDecimal toolTimeOut) {
		this.toolTimeOut = toolTimeOut;
	}

	@Column(name = "Tool_Run_Order", precision = 20, scale = 0)
	public BigDecimal getToolRunOrder() {
		return this.toolRunOrder;
	}

	public void setToolRunOrder(BigDecimal toolRunOrder) {
		this.toolRunOrder = toolRunOrder;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "Tool_Start_Time", length = 23)
	public Date getToolStartTime() {
		return this.toolStartTime;
	}

	public void setToolStartTime(Date toolStartTime) {
		this.toolStartTime = toolStartTime;
	}

	@Column(name = "EstimateRunTimeMin", precision = 20, scale = 0)
	public BigDecimal getEstimateRunTimeMin() {
		return this.estimateRunTimeMin;
	}

	public void setEstimateRunTimeMin(BigDecimal estimateRunTimeMin) {
		this.estimateRunTimeMin = estimateRunTimeMin;
	}

	@Column(name = "RunFreqMinutes", precision = 20, scale = 0)
	public BigDecimal getRunFreqMinutes() {
		return this.runFreqMinutes;
	}

	public void setRunFreqMinutes(BigDecimal runFreqMinutes) {
		this.runFreqMinutes = runFreqMinutes;
	}

	@Column(name = "ParallelEnable")
	public Boolean getParallelEnable() {
		return this.parallelEnable;
	}

	public void setParallelEnable(Boolean parallelEnable) {
		this.parallelEnable = parallelEnable;
	}

	@Column(name = "IsSkip")
	public Boolean getIsSkip() {
		return this.isSkip;
	}

	public void setIsSkip(Boolean isSkip) {
		this.isSkip = isSkip;
	}

	@Column(name = "IsRunning")
	public Boolean getIsRunning() {
		return this.isRunning;
	}

	public void setIsRunning(Boolean isRunning) {
		this.isRunning = isRunning;
	}

	@Column(name = "Running")
	public Boolean getRunning() {
		return this.running;
	}

	public void setRunning(Boolean running) {
		this.running = running;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tool")
	public Set<ToolResult> getToolResults() {
		return this.toolResults;
	}

	public void setToolResults(Set<ToolResult> toolResults) {
		this.toolResults = toolResults;
	}

}

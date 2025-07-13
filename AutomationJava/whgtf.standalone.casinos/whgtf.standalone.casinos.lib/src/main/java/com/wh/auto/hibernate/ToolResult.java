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
@Table(name = "TOOL_RESULT", schema = "dbo", catalog = "Automation")
public class ToolResult implements java.io.Serializable {

	private BigDecimal toolResultId;
	private Tool tool;
	private Boolean toolResultResult;
	private String toolResultDescription;
	private Date toolResultLastPassDate;
	//private int idTemp;
	private Date toolResultLastRunDate;

	public ToolResult() {
	}

	public ToolResult(BigDecimal toolResultId, Tool tool, int idTemp) {
		this.toolResultId = toolResultId;
		this.tool = tool;
		//this.idTemp = idTemp;
	}

	public ToolResult(BigDecimal toolResultId, Tool tool, Boolean toolResultResult, String toolResultDescription, Date toolResultLastPassDate,
			int idTemp, Date toolResultLastRunDate) {
		this.toolResultId = toolResultId;
		this.tool = tool;
		this.toolResultResult = toolResultResult;
		this.toolResultDescription = toolResultDescription;
		this.toolResultLastPassDate = toolResultLastPassDate;
		//this.idTemp = idTemp;
		this.toolResultLastRunDate = toolResultLastRunDate;
	}

	@Id
	@Column(name = "Tool_Result_ID", unique = true, nullable = false, precision = 20, scale = 0)
	public BigDecimal getToolResultId() {
		return this.toolResultId;
	}

	public void setToolResultId(BigDecimal toolResultId) {
		this.toolResultId = toolResultId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Tool_ID", nullable = false)
	public Tool getTool() {
		return this.tool;
	}

	public void setTool(Tool tool) {
		this.tool = tool;
	}

	@Column(name = "Tool_Result_Result")
	public Boolean getToolResultResult() {
		return this.toolResultResult;
	}

	public void setToolResultResult(Boolean toolResultResult) {
		this.toolResultResult = toolResultResult;
	}

	@Column(name = "Tool_Result_Description", length = 220)
	public String getToolResultDescription() {
		return this.toolResultDescription;
	}

	public void setToolResultDescription(String toolResultDescription) {
		this.toolResultDescription = toolResultDescription;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "Tool_Result_Last_Pass_Date", length = 23)
	public Date getToolResultLastPassDate() {
		return this.toolResultLastPassDate;
	}

	public void setToolResultLastPassDate(Date toolResultLastPassDate) {
		this.toolResultLastPassDate = toolResultLastPassDate;
	}

	//@Column(name = "id_temp", nullable = false)
	//public int getIdTemp() {
	//	return this.idTemp;
	//}

	//public void setIdTemp(int idTemp) {
		//this.idTemp = idTemp;
	//}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "Tool_Result_Last_Run_Date", length = 23)
	public Date getToolResultLastRunDate() {
		return this.toolResultLastRunDate;
	}

	public void setToolResultLastRunDate(Date toolResultLastRunDate) {
		this.toolResultLastRunDate = toolResultLastRunDate;
	}

}

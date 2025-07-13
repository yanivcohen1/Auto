package com.who.tlv.ServicesWebsites.shared;

import java.util.Date;
import com.google.gwt.user.client.rpc.IsSerializable;

public class TestsData implements IsSerializable {
	
	private int id;
    private String testName;
    private String ProcessName;
    private String Params;
    private String TimeOut;
    private String cronExpress;
    private Date lastRun;
    private String ErrorDesc;
    private String Result;
    private String Retry;
	private String RetryDelay;
    private String Email;

    public TestsData(String testName, String ProcessName, String Params, String TimeOut,
    		String cronExpress, Date lastRun, String ErrorDesc, String Result, String Retry, String RetryDelay, String Email) {
      //this.id = id;
      this.testName = testName;
      this.ProcessName = ProcessName;
      this.Params = Params;
      this.TimeOut = TimeOut;
      this.cronExpress = cronExpress;
      this.lastRun = lastRun;
      this.ErrorDesc = ErrorDesc;
      this.Result = Result;
      this.Retry = Retry;
      this.RetryDelay = RetryDelay;
      this.Email = Email;
    }

	public TestsData() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public String getProcessName() {
		return ProcessName;
	}

	public void setProcessName(String processName) {
		ProcessName = processName;
	}

	public String getParams() {
		return Params;
	}

	public void setParams(String params) {
		Params = params;
	}

	public String getTimeOut() {
		return TimeOut;
	}

	public void setTimeOut(String timeOut) {
		TimeOut = timeOut;
	}

	public String getCronExpress() {
		return cronExpress;
	}

	public void setCronExpress(String cronExpress) {
		this.cronExpress = cronExpress;
	}

	public Date getLastRun() {
		return lastRun;
	}

	public void setLastRun(Date lastRun) {
		this.lastRun = lastRun;
	}

	public String getErrorDesc() {
		return ErrorDesc;
	}

	public void setErrorDesc(String errorDesc) {
		ErrorDesc = errorDesc;
	}

	public String getResult() {
		return Result;
	}

	public void setResult(String result) {
		Result = result;
	}

	public String getRetry() {
		return Retry;
	}

	public void setRetry(String retry) {
		Retry = retry;
	}

	public String getRetryDelay() {
		return RetryDelay;
	}

	public void setRetryDelay(String retryDelay) {
		RetryDelay = retryDelay;
	}
	
    public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}
    
}

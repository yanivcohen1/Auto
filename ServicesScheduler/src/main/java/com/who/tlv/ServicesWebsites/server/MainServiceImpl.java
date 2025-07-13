package com.who.tlv.ServicesWebsites.server;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpSession;
import com.who.tlv.ServicesWebsites.client.MainService;
import com.who.tlv.ServicesWebsites.server.DB.Tests;
import com.who.tlv.ServicesWebsites.server.DB.TestsUtil;
import com.who.tlv.ServicesWebsites.server.Scheduler.JobScheduler;
import com.who.tlv.ServicesWebsites.shared.FieldVerifier;
import com.who.tlv.ServicesWebsites.shared.TestsData;
import com.who.tlv.ServicesWebsites.shared.UserDto;
import com.google.gwt.user.client.Cookies;
//import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class MainServiceImpl extends RemoteServiceServlet implements MainService {

	//private Map<String, HttpSession> HttpSessions = new HashMap<String, HttpSession>();
	//private Map<String, Object> MapObjects = new HashMap<String, Object>();
	private int timeout;// = getThreadLocalRequest().getSession().getMaxInactiveInterval() * 1000;
	//private SynchronizedWait SW; 
	
	public MainServiceImpl(){
		JobScheduler.runAllJobsScheduler();
	}
	
	public String greetServer(String input) throws IllegalArgumentException {
		// Verify that the input is valid. 
		if (!FieldVerifier.isValidName(input)) {
			// If the input is not valid, throw an IllegalArgumentException back to
			// the client.
			throw new IllegalArgumentException("Name must be at least 1 characters long");
		}
		return input;	
	}
	
	/**
	 * Escape an html string. Escaping data received from the client helps to
	 * prevent cross-site script vulnerabilities.
	 * 
	 * @param html the html string to escape
	 * @return the escaped string
	 */
	private String escapeHtml(String html) {
		if (html == null) {
			return null;
		}
		return html.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
	}

	@Override
	public String Stop(String PanelID) throws IllegalArgumentException {
		
		Executor _Excutor = FindPanelObj(PanelID);
		String ReturnText = "";
		ReturnText = _Excutor.Terminate();
		return ReturnText;
	}

	public void LockExeReq(String[] args , String PanelId) throws IllegalArgumentException {

		timeout = getThreadLocalRequest().getSession().getMaxInactiveInterval() * 1000;
			Executor _Executor = new Executor();
			SetPanelObj(_Executor,PanelId);
			_Executor.main(args);
			SetPanelObj(null,PanelId);
	}

	@Override
	public String[] GetData(String PanelID) throws IllegalArgumentException {
		Executor _Excutor = FindPanelObj(PanelID);
		String[] Arry = new String[]{};
		List<String> LS = null;
			if (_Excutor != null) {
				try {
					LS = _Excutor.GetText(5 * 1000);//timeout
					Arry = new String[LS.size()];
					LS.toArray(Arry);
				}
				catch (Exception e) {
					try {
						Thread.sleep(1000);
					}
					catch (InterruptedException e1) {}
				}
			}
		return Arry;
	}
	
	@Override
	public List<TestsData> GetTests() {
		return TestsUtil.GetTestsData();
	}
	
	@Override
	public Boolean UpdateTests(List<TestsData> testsData) {
		return new Boolean(TestsUtil.UpdateTests(testsData));
	}

	@Override
	public Boolean RemoveTests(List<TestsData> testsData) {
		return new Boolean(TestsUtil.RemoveTests(testsData));
	}
	
	@Override
	public Boolean AddTests(List<TestsData> testsData) {
		return new Boolean(TestsUtil.AddTests(testsData));
	}
	
	private Executor FindPanelObj(String panelID) {
		Object OBJ =  getThreadLocalRequest().getSession().getAttribute("ExecutorObj");
		List<ExcutorAndPanelID> LEP =(List<ExcutorAndPanelID>) OBJ;
		String ID = getThreadLocalRequest().getSession().getId();
		Executor _Executor = null;
		if (LEP != null) {
			for (ExcutorAndPanelID excutorAndPanelID : LEP) {
				if (excutorAndPanelID.getPanelId().contentEquals(ID + panelID)) {
					_Executor = excutorAndPanelID.getExecutor();
				}
			}
		}
		return _Executor;
	}
	
	private void SetPanelObj(Executor InExecutor, String panelID) {
		String ID = getThreadLocalRequest().getSession().getId();
		ExcutorAndPanelID _ExcutorAndPanelID = new ExcutorAndPanelID();
		_ExcutorAndPanelID.setExecutor(InExecutor);
		_ExcutorAndPanelID.setPanelId(ID + panelID);
		List<ExcutorAndPanelID> ListExcutorAndPanelID = new ArrayList<ExcutorAndPanelID>();
		if (getThreadLocalRequest().getSession().getAttribute("ExecutorObj") != null) {
			List<ExcutorAndPanelID> LEP = (List<ExcutorAndPanelID>) getThreadLocalRequest().getSession().getAttribute("ExecutorObj");
			boolean FindExe = false;
			for (ExcutorAndPanelID excutorAndPanelID : LEP) {
				if (excutorAndPanelID.getPanelId().contentEquals(ID + panelID)) {
					excutorAndPanelID.setExecutor(InExecutor);
				}
			}
			if(!FindExe){
				LEP.add(_ExcutorAndPanelID);
				getThreadLocalRequest().getSession().setAttribute("ExecutorObj", LEP);
			}
		}else{
			ListExcutorAndPanelID.add(_ExcutorAndPanelID);
			getThreadLocalRequest().getSession().setAttribute("ExecutorObj", ListExcutorAndPanelID);
		}
	}
	
}


//String serverInfo = getServletContext().getServerInfo();
//String userAgent = getThreadLocalRequest().getHeader("User-Agent");
//
//// Escape data from the client to avoid cross-site script vulnerabilities.
//input = escapeHtml(input);
//userAgent = escapeHtml(userAgent);
//return "Hello, " + input + "!<br><br>I am running " + serverInfo + ".<br><br>It looks like you are using:<br>" + userAgent;
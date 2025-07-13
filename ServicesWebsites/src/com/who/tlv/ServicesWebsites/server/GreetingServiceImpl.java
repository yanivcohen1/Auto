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
import com.who.tlv.ServicesWebsites.client.GreetingService;
import com.who.tlv.ServicesWebsites.shared.FieldVerifier;
import com.google.gwt.user.client.Cookies;
//import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class GreetingServiceImpl extends RemoteServiceServlet implements GreetingService {

	//private Map<String, HttpSession> HttpSessions = new HashMap<String, HttpSession>();
	//private Map<String, Object> MapObjects = new HashMap<String, Object>();
	private int timeout;// = getThreadLocalRequest().getSession().getMaxInactiveInterval() * 1000;
	//private SynchronizedWait SW; 
	
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
		//String ID = getThreadLocalRequest().getSession().getId();
		String ReturnText = "";
		//if (HttpSessions.containsKey(ID)) {
		//Executor _ExeTest =(Executor)getThreadLocalRequest().getSession().getAttribute("ExecutorObj");
		ReturnText = _Excutor.Terminate();
		//}
		return ReturnText;
	}

	public void LockExeReq(String[] args , String PanelId) throws IllegalArgumentException {

		timeout = getThreadLocalRequest().getSession().getMaxInactiveInterval() * 1000;
//		try {
//			//String Cookie1 = Cookies.getCookie("sid1");
//			Cookie[] Cooki = getThreadLocalRequest().getCookies();
//			int len = Cooki.length;
//		}
		//Cookie[] cookies1=getThreadLocalRequest().getCookies();
		//final int DURATION = 1000 * 60 * 60 * 24 * 1; //duration remembering login. 1 Day in this example.
	    //Date expires = new Date(System.currentTimeMillis() + DURATION);
	    //Cookies.setCookie("sid1", ID, expires, null, "/", false);
//		Cookie[] cookies1=getThreadLocalRequest().getCookies();
//		Cookie cookie=new Cookie("LogIn", "Yaniv");
//		cookie.setMaxAge(DURATION);
//		//cookie.setDomain(null);
//		cookie.setPath("/");
//		//cookie.setSecure(false);
//        getThreadLocalResponse().addCookie(cookie);
//        Cookie[] cookies=getThreadLocalRequest().getCookies();

        //String CookieValue = "";
//        if(cookies!=null){
//        	for (Cookie cookie2 : cookies) {
//        		if (cookie2.getName().contentEquals("LogIn")) {
//        			CookieValue = cookie2.getValue();
//				}
//			}
//        }
//		catch (Exception e) {}
//		final long DURATION = 1000 * 60 * 60 * 24 * 14; //duration remembering login. 2 weeks in this example.
//	    Date expires = new Date(System.currentTimeMillis() + DURATION);
	    //Cookies.setCookie("sid1", ID, expires, null, "/", false);
	    //try {
		//	String Attr = (String) getThreadLocalRequest().getSession().getAttribute("SessionID");
		//	String Attr1 = Attr;
		//}
		//catch (Exception e) {}		
		//if (!HttpSessions.containsKey(ID)) {
			//HttpSessions.put(ID, getThreadLocalRequest().getSession());
			//System.console().printf("%1$10s%n", ID);
			//RequstX RequstX1 = new RequstX();
			//RequstX1.Start();
			//String[] args = new String[]{"9000","java","-jar C:\\Web\\runner.jar"};
			Executor _Executor = new Executor();
			SetPanelObj(_Executor,PanelId);
			_Executor.main(args);
			SetPanelObj(null,PanelId);
			//getThreadLocalRequest().getSession().setAttribute("ExecutorObj", null);
			//HttpSessions.remove(ID);
			//MapObjects.remove(ID);
			//SynchronizedWait SW = new SynchronizedWait();
			//SW.setname("");
		//}
	}

	@Override
	public String[] GetData(String PanelID) throws IllegalArgumentException {
		Executor _Excutor = FindPanelObj(PanelID);
		//String ID = getThreadLocalRequest().getSession().getId();
		//String[] ReturnText = new String[]{""};
		String[] Arry = new String[]{};
		List<String> LS = null;//new ArrayList<String>();
		//if (HttpSessions.containsKey(ID)) {
			//Executor _ExeTest = (Executor)MapObjects.get(ID);
		//ExcutorAndPanelID _ExeTest =(ExcutorAndPanelID)getThreadLocalRequest().getSession().getAttribute("ExecutorObj");
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
					//throw new IllegalArgumentException("Name must be at least 1 characters long");
					//Arry = new String[]{};
				}
			}
		//}	
		return Arry;
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
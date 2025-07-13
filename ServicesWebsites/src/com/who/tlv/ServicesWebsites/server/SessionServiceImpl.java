package com.who.tlv.ServicesWebsites.server;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.w3c.dom.Document;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.who.tlv.ServicesWebsites.client.LoginPanel;
import com.who.tlv.ServicesWebsites.client.MenuPanel;
import com.who.tlv.ServicesWebsites.client.SessionInterfaceService;
//import com.google.appengine.api.ThreadManager;
//import java.util.concurrent.AtomicLong;
import com.who.tlv.ServicesWebsites.client.Tools.ToolPanel;
import com.who.tlv.ServicesWebsites.shared.UserDto;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class SessionServiceImpl extends RemoteServiceServlet implements
SessionInterfaceService {
 
	private static final long serialVersionUID = 1L;
	private Timer sessionTimeoutResponseTimer;
	private int timeout;
	private int SesionTimeout = 10000;//10 sec
	private Map<String, HttpSession> HttpSessions = new HashMap<String, HttpSession>();
	private Map<String, Object> MapObjects = new HashMap<String, Object>();
	private String Admin;
	private String User;
	
	public SessionServiceImpl(){
		File PSW = new File("C:\\Web\\Pws.txt");
		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		DocumentBuilder dBuilder;
		Document doc = null;
		try {
			dBuilder = dbFactory.newDocumentBuilder();
			doc = dBuilder.parse(PSW);
		}
		catch (ParserConfigurationException | SAXException | IOException e) {
			throw new IllegalArgumentException("Password file Error");
		}
		doc.getDocumentElement().normalize();
		Node MainNode = doc.getElementsByTagName("Users").item(0);
		Node AdminNode = ((Element)MainNode).getElementsByTagName("User").item(0);
		Node AdminNode2 = ((Element)AdminNode).getElementsByTagName("Psw").item(0);
		Admin = AdminNode2.getFirstChild().getNodeValue();
		Node UserNode = ((Element)MainNode).getElementsByTagName("User").item(1);
		Node UserNode2 = ((Element)UserNode).getElementsByTagName("Psw").item(0);
		User = UserNode2.getFirstChild().getNodeValue();
	}
	
	@Override
	public Integer getUserSessionTimeout() {
		timeout = getThreadLocalRequest().getSession().getMaxInactiveInterval() * 1000;
		String ID = getThreadLocalRequest().getSession().getId();
		if (!HttpSessions.containsKey(ID)) {
			HttpSessions.put(ID, getThreadLocalRequest().getSession());
			//System.console().printf("%1$10s%n", ID);
		}
		return timeout;
	}
	 
	@Override
	public Boolean isSessionAlive() {
	 
		return new Boolean((System.currentTimeMillis() - getThreadLocalRequest().getSession()
		.getLastAccessedTime()) < timeout);
	}
	 
	@Override
	public void ping() {
	 
	}
 
	public void isAliveSessions() {
		//System.console().printf("%1$10s%n", "Start Timer");
		for (String Key : HttpSessions.keySet()) {
			try {
				if((System.currentTimeMillis() - HttpSessions.get(Key)
						.getLastAccessedTime()) > timeout){
					DestroyObject(Key);
				}
			}
			catch (Exception e) {
				DestroyObject(Key);
			}
		} 
	}

	public String isRegister() throws IllegalArgumentException {
		return IsRegisterFromFile();
		//return LogIn;//LogIn != null ? 1 : 0;
	}

	private String IsRegisterFromFile() {
		
		String LogIn =(String)getThreadLocalRequest().getSession().getAttribute("LogIn");
		if (LogIn != null) {
			if (LogIn.contentEquals(Admin)) {
				LogIn = "Admin";
			}
			else if (LogIn.contentEquals(User)) {
				LogIn = "User";
			}
			else {
				LogIn = "nan";
			}
		}else{
			LogIn = "nan";
		}
		return LogIn;
	}
	
	public Boolean UnRegister() {
		getThreadLocalRequest().getSession().setAttribute("LogIn", "");
		return true;//LogIn != null ? 1 : 0;
	}
	
	@Override
	public String Register(UserDto UserData) {
		Boolean Pass = false;
		getThreadLocalRequest().getSession().setAttribute("LogIn", UserData.getEmail());
		return IsRegisterFromFile();
//		if (RegType.contentEquals("Admin")) {
//			Pass = true;
//		}else if (RegType.contentEquals("User")){
//			Pass = true;
//		}else{
//		}
		//String LogIn =(String)getThreadLocalRequest().getSession().getAttribute("LogIn");
		//return Pass;//LogIn != null ? 1 : 0;
	}
	
	public void DestroyObject(String ID){
		// TODO: handle exception
		HttpSessions.remove(ID);
		//MapObjects.get(ID).Destroy();
		MapObjects.remove(ID);
	}
	
	public void InitTimer(){
		//timeout = getThreadLocalRequest().getSession().getMaxInactiveInterval() * 1000;
		sessionTimeoutResponseTimer = new Timer() {
			@Override
			public void run() {
				isAliveSessions();
			}
		};
		sessionTimeoutResponseTimer.schedule(SesionTimeout);
	}

}
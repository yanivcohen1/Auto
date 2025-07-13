package com.who.tlv.ServicesWebsites.server;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import javax.servlet.http.HttpSession;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.w3c.dom.Document;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.who.tlv.ServicesWebsites.client.SessionInterfaceService;
import com.who.tlv.ServicesWebsites.client.Panels.LoginPanel;
import com.who.tlv.ServicesWebsites.client.Panels.MenuPanel;
//import com.google.appengine.api.ThreadManager;
//import java.util.concurrent.AtomicLong;
import com.who.tlv.ServicesWebsites.client.Tools.ToolPanel;
import com.who.tlv.ServicesWebsites.server.DB.Loger;
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
	private String Admin;
	private String User;
	
	public SessionServiceImpl(){
		java.util.Properties prop = new Properties();
    	Resource resource = new ClassPathResource("Config.properties");
    	try {
			File configFile = resource.getFile();
			prop.load(new FileInputStream(configFile));
			Admin = prop.getProperty("Web.Admin.password");
			User = prop.getProperty("Web.User.password");
    	}
		catch (Exception e) {
			Loger.getLoger().error("SessionServiceImpl error config file", e);
			throw new IllegalArgumentException("Password file Error");
		}
	}
	
	@Override
	public Integer getUserSessionTimeout() {
		timeout = getThreadLocalRequest().getSession().getMaxInactiveInterval() * 1000;
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

	}

	public String isRegister() throws IllegalArgumentException {
		return IsRegisterFromFile();
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
	}
	
	public void InitTimer(){
		sessionTimeoutResponseTimer = new Timer() {
			@Override
			public void run() {
				isAliveSessions();
			}
		};
		sessionTimeoutResponseTimer.schedule(SesionTimeout);
	}

}
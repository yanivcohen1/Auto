package com.who.tlv.ServicesWebsites.client.Panels;

import com.who.tlv.ServicesWebsites.client.SessionInterfaceService;
import com.who.tlv.ServicesWebsites.client.SessionInterfaceServiceAsync;
import com.who.tlv.ServicesWebsites.client.General.GeneralPanel;
import com.who.tlv.ServicesWebsites.client.Tools.ToolPanel;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.MenuItem;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class ServicesWebsitesPanel implements EntryPoint {
	
	private final SessionInterfaceServiceAsync sessionService = GWT
			.create(SessionInterfaceService.class);
	VerticalPanel verticalPanel;
	
	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		RootPanel rootPanel = RootPanel.get();
		
		verticalPanel = new VerticalPanel();
		rootPanel.add(verticalPanel, 0, 0);
		IsRegister();
	}
	
	private void IsRegister() {
		sessionService.isRegister(new AsyncCallback<String>() {
			public void onSuccess(String LogIn) {
				if (LogIn != null) {
					if (LogIn.contentEquals("Admin")) {
						verticalPanel.clear();
						MenuPanel _MenuPanel = new MenuPanel();
						verticalPanel.add(_MenuPanel);
					}
					else if (LogIn.contentEquals("User")) {
						verticalPanel.clear();
						ToolPanel _ToolPanel = new ToolPanel();
						verticalPanel.add(_ToolPanel);
					}
					else {
						verticalPanel.clear();
						LoginPanel _LoginPanel = new LoginPanel();
						verticalPanel.add(_LoginPanel);
					}
				}
				else {
					verticalPanel.clear();
					LoginPanel _LoginPanel = new LoginPanel();
					verticalPanel.add(_LoginPanel);
				}
			}
				 
			public void onFailure(Throwable caught) {
			               //throw custom errors
			}
		});
		 
	}
	
}
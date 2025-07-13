package com.who.test.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.MenuItem;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.who.test.client.panels.LoginPanel;
import com.who.test.client.panels.MenuPanel;
import com.who.test.client.panels.RunTestsPanel;
import com.who.test.client.shared.Alert;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class RunSuiteSelectedTestsPanel implements EntryPoint {
	
	private static final String SERVER_ERROR = "An error occurred while "
			+ "attempting to contact the server. Please check your network "
			+ "connection and try again.";
	private final IMainServiceAsync mainService = GWT.create(IMainService.class);
	AbsolutePanel verticalPanel;
	
	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		RootPanel rootPanel = RootPanel.get();
		verticalPanel = new AbsolutePanel();
		rootPanel.add(verticalPanel, 0, 0);
		verticalPanel.clear();
		String login = Window.Location.getParameter("login");
		if (login != null) {
			LoginPanel loginPanel = new LoginPanel();
			verticalPanel.add(loginPanel);
		}else{
			IsRegister();
		}
	}
	
	private void IsRegister() {
		mainService.isRegister(new AsyncCallback<String>() {
			public void onSuccess(String LogIn) {
				if (LogIn.contentEquals("Admin")) {
					verticalPanel.clear();
					MenuPanel menuPanel = new MenuPanel();
					verticalPanel.add(menuPanel);
				}else {
					verticalPanel.clear();
					RunTestsPanel dnd_Gwt = new RunTestsPanel();
					verticalPanel.add(dnd_Gwt);
				}
			}
				 
			public void onFailure(Throwable caught) {
			               //throw custom errors
				Alert.dialogWithButten(Alert.SERVER_ERROR);
			}
		});
		 
	}
	
}
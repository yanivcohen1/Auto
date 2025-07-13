package com.who.test.client.panels;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.who.test.client.IMainService;
import com.who.test.client.IMainServiceAsync;
import com.who.test.client.panels.manage.ManagePanel;
import com.who.test.client.util.Alert;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.MenuItem;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class MenuPanel extends Composite {
	
	private final IMainServiceAsync mainService = GWT.create(IMainService.class);
	public final static DialogBox dialogBoxWithButten = new DialogBox();
	final static Button closeButton = new Button("Close");
	final static HTML serverResponseLabel = new HTML();
	private boolean searchPanelLoad = false;
	private ManagePanel managePanel = null;
	private RunTestsPanel runTestsPanel = null;
	private LoginPanel loginPanel = null;
	private SugestWordPanel sugestWordPanel = null;
	private SuiteManagmentPanel suiteManagmentPanel = null; 
	final VerticalPanel flowPanel = new VerticalPanel();
	boolean register = false;
	boolean isRegRespone = false;
	boolean debug = false;
	private MenuItem logoutMenu;
	private MenuItem manageSuitesMenu;
	private MenuItem manageTestsMenu;
	private enum MenuClick {Tests, Suites, LogIn};
	private MenuClick menuClick = MenuClick.Tests;
	
	/**
	 * This is the entry point method.
	 */
	public MenuPanel() {
		
		VerticalPanel verticalPanel = new VerticalPanel();
	
		MenuBar menuBar = new MenuBar(false);
		verticalPanel.add(menuBar);
		
		
		
		MenuItem RunTestsMenu = new MenuItem("Run Tests", false, new Command() {
			public void execute() {
				runTests();
			}
		});
		//RunTestsMenu.setEnabled(true);
		menuBar.addItem(RunTestsMenu);
		
		manageTestsMenu = new MenuItem("Manage Tests", false, new Command() {
			public void execute() {
				menuClick = MenuClick.Tests;
				if (register) {
					loadPanel(MenuClick.Tests);
				}else{
					showloginPanel();
				}
			}
		});
		//manageTestsMenu.setEnabled(false);
		menuBar.addItem(manageTestsMenu);
		
		manageSuitesMenu = new MenuItem("Manage Suites", false, new Command() {
			public void execute() {
				menuClick = MenuClick.Suites;
				if (register) {
					loadPanel(MenuClick.Suites);
				}else{
					showloginPanel();
				}
			}
		});
		//manageSuitesMenu.setEnabled(false);
		menuBar.addItem(manageSuitesMenu);
		
		logoutMenu = new MenuItem("Log In", false, new Command() {
			public void execute() {
				menuClick = MenuClick.LogIn;
				if (logoutMenu.getText().equalsIgnoreCase("Log Out")) {
					mainService.UnRegister(new AsyncCallback<Boolean>() {
						public void onSuccess(Boolean Pass) {
							//manageTestsMenu.setEnabled(false);
							//manageSuitesMenu.setEnabled(false);
							logoutMenu.setText("Log In");
							register = false;
							loadPanel(MenuClick.LogIn);
							//Window.Location.reload();
						}

						public void onFailure(Throwable caught) {
							Window.alert("Error from server.");
						}
					});
				}else{
					showloginPanel();
				}
			}
		});
		menuBar.addItem(logoutMenu);
		
		MenuBar helpMenu = new MenuBar(true);
		menuBar.addSeparator();
		menuBar.addItem("Help", helpMenu);
	    helpMenu.addItem("About", false, new Command() {
			public void execute() {
				dialogWithButten("<b>This Program written by Yaniv"
						+ " for WilliamHill</b>");
			}
		});
		
		verticalPanel.add(flowPanel);
		flowPanel.setSize("100%", "100%");
		initWidget(verticalPanel);
		verticalPanel.setSize("100%", "10px");
		
		if(debug){
			if (sugestWordPanel == null) {
				flowPanel.clear();
				sugestWordPanel = new SugestWordPanel(managePanel);
				managePanel = new ManagePanel(flowPanel);
				flowPanel.add(sugestWordPanel);
				flowPanel.add(managePanel);
			}else{
				flowPanel.remove(1);
				if (managePanel == null) {
					managePanel = new ManagePanel(flowPanel);
				}
				flowPanel.add(managePanel);
			}
			sugestWordPanel.setNeighbor(managePanel);
		}else{
		runTests();
		}
		IsRegister();
	}

	protected void showloginPanel() {
		flowPanel.clear();
		loginPanel = new LoginPanel(this);
		flowPanel.add(loginPanel);	
	}

	protected void manageTests() {
		if(!register){
			if (sugestWordPanel == null) {
				flowPanel.clear();
				sugestWordPanel = new SugestWordPanel(managePanel);
				loginPanel = new LoginPanel(managePanel);
				flowPanel.add(sugestWordPanel);
				flowPanel.add(loginPanel);
			}else{
				//flowPanel.remove(1);
				if (flowPanel.getWidgetCount() > 1) {
					flowPanel.remove(1);
				}else{
					flowPanel.clear();
					flowPanel.add(sugestWordPanel);
				}
				if (loginPanel == null) {
					loginPanel = new LoginPanel(managePanel);
				}
				flowPanel.add(loginPanel);
			}
		}else{
			if (sugestWordPanel == null) {
				flowPanel.clear();
				sugestWordPanel = new SugestWordPanel(managePanel);
				managePanel = new ManagePanel(flowPanel);
				flowPanel.add(sugestWordPanel);
				flowPanel.add(managePanel);
			}else{
				//flowPanel.remove(1);
				if (flowPanel.getWidgetCount() > 1) {
					flowPanel.remove(1);
				}else{
					flowPanel.clear();
					flowPanel.add(sugestWordPanel);
				}
				if (managePanel == null) {
					managePanel = new ManagePanel(flowPanel);
				}
				sugestWordPanel.setNeighbor(managePanel);
				flowPanel.add(managePanel);
			}
		}
		sugestWordPanel.setNeighbor(managePanel);
	}

	protected void runTests() {
		
		if (sugestWordPanel == null) {
			flowPanel.clear();
			runTestsPanel = new RunTestsPanel();
			runTestsPanel.btnManage.setVisible(false);
			sugestWordPanel = new SugestWordPanel(runTestsPanel);
			flowPanel.add(sugestWordPanel);
			flowPanel.add(runTestsPanel);
		}else{
			if (flowPanel.getWidgetCount() > 1) {
				flowPanel.remove(1);
			}else{
				flowPanel.clear();
				flowPanel.add(sugestWordPanel);
			}
			if (runTestsPanel == null) {
				runTestsPanel = new RunTestsPanel();
			}
			flowPanel.add(runTestsPanel);
		}
		sugestWordPanel.setNeighbor(runTestsPanel);
	}

	public void dialogWithButten(String msg) {
		dialogBoxWithButten.setText("About the Program");
		dialogBoxWithButten.setAnimationEnabled(true);
		dialogBoxWithButten.setGlassEnabled(true);
		closeButton.getElement().setId("closeButton");
		VerticalPanel dialogVPanel = new VerticalPanel();
		dialogVPanel.add(serverResponseLabel);
		dialogVPanel.setHorizontalAlignment(VerticalPanel.ALIGN_RIGHT);
		dialogVPanel.add(closeButton);
		dialogBoxWithButten.setWidget(dialogVPanel);
		// Add a handler to close the DialogBox
		closeButton.setText("Ok");
		closeButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				dialogBoxWithButten.hide();
			}
		});
		serverResponseLabel.setHTML(msg);
		dialogBoxWithButten.center();
		closeButton.setFocus(true);
	}
	
	private boolean IsRegister() {
		register = false;
		mainService.isRegister(new AsyncCallback<String>() {
			public void onSuccess(String LogIn) {
				if (LogIn.contentEquals("Admin")) {
					register = true;
					//manageTestsMenu.setEnabled(true);
					//manageSuitesMenu.setEnabled(true);
					logoutMenu.setText("Log Out");
				}else{
					//manageTestsMenu.setEnabled(false);
					//manageSuitesMenu.setEnabled(false);
					logoutMenu.setText("Log In");
				}
				Alert.dialogNoButten("", false);
				isRegRespone = true;
				//manageTests();
				//Window.alert(String.valueOf(register));
			}
				 
			public void onFailure(Throwable caught) {
				Alert.dialogNoButten("", false);
				Alert.dialogWithButten(Alert.SERVER_ERROR);
			}
		});
		Alert.dialogNoButten("waiting for server", true);
		return register;
	}
	
	protected void loadPanel(MenuClick menuClick) {
		if (menuClick == MenuClick.Tests) {
			manageTests();
		}else if (menuClick == MenuClick.Suites){
			flowPanel.clear();
			if(suiteManagmentPanel == null){
			suiteManagmentPanel = new SuiteManagmentPanel();
			}
			flowPanel.add(suiteManagmentPanel);
		}else if (menuClick == MenuClick.LogIn){
			Window.Location.reload();
		}
	}
	
	public void loadPanel() {
		register = true;
		logoutMenu.setText("Log Out");
		loadPanel(menuClick);
	}
	
}
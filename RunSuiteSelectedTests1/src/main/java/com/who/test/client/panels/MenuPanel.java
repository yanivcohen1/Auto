package com.who.test.client.panels;

import com.who.test.client.IMainService;
import com.who.test.client.IMainServiceAsync;
import com.who.test.client.panels.manage.ManagePanel;
import com.who.test.client.panels.manage.SugestWordPanel;
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
	
	/**
	 * This is the entry point method.
	 */
	public MenuPanel() {
		
		VerticalPanel verticalPanel = new VerticalPanel();
		
		MenuBar menuBar = new MenuBar(false);
		verticalPanel.add(menuBar);
		
		final FlowPanel flowPanel = new FlowPanel();
		
		MenuItem RunTestsMenu = new MenuItem("Run Tests", false, new Command() {
			public void execute() {
				flowPanel.clear();
				RunTestsPanel dnd_Gwt = new RunTestsPanel();
				dnd_Gwt.btnManage.setVisible(false);
				SugestWordPanel sugestWordPanel = new SugestWordPanel(dnd_Gwt);
				flowPanel.add(sugestWordPanel);
				flowPanel.add(dnd_Gwt);
			}
		});
		menuBar.addItem(RunTestsMenu);
		
		MenuItem ManageTestsMenu = new MenuItem("Manage Tests", false, new Command() {
			public void execute() {
				flowPanel.clear();
				ManagePanel managePanel = new ManagePanel();
				SugestWordPanel sugestWordPanel = new SugestWordPanel(managePanel);
				flowPanel.add(sugestWordPanel);
				flowPanel.add(managePanel);
			}
		});
		menuBar.addItem(ManageTestsMenu);
		
		MenuItem LogoutMenu = new MenuItem("Log out", false, new Command() {
			public void execute() {
				mainService.UnRegister(new AsyncCallback<Boolean>() {
					public void onSuccess(Boolean Pass) {
						Window.Location.reload();
					} 
					public void onFailure(Throwable caught) {
						Window.alert("Error from server.");
					}
				});
			}
		});
		menuBar.addItem(LogoutMenu);
		
		MenuBar helpMenu = new MenuBar(true);
		menuBar.addSeparator();
		menuBar.addItem("Help", helpMenu);
	    helpMenu.addItem("About", false, new Command() {
			public void execute() {
				dialogWithButten("This Program written by Yaniv"
						+ " for WilliamHill");
			}
		});
		
		verticalPanel.add(flowPanel);
		flowPanel.setSize("1064px", "759px");
		initWidget(verticalPanel);
	}
	
	public void dialogWithButten(String msg) {
		dialogBoxWithButten.setText("About the Program");
		dialogBoxWithButten.setAnimationEnabled(true);
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
	
}
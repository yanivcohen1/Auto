package com.who.test.client.panels;

import com.who.test.client.IMainService;
import com.who.test.client.IMainServiceAsync;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.MenuItem;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class MenuPanel extends Composite {
	
	private final IMainServiceAsync mainService = GWT.create(IMainService.class);
	
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
				flowPanel.add(dnd_Gwt);
			}
		});
		menuBar.addItem(RunTestsMenu);
		
		MenuItem ManageTestsMenu = new MenuItem("Manage Tests", false, new Command() {
			public void execute() {
				flowPanel.clear();
				ManagePanel managePanel = new ManagePanel();
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
		
		verticalPanel.add(flowPanel);
		flowPanel.setSize("1064px", "759px");
		initWidget(verticalPanel);
	}
}
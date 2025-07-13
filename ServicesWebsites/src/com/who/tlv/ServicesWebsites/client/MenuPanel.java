package com.who.tlv.ServicesWebsites.client;

import com.who.tlv.ServicesWebsites.client.FileUploadPanel;
import com.who.tlv.ServicesWebsites.client.General.GeneralPanel;
import com.who.tlv.ServicesWebsites.client.General.Panel1;
import com.who.tlv.ServicesWebsites.client.Tools.ToolPanel;
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
	
	private final SessionInterfaceServiceAsync sessionService = GWT
			.create(SessionInterfaceService.class);
	
	/**
	 * This is the entry point method.
	 */
	public MenuPanel() {
		//RootPanel rootPanel = RootPanel.get();
		
		VerticalPanel verticalPanel = new VerticalPanel();
		//rootPanel.add(verticalPanel, 0, 0);
		
		MenuBar menuBar = new MenuBar(false);
		verticalPanel.add(menuBar);
		
		final FlowPanel flowPanel = new FlowPanel();
		
		MenuItem GeneralMenu = new MenuItem("General", false, new Command() {
			public void execute() {
				flowPanel.clear();
				GeneralPanel _GeneralPanel = new GeneralPanel();
				flowPanel.add(_GeneralPanel);
			}
		});
		menuBar.addItem(GeneralMenu);
		
		MenuItem ToolMenu = new MenuItem("Tool", false, new Command() {
			public void execute() {
				flowPanel.clear();
				ToolPanel _ToolPanel = new ToolPanel();
				flowPanel.add(_ToolPanel);
			}
		});
		menuBar.addItem(ToolMenu);
		
		MenuItem UploadMenu = new MenuItem("Upload", false, new Command() {
			public void execute() {
				flowPanel.clear();
				FileUploadPanel _FileUploadPanel = new FileUploadPanel();
				flowPanel.add(_FileUploadPanel);
			}
		});
		menuBar.addItem(UploadMenu);
		
		MenuItem DownloadMenu = new MenuItem("Download", false, new Command() {
			public void execute() {
				flowPanel.clear();
				FileDownloadPanel _FileDownloadPanel = new FileDownloadPanel();
				flowPanel.add(_FileDownloadPanel);
			}
		});
		menuBar.addItem(DownloadMenu);
		
		MenuItem LogoutMenu = new MenuItem("Log out", false, new Command() {
			public void execute() {
				sessionService.UnRegister(new AsyncCallback<Boolean>() {
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
		flowPanel.setSize("554px", "523px");
		initWidget(verticalPanel);
	}
}
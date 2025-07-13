package com.who.test.client.panels;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Frame;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

public class SuiteManagmentPanel extends Composite {
	
	private VerticalPanel verticalPanel;
	
	public SuiteManagmentPanel() {
		String url = "https://10.1.1.20/ngSuitesManage/#/Suites";
		Frame frame = new Frame(url);
		frame.setStyleName("gwt-Frame .top");
		frame.setSize("100%", "718px");
		verticalPanel = new VerticalPanel();
		verticalPanel.setSize("100%", "800px");
		verticalPanel.add(frame);
		initWidget(verticalPanel);
		setSize("100%", "100%");
	}
	
}

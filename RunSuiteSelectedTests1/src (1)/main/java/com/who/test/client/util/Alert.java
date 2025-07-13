package com.who.test.client.util;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class Alert {

	public final static DialogBox dialogBoxWithButten = new DialogBox();
	final static Button closeButton = new Button("Close");
	final static HTML serverResponseLabel = new HTML();
	public static final String SERVER_ERROR = "An error occurred while "
			+ "attempting to contact the server. Please check your network "
			+ "connection and try again.";
	public final static DialogBox dialogBoxNoButten = new DialogBox();
	
	public static void dialogWithButten(String msg) {
		dialogBoxWithButten.setText("Remote Procedure Call");
		dialogBoxWithButten.setAnimationEnabled(true);
		// We can set the id of a widget by accessing its Element
		closeButton.getElement().setId("closeButton");
		final Label textToServerLabel = new Label();
		VerticalPanel dialogVPanel = new VerticalPanel();
		dialogVPanel.addStyleName("dialogVPanel");
		dialogVPanel.add(new HTML("<b>Sending name to the server:</b>"));
		dialogVPanel.add(textToServerLabel);
		dialogVPanel.add(new HTML("<br><b>Server replies:</b>"));
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
	
	public static void dialogNoButten(String msg, boolean show) {
		//dialogBoxNoButten.setWidth("179px");
		dialogBoxNoButten.setGlassEnabled(true);
		DOM.setStyleAttribute(dialogBoxNoButten.getElement(),
				"backgroundColor", "#ABCDEF");
		DOM.setStyleAttribute(dialogBoxNoButten.getElement(),
				"width", "159px");
		msg = msg.replaceAll(" ", "&nbsp;");
		dialogBoxNoButten.setHTML("<pre>" + msg + "</pre>");
		if (show) {
			dialogBoxNoButten.center();
		} else {
			dialogBoxNoButten.hide();
		}
	}
	
}

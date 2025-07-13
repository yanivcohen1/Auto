package com.who.tlv.ServicesWebsites.client.General;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.who.tlv.ServicesWebsites.client.GreetingService;
import com.who.tlv.ServicesWebsites.client.GreetingServiceAsync;


public class Panel1 extends Composite {
	/**
	 * The message displayed to the user when the server cannot be reached or
	 * returns an error.
	 */
	public static final String SERVER_ERROR = "An error occurred while "
			+ "attempting to contact the server. Please check your network "
			+ "connection and try again.";

	/**
	 * Create a remote service proxy to talk to the server-side Greeting service.
	 */
	public final GreetingServiceAsync greetingService = GWT
			.create(GreetingService.class);
	
	public Panel1() {
		// Create the popup dialog box
		final DialogBox dialogBox = new DialogBox();
		dialogBox.setText("Remote Procedure Call");
		dialogBox.setAnimationEnabled(true);
		final Button closeButton = new Button("Close");
		// We can set the id of a widget by accessing its Element
		closeButton.getElement().setId("closeButton");
		final Label textToServerLabel = new Label();
		final HTML serverResponseLabel = new HTML();
		VerticalPanel dialogVPanel = new VerticalPanel();
		dialogVPanel.addStyleName("dialogVPanel");
		dialogVPanel.add(new HTML("<b>Sending name to the server:</b>"));
		dialogVPanel.add(textToServerLabel);
		dialogVPanel.add(new HTML("<br><b>Server replies:</b>"));
		dialogVPanel.add(serverResponseLabel);
		dialogVPanel.setHorizontalAlignment(VerticalPanel.ALIGN_RIGHT);
		dialogVPanel.add(closeButton);
		dialogBox.setWidget(dialogVPanel);

		final Button btnCalc = new Button("Calc");
		// Add a handler to close the DialogBox
		closeButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				dialogBox.hide();
				btnCalc.setEnabled(true);
				btnCalc.setFocus(true);
			}
		});
		
		FlowPanel flowPanel = new FlowPanel();
		initWidget(flowPanel);
		
		FlexTable flexTable = new FlexTable();
		flowPanel.add(flexTable);
		
		InlineLabel nlnlblCalc = new InlineLabel("Calc 1+1 = ");
		flexTable.setWidget(0, 0, nlnlblCalc);
		
		final TextBox textBox = new TextBox();
		flexTable.setWidget(0, 1, textBox);
		
		btnCalc.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				//textBox.setText("2");
				btnCalc.setEnabled(false);
				textBox.setText("Sending...");
				//textToServerLabel.setText(textToServer);
				//serverResponseLabel.setText("");
				String textToServer = "2";
				greetingService.greetServer(textToServer,
						new AsyncCallback<String>() {
							public void onFailure(Throwable caught) {
								// Show the RPC error message to the user
								dialogBox
										.setText("Remote Procedure Call - Failure");
								serverResponseLabel
										.addStyleName("serverResponseLabelError");
								serverResponseLabel.setHTML(SERVER_ERROR);
								dialogBox.center();
								closeButton.setFocus(true);
							}

							public void onSuccess(String result) {
								textBox.setText(result);
								btnCalc.setEnabled(true);
//								dialogBox.setText("Remote Procedure Call");
//								serverResponseLabel
//										.removeStyleName("serverResponseLabelError");
//								serverResponseLabel.setHTML(result);
//								dialogBox.center();
//								closeButton.setFocus(true);
							}
						});
			}
		});
		flexTable.setWidget(1, 0, btnCalc);
	}	
}

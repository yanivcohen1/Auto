package com.who.tlv.ServicesWebsites.client;

import com.who.tlv.ServicesWebsites.client.General.GeneralPanel;
import com.who.tlv.ServicesWebsites.client.General.Panel1;
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

//MenuBar menuBar = new MenuBar(false);
//verticalPanel.add(menuBar);
//
//final FlowPanel flowPanel = new FlowPanel();
//
//MenuItem mntmFirstpanel = new MenuItem("General", false, new Command() {
//	public void execute() {
//		flowPanel.clear();
//		GeneralPanel _GeneralPanel = new GeneralPanel();
//		flowPanel.add(_GeneralPanel);
//	}
//});
//menuBar.addItem(mntmFirstpanel);
//
//MenuItem mntmSecondpanel = new MenuItem("Tool", false, new Command() {
//	public void execute() {
//		flowPanel.clear();
//		ToolPanel _ToolPanel = new ToolPanel();
//		flowPanel.add(_ToolPanel);
//	}
//});
//menuBar.addItem(mntmSecondpanel);
//
//
//verticalPanel.add(flowPanel);
//flowPanel.setSize("554px", "523px");

///**
//* The message displayed to the user when the server cannot be reached or
//* returns an error.
//*/
//private static final String SERVER_ERROR = "An error occurred while " + "attempting to contact the server. Please check your network "
//		+ "connection and try again.";
//
///**
//* Create a remote service proxy to talk to the server-side Greeting service.
//*/
//private final GreetingServiceAsync greetingService = GWT.create(GreetingService.class);

//final Button sendButton = new Button("Send");
//final TextBox nameField = new TextBox();
//nameField.setText("GWT User");
//final Label errorLabel = new Label();
//
//// We can add style names to widgets
//sendButton.addStyleName("sendButton");
//
//// Add the nameField and sendButton to the RootPanel
//// Use RootPanel.get() to get the entire body element
//RootPanel.get("nameFieldContainer").add(nameField);
//RootPanel.get("sendButtonContainer").add(sendButton);
//RootPanel.get("errorLabelContainer").add(errorLabel);
//
//// Focus the cursor on the name field when the app loads
//nameField.setFocus(true);
//nameField.selectAll();
//
//// Create the popup dialog box
//final DialogBox dialogBox = new DialogBox();
//dialogBox.setText("Remote Procedure Call");
//dialogBox.setAnimationEnabled(true);
//final Button closeButton = new Button("Close");
//// We can set the id of a widget by accessing its Element
//closeButton.getElement().setId("closeButton");
//final Label textToServerLabel = new Label();
//final HTML serverResponseLabel = new HTML();
//VerticalPanel dialogVPanel = new VerticalPanel();
//dialogVPanel.addStyleName("dialogVPanel");
//dialogVPanel.add(new HTML("<b>Sending name to the server:</b>"));
//dialogVPanel.add(textToServerLabel);
//dialogVPanel.add(new HTML("<br><b>Server replies:</b>"));
//dialogVPanel.add(serverResponseLabel);
//dialogVPanel.setHorizontalAlignment(VerticalPanel.ALIGN_RIGHT);
//dialogVPanel.add(closeButton);
//dialogBox.setWidget(dialogVPanel);
//
//// Add a handler to close the DialogBox
//closeButton.addClickHandler(new ClickHandler() {
//	public void onClick(ClickEvent event) {
//		dialogBox.hide();
//		sendButton.setEnabled(true);
//		sendButton.setFocus(true);
//	}
//});
//
//// Create a handler for the sendButton and nameField
//class MyHandler implements ClickHandler, KeyUpHandler {
//	/**
//	 * Fired when the user clicks on the sendButton.
//	 */
//	public void onClick(ClickEvent event) {
//		sendNameToServer();
//	}
//
//	/**
//	 * Fired when the user types in the nameField.
//	 */
//	public void onKeyUp(KeyUpEvent event) {
//		if (event.getNativeKeyCode() == KeyCodes.KEY_ENTER) {
//			sendNameToServer();
//		}
//	}
//
//	/**
//	 * Send the name from the nameField to the server and wait for a response.
//	 */
//	private void sendNameToServer() {
//		// First, we validate the input.
//		errorLabel.setText("");
//		String textToServer = nameField.getText();
//		if (!FieldVerifier.isValidName(textToServer)) {
//			errorLabel.setText("Please enter at least four characters");
//			return;
//		}
//
//		// Then, we send the input to the server.
//		sendButton.setEnabled(false);
//		textToServerLabel.setText(textToServer);
//		serverResponseLabel.setText("");
//		greetingService.greetServer(textToServer, new AsyncCallback<String>() {
//			public void onFailure(Throwable caught) {
//				// Show the RPC error message to the user
//				dialogBox.setText("Remote Procedure Call - Failure");
//				serverResponseLabel.addStyleName("serverResponseLabelError");
//				serverResponseLabel.setHTML(SERVER_ERROR);
//				dialogBox.center();
//				closeButton.setFocus(true);
//			}
//
//			public void onSuccess(String result) {
//				dialogBox.setText("Remote Procedure Call");
//				serverResponseLabel.removeStyleName("serverResponseLabelError");
//				serverResponseLabel.setHTML(result);
//				dialogBox.center();
//				closeButton.setFocus(true);
//			}
//		});
//	}
//}
//
//// Add a handler to send the name to the server
//MyHandler handler = new MyHandler();
//sendButton.addClickHandler(handler);
//nameField.addKeyUpHandler(handler);
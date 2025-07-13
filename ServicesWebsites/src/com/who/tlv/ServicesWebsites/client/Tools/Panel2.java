package com.who.tlv.ServicesWebsites.client.Tools;

import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
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
import com.who.tlv.ServicesWebsites.client.SessionInterfaceService;
import com.who.tlv.ServicesWebsites.client.SessionInterfaceServiceAsync;
import com.google.gwt.core.client.GWT;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.Dictionary;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.SimpleCheckBox;

public class Panel2 extends Composite {
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
	
	private final SessionInterfaceServiceAsync sessionService = GWT
			.create(SessionInterfaceService.class);
	
	public final DialogBox dialogBox = new DialogBox();
	public final Button btnLock = new Button("Start");
	private int timeoutCicle;
	private Timer sessionTimeoutResponseTimer;
	private String PanelId = Integer.toString((int) ((Math.random()*1000)+1));
	
	//public static final PolicyAdminUIMessageConstants messages = GWT.crea
	
	public Panel2() {
		// Create the popup dialog box
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
		final Button btnRun = new Button("Run");
		btnRun.setEnabled(false);
		// Add a handler to close the DialogBox
		closeButton.addClickHandler(new ClickHandler() {
					public void onClick(ClickEvent event) {
						dialogBox.hide();
						btnRun.setEnabled(true);
						btnRun.setFocus(true);
					}
				});
				
		FlowPanel flowPanel = new FlowPanel();
		initWidget(flowPanel);
		
		FlexTable flexTable = new FlexTable();
		flowPanel.add(flexTable);
		
		final SimpleCheckBox simpleCheckBox = new SimpleCheckBox();
		flexTable.setWidget(0, 0, simpleCheckBox);
		final ListBox comboBox = new ListBox();
		InlineLabel nlnlblNewInlinelabel = new InlineLabel("All");
		flexTable.setWidget(0, 1, nlnlblNewInlinelabel);
		Button btnGetData = new Button("GetData");
		btnGetData.setVisible(false);
		btnGetData.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				greetingService.GetData("",
						new AsyncCallback<String[]>() {
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

							public void onSuccess(String[] result) {
								btnRun.setEnabled(true);
							}
				});
			}
		});
		btnLock.setText("Start");
		btnLock.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
		//Thread LockThread = new Thread(new Runnable() {
		//	public void run() {
				String[] args = new String[3];
				btnLock.setEnabled(false);
				greetingService.LockExeReq(args,PanelId,
						new AsyncCallback<Void>() {			
							public void onFailure(Throwable caught) {
								// Show the RPC error message to the user
								dialogBox
										.setText("Remote Procedure Call - Failure");
								serverResponseLabel
										.addStyleName("serverResponseLabelError");
								serverResponseLabel.setHTML(SERVER_ERROR);
								dialogBox.center();
								closeButton.setFocus(true);
								btnLock.setEnabled(true);
							}

							public void onSuccess(Void result) {
								btnLock.setEnabled(true);
							}
				});
			}
		});
		try {
			Thread.currentThread().sleep(5000);
		}
		catch (InterruptedException e) {
			e.printStackTrace();
		}
		btnGetData.click();
		//LockThread.start();		
		//Button btnCalc = new Button("Calc");
		btnRun.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				//textBox.setText("4");
					btnRun.setEnabled(false);
					//textBox.setText("Sending...");
					//textToServerLabel.setText(textToServer);
					//serverResponseLabel.setText("");
					String textToServer = "4";
					greetingService.Stop(PanelId,
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
									//textBox.setText(result.getName());
									btnRun.setEnabled(true);
//									dialogBox.setText("Remote Procedure Call");
//									serverResponseLabel
//											.removeStyleName("serverResponseLabelError");
//									serverResponseLabel.setHTML(result);
//									dialogBox.center();
//									closeButton.setFocus(true);
								}
					});
			
					
			}
		});
		
		//comboBox.addItem(item)
		flexTable.setWidget(0, 2, comboBox);
		flexTable.setWidget(1, 1, btnRun);
		
		//btnLock = new Button("Lock");
		flexTable.setWidget(1, 2, btnLock);
		btnGetData.setText("GetData");
		flexTable.setWidget(2, 1, btnGetData);
		btnLock.click();
		initSessionTimers();
	}
	
	private void initSessionTimers() {
		sessionService.getUserSessionTimeout(new AsyncCallback<Integer>() {
			public void onSuccess(Integer timeout) {
				timeoutCicle = timeout;
				sessionTimeoutResponseTimer = new Timer() {
					@Override
					public void run() {
						isSessionAlive();
					}
				};
				sessionTimeoutResponseTimer.schedule(timeout);
			}
				 
			public void onFailure(Throwable caught) {
			               //throw custom errors
			}
		});
		 
	}
	
	private void isSessionAlive() {
		sessionService.isSessionAlive(new AsyncCallback<Boolean>() {
			public void onSuccess(Boolean alive) {
				if (alive.booleanValue()) {
					sessionTimeoutResponseTimer.cancel();
					sessionTimeoutResponseTimer.scheduleRepeating(timeoutCicle);
				} else {
					displaySessionTimedOut();
				}
			 
			} 
			public void onFailure(Throwable caught) {
			//throw custom errors
			}
		});
		 
	}
	
	private void displaySessionTimedOut() {
//		Window.alert(PolicyAdminUIUtil.messages
//		.expiredSession());
		Window.alert("Session Expired");
		Window.Location.reload();	 
	}
		 
	private void updateSessionLastAccessedTime() {
		sessionService.ping(new AsyncCallback<Object>() {
			public void onSuccess(Object paramT) {
			//do nothing
			}
			 
			public void onFailure(Throwable caught) {
			//throw custom errors
			}
		 
		});
		 
	}
	
}

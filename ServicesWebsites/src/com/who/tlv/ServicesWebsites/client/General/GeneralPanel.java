package com.who.tlv.ServicesWebsites.client.General;

import java.util.Arrays;
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
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.IntegerBox;

public class GeneralPanel extends Composite {
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
	
	static String m_newline = "\n";//System.getProperty("line.separator");
	
	public final DialogBox dialogBox = new DialogBox();
	final HTML serverResponseLabel = new HTML();
	public final Button btnStart = new Button("Start");
	final Button closeButton = new Button("Close");
	final Button btnStop = new Button("Stop");
	final TextArea Monitor = new TextArea();
	private int timeoutCicle;
	private Timer sessionTimeoutResponseTimer;
	private Timer GetDataTimer;
	private String PanelId = Integer.toString((int) ((Math.random()*1000)+1)); 
	
	//public static final PolicyAdminUIMessageConstants messages = GWT.crea
	
	public GeneralPanel() {
		// Create the popup dialog box
		dialogBox.setText("Remote Procedure Call");
		dialogBox.setAnimationEnabled(true);
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
		dialogBox.setWidget(dialogVPanel);
		// Add a handler to close the DialogBox		
		btnStop.setText("Stop");
		closeButton.addClickHandler(new ClickHandler() {
					public void onClick(ClickEvent event) {
						dialogBox.hide();
						btnStop.setEnabled(true);
						btnStop.setFocus(true);
					}
				});
				
		AbsolutePanel flowPanel = new AbsolutePanel();
		initWidget(flowPanel);
		flowPanel.setSize("421px", "454px");
		final TextArea CMDtextArea = new TextArea();
		CMDtextArea.setText("cmd");
		
		
		flowPanel.add(CMDtextArea, 0, 21);
		CMDtextArea.setSize("411px", "23px");
		flowPanel.add(btnStop, 77, 148);
		btnStop.setEnabled(false);
		//LockThread.start();		
		//Button btnCalc = new Button("Calc");
		btnStop.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				//textBox.setText("4");
					btnStop.setEnabled(false);
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
									btnStop.setEnabled(false);
									btnStart.setEnabled(true);
								}
					});
			
					
			}
		});
		btnStop.setSize("64px", "33px");
		
		Monitor.setReadOnly(true);
		flowPanel.add(Monitor, 0, 187);
		Monitor.setSize("411px", "210px");
		final Button btnGetData = new Button("GetData");
		flowPanel.add(btnGetData, 1, 413);
		btnGetData.setVisible(false);
//		btnGetData.addClickHandler(new ClickHandler() {
//			public void onClick(ClickEvent event) {
//				while (!btnStart.isEnabled()) {
//					greetingService.GetData("", new AsyncCallback<String[]>() {
//						public void onFailure(Throwable caught) {
//							// Show the RPC error message to the user
//							dialogBox.setText("Remote Procedure Call - Failure");
//							serverResponseLabel.addStyleName("serverResponseLabelError");
//							serverResponseLabel.setHTML(SERVER_ERROR);
//							dialogBox.center();
//							closeButton.setFocus(true);
//						}
//
//						public void onSuccess(String[] result) {
//							Monitor.setText(result.toString());
//							btnStop.setEnabled(true);
//						}
//					});
//				}
//			}
//		});
//		btnGetData.click();
		btnGetData.setText("GetData");
		flowPanel.add(btnStart, 0, 148);
		btnStart.setSize("65px", "33px");
		btnStart.setText("Start");
		
		final IntegerBox TimeOutIntBox = new IntegerBox();
		TimeOutIntBox.setText("60");
		flowPanel.add(TimeOutIntBox, 260, 148);
		
		InlineLabel nlnlblTimeoutsec = new InlineLabel("TimeOut(Sec)");
		flowPanel.add(nlnlblTimeoutsec, 174, 158);
		
		InlineLabel nlnlblCommand = new InlineLabel("Command");
		flowPanel.add(nlnlblCommand, 0, -1);
		
		InlineLabel nlnlblParams = new InlineLabel("Parameters");
		flowPanel.add(nlnlblParams, 0, 62);
		nlnlblParams.setSize("59px", "16px");
		
		final TextArea ParamsTextArea = new TextArea();
		ParamsTextArea.setText("/C type \"C:\\Web\\uploaded\\Test.bat\"");
		flowPanel.add(ParamsTextArea, 0, 81);
		ParamsTextArea.setSize("411px", "51px");
		btnStart.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
		//Thread LockThread = new Thread(new Runnable() {
		//	public void run() {
				String[] args = new String[3];
				args[0] = TimeOutIntBox.getText();
				args[1] = CMDtextArea.getText();
				args[2] = ParamsTextArea.getText();
				Monitor.setText("");
				btnStart.setEnabled(false);
				btnStop.setEnabled(true);
//				int timeout = 100;
//				GetDataTimer = new Timer() {
//					@Override
//					public void run() {
//						GetDataTimers();
//						//GetDataTimer.cancel();
//					}
//				};
//				GetDataTimer.schedule(timeout);
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
								btnStart.setEnabled(true);
								btnStop.setEnabled(false);
							}

							public void onSuccess(Void result) {
								btnStart.setEnabled(true);
								btnStop.setEnabled(false);
							}
				});
				//btnGetData.click();
				GetData();
			}
		});
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
	
	private void GetData() {
		if (!btnStart.isEnabled()) {
			//GetDataTimer.cancel();
			greetingService.GetData(PanelId, new AsyncCallback<String[]>() {
				public void onFailure(Throwable caught) {
					// Show the RPC error message to the user
					dialogBox.setText("Remote Procedure Call - Failure");
					serverResponseLabel.addStyleName("serverResponseLabelError");
					serverResponseLabel.setHTML(SERVER_ERROR);
					dialogBox.center();
					closeButton.setFocus(true);
					//GetDataTimer.schedule(1);
					GetData();
				}

				public void onSuccess(String[] result) {
					try {
						if ( result[0] != null ) {
							for (int i = 0; i < result.length; i++) {
								Monitor.setText(result[i] + m_newline + Monitor.getText());//Arrays.toString(result)
							}
						}
					}
					catch (Exception e) {}
					//Monitor.setText(Monitor.getText() +m_newline + result);
					//btnStop.setEnabled(true);
					//GetDataTimer.schedule(1);
					GetData();
				}
			});
		}else{
			//GetDataTimer.cancel();
		}
		 
	}
}

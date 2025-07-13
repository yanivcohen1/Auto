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
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.who.tlv.ServicesWebsites.client.GreetingService;
import com.who.tlv.ServicesWebsites.client.GreetingServiceAsync;
import com.who.tlv.ServicesWebsites.client.LoginPanel;
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
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.event.logical.shared.AttachEvent.Handler;
import com.google.gwt.event.logical.shared.AttachEvent;

public class ToolPanel extends Composite {
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
	final HTML serverResponseLabel = new HTML();
	public final Button btnStart = new Button("Start");
	final Button closeButton = new Button("Close");
	final Button btnStop = new Button("Stop");
	final TextArea Monitor = new TextArea();
	String SelectedText = "";
	private int timeoutCicle;
	private Timer sessionTimeoutResponseTimer;
	private Timer GetDataTimer;
	ReqXPanel _ReqXPanel;
	SiteMapBuilderPanel _SiteMapBuilderPanel;
	AbsolutePanel flowPanel;
	//FileUploadPanel _FileUploadPanel;
	static String m_newline = "\n";//System.getProperty("line.separator");
	String[] args = new String[3];
	private String PanelId = Integer.toString((int) ((Math.random()*1000)+1));
	
	//public static final PolicyAdminUIMessageConstants messages = GWT.crea
	
	//@SuppressWarnings("deprecation")
	@SuppressWarnings("deprecation")
	public ToolPanel() {
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
				
		flowPanel = new AbsolutePanel();
		initWidget(flowPanel);
		flowPanel.setSize("553px", "475px");
		final ListBox ToolcomboBox = new ListBox();
		final FlowPanel RexXflowPanel = new FlowPanel();
		ToolcomboBox.addChangeHandler(new ChangeHandler() {
			public void onChange(ChangeEvent event) {
				int index = ToolcomboBox.getSelectedIndex();
				SelectedText = ToolcomboBox.getItemText(index);
				if (SelectedText.contains("SelectTool")) {
					RexXflowPanel.clear();
					//flowPanel.clear();
					//GeneralPanel _GeneralPanel = new GeneralPanel();
					//flowPanel.add(_GeneralPanel);
					//ParamsTextArea.setText("");
				}else if (SelectedText.contains("RequestX")) {
					RexXflowPanel.clear();
					_ReqXPanel = new ReqXPanel();
					RexXflowPanel.add(_ReqXPanel);
				}else if (SelectedText.contains("SiteMapBuilder")) {
					RexXflowPanel.clear();
					_SiteMapBuilderPanel = new SiteMapBuilderPanel();
					RexXflowPanel.add(_SiteMapBuilderPanel);//flowPanel.add(_GeneralPanel);
				}
//				else if (SelectedText.contains("FileUpload")) {
//					RexXflowPanel.clear();
//					_FileUploadPanel = new FileUploadPanel();
//					RexXflowPanel.add(_FileUploadPanel);//flowPanel.add(_GeneralPanel);
//				}
			}
		});
		flowPanel.add(ToolcomboBox, 0, 0);
		ToolcomboBox.setSize("261px", "22px");
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
//				if (!btnStart.isEnabled()) {
//					GetDataTimer.cancel();
//					greetingService.GetData("", new AsyncCallback<String[]>() {
//						public void onFailure(Throwable caught) {
//							// Show the RPC error message to the user
//							dialogBox.setText("Remote Procedure Call - Failure");
//							serverResponseLabel.addStyleName("serverResponseLabelError");
//							serverResponseLabel.setHTML(SERVER_ERROR);
//							dialogBox.center();
//							closeButton.setFocus(true);
//							//GetDataTimer.schedule(1);
//							btnGetData.click();
//						}
//
//						public void onSuccess(String[] result) {
//							try {
//								if ( result[0] != null ) {
//									for (int i = 0; i < result.length; i++) {
//										Monitor.setText(result[i] + m_newline + Monitor.getText());//Arrays.toString(result)
//									}
//								}
//							}
//							catch (Exception e) {}
//							btnGetData.click();
//							//Monitor.setText(Monitor.getText() +m_newline + result);
//							//btnStop.setEnabled(true);
//							//GetDataTimer.schedule(1);
//						}
//					});
//				}else{
//					//GetDataTimer.cancel();
//				}
				//while (!btnStart.isEnabled()) {
					//GetDataTimers();
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
				//}
//			}
//		});
		//btnGetData.click();
		btnGetData.setText("GetData");
		flowPanel.add(btnStart, 0, 148);
		btnStart.setSize("65px", "33px");
		btnStart.setText("Start");
		final IntegerBox TimeOutIntBox = new IntegerBox();
		btnStart.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
		//Thread LockThread = new Thread(new Runnable() {
		//	public void run() {
				Monitor.setText("");
				btnStart.setEnabled(false);
				btnStop.setEnabled(true);
				//int timeout = 100;
				//GetDataTimer = new Timer() {
				//	@Override
				//	public void run() {
				//		GetDataTimers();
						//GetDataTimer.cancel();
				//	}
				//};
				//GetDataTimer.schedule(timeout);
//				int i =_ReqXPanel.comboBox.getSelectedIndex();
//				String Param = _ReqXPanel.comboBox.getItemText(i);
//				String SelectAll = _ReqXPanel.simpleCheckBox.getValue().toString();
//				String[] args = new String[3];
//				args[0] = TimeOutIntBox.getText();
//				args[1] = "java";
//				//args[2] = "-jar C:\\Web\\runner3.jar 11 "+Param;
//				args[2] = "-jar C:\\Web\\RequstX.jar "+ SelectAll + " " +Param;
				if (SelectedText.contains("RequestX")) {
					args = _ReqXPanel.Exe();
					args[0] = TimeOutIntBox.getText();
				}
				if (SelectedText.contains("SiteMapBuilder")) {
					args = _SiteMapBuilderPanel.Exe();
					args[0] = TimeOutIntBox.getText();
				}
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
				GetData();
				//btnGetData.click();
			}
		});
		ToolcomboBox.addItem("SelectTool");
		ToolcomboBox.addItem("RequestX");
		ToolcomboBox.addItem("SiteMapBuilder");
		//ToolcomboBox.addItem("FileUpload");
		
		TimeOutIntBox.setText("60");
		flowPanel.add(TimeOutIntBox, 260, 148);
		TimeOutIntBox.setSize("151px", "26px");
		
		InlineLabel inlineLabel = new InlineLabel("TimeOut(Sec)");
		flowPanel.add(inlineLabel, 174, 158);
		inlineLabel.setSize("80px", "16px");
		
		
		flowPanel.add(RexXflowPanel, 0, 26);
		RexXflowPanel.setSize("421px", "116px");
		
		Hyperlink hprlnkNewHyperlink = new Hyperlink("Log out", false, "newHistoryToken");
		hprlnkNewHyperlink.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				sessionService.UnRegister(new AsyncCallback<Boolean>() {
					public void onSuccess(Boolean Pass) {
//						flowPanel.clear();
//						LoginPanel _LoginPanel = new LoginPanel();
//						flowPanel.add(_LoginPanel);
						Window.Location.reload();
					} 
					public void onFailure(Throwable caught) {
						Window.alert("Error from server.");
					}
				});
			}
		});
		flowPanel.add(hprlnkNewHyperlink, 301, 0);
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
					GetData();
					//Monitor.setText(Monitor.getText() +m_newline + result);
					//btnStop.setEnabled(true);
					//GetDataTimer.schedule(1);
				}
			});
		}else{
			//GetDataTimer.cancel();
		}
		 
	}
}

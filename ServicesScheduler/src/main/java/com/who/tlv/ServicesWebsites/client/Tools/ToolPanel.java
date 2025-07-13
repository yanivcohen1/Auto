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
import com.who.tlv.ServicesWebsites.client.MainService;
import com.who.tlv.ServicesWebsites.client.MainServiceAsync;
import com.who.tlv.ServicesWebsites.client.SessionInterfaceService;
import com.who.tlv.ServicesWebsites.client.SessionInterfaceServiceAsync;
import com.who.tlv.ServicesWebsites.client.Panels.LoginPanel;
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
	public final MainServiceAsync mainService = GWT
			.create(MainService.class);
	
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
	static String m_newline = "\n";//System.getProperty("line.separator");
	String[] args = new String[3];
	private String PanelId = Integer.toString((int) ((Math.random()*1000)+1));
	
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
				}else if (SelectedText.contains("RequestX")) {
					RexXflowPanel.clear();
					_ReqXPanel = new ReqXPanel();
					RexXflowPanel.add(_ReqXPanel);
				}else if (SelectedText.contains("SiteMapBuilder")) {
					RexXflowPanel.clear();
					_SiteMapBuilderPanel = new SiteMapBuilderPanel();
					RexXflowPanel.add(_SiteMapBuilderPanel);//flowPanel.add(_GeneralPanel);
				}
			}
		});
		flowPanel.add(ToolcomboBox, 0, 0);
		ToolcomboBox.setSize("261px", "22px");
		flowPanel.add(btnStop, 77, 148);
		btnStop.setEnabled(false);
		btnStop.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
					btnStop.setEnabled(false);
					String textToServer = "4";
					mainService.Stop(PanelId,
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
		btnGetData.setText("GetData");
		flowPanel.add(btnStart, 0, 148);
		btnStart.setSize("65px", "33px");
		btnStart.setText("Start");
		final IntegerBox TimeOutIntBox = new IntegerBox();
		btnStart.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				Monitor.setText("");
				btnStart.setEnabled(false);
				btnStop.setEnabled(true);
				if (SelectedText.contains("RequestX")) {
					args = _ReqXPanel.Exe();
					args[0] = TimeOutIntBox.getText();
				}
				if (SelectedText.contains("SiteMapBuilder")) {
					args = _SiteMapBuilderPanel.Exe();
					args[0] = TimeOutIntBox.getText();
				}
				mainService.LockExeReq(args,PanelId,
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
			}
		});
		ToolcomboBox.addItem("SelectTool");
		ToolcomboBox.addItem("RequestX");
		ToolcomboBox.addItem("SiteMapBuilder");
		
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
			mainService.GetData(PanelId, new AsyncCallback<String[]>() {
				public void onFailure(Throwable caught) {
					// Show the RPC error message to the user
					dialogBox.setText("Remote Procedure Call - Failure");
					serverResponseLabel.addStyleName("serverResponseLabelError");
					serverResponseLabel.setHTML(SERVER_ERROR);
					dialogBox.center();
					closeButton.setFocus(true);
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
				}
			});
		} 
	}
}

package com.who.test.client.panels;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.i18n.client.HasDirection.Direction;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.Window;
import com.who.test.client.IMainService;
import com.who.test.client.IMainServiceAsync;
import com.who.test.client.panels.manage.NewPanelWidg;
import com.who.test.client.panels.manage.SugestWordPanel;
import com.who.test.client.util.Alert;
import com.who.test.shared.UserDto;
import com.google.gwt.user.client.ui.PasswordTextBox;

public class LoginPanel extends Composite {
	private TextBox textBoxUsername;
	private PasswordTextBox textBoxPassword;
	private final IMainServiceAsync mainService = GWT.create(IMainService.class);
	VerticalPanel verticalPanel;
	
	public LoginPanel() {
		
		verticalPanel = new VerticalPanel();
		initWidget(verticalPanel);
		verticalPanel.setSize("1112px", "806px");
		
		VerticalPanel verticalPanel_1 = new VerticalPanel();
		verticalPanel.add(verticalPanel_1);
		
		Label lblLoginToYour = new Label("Sign in to your account");
		verticalPanel_1.add(lblLoginToYour);
		lblLoginToYour.setStyleName("gwt-Label-Login");
		
		FlexTable flexTable = new FlexTable();
		verticalPanel_1.add(flexTable);
		flexTable.setWidth("283px");
		
		Label lblUsername = new Label("Username:");
		lblUsername.setStyleName("gwt-Label-Login");
		flexTable.setWidget(0, 0, lblUsername);
		
		textBoxUsername = new TextBox();
		flexTable.setWidget(0, 1, textBoxUsername);
		textBoxUsername.setSize("100%", "100%");
		
		Label lblPassword = new Label("Password:");
		lblPassword.setStyleName("gwt-Label-Login");
		flexTable.setWidget(1, 0, lblPassword);
		
		textBoxPassword = new PasswordTextBox();
		flexTable.setWidget(1, 1, textBoxPassword);
		textBoxPassword.setSize("100%", "100%");
		
		CheckBox chckbxRememberMeOn = new CheckBox("Remember me on this computer");
		chckbxRememberMeOn.setChecked(true);
		chckbxRememberMeOn.setStyleName("gwt-Login-CheckBox");
		flexTable.setWidget(2, 1, chckbxRememberMeOn);
		
		Button btnSignIn = new Button("Sign In");
		btnSignIn.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				if (textBoxUsername.getText().length() == 0
						|| textBoxPassword.getText().length() == 0) {
						Window.alert("Username or password is empty."); 
				}else{
					UserDto UserData = new UserDto();
					UserData.setName(textBoxUsername.getText());
					UserData.setEmail(textBoxPassword.getText());
					mainService.Register(UserData, new AsyncCallback<String>() {
						public void onSuccess(String UserType) {
							if (UserType != null) {
								if (UserType.contentEquals("Admin")) {
									verticalPanel.clear();
									MenuPanel _MenuPanel = new MenuPanel();
									verticalPanel.add(_MenuPanel);
								}else if(UserType.contentEquals("User")){
									verticalPanel.clear();
									MenuPanel _ToolPanel = new MenuPanel();
									verticalPanel.add(_ToolPanel);
								}else{
									Window.alert("Username or password is incorrect.");
								}
							}else{
								Window.alert("Username or password is incorrect.");
							} 
						}
							 
						public void onFailure(Throwable caught) {
						               //throw custom errors
							Alert.dialogWithButten(Alert.SERVER_ERROR);
						}
					});
				}
			}
		});
		flexTable.setWidget(3, 1, btnSignIn);
	}

}

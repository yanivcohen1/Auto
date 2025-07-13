package com.who.tlv.ServicesWebsites.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FileUpload;
import com.google.gwt.user.client.ui.FormPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.FormPanel.SubmitCompleteEvent;
import com.google.gwt.user.client.ui.FormPanel.SubmitEvent;
import com.google.gwt.user.client.ui.FlowPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class FileDownloadPanel extends Composite {
	private static final String UPLOAD_ACTION_URL = GWT.getModuleBaseURL()
			+ "upload";
	/**
	 * The message displayed to the user when the server cannot be reached or
	 * returns an error.
	 */
	private static final String SERVER_ERROR = "An error occurred while "
			+ "attempting to contact the server. Please check your network "
			+ "connection and try again.";

	/**
	 * Create a remote service proxy to talk to the server-side Greeting
	 * service.
	 */
	// private final GWTFileUploadServiceAsync fileUploadService = GWT
	// .create(GWTFileUploadService.class);
	/**
	 * This is the entry point method.
	 */
	public FileDownloadPanel() {
		// Create a FormPanel and point it at a service.
		//final FormPanel form = new FormPanel();
		//form.setAction(UPLOAD_ACTION_URL);

		// Because we're going to add a FileUpload widget, we'll need to set the
		// form to use the POST method, and multipart MIME encoding.
		//form.setEncoding(FormPanel.ENCODING_MULTIPART);
		//form.setMethod(FormPanel.METHOD_POST);

		// Create a panel to hold all of the form widgets.
		FlowPanel panel = new FlowPanel();
		//form.setWidget(panel);

		// Create a FileUpload widget.
		final TextBox DownloadTexbox = new TextBox();
		DownloadTexbox.setName("downloadFile");
		panel.add(DownloadTexbox);
		DownloadTexbox.setWidth("236px");

		// Add a 'submit' button.
		Button DownloadButton = new Button("Download", new ClickHandler() {
			public void onClick(ClickEvent event) {
				
				String fileInfo1 = DownloadTexbox.getText();
				String url = GWT.getModuleBaseURL() + "downloadService?fileInfo1=" + fileInfo1;
				Window.open( url, "_blank", "status=0,toolbar=0,menubar=0,location=0");
				//form.submit();
			}
		});
//		DownloadButton.addClickHandler(new ClickHandler() {
//			public void onClick(ClickEvent event) {
//			}
//		});
		//DownloadButton.setText("Download");
		panel.add(DownloadButton);

		// Add an event handler to the form.
//		form.addSubmitHandler(new FormPanel.SubmitHandler() {
//			public void onSubmit(SubmitEvent event) {
//				// This event is fired just before the form is submitted. We can
//				// take this opportunity to perform validation.
//				if (DownloadTexbox.getFilename().length() == 0) {
//					Window.alert("Select the upload file first");
//					event.cancel();
//				}
//			}
//		});
//
//		form.addSubmitCompleteHandler(new FormPanel.SubmitCompleteHandler() {
//			public void onSubmitComplete(SubmitCompleteEvent event) {
//				// When the form submission is successfully completed, this
//				// event is fired. Assuming the service returned a response of type
//				// text/html, we can get the result text here (see the FormPanel
//				// documentation for further explanation).
//				Window.alert(event.getResults());
//			}
//		});

//		RootPanel.get().add(form);
		initWidget(panel);

	}

}

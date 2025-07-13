package com.who.test.client;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.who.test.client.util.DemoDragHandler;
import com.who.test.client.util.factory.Example;
import com.who.test.shared.FieldVerifier;
import com.who.test.shared.TestsName;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Random;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.allen_sauer.gwt.dnd.client.PickupDragController;
import com.allen_sauer.gwt.dnd.client.drop.AbsolutePositionDropController;
import com.allen_sauer.gwt.dnd.client.drop.DropController;
import com.allen_sauer.gwt.dnd.client.drop.HorizontalPanelDropController;
import com.allen_sauer.gwt.dnd.client.drop.VerticalPanelDropController;
import com.allen_sauer.gwt.dnd.client.util.DOMUtil;
import com.google.gwt.user.client.Window;
///////////////////////
import com.allen_sauer.gwt.dnd.client.PickupDragController;
import com.allen_sauer.gwt.dnd.client.drop.HorizontalPanelDropController;
import com.allen_sauer.gwt.dnd.client.drop.VerticalPanelDropController;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ChangeEvent;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Dnd_Gwt extends Example implements EntryPoint {

	private static final int COLUMNS = 2;

	private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE = "demo-InsertPanelExample";

	private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE_COLUMN_COMPOSITE = "demo-InsertPanelExample-column-composite";

	private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE_CONTAINER = "demo-InsertPanelExample-container";

	private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE_HEADING = "demo-InsertPanelExample-heading";

	private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE_WIDGET = "demo-InsertPanelExample-widget";

	private static final String CSS_DEMO_EVENT_TEXT_AREA = "demo-event-text-area";

	private static final int ROWS = 9;

	private static final int SPACING = 0;
	
	private static String passURL = null;

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
	private final MainServiceAsync mainService = GWT
			.create(MainService.class);

	private VerticalPanel verticalPanel;
	private PickupDragController widgetDragController;
	
	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		// set uncaught exception handler
		GWT.setUncaughtExceptionHandler(new GWT.UncaughtExceptionHandler() {

			// @SuppressWarnings("deprecation")
			@Override
			public void onUncaughtException(Throwable throwable) {
				String text = "Uncaught exception: ";
				while (throwable != null) {
					StackTraceElement[] stackTraceElements = throwable
							.getStackTrace();
					text += throwable.toString() + "\n";
					for (StackTraceElement element : stackTraceElements) {
						text += "    at " + element + "\n";
					}
					throwable = throwable.getCause();
					if (throwable != null) {
						text += "Caused by: ";
					}
				}
				DialogBox dialogBox = new DialogBox(true);
				DOM.setStyleAttribute(dialogBox.getElement(),
						"backgroundColor", "#ABCDEF");
				System.err.print(text);
				text = text.replaceAll(" ", "&nbsp;");
				dialogBox.setHTML("<pre>" + text + "</pre>");
				dialogBox.center();
			}
		});

		// use a deferred command so that the handler catches onModuleLoad2()
		// exceptions
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {
			@Override
			public void execute() {
				onModuleLoad2();
			}
		});
	}

	/**
	 * Deferred initialization method, called from {@link #onModuleLoad()}.
	 * 
	 * @wbp.parser.entryPoint
	 */
	private void onModuleLoad2() {
		// AbsolutePanel boundaryPanel = new AbsolutePanel();
		// boundaryPanel.addStyleName(CSS_DEMO_MAIN_BOUNDARY_PANEL);
		// boundaryPanel.setPixelSize(900, 600);

		// instantiate the common drag controller used the less specific
		// examples
		// dragController = new PickupDragController(boundaryPanel, true);
		// Create a boundary panel to constrain all drag operations
		// AbsolutePanel boundaryPanel = new AbsolutePanel();
		// boundaryPanel.setPixelSize(400, 300);
		// boundaryPanel.addStyleName("getting-started-blue");

		// use the boundary panel as this composite's widget
		AbsolutePanel boundaryPanel = new AbsolutePanel();
		boundaryPanel.setSize("430px", "575px");
		setWidget(boundaryPanel);
		// Create a drop target on which we can drop labels
		AbsolutePanel targetPanel = new AbsolutePanel();
		targetPanel.setSize("300px", "428px");
		targetPanel.addStyleName("getting-started-blue");

		// Add both panels to the root panel
		RootPanel rootPanel = RootPanel.get();
		rootPanel.add(boundaryPanel, 10, 39);
		boundaryPanel.add(targetPanel, 65, 25);
		// Create a DragController for each logical area where a set of
		// draggable
		// widgets and drop targets will be allowed to interact with one
		// another.
		PickupDragController dragController = new PickupDragController(
				boundaryPanel, true);

		final HTML eventTextArea = new HTML();
		eventTextArea.addStyleName(CSS_DEMO_EVENT_TEXT_AREA);
		eventTextArea.setSize(boundaryPanel.getOffsetWidth() + "px", "10em");

		// instantiate shared drag handler to listen for events
		final DemoDragHandler demoDragHandler = new DemoDragHandler(
				eventTextArea);
		dragController.addDragHandler(demoDragHandler);
		// dragController.addDragHandler(demoDragHandler);
		// demoDragHandler = dragController;
		// final HTML eventTextArea = new HTML();
		// final DemoDragHandler demoDragHandler = new DemoDragHandler(new
		// HTML());
		// dragController.addDragHandler(demoDragHandler);

		addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE);
		int count = 0;

		// use the boundary panel as this composite's widget
		// AbsolutePanel boundaryPanel = new AbsolutePanel();
		// boundaryPanel.setSize("100%", "100%");
		// setWidget(boundaryPanel);

		// initialize our column drag controller
		PickupDragController columnDragController = new PickupDragController(
				boundaryPanel, false);
		columnDragController.setBehaviorMultipleSelection(false);
		columnDragController.addDragHandler(demoDragHandler);

		// initialize our widget drag controller
		widgetDragController = new PickupDragController(
				boundaryPanel, false);
		widgetDragController.setBehaviorMultipleSelection(false);
		widgetDragController.addDragHandler(demoDragHandler);

		// initialize horizontal panel to hold our columns
		HorizontalPanel horizontalPanel = new HorizontalPanel();
		horizontalPanel.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_CONTAINER);
		horizontalPanel.setSpacing(SPACING);
		boundaryPanel.add(horizontalPanel);

		// initialize our column drop controller
		HorizontalPanelDropController columnDropController = new HorizontalPanelDropController(
				horizontalPanel);		

		Label lblSelectTests = new Label("Select Tests For Suite");
		lblSelectTests.setStylePrimaryName("sendButton");
		rootPanel.add(lblSelectTests, 85, 9);
		lblSelectTests.setSize("222px", "18px");

		Button btnReset = new Button("Reset");
		btnReset.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				Window.Location.reload();
			}
		});
		rootPanel.add(btnReset, 231, 644);

		// Button btnNewButton = new Button("New button");
		// btnNewButton.setText("Run Tests");
		// boundaryPanel.add(btnNewButton, 80, 400);
		columnDragController.registerDropController(columnDropController);

		//String[] colHaders = new String[] { "Avaleble Tests", "Your Tests"};
		//for (int col = 1; col <= COLUMNS; col++) {
			// initialize a vertical panel to hold the heading and a second
			// vertical
			// panel
			VerticalPanel columnCompositePanel = new VerticalPanel();
			columnCompositePanel
					.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_COLUMN_COMPOSITE);

			// initialize inner vertical panel to hold individual widgets
			verticalPanel = new VerticalPanelWithSpacer();
			verticalPanel.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_CONTAINER);
			verticalPanel.setSpacing(SPACING);
			horizontalPanel.add(columnCompositePanel);

			// initialize a widget drop controller for the current column
			VerticalPanelDropController widgetDropController = new VerticalPanelDropController(
					verticalPanel);
			widgetDragController.registerDropController(widgetDropController);

			// Put together the column pieces
			Label heading = new Label("Avaleble Tests");//colHaders[col - 1]);// ("Column " + col);
			heading.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_HEADING);
			columnCompositePanel.add(heading);
			columnCompositePanel.add(verticalPanel);

			// make the column draggable by its heading
			columnDragController.makeDraggable(columnCompositePanel, heading);

			/*for (int row = 1; row <= ROWS; row++) {
				// initialize a widget
				//if (col == 1) {
					HTML widget = new HTML("Test&nbsp;#" + ++count);
					widget.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_WIDGET);
					
					 * }else{ widget = new HTML(" "); }
					 

					widget.setHeight(0 + 2 + "em");// Random.nextInt(4) + 2 +
													// "em");
					verticalPanel.add(widget);

					// make the widget draggable
					widgetDragController.makeDraggable(widget);
				//}
			}*/
		//}
					
			VerticalPanel columnCompositePanel2 = new VerticalPanel();
			columnCompositePanel2
					.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_COLUMN_COMPOSITE);

			// initialize inner vertical panel to hold individual widgets
			final VerticalPanel verticalPanel2 = new VerticalPanelWithSpacer();
			verticalPanel2.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_CONTAINER);
			verticalPanel2.setSpacing(SPACING);
			horizontalPanel.add(columnCompositePanel2);

			// initialize a widget drop controller for the current column
			VerticalPanelDropController widgetDropController2 = new VerticalPanelDropController(
					verticalPanel2);
			widgetDragController.registerDropController(widgetDropController2);

			// Put together the column pieces
			Label heading2 = new Label("Your Tests");//colHaders[col - 1]);// ("Column " + col);
			heading2.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_HEADING);
			columnCompositePanel2.add(heading2);
			columnCompositePanel2.add(verticalPanel2);
			
			final ListBox comboBox = new ListBox();
			comboBox.addItem("ClientTests");
			comboBox.addChangeHandler(new ChangeHandler() {
				public void onChange(ChangeEvent event) {
					Window.alert("Select from list");
				}
			});
			rootPanel.add(comboBox, 313, 10);
			
			/*final Button someButton = new Button("test",
                    new ClickHandler() {

                        public void onClick(ClickEvent event) {
                        	Window.open(passURL,"_blank","");
                        }

            });
			rootPanel.add(someButton, 413, 10);*/
			final TestsName testsName = new TestsName();
			Button btRunTests = new Button("Run Tests");
			btRunTests.addClickHandler(new ClickHandler() {
				public void onClick(ClickEvent event) {
					List<String> tests = new ArrayList<String>();
					String elements = null;
					for (Widget widget2 : verticalPanel2) {
						elements = elements + widget2.getElement().getInnerText() + "\n";
						tests.add(widget2.getElement().getInnerText());
					}
					//Window.alert(elements);
					GWT.log(elements);
					//verticalPanel2.getWidgetCount();
					
					testsName.setTestName(tests);
					testsName.setSuiteName(comboBox.getItemText(comboBox.getSelectedIndex()));//"ClientTests");
					mainService.runTests(testsName, new AsyncCallback<String[]>() {
						public void onSuccess(String[] returnTestsList) {
							if (returnTestsList != null) {
								String returnTestsArry = "";
								for (String s : returnTestsList)
								{
								    returnTestsArry += s + "\t";
								}
								if (returnTestsArry.trim().startsWith("http://")) {//contentEquals("pass")) {
									//JavaScriptObject window = newWindow("", "", "");
									//setWindowTarget(window, returnTestsArry);
									//getURL(returnTestsArry);
								    Window.open(returnTestsArry,"_blank","");
									//openNewWindow ("Test Win", returnTestsArry);
									passURL = returnTestsArry;
									//someButton.click();
									Window.alert("Runing The tests...");
								}else{
									//Window.alert("return "+ returnTestsArry);
									returnTestsArry = null;
									addTests(returnTestsList);
								}
							}else{
								Window.alert("Null return ");
							}
						}
							 
						public void onFailure(Throwable caught) {
						               //throw custom errors
						}
					});
				}
				
			});
			rootPanel.add(btRunTests, 151, 644);
			//testsName.setTestName(Arrays.asList("Load Tests"));
			btRunTests.click();
	}

	@Override
	public String getDescription() {
		return "Allows drop to occur anywhere among the children of a supported <code>InsertPanel</code>.";
	}

	@Override
	public Class<?>[] getInvolvedClasses() {
		return new Class[] { InsertPanelExample.class,
				VerticalPanelDropController.class,
				VerticalPanelWithSpacer.class,
				HorizontalPanelDropController.class,
				PickupDragController.class, };
	}
	
	public void addTests(String[] tests){
		int index = 1;
		for (int i = 0; i < verticalPanel.getWidgetCount()-1; i++) {
			verticalPanel.remove(index);
			//index++;
		}
		for (int row = 0; row <= tests.length-1; row++) {
			// initialize a widget
			//if (col == 1) {
				HTML widget = new HTML(tests[row]);
				widget.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_WIDGET);
				/*
				 * }else{ widget = new HTML(" "); }
				 */

				widget.setHeight(0 + 2 + "em");// Random.nextInt(4) + 2 +
												// "em");
				verticalPanel.add(widget);

				// make the widget draggable
				widgetDragController.makeDraggable(widget);
			//}
		}
	}
	
	private static native JavaScriptObject newWindow(String url, String name, String features)/*-{
    var window = $wnd.open(url, name, features);
    return window;
	}-*/;

	private static native void setWindowTarget(JavaScriptObject window, String target)/*-{
	    window.location = target;
	}-*/;
	
	public static native String getURL(String url)/*-{
	return $wnd.open(url,
	'target=_blank')
	}-*/;
	
	/**
	* Opens a new windows with a specified URL..
	* 
	* @param name String with the name of the window.
	* @param url String with your URL.
	*/
	public static void openNewWindow(String name, String url) {
	    com.google.gwt.user.client.Window.open(url, name.replace(" ", "_"),
	           "menubar=no," + 
	           "location=false," + 
	           "resizable=yes," + 
	           "scrollbars=yes," + 
	           "status=no," + 
	           "dependent=true");
	}
	
}

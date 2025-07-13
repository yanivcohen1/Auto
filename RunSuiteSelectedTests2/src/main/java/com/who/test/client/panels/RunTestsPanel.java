package com.who.test.client.panels;

import java.io.FileNotFoundException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.who.test.client.IMainService;
import com.who.test.client.IMainServiceAsync;
import com.who.test.client.util.Alert;
import com.who.test.client.util.dnd.MyDragHandler;
import com.who.test.client.util.dnd.InsertPanel;
import com.who.test.client.util.dnd.VerticalPanelWithSpacer;
import com.who.test.client.util.dnd.factory.MyDragController;
import com.who.test.shared.FieldVerifier;
import com.who.test.shared.SuitesData;
import com.who.test.shared.SuitesData.Command;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.NativeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Random;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
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
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Grid;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class RunTestsPanel extends Composite implements ISearchFilter{

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

	public final Button btnManage = new Button("Manage");

	final HTML serverResponseLabel = new HTML();

	final Button closeButton = new Button("Close");

	final ListBox comboBox = new ListBox();

	final ChangeHandler changeHandler;

	final VerticalPanel verticalPanel2;
	
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
	private final IMainServiceAsync mainService = GWT.create(IMainService.class);

	private VerticalPanelWithSpacer verticalPanel;
	private PickupDragController widgetDragController;
	private String[] testsNames;
	
	/**
	 * This is the entry point method.
	 */
	public void Dnd_Gwt2() {

		// set uncaught exception handler
		GWT.setUncaughtExceptionHandler(new GWT.UncaughtExceptionHandler() {

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
				System.err.print(text);
				Alert.dialogNoButten(text, true);
			}
		});

		// use a deferred command so that the handler catches onModuleLoad2()
		// exceptions
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {
			@Override
			public void execute() {
			}
		});
	}

	/**
	 * Deferred initialization method, called from {@link #onModuleLoad()}.
	 * 
	 * @wbp.parser.entryPoint
	 */
	public RunTestsPanel() {

		// use the boundary panel as this composite's widget
		final AbsolutePanel boundaryPanel = new AbsolutePanel();
		boundaryPanel.setStyleName("border");
		boundaryPanel.setSize("1130px", "818px");

		//boundaryPanel.setLayoutData(layoutData);
		//boundaryPanel.setBorderWidth(1);
		// Create a DragController for each logical area where a set of
		// draggable
		// widgets and drop targets will be allowed to interact with one
		// another.
		AbsolutePanel targetPanel = new AbsolutePanel();
		PickupDragController dragController = new PickupDragController(
				targetPanel, true);

		final HTML eventTextArea = new HTML();
		eventTextArea.addStyleName(CSS_DEMO_EVENT_TEXT_AREA);
		eventTextArea.setSize(targetPanel.getOffsetWidth() + "px", "10em");

		// instantiate shared drag handler to listen for events
		final MyDragHandler demoDragHandler = new MyDragHandler(
				eventTextArea);
		dragController.addDragHandler(demoDragHandler);
		int count = 0;

		// use the boundary panel as this composite's widget
		// initialize our column drag controller
		PickupDragController columnDragController = new PickupDragController(
				targetPanel, false);
		columnDragController.setBehaviorMultipleSelection(false);
		columnDragController.addDragHandler(demoDragHandler);

		// initialize our widget drag controller
		widgetDragController = new PickupDragController(targetPanel, false);
		widgetDragController.setBehaviorMultipleSelection(false);
		widgetDragController.addDragHandler(demoDragHandler);

		changeHandler = new ChangeHandler() {
			public void onChange(ChangeEvent event) {

				selectSuite();
			}
		};

		HorizontalPanel flowPanel = new HorizontalPanel();
		boundaryPanel.add(flowPanel);

		Label lblSelectTests = new Label("Select Tests For Suite");
		flowPanel.add(lblSelectTests);
		lblSelectTests.setStylePrimaryName("sendButton");
		lblSelectTests.setSize("222px", "18px");
		flowPanel.add(comboBox);
		comboBox.addChangeHandler(changeHandler);
		AbsolutePanel verticalPanel_1 = new AbsolutePanel();
		boundaryPanel.add(verticalPanel_1);

		// Create a drop target on which we can drop labels
		verticalPanel_1.add(targetPanel);
		targetPanel.setSize("400px", "615px");
		targetPanel.addStyleName("getting-started-blue");

		// initialize horizontal panel to hold our columns
		HorizontalPanel horizontalPanel = new HorizontalPanel();
		targetPanel.add(horizontalPanel);
		horizontalPanel.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_CONTAINER);
		horizontalPanel.setSpacing(SPACING);

		// initialize our column drop controller
		HorizontalPanelDropController columnDropController = new HorizontalPanelDropController(
				horizontalPanel);
		columnDragController.registerDropController(columnDropController);
		// initialize a vertical panel to hold the heading and a second
		VerticalPanel columnCompositePanel = new VerticalPanel();
		columnCompositePanel
				.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_COLUMN_COMPOSITE);

		// initialize inner vertical panel to hold individual widgets
		verticalPanel = new VerticalPanelWithSpacer();
		verticalPanel.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_CONTAINER);
		verticalPanel.setSpacing(SPACING);
		horizontalPanel.add(columnCompositePanel);
		columnCompositePanel.setSize("100%", "100%");

		// initialize a widget drop controller for the current column
		VerticalPanelDropController widgetDropController = new VerticalPanelDropController(
				verticalPanel);
		widgetDragController.registerDropController(widgetDropController);
		// Put together the column pieces
		Label heading = new Label("Avaleble Tests");// colHaders[col - 1]);//
		heading.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_HEADING);
		columnCompositePanel.add(heading);
		columnCompositePanel.add(verticalPanel);

		// make the column draggable by its heading
		columnDragController.makeDraggable(columnCompositePanel, heading);
		// }

		VerticalPanel columnCompositePanel2 = new VerticalPanel();
		columnCompositePanel2
				.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_COLUMN_COMPOSITE);

		// initialize inner vertical panel to hold individual widgets
		verticalPanel2 = new VerticalPanelWithSpacer();
		verticalPanel2.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_CONTAINER);
		verticalPanel2.setSpacing(SPACING);
		horizontalPanel.add(columnCompositePanel2);
		columnCompositePanel2.setSize("100%", "100%");

		// initialize a widget drop controller for the current column
		VerticalPanelDropController widgetDropController2 = new VerticalPanelDropController(
				verticalPanel2);
		widgetDragController.registerDropController(widgetDropController2);
		// Put together the column pieces
		Label heading2 = new Label("Your Tests");// colHaders[col - 1]);//
		heading2.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_HEADING);
		columnCompositePanel2.add(heading2);
		columnCompositePanel2.add(verticalPanel2);

		HorizontalPanel horizontalPanel_1 = new HorizontalPanel();
		verticalPanel_1.add(horizontalPanel_1);
		
		Grid grid = new Grid(1, 1);
		horizontalPanel_1.add(grid);
		grid.setHeight("31px");

		Button btRunTests = new Button("Run Tests");
		btRunTests.setStylePrimaryName("gwt-Button-blue");
		horizontalPanel_1.add(btRunTests);
		btRunTests.setHeight("32px");
		btRunTests.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				runTests();
			}
		});
		
		Grid grid_1 = new Grid(1, 1);
		horizontalPanel_1.add(grid_1);
		grid_1.setHeight("31px");

		Button btnReset = new Button("Reset");
		btnReset.setStyleName("gwt-Button-Yellow");
		horizontalPanel_1.add(btnReset);
		btnReset.setHeight("32px");
		
		Grid grid_2 = new Grid(1, 1);
		horizontalPanel_1.add(grid_2);
		grid_2.setHeight("31px");

		
		horizontalPanel_1.add(btnManage);
		btnManage.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				btnManage.setVisible(false);
				LoginPanel loginPanel = new LoginPanel(null);
				boundaryPanel.clear();
				boundaryPanel.add(loginPanel);
			}
		});
		btnReset.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				Window.Location.reload();
			}
		});
		initWidget(boundaryPanel);
		updateSuitsList();
	}

	protected void selectSuite() {
		SuitesData suitesData = new SuitesData();
		suitesData.setCommand(Command.GetTests);
		suitesData.setSuiteName(comboBox.getItemText(comboBox
				.getSelectedIndex()));
		mainService.runTests(suitesData, new AsyncCallback<String[]>() {
			public void onSuccess(String[] returnTestsList) {
				Alert.dialogNoButten("", false);
				addTests(returnTestsList);
			}

			public void onFailure(Throwable caught) {
				Alert.dialogNoButten("", false);
				Alert.dialogWithButten(SERVER_ERROR);
			}
		});
		Alert.dialogNoButten("waiting for server", true);
	}

	protected void runTests() {
		List<String> tests = new ArrayList<String>();
		String elements = null;
		for (Widget widget2 : verticalPanel2) {
			elements = elements + widget2.getElement().getInnerText()
					+ "\n";
			tests.add(widget2.getElement().getInnerText());
		}
		if (tests.size() == 1) {
			Alert.dialogWithButten("Select tests first");
		} else {
			GWT.log(elements);
			SuitesData suitesData = new SuitesData();
			suitesData.setCommand(Command.RunTests);
			suitesData.setTestsName(tests);
			suitesData.setSuiteName(comboBox.getItemText(comboBox
					.getSelectedIndex()));// "ClientTests");
			mainService.runTests(suitesData,
					new AsyncCallback<String[]>() {
						public void onSuccess(String[] returnTestsList) {
							Alert.dialogNoButten("", false);
							if (returnTestsList != null) {
								String returnTestsArry = "";
								for (String s : returnTestsList) {
									returnTestsArry += s + "\t";
								}
								if (returnTestsArry.trim().startsWith(
										"http://")) {
									Window.open(returnTestsArry,
											"_blank", "");
									passURL = returnTestsArry;
									Window.alert("Running The tests...");
								} else {
									Window.alert("return "
											+ returnTestsArry);
								}
							} else {
								Window.alert("Null return ");
							}
						}

						public void onFailure(Throwable caught) {
							Alert.dialogNoButten("", false);
							Alert.dialogWithButten(SERVER_ERROR);
						}
					});
			Alert.dialogNoButten("waiting for server", true);
		}
		
	}

	/*
	 * @Override public String getDescription() { return
	 * "Allows drop to occur anywhere among the children of a supported <code>InsertPanel</code>."
	 * ; }
	 * 
	 * @Override public Class<?>[] getInvolvedClasses() { return new Class[] {
	 * InsertPanelExample.class, VerticalPanelDropController.class,
	 * VerticalPanelWithSpacer.class, HorizontalPanelDropController.class,
	 * PickupDragController.class, }; }
	 */

	public void updateSuitsList() {
		SuitesData suitesData = new SuitesData();
		suitesData.setCommand(Command.GetSuits);
		mainService.runTests(suitesData, new AsyncCallback<String[]>() {
			public void onSuccess(String[] returnSuitesList) {
				Alert.dialogNoButten("", false);
				for (String suite : returnSuitesList) {
					comboBox.addItem(suite);
				}
				comboBox.setSelectedIndex(0);
				changeHandler.onChange(null);
			}

			public void onFailure(Throwable caught) {
				Alert.dialogNoButten("", false);
				Alert.dialogWithButten(SERVER_ERROR);
			}
		});
		Alert.dialogNoButten("waiting for server", true);
	}

	public void addTests(String[] tests) {
		this.testsNames = tests;
		verticalPanel.clear();
		for (int row = 0; row <= tests.length - 1; row++) {
			// initialize a widget
			HTML widget = new HTML(tests[row]);
			widget.addStyleName(CSS_DEMO_INSERT_PANEL_EXAMPLE_WIDGET);
			widget.setHeight(2 + "em");
			verticalPanel.add(widget);
			// make the widget draggable
			widgetDragController.makeDraggable(widget);
		}
	}

	private static native JavaScriptObject newWindow(String url, String name,
			String features)/*-{
							var window = $wnd.open(url, name, features);
							return window;
							}-*/;

	private static native void setWindowTarget(JavaScriptObject window,
			String target)/*-{
							window.location = target;
							}-*/;

	public static native String getURL(String url)/*-{
													return $wnd.open(url,
													'target=_blank')
													}-*/;

	native void redirect(String url) /*-{ 
										$wnd.location.replace(url); 
										}-*/;

	/**
	 * Opens a new windows with a specified URL..
	 * 
	 * @param name
	 *            String with the name of the window.
	 * @param url
	 *            String with your URL.
	 */
	public static void openNewWindow(String name, String url) {
		com.google.gwt.user.client.Window.open(url, name.replace(" ", "_"),
				"menubar=no," + "location=false," + "resizable=yes,"
						+ "scrollbars=yes," + "status=no," + "dependent=true");
	}

	@Override
	public String executeFilter(String searchWord) {
		if (!searchWord.trim().isEmpty()) {
			List<String> testsNames = new ArrayList<String>();
			for (String testName : this.testsNames) {
				if (testName.toLowerCase().contains(searchWord.toLowerCase())) {
					testsNames.add(testName);
				}
			}
			addTests(testsNames.toArray(new String[testsNames.size()]));
		}else{
			selectSuite();
		}
		
		return null;
	}
}

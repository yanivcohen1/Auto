package com.who.test.client;

import com.who.test.shared.FieldVerifier;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
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
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.allen_sauer.gwt.dnd.client.PickupDragController;
import com.allen_sauer.gwt.dnd.client.drop.AbsolutePositionDropController;
import com.allen_sauer.gwt.dnd.client.drop.DropController;
import com.allen_sauer.gwt.dnd.client.util.DOMUtil;
/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Dnd_Gwt_Original implements EntryPoint {
	
	private static final int COLUMNS = 3;

	  private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE = "demo-InsertPanelExample";

	  private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE_COLUMN_COMPOSITE = "demo-InsertPanelExample-column-composite";

	  private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE_CONTAINER = "demo-InsertPanelExample-container";

	  private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE_HEADING = "demo-InsertPanelExample-heading";

	  private static final String CSS_DEMO_INSERT_PANEL_EXAMPLE_WIDGET = "demo-InsertPanelExample-widget";

	  private static final int ROWS = 4;

	  private static final int SPACING = 0;
	
	/**
	 * The message displayed to the user when the server cannot be reached or
	 * returns an error.
	 */
	private static final String SERVER_ERROR = "An error occurred while "
			+ "attempting to contact the server. Please check your network "
			+ "connection and try again.";

	/**
	 * Create a remote service proxy to talk to the server-side Greeting service.
	 */
	private final MainServiceAsync greetingService = GWT
			.create(MainService.class);

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		 // set uncaught exception handler
	    GWT.setUncaughtExceptionHandler(new GWT.UncaughtExceptionHandler() {

	      @SuppressWarnings("deprecation")
		@Override
	      public void onUncaughtException(Throwable throwable) {
	        String text = "Uncaught exception: ";
	        while (throwable != null) {
	          StackTraceElement[] stackTraceElements = throwable.getStackTrace();
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
	        DOM.setStyleAttribute(dialogBox.getElement(), "backgroundColor", "#ABCDEF");
	        System.err.print(text);
	        text = text.replaceAll(" ", "&nbsp;");
	        dialogBox.setHTML("<pre>" + text + "</pre>");
	        dialogBox.center();
	      }
	    });

	    // use a deferred command so that the handler catches onModuleLoad2() exceptions
	    Scheduler.get().scheduleDeferred(new ScheduledCommand() {
	      @Override
	      public void execute() {
	        onModuleLoad2();
	      }
	    });
	  }

	  /**
	   * Deferred initialization method, called from {@link #onModuleLoad()}.
	   * @wbp.parser.entryPoint
	   */
	  private void onModuleLoad2() {
	    // Create a boundary panel to constrain all drag operations
	    AbsolutePanel boundaryPanel = new AbsolutePanel();
	    boundaryPanel.setPixelSize(400, 300);
	    boundaryPanel.addStyleName("getting-started-blue");

	    // Create a drop target on which we can drop labels
	    AbsolutePanel targetPanel = new AbsolutePanel();
	    targetPanel.setPixelSize(300, 200);
	    targetPanel.addStyleName("getting-started-blue");

	    // Add both panels to the root panel
	    RootPanel.get().add(boundaryPanel);
	    boundaryPanel.add(targetPanel, 40, 40);

	    // Create a DragController for each logical area where a set of draggable
	    // widgets and drop targets will be allowed to interact with one another.
	    PickupDragController dragController = new PickupDragController(boundaryPanel, true);

	    // Positioner is always constrained to the boundary panel
	    // Use 'true' to also constrain the draggable or drag proxy to the boundary panel
	    dragController.setBehaviorConstrainedToBoundaryPanel(false);

	    // Allow multiple widgets to be selected at once using CTRL-click
	    dragController.setBehaviorMultipleSelection(true);

	    // create a DropController for each drop target on which draggable widgets
	    // can be dropped
	    DropController dropController = new AbsolutePositionDropController(targetPanel);

	    // Don't forget to register each DropController with a DragController
	    dragController.registerDropController(dropController);

	    // create a few randomly placed draggable labels
	    for (int i = 1; i <= 5; i++) {
	      // create a label and give it style
	      Label label = new Label("Label #" + i, false);
	      label.addStyleName("getting-started-label");

	      // add it to the DOM so that offset width/height becomes available
	      targetPanel.add(label, 0, 0);

	      // determine random label location within target panel
	      int left = Random.nextInt(DOMUtil.getClientWidth(targetPanel.getElement())
	          - label.getOffsetWidth());
	      int top = Random.nextInt(DOMUtil.getClientHeight(targetPanel.getElement())
	          - label.getOffsetHeight());

	      // move the label
	      targetPanel.setWidgetPosition(label, left, top);

	      // make the label draggable
	      dragController.makeDraggable(label);
	    }
	  }
	}

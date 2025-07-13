package com.who.test.client.panels.manage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

import com.google.gwt.cell.client.DateCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.view.client.AsyncDataProvider;
import com.google.gwt.view.client.HasData;
import com.google.gwt.event.logical.shared.AttachEvent;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.who.test.client.IMainService;
import com.who.test.client.IMainServiceAsync;
import com.who.test.shared.TestsData;
import com.google.gwt.user.client.ui.Label;

public class NewPanelWidg<T> extends Composite implements HasText {

	private static NewPanelWidgUiBinder uiBinder = GWT.create(NewPanelWidgUiBinder.class);
	@UiField(provided=true) CellTable<TestsData> table;
	@UiField Button okButten;
	@UiField Button cancelButten;
	@UiField Label msgLable;
	private AsyncDataProvider<TestsData> provider;
	public boolean isNew = false;
	public boolean isOK = false;
	public static List<TestsData> testsData = Arrays.asList(new TestsData());
	
	public void updateTable() {
		refreshTable();
	}
	
	public boolean isNew() {
		return isNew;
	}

	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}

	public static List<TestsData> getTestsData() {
		return testsData;
	}

	public static void setTestsData(List<TestsData> testsData) {	
		NewPanelWidg.testsData = testsData;
	}

	public AbsolutePanel getContainerPanel() {
		return containerPanel;
	}

	public void setContainerPanel(AbsolutePanel containerPanel) {
		this.containerPanel = containerPanel;
	}

	private final IMainServiceAsync mainService = GWT.create(IMainService.class);
	public AbsolutePanel containerPanel;
	public final DialogBox dialogBoxNoButten = new DialogBox();
	public final DialogBox dialogBox = new DialogBox();
	final HTML serverResponseLabel = new HTML();
	final Button closeButton = new Button("Close");
	public static final String SERVER_ERROR = "An error occurred while "
			+ "attempting to contact the server. Please check your network "
			+ "connection and try again.";
	
	interface NewPanelWidgUiBinder extends UiBinder<Widget, NewPanelWidg> {
	}

	public NewPanelWidg() {
		onInitialize();
		initWidget(uiBinder.createAndBindUi(this));
	}

	public void setText(String text) {
	}

	public String getText() {
		return null;
	}

	@UiHandler("okButten")
	void onOkButtenClick(ClickEvent event) {
		if(isNew){
			newRow(testsData.get(0));
		}else{
			updateTests(testsData.get(0));
		}
		containerPanel.clear();
		ManagePanel managePanel = new ManagePanel();
		containerPanel.add(managePanel);
	}
	
	@UiHandler("cancelButten")
	void onCancelButtenClick(ClickEvent event) {
		containerPanel.clear();
		ManagePanel managePanel = new ManagePanel();
		containerPanel.add(managePanel);
	}
	
	//@UiHandler("absolutePanel")
	void onInitialize() {
		table = new CellTable<TestsData>();
	    table.setTableLayoutFixed(false);
	    // Display 7 rows in one page
	    table.setPageSize(1);
	    
	    provider = new AsyncDataProvider<TestsData>() {
		      @Override
		      protected void onRangeChanged(HasData<TestsData> display) {
		        int start = display.getVisibleRange().getStart();
		        int end = start + display.getVisibleRange().getLength();
		        end = end >= testsData.size() ? testsData.size() : end;
		        List<TestsData> sub = testsData.subList(start, end);
		        updateRowData(start, sub);
		      }
		    };
		    provider.updateRowCount(testsData.size(), true);
	    
	    // Add a text column to show the name.
	    Column<TestsData, String> suiteColumn = new Column<TestsData, String>(new EditTextCell()) {
		      @Override
		      public String getValue(TestsData object) {
		        return object.getSuiteName();
		      }
		      
		    };
		    suiteColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
		        @Override
		        public void update(int index, TestsData object, String value) {
		          // Called when the user changes the value.
		          object.setSuiteName(value);
		          refreshTable();
		        }
		      });
		    suiteColumn.setSortable(true);
		    table.addColumn(suiteColumn, "SuiteName");
		    
	    // Add a text column to show the name.
	    Column<TestsData, String> nameColumn = new Column<TestsData, String>(new EditTextCell()) {
	      @Override
	      public String getValue(TestsData object) {
	        return object.getTestName();
	      }
	      
	    };
	    nameColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setTestName(value);
	          refreshTable();
	        }
	      });
	    nameColumn.setSortable(true);
	    table.addColumn(nameColumn, "TestName");
	    
	    Column<TestsData, String> ClassValColumn = new Column<TestsData, String>(new EditTextCell()) {
		      @Override
		      public String getValue(TestsData object) {
		        return ListToString(object.getClassesNames(), ",");
		      }
		      
		    };
		    ClassValColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
		        @Override
		        public void update(int index, TestsData object, String value) {
		          // Called when the user changes the value.
		          object.setClassesNames(stringToList(value , ","));
		          refreshTable();
		        }
		      });
		    ClassValColumn.setSortable(true);
		    table.addColumn(ClassValColumn, "Classes");
	    
	    Column<TestsData, String> ParamersColumn = new Column<TestsData, String>(new EditTextCell()) {
	      @Override
	      public String getValue(TestsData object) {
	        return ListToString(object.getParametersNames(), ",");
	      }
	      
	    };
	    ParamersColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setParametersNames(stringToList(value , ","));
	          refreshTable();
	        }
	      });
	    ParamersColumn.setSortable(true);
	    table.addColumn(ParamersColumn, "ParamersNames");
      	    	    
	    Column<TestsData, String> ParamersValColumn = new Column<TestsData, String>(new EditTextCell()) {
	      @Override
	      public String getValue(TestsData object) {
	        return ListToString(object.getParametersValues(), ",");
	      }
	      
	    };
	    ParamersValColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setParametersValues(stringToList(value , ","));
	          refreshTable();
	        }
	      });
	    ParamersValColumn.setSortable(true);
	    table.addColumn(ParamersValColumn, "ParamersValues");
	}
	
	private void refreshTable(){
		provider.updateRowCount(testsData.size(), true);
		int start = table.getVisibleRange().getStart();
        int end = start + table.getVisibleRange().getLength();
        end = end >= testsData.size() ? testsData.size() : end;
        List<TestsData> sub = testsData.subList(start, end);
        table.setRowData(start, sub);
	}
	
	protected void newRow(TestsData testsData1) {
		List<TestsData> testsData = new ArrayList<TestsData>();
		testsData.add(testsData1);
		mainService.AddTests(testsData, new AsyncCallback<Boolean>() {
			public void onSuccess(Boolean pass) {
				dialogNoButten("", false);
				//getTests();
			}
				 
			public void onFailure(Throwable caught) {
				dialogNoButten("", false);
				dialogBox.setText("Remote Procedure Call - Failure on Remove");
				serverResponseLabel.addStyleName("serverResponseLabelError");
				serverResponseLabel.setHTML(SERVER_ERROR);
				dialogBox.center();
				closeButton.setFocus(true);
			}
		});
		dialogNoButten("waiting for server", true);
	}
	
	protected void updateTests(TestsData testData) {
		 List<TestsData> testsData = new ArrayList<TestsData>();
		 testsData.add(testData);
		mainService.UpdateTests(testsData, new AsyncCallback<Boolean>() {
			public void onSuccess(Boolean pass) {
				dialogNoButten("", false);
				refreshTable();
			}
				 
			public void onFailure(Throwable caught) {
				dialogNoButten("", false);
				dialogBox.setText("Remote Procedure Call - Failure on Update");
				serverResponseLabel.addStyleName("serverResponseLabelError");
				serverResponseLabel.setHTML(SERVER_ERROR);
				dialogBox.center();
				closeButton.setFocus(true);
			}
		});
		dialogNoButten("waiting for server", true); 
	}
	
	public void dialogNoButten(String msg, boolean show) {
		DOM.setStyleAttribute(dialogBoxNoButten.getElement(),
				"backgroundColor", "#ABCDEF");
		msg = msg.replaceAll(" ", "&nbsp;");
		dialogBoxNoButten.setHTML("<pre>" + msg + "</pre>");
		if (show) {
			dialogBoxNoButten.center();
		} else {
			dialogBoxNoButten.hide();
		}
	}
	
	protected String ListToString(List<String> list, String separator) {
		String ResultString = "";
		for (int i = list.size() - 1; i >= 0; i--)
		{
			ResultString = ResultString + list.get(i).trim() + separator;
		}
		
		return ResultString;
	}
	
	protected List<String> stringToList(String stringArray, String separator) {
		
		String[] pieces = stringArray.split(separator);
		
		for (int i = pieces.length - 1; i >= 0; i--)
		{
			pieces[i] = pieces[i].trim();
		}
		
		return new ArrayList<String>(Arrays.asList(pieces));
	}
	
}

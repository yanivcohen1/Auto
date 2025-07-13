package com.who.tlv.ServicesWebsites.client.Scheduler;

import java.util.Arrays;
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
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.TextColumn;
import com.who.tlv.ServicesWebsites.shared.TestsData;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.event.logical.shared.AttachEvent;
import com.google.gwt.i18n.client.DateTimeFormat;

public class NewPanelWidg<T> extends Composite implements HasText {

	private static NewPanelWidgUiBinder uiBinder = GWT.create(NewPanelWidgUiBinder.class);
	@UiField(provided=true) CellTable<TestsData> table;// = new CellTable<TestsData>();
	//@UiField(provided=true)SimplePager pager;
	@UiField Button okButten;
	@UiField Button cancelButten;
	//@UiField HTMLPanel htmlPanel;
	//r uiBinder = GWT.create(NewPanelWidgUiBinder.class);
	//@UiField(provided=true) CellTable<Object> cellTable = new CellTable<Object>();

	private static List<TestsData> testsData = Arrays.asList(new TestsData());
	
	interface NewPanelWidgUiBinder extends UiBinder<Widget, NewPanelWidg> {
	}

	public NewPanelWidg() {
		//this.pager = new SimplePager();
		onInitialize();
		//pager.setDisplay(table);
		initWidget(uiBinder.createAndBindUi(this));
	}

	public void setText(String text) {
		//button.setText(text);
	}

	public String getText() {
		return null;//button.getText();
	}

	@UiHandler("okButten")
	void onOkButtenClick(ClickEvent event) {
	}
	
	@UiHandler("cancelButten")
	void onCancelButtenClick(ClickEvent event) {
	}
	
	/*@Override
	 public Widget onInitialize() {
	    // Create a CellTable.
		//return widget;
	}*/
	
	//@UiHandler("absolutePanel")
	void onInitialize() {
		table = new CellTable<TestsData>();
	    table.setTableLayoutFixed(false);
	    // Display 7 rows in one page
	    table.setPageSize(1);
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
	          //ContactDatabase.get().refreshDisplays();
	        }
	      });
	    table.addColumn(nameColumn, "TestName");
	    
	    Column<TestsData, String> ProcessNameColumn = new Column<TestsData, String>(new EditTextCell()) {
	      @Override
	      public String getValue(TestsData object) {
	        return object.getProcessName();
	      }
	    };
	    ProcessNameColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setProcessName(value);
	          //ContactDatabase.get().refreshDisplays();
	        }
	      });
	    table.addColumn(ProcessNameColumn, "ProcessName");
		    
	    Column<TestsData, String> ParamsColumn = new Column<TestsData, String>(new EditTextCell()) {
	      @Override
	      public String getValue(TestsData object) {
	        return object.getParams();
	      }
	    };
	    ParamsColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setParams(value);
	          //ContactDatabase.get().refreshDisplays();
	        }
	      });
	    table.addColumn(ParamsColumn, "Parameters");
	    
	    Column<TestsData, String> TimeoutColumn = new Column<TestsData, String>(new EditTextCell()) {//EditTextCell
	        @Override
	        public String getValue(TestsData object) {
	          return object.getTimeOut();
	        }
	    };
	    TimeoutColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setTimeOut(value);
	          //ContactDatabase.get().refreshDisplays();
	        }
	      });
	    table.addColumn(TimeoutColumn, "Timeout(sec)");
	    
	    Column<TestsData, String> cronExpressColumn = new Column<TestsData, String>(new EditTextCell()) {
	      @Override
	      public String getValue(TestsData object) {
	        return object.getCronExpress();
	      }
	    };
	    cronExpressColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setCronExpress(value);
	          //ContactDatabase.get().refreshDisplays();
	        }
	      });
	    table.addColumn(cronExpressColumn, "cronExpress");
	    
	    DateTimeFormat dateTimeFormat = DateTimeFormat.getFormat("yy.MM.dd hh:mm aaa");
	    Column<TestsData, Date> lastRunColumn = new Column<TestsData, Date>(new DateCell(dateTimeFormat)) {
	      @Override
	      public Date getValue(TestsData object) {
	        return object.getLastRun();
	      }
	    };
	    //table.addColumn(lastRunColumn, "LastRun");

	    TextColumn<TestsData> ErrorDescColumn = new TextColumn<TestsData>() {
	      @Override
	      public String getValue(TestsData object) {
	    	  String returnText = object.getErrorDesc();
	    	  int length;
				if (returnText.length() < 50) {
					length = returnText.length();
				}else{
					length = 50;
				}
	        return object.getErrorDesc().substring(0, length);
	      }
	    };
	    table.addColumn(ErrorDescColumn, "ErrorDesc");

	    TextColumn<TestsData> ResultColumn = new TextColumn<TestsData>() {
          @Override
          public String getValue(TestsData object) {
            // Get the value from the selection model.
        	  return object.getResult();
          }
        };
        //table.addColumn(ResultColumn, "Result");
	    
        Column<TestsData, String> RetryColumn = new Column<TestsData, String>(new EditTextCell()) {
	        @Override
	        public String getValue(TestsData object) {
	          return object.getRetry();
	        }
	    };
	    RetryColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setRetry(value);
	          //ContactDatabase.get().refreshDisplays();
	        }
	      });
	    table.addColumn(RetryColumn, "RetryTimes");
	    
	    Column<TestsData, String> emailColumn = new Column<TestsData, String>(new EditTextCell()) {
	        @Override
	        public String getValue(TestsData object) {
	          return object.getEmail();
	        }
	    };
	    emailColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setEmail(value);
	          //ContactDatabase.get().refreshDisplays();
	        }
	      });
	    table.addColumn(emailColumn, "Email");
	    
	    Column<TestsData, String> RetryDelayColumn = new Column<TestsData, String>(new EditTextCell()) {
	        @Override
	        public String getValue(TestsData object) {
	          return object.getRetryDelay();
	        }
	    };
	    RetryDelayColumn.setFieldUpdater(new FieldUpdater<TestsData, String>() {
	        @Override
	        public void update(int index, TestsData object, String value) {
	          // Called when the user changes the value.
	          object.setRetryDelay(value);
	          //ContactDatabase.get().refreshDisplays();
	        }
	      });
	    table.addColumn(RetryDelayColumn, "RetryDelay(Sec)");
	}
}

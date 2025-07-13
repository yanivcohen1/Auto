package com.who.test.client.panels.manage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Set;

import com.google.gwt.user.client.DOM;
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
import com.google.gwt.cell.client.Cell;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.DateCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.cell.client.NumberCell;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.Dictionary;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.SimpleCheckBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.IntegerBox;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.ColumnSortEvent.ListHandler;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.view.client.AsyncDataProvider;
import com.google.gwt.view.client.HasData;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.NoSelectionModel;
import com.google.gwt.view.client.ProvidesKey;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SelectionChangeEvent.Handler;
import com.google.gwt.view.client.SingleSelectionModel;
import com.who.test.client.IMainService;
import com.who.test.client.IMainServiceAsync;
import com.who.test.client.panels.ISearchFilter;
import com.who.test.client.panels.MenuPanel;
import com.who.test.client.panels.SugestWordPanel;
import com.who.test.client.util.Alert;
import com.who.test.client.util.DialogCallback;
import com.who.test.shared.TestsData;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class ManagePanel extends Composite implements ISearchFilter{
	
	  @SuppressWarnings("deprecation")
	  private static List<TestsData> testsData = Arrays.asList();
	  final SingleSelectionModel<TestsData> selModel = new SingleSelectionModel<TestsData>();
	  final AsyncDataProvider<TestsData> provider;
	  final CellTable<TestsData> table;
	  final ManagePanel thisPanel = this;
	  //public final DialogBox dialogBoxNoButten = new DialogBox();
	  
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
	private final IMainServiceAsync mainService = GWT.create(IMainService.class);
	static String m_newline = "\n";//System.getProperty("line.separator");
	
	public final DialogBox dialogBox = new DialogBox();
	final HTML serverResponseLabel = new HTML();
	final Button closeButton = new Button("Close");
	private int timeoutCicle;
	private Timer sessionTimeoutResponseTimer;
	private Timer getDataTimer;
	private String panelId = Integer.toString((int) ((Math.random()*1000)+1)); 
	private AbsolutePanel flowPanel;
	private NewPanelWidg newPanelWidg = new NewPanelWidg(this);
	private SugestWordPanel sugestWord;
	private boolean isLoaded = false;
	private Widget parentWig;

	public ManagePanel(Widget parentWig) {
		setParentWig(parentWig);
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
		closeButton.addClickHandler(new ClickHandler() {
					public void onClick(ClickEvent event) {
						dialogBox.hide();
					}
				});
				
		flowPanel = new AbsolutePanel();
		initWidget(flowPanel);
		flowPanel.setSize("1121px", "813px");
				
		// Create a CellTable.
		// Attach a column sort handler to the ListDataProvider to sort the list.
		/**
	     * The key provider that provides the unique ID of a contact.
	     */
	    final ProvidesKey<TestsData> KEY_PROVIDER = new ProvidesKey<TestsData>() {
	      @Override
	      public Object getKey(TestsData item) {
	        return item == null ? null : item.getSuiteId();
	      }
	    };
	    
	    ListHandler<TestsData> sortHandler = new ListHandler<TestsData>(
	    		testsData);
	    
	    DateTimeFormat dateTimeFormat = DateTimeFormat.getFormat("yy.MM.dd hh:mm aaa");
	    
	    // Associate an async data provider to the table
	    // XXX: Use AsyncCallback in the method onRangeChanged
	    // to actaully get the data from the server side
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
	    
	    selModel.addSelectionChangeHandler(new Handler() {
	        @Override
	        public void onSelectionChange(SelectionChangeEvent event) {
	            TestsData clickedObject = selModel.getSelectedObject();
	        }
	    });
        	    	    
	    VerticalPanel verticalPanel = new VerticalPanel();
	    flowPanel.add(verticalPanel);
	    
	    FlexTable flexTable = new FlexTable();
	    verticalPanel.add(flexTable);
	    flexTable.setSize("1070px", "607px");
	    table = new CellTable<TestsData>(KEY_PROVIDER);
	    flexTable.setWidget(0, 0, table);
	    table.addColumnSortHandler(sortHandler);
	    // Do not refresh the headers and footers every time the data is updated.
	    table.setAutoHeaderRefreshDisabled(true);
	    table.setAutoFooterRefreshDisabled(true);
	    table.setStyleName("cellTable");
	    table.setTableLayoutFixed(false);
	    // Display 15 rows in one page
	    table.setPageSize(15);
	    
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
		    sortHandler.setComparator(suiteColumn, new Comparator<TestsData>() {
		      @Override
		      public int compare(TestsData o1, TestsData o2) {
		        return o1.getSuiteName().compareTo(o2.getSuiteName());
		      }
		    });
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
	    sortHandler.setComparator(nameColumn, new Comparator<TestsData>() {
	      @Override
	      public int compare(TestsData o1, TestsData o2) {
	        return o1.getTestName().compareTo(o2.getTestName());
	      }
	    });
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
		    sortHandler.setComparator(ClassValColumn, new Comparator<TestsData>() {
		      @Override
		      public int compare(TestsData o1, TestsData o2) {
		        return o1.getClassesNames().get(0).compareTo(o2.getClassesNames().get(0));
		      }
		    });
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
	    sortHandler.setComparator(ParamersColumn, new Comparator<TestsData>() {
	      @Override
	      public int compare(TestsData o1, TestsData o2) {
	        return o1.getParametersNames().get(0).compareTo(o2.getParametersNames().get(0));
	      }
	    });
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
	    sortHandler.setComparator(ParamersValColumn, new Comparator<TestsData>() {
	      @Override
	      public int compare(TestsData o1, TestsData o2) {
	        return o1.getParametersValues().get(0).compareTo(o2.getParametersValues().get(0));
	      }
	    });
	    table.addColumn(ParamersValColumn, "ParamersValues");
	    
	    provider.addDataDisplay(table);
        
        table.setSelectionModel(selModel);
        table.setSize("1034px", "602px");
        
        HorizontalPanel horizontalPanel = new HorizontalPanel();
        verticalPanel.add(horizontalPanel);
        
	    SimplePager pager = new SimplePager();
	    pager.setPageSize(2);
	    pager.setDisplay(table);
	    horizontalPanel.add(pager);
	    
	    Grid grid = new Grid(1, 1);
	    horizontalPanel.add(grid);
	    grid.setHeight("31px");
	    
	    Button btnNew = new Button("New");
	    btnNew.setStylePrimaryName(".gwt-Button-blue");
	    btnNew.setStyleName("backgrownd-blue");
	    btnNew.setText("New Test");
	    horizontalPanel.add(btnNew);
	    btnNew.addClickHandler(new ClickHandler() {
	    	public void onClick(ClickEvent event) {
	    		loadNewPanel();
	    		//newRow();
	    	}
	    });
	    btnNew.setSize("85px", "30px");
	    
	    Grid grid_1 = new Grid(1, 1);
	    horizontalPanel.add(grid_1);
	    grid_1.setHeight("31px");
	    
	    Button btnUpdate = new Button("Update");
	    btnUpdate.setStylePrimaryName("backgrownd-Green");
	    btnUpdate.setStyleName("backgrownd-Green");
	    btnUpdate.setText("Save Changes");
	    btnUpdate.setSize("109px", "30px");
	    horizontalPanel.add(btnUpdate);
	    btnUpdate.addClickHandler(new ClickHandler() {
	    	public void onClick(ClickEvent event) {
	    		//loadUpdatePanel(selModel.getSelectedObject());
	    		updateTests();
	    	}
	    });
	    
	    Grid grid_2 = new Grid(1, 1);
	    horizontalPanel.add(grid_2);
	    grid_2.setHeight("31px");
	    
	    Button btnDelete = new Button("Delete");
	    btnDelete.setStyleName("backgrownd-red");
	    btnDelete.setText("Delete Selected");
	    btnDelete.setSize("113px", "30px");
	    horizontalPanel.add(btnDelete);
		btnDelete.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				dialogConfirm("Confirm Delete?", "Confirm Delete");
			}
		});
	    
	    Grid grid_3 = new Grid(1, 1);
	    horizontalPanel.add(grid_3);
	    grid_3.setHeight("31px");
	    Button btnRefresh = new Button("Refresh");
	    btnRefresh.setStyleName("gwt-Button-Yellow");
	    btnRefresh.setText("Refresh Table");
	    horizontalPanel.add(btnRefresh);
	    btnRefresh.addClickHandler(new ClickHandler() {
	    	public void onClick(ClickEvent event) {
	    		getTests();
	    	}
	    });
	    btnRefresh.setSize("102px", "30px");
	    final Button btnGetData = new Button("GetData");
	    horizontalPanel.add(btnGetData);
	    btnGetData.setVisible(false);
	    btnGetData.setText("GetData");
		getTests();
		setStyleName("border");
	}
	
	protected void loadSearchBox(){
		if (!isLoaded) {
			List<String> wordsToSearch = new ArrayList<String>();
			for (TestsData testData: testsData) {
				wordsToSearch.add(testData.getTestName());
			}
			String[] _wordsToSearch = wordsToSearch.toArray(new String[wordsToSearch.size()]);
			//sugestWord = new SugestWordPanel(_wordsToSearch);
			flowPanel.insert(sugestWord, 0);
			isLoaded = true;
		}
	}
	
	protected void loadNewPanel() {
		newPanelWidg.setTestsData(Arrays.asList(
				new TestsData("BAU Tests Secend", "New Test", Arrays.asList("New ParameterName"), 
						Arrays.asList("New ParameterValue"), Arrays.asList("New ClassName")))); 
		newPanelWidg.center();
		newPanelWidg.updateTable();
	}

	protected void loadUpdatePanel(TestsData testsData) {
		
		newPanelWidg.setTestsData(Arrays.asList(testsData)); 
		flowPanel.clear();
		flowPanel.add(newPanelWidg);
		newPanelWidg.updateTable();
	}
	
	protected void newRow(TestsData testsData1) {
		//testsData1 = new TestsData("BAU Tests Secend", "New Test", Arrays.asList("New ParameterName"), Arrays.asList("New ParameterValue"), Arrays.asList("New ClassName"));
		testsData.add(testsData1);
		//provider.addDataDisplay(table);
	    int start = table.getVisibleRange().getStart();
        int end = start + table.getVisibleRange().getLength();
        end = end >= testsData.size() ? testsData.size() : end;
        List<TestsData> sub = testsData.subList(start, end);
        table.setRowData(start, sub);
        provider.updateRowCount(testsData.size(), true);
		List<TestsData> testsData = new ArrayList<TestsData>();
		testsData.add(testsData1);
		mainService.AddTests(testsData, new AsyncCallback<Boolean>() {
			public void onSuccess(Boolean pass) {
				Alert.dialogNoButten("", false);
				getTests();
			}
				 
			public void onFailure(Throwable caught) {
				Alert.dialogNoButten("", false);
				Alert.dialogWithButten("Remote Procedure Call - Failure on Remove");
			}
		});
		Alert.dialogNoButten("waiting for server", true);
	}

	public void deleteRow() {
		TestsData testsData1 = selModel.getSelectedObject();
		testsData.remove(testsData1);
		provider.updateRowCount(testsData.size(), true);
		int start = table.getVisibleRange().getStart();
        int end = start + table.getVisibleRange().getLength();
        end = end >= testsData.size() ? testsData.size() : end;
        List<TestsData> sub = testsData.subList(start, end);
        table.setRowData(start, sub);
		List<TestsData> testsData = new ArrayList<TestsData>();
		testsData.add(testsData1);
		mainService.RemoveTests(testsData, new AsyncCallback<Boolean>() {
			public void onSuccess(Boolean pass) {
				Alert.dialogNoButten("", false);
				getTests();
			}
				 
			public void onFailure(Throwable caught) {
				Alert.dialogNoButten("", false);
				Alert.dialogWithButten("Remote Procedure Call - Failure on Remove");
			}
		});
		Alert.dialogNoButten("waiting for server", true);
	}

	protected List<String> stringToList(String stringArray, String separator) {
		
		String[] pieces = stringArray.split(separator);
		
		for (int i = pieces.length - 1; i >= 0; i--)
		{
			pieces[i] = pieces[i].trim();
		}
		
		return new ArrayList<String>(Arrays.asList(pieces));
	}

	protected String ListToString(List<String> list, String separator) {
		String ResultString = "";
		for (int i = list.size() - 1; i >= 0; i--)
		{
			ResultString = ResultString + list.get(i).trim() + separator;
		}
		
		return ResultString;
	}

	public void getTests() {
		mainService.GetTests(new AsyncCallback<List<TestsData>>() {
			public void onSuccess(List<TestsData> tests) {
				Alert.dialogNoButten("", false);
				testsData = tests;
				refreshTable();
				//loadSearchBox();
			}
				 
			public void onFailure(Throwable caught) {
				Alert.dialogNoButten("", false);
				Alert.dialogWithButten("Remote Procedure Call - Failure on Update");
			}
		});
		Alert.dialogNoButten("waiting for server", true);
	}
	
	protected void updateTests() {
		 List<TestsData> testsData = new ArrayList<TestsData>();
		 testsData.addAll(table.getVisibleItems());
		mainService.UpdateTests(testsData, new AsyncCallback<Boolean>() {
			public void onSuccess(Boolean pass) {
				Alert.dialogNoButten("", false);
				refreshTable();
			}
				 
			public void onFailure(Throwable caught) {
				Alert.dialogNoButten("", false);
				Alert.dialogWithButten("Remote Procedure Call - Failure on Update");
			}
		});
		Alert.dialogNoButten("waiting for server", true); 
	}
	
	protected void refreshTable(){
		provider.updateRowCount(testsData.size(), true);
		int start = table.getVisibleRange().getStart();
        int end = start + table.getVisibleRange().getLength();
        end = end >= testsData.size() ? testsData.size() : end;
        List<TestsData> sub = testsData.subList(start, end);
        table.setRowData(start, sub);
	}

	@Override
	public String executeFilter(String searchWord) {
		if (!searchWord.trim().isEmpty()) {
			List<TestsData> testsDatas = new ArrayList<TestsData>();
			for (TestsData testData : testsData) {
				if (testData.getTestName().toLowerCase().contains(searchWord.toLowerCase())) {
					testsDatas.add(testData);
				}
			}
			testsData = testsDatas;
			refreshTable();
		}else{
			getTests();
		}
		return null;
	}

	public Widget getParentWig() {
		return parentWig;
	}

	public void setParentWig(Widget parentWig) {
		this.parentWig = parentWig;
	}
	
	public void dialogConfirm(String msg , String header) {
		final DialogBox dialogBoxWithButten = new DialogBox();
		dialogBoxWithButten.setGlassEnabled(true);
		Button okButton = new Button("Ok");
		okButton.setStylePrimaryName(".gwt-Button-blue");
		okButton.setStyleName("gwt-Button-blue");
		Button cancelButton = new Button("Cancel");
		cancelButton.setStylePrimaryName(".gwt-Button-gray");
		cancelButton.setStyleName("gwt-Button-gray");
		HTML serverResponseLabel = new HTML();
		dialogBoxWithButten.setText(header);
		dialogBoxWithButten.setAnimationEnabled(true);
		// We can set the id of a widget by accessing its Element
		VerticalPanel dialogVPanel = new VerticalPanel();
		dialogVPanel.addStyleName("dialogVPanel");
		dialogVPanel.add(serverResponseLabel);
		dialogVPanel.setHorizontalAlignment(VerticalPanel.ALIGN_RIGHT);
		HorizontalPanel horizontalPanel = new HorizontalPanel();
		dialogVPanel.add(horizontalPanel);
		horizontalPanel.add(okButton);
		horizontalPanel.add(cancelButton);
		dialogBoxWithButten.setWidget(dialogVPanel);
		// Add a handler to close the DialogBox
		okButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				//dialogCallback.onOk();
				dialogBoxWithButten.hide();
				deleteRow();
			}
		});
		cancelButton.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				dialogBoxWithButten.hide();
			}
		});
		serverResponseLabel.setHTML(new HTML("<br>") + msg + new HTML("<br>"));
		dialogBoxWithButten.center();
		okButton.setFocus(true);
	}
	
}

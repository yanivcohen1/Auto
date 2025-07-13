package com.who.tlv.ServicesWebsites.client.Scheduler;

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
import com.who.tlv.ServicesWebsites.client.MainService;
import com.who.tlv.ServicesWebsites.client.MainServiceAsync;
import com.who.tlv.ServicesWebsites.client.SessionInterfaceService;
import com.who.tlv.ServicesWebsites.client.SessionInterfaceServiceAsync;
import com.who.tlv.ServicesWebsites.client.Panels.LoginPanel;
import com.who.tlv.ServicesWebsites.client.Panels.MenuPanel;
//import com.who.tlv.ServicesWebsites.client.Scheduler.CellTableExample.Contact;
import com.who.tlv.ServicesWebsites.client.Tools.ToolPanel;
import com.who.tlv.ServicesWebsites.server.DB.Tests;
import com.who.tlv.ServicesWebsites.shared.TestsData;
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
import com.google.gwt.user.client.ui.HorizontalPanel;

public class SchedulerPanel extends Composite {
	
	  @SuppressWarnings("deprecation")
	  private static List<TestsData> testsData = Arrays.asList();
		  //new TestsData(1,"Dir C", "cmd", "/C Dir C:\\", "60", "0 0/60 * * * ?", new Date(80, 4, 12), "Not run yet", "null", "3", "30"),
		  //new TestsData(1,"Dir D", "cmd", "/C Dir C:\\Temp\\", "60", "0 0/60 * * * ?", new Date(80, 4, 12), "Not run yet", "null", "3", "30"));
	
	  final SingleSelectionModel<TestsData> selModel = new SingleSelectionModel<TestsData>();
	  final AsyncDataProvider<TestsData> provider;
	  final CellTable<TestsData> table;
	  public final DialogBox dialogBoxNoButten = new DialogBox();
	  
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
	
	static String m_newline = "\n";//System.getProperty("line.separator");
	
	public final DialogBox dialogBox = new DialogBox();
	final HTML serverResponseLabel = new HTML();
	public final Button btnStart = new Button("Start");
	final Button closeButton = new Button("Close");
	final Button btnStop = new Button("Stop");
	final TextArea Monitor = new TextArea();
	private int timeoutCicle;
	private Timer sessionTimeoutResponseTimer;
	private Timer GetDataTimer;
	private String PanelId = Integer.toString((int) ((Math.random()*1000)+1)); 
	
	public SchedulerPanel() {
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
				
		AbsolutePanel flowPanel = new AbsolutePanel();
		initWidget(flowPanel);
		flowPanel.setSize("1074px", "804px");
		final TextArea CMDtextArea = new TextArea();
		CMDtextArea.setText("cmd");
		flowPanel.add(CMDtextArea, 0, 297);
		CMDtextArea.setSize("411px", "23px");
		flowPanel.add(btnStop, 71, 397);
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
		flowPanel.add(Monitor, 0, 436);
		Monitor.setSize("411px", "246px");
		final Button btnGetData = new Button("GetData");
		flowPanel.add(btnGetData, 0, 546);
		btnGetData.setVisible(false);
		btnGetData.setText("GetData");
		flowPanel.add(btnStart, 0, 397);
		btnStart.setSize("65px", "33px");
		btnStart.setText("Start");
		
		final IntegerBox TimeOutIntBox = new IntegerBox();
		TimeOutIntBox.setText("60");
		flowPanel.add(TimeOutIntBox, 269, 404);
		
		final InlineLabel nlnlblTimeoutsec = new InlineLabel("TimeOut(Sec)");
		flowPanel.add(nlnlblTimeoutsec, 182, 412);
		
		final InlineLabel nlnlblCommand = new InlineLabel("Command");
		flowPanel.add(nlnlblCommand, 0, 273);
		
		InlineLabel nlnlblParams = new InlineLabel("Parameters");
		flowPanel.add(nlnlblParams, 0, 336);
		nlnlblParams.setSize("59px", "16px");
		
		final TextArea ParamsTextArea = new TextArea();
		ParamsTextArea.setText("/C type \"C:\\Web\\uploaded\\Test.bat\"");
		flowPanel.add(ParamsTextArea, 0, 358);
		ParamsTextArea.setSize("411px", "23px");
				
		// Create a CellTable.
		// Attach a column sort handler to the ListDataProvider to sort the list.
		/**
	     * The key provider that provides the unique ID of a contact.
	     */
	    final ProvidesKey<TestsData> KEY_PROVIDER = new ProvidesKey<TestsData>() {
	      @Override
	      public Object getKey(TestsData item) {
	        return item == null ? null : item.getId();
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
	        	//selModel.getKeyProvider()
	            TestsData clickedObject = selModel.getSelectedObject(); //selModel.getLastSelectedObject();
	            //GWT.log("Selected ID:" + clickedObject.id +" Name:"+ clickedObject.testName);
	            TimeOutIntBox.setText(clickedObject.getTimeOut());
	            CMDtextArea.setText(clickedObject.getProcessName());
	            ParamsTextArea.setText(clickedObject.getParams());
	        }
	    });
        
        VerticalPanel verticalPanel = new VerticalPanel();
        flowPanel.add(verticalPanel);
        table = new CellTable<TestsData>(KEY_PROVIDER);
        verticalPanel.add(table);
        table.addColumnSortHandler(sortHandler);
        // Do not refresh the headers and footers every time the data is updated.
        table.setAutoHeaderRefreshDisabled(true);
        table.setAutoFooterRefreshDisabled(true);
        table.setStyleName("cellTable");
        table.setTableLayoutFixed(false);
        // Display 7 rows in one page
        table.setPageSize(2);
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
              refreshTable();
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
	          refreshTable();
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
	          refreshTable();
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
	          refreshTable();
	        }
	      });
	    table.addColumn(cronExpressColumn, "cronExpress");
	    Column<TestsData, Date> lastRunColumn = new Column<TestsData, Date>(new DateCell(dateTimeFormat)) {
	      @Override
	      public Date getValue(TestsData object) {
	        return object.getLastRun();
	      }
	    };
	    table.addColumn(lastRunColumn, "LastRun");
	    
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
	    	    	    table.addColumn(ResultColumn, "Result");
	    	    	    
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
              refreshTable();
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
              refreshTable();
            }
          });
        table.addColumn(RetryDelayColumn, "RetryDelay(Sec)");
        provider.addDataDisplay(table);
        
        table.setSelectionModel(selModel);
        table.setSize("1034px", "229px");
        
        HorizontalPanel horizontalPanel = new HorizontalPanel();
        flowPanel.add(horizontalPanel);
        
        	    SimplePager pager = new SimplePager();
        	    pager.setPageSize(2);
        	    pager.setDisplay(table);
        	    horizontalPanel.add(pager);
        	    
        	    Button btnDelete = new Button("Delete");
        	    horizontalPanel.add(btnDelete);
        	    btnDelete.addClickHandler(new ClickHandler() {
        	    	public void onClick(ClickEvent event) {
        	    		TestsData testsData1 = selModel.getSelectedObject();
        	    		//int index = testsData.indexOf(testsData1);
        	    		testsData.remove(testsData1);
        	    		provider.updateRowCount(testsData.size(), true);
        	    		int start = table.getVisibleRange().getStart();
        	            int end = start + table.getVisibleRange().getLength();
        	            end = end >= testsData.size() ? testsData.size() : end;
        	            List<TestsData> sub = testsData.subList(start, end);
        	            table.setRowData(start, sub);//updateRowData(start, sub);
        	    		//ListDataProvider<TestsData> dataProvider = new ListDataProvider<TestsData>();
        	    		//dataProvider.addDataDisplay(table);
        	    		
        	    		//Set<HasData<TestsData>> list = provider.getDataDisplays();
        	    		//list.remove(testsData1);//.indexOf(testsData1);
        	    		//provider.updateRowCount(testsData.size(), true);
        	    		//list.remove(indexOf);
        	    		//dataProvider.refresh();
        	    		//model.
        	    		//table.removeColumn(
        	    		List<TestsData> testsData = new ArrayList<TestsData>();
        	    		testsData.add(testsData1);
        	    		mainService.RemoveTests(testsData, new AsyncCallback<Boolean>() {
        	    			public void onSuccess(Boolean pass) {
        	    				dialogNoButten("", false);
        	    				UpdateTests();
        	    				UpdateTests();
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
        	    });
        	    btnDelete.setText("Delete");
        	    btnDelete.setSize("52px", "30px");
        	    
        	    Button btnUpdate = new Button("Update");
        	    horizontalPanel.add(btnUpdate);
        	    btnUpdate.addClickHandler(new ClickHandler() {
        	    	public void onClick(ClickEvent event) {
        	    		UpdateTests();
        	    	}
        	    });
        	    btnUpdate.setText("Update");
        	    btnUpdate.setSize("52px", "30px");
        	    
        	    Button btnNew = new Button("New");
        	    horizontalPanel.add(btnNew);
        	    btnNew.addClickHandler(new ClickHandler() {
        	    	public void onClick(ClickEvent event) {
        	    		//TestsData testsData1 = new TestsData(); //= selModel.getSelectedObject();
        	    		TestsData testsData1 = new TestsData("Dir Temp", "cmd", "/C Dir C:\\", "60", "0 0/60 * * * ?", new Date(80, 4, 12), "Not run yet", "null", "3", "30", "");
        	    		//testsData1.set
        	    		//ListDataProvider<TestsData> dataProvider = new ListDataProvider<TestsData>();
        	    		//dataProvider.addDataDisplay(table);
        	    		
        	    		//Set<HasData<TestsData>> list = provider.getDataDisplays();//.getList();
        	    		//int indexOf = list.indexOf(testsData1);
        	    		testsData.add(testsData1);
        	    		//provider.addDataDisplay(table);
        	    	    int start = table.getVisibleRange().getStart();
        	            int end = start + table.getVisibleRange().getLength();
        	            end = end >= testsData.size() ? testsData.size() : end;
        	            List<TestsData> sub = testsData.subList(start, end);
        	            table.setRowData(start, sub);//updateRowData(start, sub);
        	            provider.updateRowCount(testsData.size(), true);
        	    		//list.add(arg0).add(0, testsData1);
        	    		//provider.up.refresh();

        	    		List<TestsData> testsData = new ArrayList<TestsData>();
        	    		testsData.add(testsData1);
        	    		mainService.AddTests(testsData, new AsyncCallback<Boolean>() {
        	    			public void onSuccess(Boolean pass) {
        	    				dialogNoButten("", false);
        	    				//UpdateTests();
        	    				GetTests();
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
        	    });
        	    btnNew.setSize("52px", "30px");
        	    
        	    Button btnRefresh = new Button("Refresh");
        	    horizontalPanel.add(btnRefresh);
        	    btnRefresh.addClickHandler(new ClickHandler() {
        	    	public void onClick(ClickEvent event) {
        	    		GetTests();
        	    		UpdateTests();
        	    	}
        	    });
        	    btnRefresh.setSize("64px", "30px");
		
		//ListBox comboBox = new ListBox();
		//comboBox.setVisible(false);
		//flowPanel.add(comboBox, 426, 245);
		btnStart.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				String[] args = new String[3];
				args[0] = TimeOutIntBox.getText();
				args[1] = CMDtextArea.getText();
				args[2] = ParamsTextArea.getText();
				Monitor.setText("");
				btnStart.setEnabled(false);
				btnStop.setEnabled(true);
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
		initSessionTimers();
		GetTests();
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
					//dialogNoButten("", false);
					// Show the RPC error message to the user
					dialogBox.setText("Remote Procedure Call - Failure");
					serverResponseLabel.addStyleName("serverResponseLabelError");
					serverResponseLabel.setHTML(SERVER_ERROR);
					dialogBox.center();
					closeButton.setFocus(true);
					GetData();
				}

				public void onSuccess(String[] result) {
					//dialogNoButten("", false);
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
			//dialogNoButten("waiting for server", true);
		}
		 
	}

	private void GetTests() {
		mainService.GetTests(new AsyncCallback<List<TestsData>>() {
			public void onSuccess(List<TestsData> tests) {
				dialogNoButten("", false);
				testsData = tests;
				int start = table.getVisibleRange().getStart();
		        int end = start + table.getVisibleRange().getLength();
		        end = end >= testsData.size() ? testsData.size() : end;
		        List<TestsData> sub = testsData.subList(start, end);
		        table.setRowData(start, sub);//updateRowData(start, sub);
		        provider.updateRowCount(testsData.size(), true);
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
	
	private void UpdateTests() {
		 List<TestsData> testsData = new ArrayList<TestsData>();
		 testsData.addAll(table.getVisibleItems());
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
	
	private void refreshTable(){
		provider.updateRowCount(testsData.size(), true);
		int start = table.getVisibleRange().getStart();
        int end = start + table.getVisibleRange().getLength();
        end = end >= testsData.size() ? testsData.size() : end;
        List<TestsData> sub = testsData.subList(start, end);
        table.setRowData(start, sub);//updateRowData(start, sub);
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
}

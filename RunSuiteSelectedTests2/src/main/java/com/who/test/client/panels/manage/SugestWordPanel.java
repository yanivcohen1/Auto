package com.who.test.client.panels.manage;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.MultiWordSuggestOracle;
import com.google.gwt.user.client.ui.SuggestBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.i18n.client.HasDirection.Direction;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.Window;
import com.who.test.client.IMainService;
import com.who.test.client.IMainServiceAsync;
import com.who.test.client.util.Alert;
import com.who.test.shared.TestsData;
import com.who.test.shared.UserDto;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class SugestWordPanel extends Composite implements IConstants  {
	private TextBox textBoxUsername;
	private PasswordTextBox textBoxPassword;
	private final IMainServiceAsync mainService = GWT.create(IMainService.class);
	private List<TestsData> testsData;
	private VerticalPanel suggestPanel;
	private MultiWordSuggestOracle oracle;
	private Widget neighbor;
	private String[] searchWord;
	
	public SugestWordPanel(Widget neighbor) {
		this.neighbor = neighbor;
		suggestPanel = new VerticalPanel();
		//suggestPanel.setStyleName("backgrownd");
		suggestPanel.setBorderWidth(1);
		initWidget(onInitialize());
		ServerGetSuggestWords();
	}
	
	/**
	   * Initialize this example.
	   */
	  public Widget onInitialize() {
	    // Define the oracle that finds suggestions
	    suggestPanel.add((IsWidget) new HTML(cwSuggestBoxLabel()));
	    	    	    
	    HorizontalPanel horizontalPanel = new HorizontalPanel();
	    suggestPanel.add(horizontalPanel);

	    oracle = new MultiWordSuggestOracle();
	    // Create the suggest box
	    final SuggestBox suggestBox = new SuggestBox(oracle);
	    horizontalPanel.add(suggestBox);
	    //oracle.add("yaniv");
	    Button btnNewButton = new Button("Search Button");
	    btnNewButton.addClickHandler(new ClickHandler() {
	    	public void onClick(ClickEvent event) {
	    		ISearchFilter iSearchFilter = (ISearchFilter)getNeighbor();
	    		iSearchFilter.executeFilter(suggestBox.getText());
	    	}
	    });
	    btnNewButton.setText("FilterTests");
	    horizontalPanel.add(btnNewButton);
	    btnNewButton.setHeight("34px");
	    suggestBox.ensureDebugId("cwSuggestBox");

	    // Return the panel
	    return suggestPanel;
	  }
	
	@Override
	public String cwSuggestBoxDescription() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String cwSuggestBoxLabel() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String cwSuggestBoxName() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String[] cwSuggestBoxWords() {
		// TODO Auto-generated method stub
		return getSearchWord();
	}

	public String[] getSearchWord() {
		return this.searchWord;
	}

	public void setSearchWord(String[] searchWord) {
		oracle.clear();
		for (int i = 0; i < searchWord.length; ++i) {
		      oracle.add(searchWord[i]);
		    }
		this.searchWord = searchWord;
	}

	public Widget getNeighbor() {
		return neighbor;
	}

	public void setNeighbor(Widget neighbor) {
		this.neighbor = neighbor;
	}

	public List<TestsData> getTestsData() {
		return testsData;
	}

	public void setTestsData(List<TestsData> testsData) {
		//SugestWordPanel.testsData = testsData;
	}
	
	private void ServerGetSuggestWords() {
		
		mainService.GetTests(new AsyncCallback<List<TestsData>>() {
			public void onSuccess(List<TestsData> tests) {
				List<String> testsNames = new ArrayList<String>();
				for (TestsData testData : tests) {
					testsNames.add(testData.getTestName());
				}
				setSearchWord(testsNames.toArray(new String[testsNames.size()]));
				Alert.dialogNoButten("", false);
			}
				 
			public void onFailure(Throwable caught) {
				Alert.dialogNoButten("", false);
				Alert.dialogWithButten(Alert.SERVER_ERROR);
			}
		});
		Alert.dialogNoButten("Waitting To Server!", true); 
	}
	
}

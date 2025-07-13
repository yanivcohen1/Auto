package com.who.tlv.ServicesWebsites.client.Tools;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.SimpleCheckBox;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.FlowPanel;

public class ReqXPanel extends Composite {
	public final ListBox comboBox;
	public final SimpleCheckBox simpleCheckBox;
	public ReqXPanel() {
		
		AbsolutePanel absolutePanel = new AbsolutePanel();
		initWidget(absolutePanel);
		absolutePanel.setSize("421px", "116px");
		
		comboBox = new ListBox();
		absolutePanel.add(comboBox, 10, 59);
		comboBox.addItem("http://www.williamhillcasino.com");
		comboBox.addItem("http://www.eurogrand.com");
		comboBox.addItem("http://www2.williamhill.com");
		comboBox.addItem("http://www.prestigecasino.com");
		comboBox.addItem("http://www.21nova.com");
		comboBox.addItem("http://www.rubybingo.com");
		comboBox.addItem("http://www.williamhill.com");
		comboBox.addItem("http://casino.williamhill.com");
		comboBox.addItem("http://www.cotedazurpalace.com");
		comboBox.addItem("http://www.SkyKingsCasino.com");
		comboBox.addItem("http://www.joylandcasino.com");
		comboBox.addItem("http://www.cdpoker.com");
		comboBox.addItem("http://www.newyorkcasino.com");
		comboBox.addItem("http://www.usacasino.com");
		comboBox.addItem("http://www.rubybingo.co.uk");
		comboBox.addItem("http://www.ambercoastcasino.com");
		comboBox.addItem("http://www.aqualoungecasino.com");
		comboBox.addItem("http://www.diamondclubcasino.com");
		comboBox.addItem("http://www.playgatecasino.com");
		comboBox.addItem("http://www.prestige-bingo.com");
		comboBox.addItem("http://www.affutd.com");
		comboBox.addItem("http://www.williamhillpoker.com");
		comboBox.addItem("http://www.eurograndmobile.com/include/img/internal/");
		comboBox.addItem("http://www.prestigecasino.com/sharedobj/asyncqueues");
		comboBox.addItem("http://www.euro-casinos.net/whfeed/leeds/get_ranks_xml.php?");
		comboBox.addItem("http://casinotimes.co.uk/");
		comboBox.addItem("http://help.williamhill.com/");
		comboBox.addItem("http://toolbar.williamhill.com ");
		comboBox.addItem("http://serve.williamhillcasino.com/promoRedirect?");
		comboBox.addItem("http://www2.williamhill.com/en/itv2/");
		comboBox.addItem("http://download.prestigecasino.com/flash/16/casino_prestige");
		comboBox.addItem("http://new.prestigecasino.com/freespin.html");
		comboBox.addItem("http://livecasino.eurogrand.com/");
		simpleCheckBox = new SimpleCheckBox();
		simpleCheckBox.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				if (simpleCheckBox.getValue()) {
					comboBox.setEnabled(false);
				}else{
					comboBox.setEnabled(true);
				}	
			}
		});
		absolutePanel.add(simpleCheckBox, 76, 0);
		
		InlineLabel nlnlblSelectAll = new InlineLabel("Select All:");
		absolutePanel.add(nlnlblSelectAll, 10, 0);
		
		InlineLabel nlnlblSelectBrand = new InlineLabel("Select Brand:");
		absolutePanel.add(nlnlblSelectBrand, 10, 35);
	}

	public String[] Exe() {
		int i =comboBox.getSelectedIndex();
		String Param = comboBox.getItemText(i);
		String SelectAll = simpleCheckBox.getValue().toString();
		String[] args = new String[3];
		args[0] = "";
		args[1] = "java";
		args[2] = "-jar C:\\Web\\RequstX.jar "+ SelectAll + " " +Param;
		return args;
	}
	
}

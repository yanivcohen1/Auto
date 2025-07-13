package com.who.tlv.ServicesWebsites.client.Tools;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.SimpleCheckBox;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.TextArea;

public class SiteMapBuilderPanel extends Composite {
	
	TextArea URLtextArea = new TextArea();
	TextArea SitemapLinktext = new TextArea();
	
	public SiteMapBuilderPanel() {
		
		AbsolutePanel absolutePanel = new AbsolutePanel();
		initWidget(absolutePanel);
		absolutePanel.setSize("421px", "116px");
		
		InlineLabel nlnlblSelectAll = new InlineLabel("URL");
		absolutePanel.add(nlnlblSelectAll, 10, 0);
		
		InlineLabel nlnlblSelectBrand = new InlineLabel("SitemapLink:");
		absolutePanel.add(nlnlblSelectBrand, 10, 56);
		
		absolutePanel.add(URLtextArea, 10, 23);
		URLtextArea.setSize("381px", "17px");
		
		absolutePanel.add(SitemapLinktext, 10, 80);
		SitemapLinktext.setSize("381px", "17px");
	}

	public String[] Exe() {
		String URL = URLtextArea.getText();
		String SitemapLink = SitemapLinktext.getText();
		String[] args = new String[3];
		args[0] = "";
		args[1] = "C:\\Web\\SiteMapBuilder.exe";
		//args[2] = "-jar C:\\Web\\runner3.jar 11 "+Param;
		args[2] = URL + " " +SitemapLink;
		return args;
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
}

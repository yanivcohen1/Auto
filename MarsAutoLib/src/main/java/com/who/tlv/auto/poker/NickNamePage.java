package com.who.tlv.auto.poker;

import java.awt.AWTException;
import java.awt.Rectangle;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import java.util.List;

import org.ebayopensource.twin.Application;
import org.ebayopensource.twin.Element;
import org.ebayopensource.twin.element.Pane;
import org.ebayopensource.twin.element.Window;

import static org.ebayopensource.twin.Criteria.*;

public class NickNamePage {

	private Window win;
	
	public NickNamePage(Window win){
		this.win = win;
	}
	
	public void insertNickName(String nickName) throws InterruptedException, AWTException{
		
		  //app.open("poker54", null); // launch app configured as 'notepad' on remote control, any version
	      //Window window = app.getWindow();
	      //Pane e = window.getDescendant(name("Demo 54 William Hill Poker login"));
		  Thread.sleep(10000);
	      List<Element> elements = win.getChildren();
	      Element e = elements.get(0);
	      Rectangle rectangle = e.getBounds();
	      e.click();
	      System.out.println(rectangle.toString());
	      if (rectangle.height != 360 || rectangle.width != 400) {
	    	  throw new IllegalArgumentException("NickName window not found");
		  }
	      //e.click();
	      SmartRobot robot = new SmartRobot();
	      for (int i = 0; i < 7; i++) {
	    	  robot.keyPress(KeyEvent.VK_SHIFT);
	    	  robot.keyPress(KeyEvent.VK_TAB);
	    	  Thread.sleep(50);
	    	  robot.keyRelease(KeyEvent.VK_TAB);
	    	  robot.keyRelease(KeyEvent.VK_SHIFT);
	    	  Thread.sleep(50);
	      }
	      System.out.println("enter nick name");
	      //Thread.sleep(10000);
	      robot.type(nickName);
	      for (int i = 0; i < 6; i++) {
			Thread.sleep(50);
			robot.keyPress(KeyEvent.VK_TAB);
	      }
	      Thread.sleep(50);
	      //robot.keyRelease(KeyEvent.VK_TAB);
	      Thread.sleep(500);
	      robot.mousePress(InputEvent.BUTTON1_MASK);
	      Thread.sleep(100);
          robot.mouseRelease(InputEvent.BUTTON1_MASK);
          robot.keyRelease(KeyEvent.VK_TAB);
          Thread.sleep(5000);
          elements = win.getChildren();
          e = elements.get(0);
	      rectangle = e.getBounds();
	      System.out.println(rectangle.toString());
	      if (rectangle.height == 360 || rectangle.width == 400) {
	    	  throw new IllegalArgumentException("NickName "+ nickName + " already exist");
		 }
	}
	
}

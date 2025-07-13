package com.who.tlv.auto.poker;

import java.awt.AWTException;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import org.ebayopensource.twin.Application;
import org.ebayopensource.twin.element.Pane;
import org.ebayopensource.twin.element.Window;
import static org.ebayopensource.twin.Criteria.*;

public class LoginPage {

	private Application app;
	
	public LoginPage(Application app){
		this.app = app;
	}
	
	public NickNamePage login(String user, String password) throws InterruptedException, AWTException{
		
		  app.open("poker54", null); // launch app configured as 'notepad' on remote control, any version
	      Window window = app.getWindow();
	      Pane e = app.getDesktop().getDescendant(name("Demo 54 William Hill Poker login"));
	      e.click();
	      SmartRobot robot = new SmartRobot();
	      for (int i = 0; i < 8; i++) {
	    	  robot.keyPress(KeyEvent.VK_SHIFT);
	    	  robot.keyPress(KeyEvent.VK_TAB);
	    	  Thread.sleep(50);
	    	  robot.keyRelease(KeyEvent.VK_TAB);
	    	  robot.keyRelease(KeyEvent.VK_SHIFT);
	    	  Thread.sleep(50);
	      }
	      for (int i = 0; i < 25; i++) {
	    	  robot.keyPress(KeyEvent.VK_DELETE);
	    	  Thread.sleep(50);
	    	  robot.keyRelease(KeyEvent.VK_DELETE);
	      }
	      Thread.sleep(100);
	      robot.type(user);
	      robot.keyPress(KeyEvent.VK_TAB);
	      robot.type(password);
	      //robot.keyPress(KeyEvent.VK_TAB);
	      Thread.sleep(100);
	      for (int i = 0; i < 3; i++) {
			Thread.sleep(50);
			robot.keyPress(KeyEvent.VK_TAB);
	      }
	      Thread.sleep(50);
	      //robot.keyRelease(KeyEvent.VK_TAB);
	      Thread.sleep(500);
	      robot.mousePress(InputEvent.BUTTON1_MASK);
	      Thread.sleep(100);
          robot.mouseRelease(InputEvent.BUTTON1_MASK);	      
		  return new NickNamePage(window);
	}
	
}

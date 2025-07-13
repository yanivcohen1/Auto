package com.who.tlv.auto.poker;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.datatransfer.Transferable;
import java.awt.event.KeyEvent;

public class SmartRobot extends Robot {

		public SmartRobot() throws AWTException {
			super();
		}

		/**
		 * paste from clipboard
		 */
		public void pasteClipboard() {
			keyPress(KeyEvent.VK_CONTROL);
			keyPress(KeyEvent.VK_V);
			delay(50);
			keyRelease(KeyEvent.VK_V);
			keyRelease(KeyEvent.VK_CONTROL);
		}

		/**
		 * Type a text (copy in clipboard and past it)
		 * @param text
		 */
		public void type(String text) {
			writeToClipboard(text);
			pasteClipboard();
		}

		/**
		 * Save in clipboard a text
		 * @param s
		 */
		private void writeToClipboard(String s) {
			Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
			Transferable transferable = new StringSelection(s);
			clipboard.setContents(transferable, null);
		}
}
	

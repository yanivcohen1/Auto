/*
 * Copyright 2009 Fred Sauer
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
package com.who.test.client.util;

import com.google.gwt.user.client.ui.HTML;

import com.allen_sauer.gwt.dnd.client.DragEndEvent;
import com.allen_sauer.gwt.dnd.client.DragHandler;
import com.allen_sauer.gwt.dnd.client.DragStartEvent;
import com.allen_sauer.gwt.dnd.client.VetoDragException;

/**
 * Shared drag handler which display events as they are received by the various drag controllers.
 */
public final class DemoDragHandler implements DragHandler {

  /**
   * CSS blue.
   */
  public static final String BLUE = "#4444BB";

  /**
   * CSS green.
   */
  public static final String GREEN = "#44BB44";

  /**
   * CSS red.
   */
  public static final String RED = "#BB4444";

  /**
   * Text area where event messages are shown.
   */
  private final HTML eventTextArea;

  public DemoDragHandler(HTML dragHandlerHTML) {
    eventTextArea = dragHandlerHTML;
  }

  /**
   * Log the drag end event.
   * 
   * @param event the event to log
   */
  @Override
  public void onDragEnd(DragEndEvent event) {
    log("onDragEnd: " + event, RED);
  }

  /**
   * Log the drag start event.
   * 
   * @param event the event to log
   */
  @Override
  public void onDragStart(DragStartEvent event) {
    log("onDragStart: " + event, GREEN);
  }

  /**
   * Log the preview drag end event.
   * 
   * @param event the event to log
   * @throws VetoDragException exception which may be thrown by any drag handler
   */
  @Override
  public void onPreviewDragEnd(DragEndEvent event) throws VetoDragException {
    log("<br>onPreviewDragEnd: " + event, BLUE);
  }

  /**
   * Log the preview drag start event.
   * 
   * @param event the event to log
   * @throws VetoDragException exception which may be thrown by any drag handler
   */
  @Override
  public void onPreviewDragStart(DragStartEvent event) throws VetoDragException {
    log("onPreviewDragStart: " + event, BLUE);
  }

  public void clear() {
    eventTextArea.setHTML("");
  }

  public void log(String text, String color) {
    eventTextArea.setHTML(eventTextArea.getHTML()
        + (eventTextArea.getHTML().length() == 0 ? "" : "<br>") + "<span style='color: " + color
        + "'>" + text + "</span>");
  }
}
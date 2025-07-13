package com.yan.manag.service.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.event.ApplicationEventMulticaster;
import org.springframework.stereotype.Component;

@Component
public class CustomSpringEventPublisher {
    @Autowired
    private ApplicationEventPublisher applicationEventPublisher;
 
    @Autowired
    private ApplicationEventMulticaster applicationEventMulticaster;
    
    public void doStuffAndPublishAnEvent(final String message) {
        System.out.println("Publishing custom event. ");
        CustomSpringEvent customSpringEvent = new CustomSpringEvent(this, message);
        applicationEventPublisher.publishEvent(customSpringEvent);//notify all listeners synchronously
        applicationEventMulticaster.multicastEvent(customSpringEvent);//notify all listeners Asynchronously
        //the listener will asynchronously deal with the even in a separate thread.
    }
}

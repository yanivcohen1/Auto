package com.who.manager.web.websocket;

import com.who.manager.security.SecurityUtils;
import com.who.manager.web.websocket.dto.ActivityDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.security.Principal;
import java.util.Calendar;

import static com.who.manager.config.WebsocketConfiguration.IP_ADDRESS;

@Controller
public class ActivityService implements ApplicationListener<SessionDisconnectEvent> {

    private static final Logger log = LoggerFactory.getLogger(ActivityService.class);

    private DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    private final SimpMessageSendingOperations messagingTemplate;

    public ActivityService(SimpMessageSendingOperations messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @SubscribeMapping("/topic/activity")
    @SendTo("/topic/tracker")
    public ActivityDTO sendActivity(@Payload ActivityDTO activityDTO, StompHeaderAccessor stompHeaderAccessor, Principal principal) {
        activityDTO.setUserLogin(SecurityUtils.getCurrentUserLogin());
        activityDTO.setUserLogin(principal.getName());
        activityDTO.setSessionId(stompHeaderAccessor.getSessionId());
        activityDTO.setIpAddress(stompHeaderAccessor.getSessionAttributes().get(IP_ADDRESS).toString());
        Instant instant = Instant.ofEpochMilli(Calendar.getInstance().getTimeInMillis());
        activityDTO.setTime(dateTimeFormatter.format(ZonedDateTime.ofInstant(instant, ZoneOffset.systemDefault())));
        log.debug("Sending user tracking data {}", activityDTO);
        return activityDTO;
    }

    @Override
    public void onApplicationEvent(SessionDisconnectEvent event) {
        ActivityDTO activityDTO = new ActivityDTO();
        activityDTO.setSessionId(event.getSessionId());
        activityDTO.setPage("logout");
        messagingTemplate.convertAndSend("/topic/tracker", activityDTO);
    }
}

package com.yan.manag.service.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.stereotype.Component;

//@Component
public class ScheduledTasks1{

    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks1.class);

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    public boolean enable = true;

	//@Scheduled(fixedRate = 5000)
    //@Scheduled(cron= "*/5 * * * * *")
    @Scheduled(fixedDelayString = "${my.property.fixed.delay.seconds:5}000")//defalt is 5 sec
    public void reportCurrentTime() {
    	if (isEnable()) {
			log.info("The time1 is now {}", dateFormat.format(new Date()));
		}
    }

    public boolean isEnable() {
		return enable;
	}

	public void setEnable(boolean enable) {
		this.enable = enable;
	}
}
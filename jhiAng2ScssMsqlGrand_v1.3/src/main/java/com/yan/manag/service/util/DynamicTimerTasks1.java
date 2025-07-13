package com.yan.manag.service.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.Trigger;
import org.springframework.scheduling.TriggerContext;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
//import org.springframework.scheduling.

//@Component
public class DynamicTimerTasks1 implements SchedulingConfigurer {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    /*@Bean
    public MyBean myBean() {
        return new MyBean();
    }*/

    public boolean enable = true;
    public int fixedRate = 5000;

	public void reportCurrentTime() {
    	if (isEnable()) {
    		logger.info("The time2 is now {}", dateFormat.format(new Date()));
		}
    }
    
    @Bean(destroyMethod = "shutdown")
    public Executor taskExecutor1() {
        return Executors.newScheduledThreadPool(100);
    }

	@Override
	public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        taskRegistrar.setScheduler(taskExecutor1());
        taskRegistrar.addTriggerTask(
                new Runnable() {
                    @Override public void run() {
                        //myBean().getSchedule();
                    	reportCurrentTime();
                    }
                },
                new Trigger() {
                    @Override public Date nextExecutionTime(TriggerContext triggerContext) {
                        Calendar nextExecutionTime =  new GregorianCalendar();
                        Date lastActualExecutionTime = triggerContext.lastActualExecutionTime();
                        nextExecutionTime.setTime(lastActualExecutionTime != null ? lastActualExecutionTime : new Date());
                        nextExecutionTime.add(Calendar.MILLISECOND, getFixedRate()); //you can get the value from wherever you want
                        return nextExecutionTime.getTime();
                    }
                }
        );
		
	}
	
	public boolean isEnable() {
		return enable;
	}

	public void setEnable(boolean enable) {
		this.enable = enable;
	}

	public int getFixedRate() {
		return fixedRate;
	}

	public void setFixedRate(int fixedRate) {
		this.fixedRate = fixedRate;
	}
}

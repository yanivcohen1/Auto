package hello;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@PropertySource("classpath:/config.properties")
@Configuration
//@Component
public class ScheduledTasks {

    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
    
    //private static final String cronScdule = "*/5 * * * * *";
 
    //${property:default value}
	//@Value("${cronScdule.value:*/10 * * * * *}")//overide
    @Value("${cronScdule.value}")
	private String cronScdule2;
  
    //@Scheduled(cron = ScheduledTasks.cronScdule)//fixedRate = 5000)
    @Scheduled(cron = "${cronScdule.value}")
    public void reportCurrentTime() {
        log.info("The time is now {} cron is:" + cronScdule2, dateFormat.format(new Date()));
    }
}

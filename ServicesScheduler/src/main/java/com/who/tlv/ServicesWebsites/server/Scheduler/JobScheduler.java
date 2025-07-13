package com.who.tlv.ServicesWebsites.server.Scheduler;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.quartz.CronScheduleBuilder;
import org.quartz.CronTrigger;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.SchedulerFactory;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.who.tlv.ServicesWebsites.server.DB.HibernateUtil;
import com.who.tlv.ServicesWebsites.server.DB.Loger;
import com.who.tlv.ServicesWebsites.server.DB.Tests;
import com.who.tlv.ServicesWebsites.server.DB.TestsUtil;

public class JobScheduler {

	@Autowired
	private static Loger loger;
	String ipAddress;
	
	public static void runAllJobsScheduler() {
		
		List<Tests> tests = TestsUtil.getTests();
		for (Tests test : tests) {
			scheduleJob(test);
		}
	}
	
	private static void scheduleJob(Tests test) {
		try {
			
			// specify the job' s details..
			JobDetail job = JobBuilder.newJob(GenericJob.class)
			    .withIdentity(test.getTestName())
			    .build();
			//Pass job parameters
			job.getJobDataMap().put("Tests", test);
			
			/*Trigger trigger = TriggerBuilder.newTrigger()
			      .withSchedule(  
	                    SimpleScheduleBuilder.simpleSchedule()
	                    .withIntervalInSeconds(10)
	                    .repeatForever())  
                             .build();  */
			// specify the running period of the job
			CronTrigger cronTrigger = TriggerBuilder.newTrigger()
	                             .withIdentity(test.getTestName(),"crontriggergroup1")
	                             .withSchedule(CronScheduleBuilder.cronSchedule(test.getCronExpress()))
	                             .build();

	    	
			//schedule the job
			SchedulerFactory schFactory = new StdSchedulerFactory();
			Scheduler sch = schFactory.getScheduler();
	    	sch.start();	    	
	    	sch.scheduleJob(job, cronTrigger);	
		
		} catch (SchedulerException e) {
			loger.getLoger().error("scheduleJob eror:", e);
		}
		
	}

}

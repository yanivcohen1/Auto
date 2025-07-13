package hello;

import org.quartz.CronTrigger;
import org.quartz.JobDataMap;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.impl.StdSchedulerFactory;

public class CronTriggerExample
{
    public static void main( String[] args ) throws Exception
    {
    	JobDetail job = new JobDetail();
    	job.setName("dummyJobName");
    	job.setJobClass(HelloJob.class);
    	JobDataMap jobDataMap=new JobDataMap();
    	jobDataMap.put("msg","yaniv");
    	job.setJobDataMap(jobDataMap);

    	CronTrigger trigger = new CronTrigger();
    	trigger.setName("dummyTriggerName");
    	trigger.setCronExpression("0/5 * * * * ?");

    	//schedule it
    	Scheduler scheduler = new StdSchedulerFactory().getScheduler();
    	scheduler.start();
    	scheduler.scheduleJob(job, trigger);
    	Thread.sleep(10000);
    	scheduler.shutdown();
    	//restart
    	trigger.setCronExpression("0/10 * * * * ?");
    	scheduler = new StdSchedulerFactory().getScheduler();
    	//schedule it
    	scheduler.start();
    	scheduler.scheduleJob(job, trigger);
    }
}

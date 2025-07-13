package hello;

import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class HelloJob implements Job
{
	public void execute(JobExecutionContext context)
	throws JobExecutionException {
		JobDataMap jobDataMap=context.getJobDetail().getJobDataMap();
		String msg=(String)jobDataMap.get("msg");

		System.out.println("Hello Quartz! " + msg);

	}

}
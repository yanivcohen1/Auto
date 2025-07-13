package com.who.tlv.ServicesWebsites.server.Scheduler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.PersistJobDataAfterExecution;
import com.who.tlv.ServicesWebsites.server.Executor;
import com.who.tlv.ServicesWebsites.server.DB.Loger;
import com.who.tlv.ServicesWebsites.server.DB.Tests;
import com.who.tlv.ServicesWebsites.server.DB.TestsUtil;
import com.who.tlv.ServicesWebsites.shared.TestsData;

@PersistJobDataAfterExecution
@DisallowConcurrentExecution
public class GenericJob implements Job {
	
	public static String newline = System.getProperty("line.separator");
	
	public void execute(JobExecutionContext context) throws JobExecutionException {
		JobDataMap dataMap = context.getJobDetail().getJobDataMap();
		Tests test = (Tests) dataMap.get("Tests");
		Loger.getLoger().debug("Start "+ test.getTestName()+" - "+new Date(System.currentTimeMillis()));
		Executor executor = new Executor();
		String returnText = "";
		boolean Pass = false;
		for (int i = 0; i < test.getRetry(); i++) {
			String[] command =  new String[3];
	        command[0] = Integer.toString(test.getTimeOut());
	        command[1] = test.getProcessName();
	        command[2] = test.getParams();
			executor.main(command);
			returnText = null;
			List<String> returnTextList;
			try {
				returnTextList = executor.GetText(1);
				Loger.getLoger().debug("returnText "+ returnTextList);
				for (String string : returnTextList) {
					returnText = returnText + newline + string ;
				}
				if (returnTextList.get(0).contains("Test Pass")) {
					Pass = true;
				}
			}
			catch (InterruptedException e) {
			    Loger.getLoger().error("execute Error ", e);
			}
			if (Pass) {
				break;
			}else{
				try {
					Thread.sleep(test.getRetryDelay()*1000);
				}catch (InterruptedException e) {}
			}
		}
		if (Pass) {//pass
			test.setErrorDesc("");
			test.setResult("Pass");
		}else{//fail
			int length;
			if (returnText.length() < 255) {
				length = returnText.length();
			}else{
				length = 254;
			}
			test.setErrorDesc(returnText.substring(0, length));
			test.setResult("Fail");
		}
		test.setLastRun(new Date(System.currentTimeMillis()));
		List<Tests> tests = new ArrayList<Tests>();
		tests.add(test);
		List<TestsData> testsData = TestsUtil.ConvertTestToTestData(tests);
		TestsUtil.UpdateTests(testsData);
		Loger.getLoger().debug("End "+ test.getTestName()+" - "+new Date(System.currentTimeMillis()));
		if (!Pass && test.getEmail() != null) {
			SendEmail m_SendEmail = new SendEmail();
			ArrayList<String> To = new ArrayList<String>(Arrays.asList(test.getEmail().split(";")));
			if (To.get(To.size()-1) == ""){
				To.remove(To.size()-1);
			}
			m_SendEmail.SendEmails(To, "Automation Error in " + test.getTestName(), returnText, null);
		}
	}	
}

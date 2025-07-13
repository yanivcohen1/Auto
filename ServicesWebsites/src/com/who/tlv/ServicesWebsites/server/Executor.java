package com.who.tlv.ServicesWebsites.server;

import java.awt.EventQueue;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Executor {

	Process p;
	String PID;
	long Timeout = 5000;
	BlockingQueue<String> _BlockingQueue = new BlockingQueue<String>(5000);
	
	/**
	 * @param args
	 */
	public void main(final String[] args) {
		
//		EventQueue.invokeLater(new Runnable() {
//			   public void run() {
//				   try {
//					Thread.currentThread().sleep(Long.valueOf(args[0])*1000);//args[0]
//					//p.destroy();
//					String[] command =  new String[3];
//			          command[0] = "cmd";
//			          command[1] = "/C";
//			          command[2] = "C:\\Web\\KillProcess.exe " + PID;
//					Process p1 = Runtime.getRuntime().exec(command);
//					p1.waitFor();
//				} catch (Exception e) {
//					e.printStackTrace();
//				}
//			   }
//			});
		
		try{
			  String[] command =  new String[3];
	          command[0] = "cmd";
	          command[1] = "/C";
	          command[2] = "\"C:\\Web\\ConsoleExe.exe \"" + args[0]+"\" \""+ args[1]+"\" \""+args[2]+"\"\"";//C:\\Web\\ConsoleExe.exe \"java\" \"-jar C:\\Web\\runner.jar\"";//"java -jar C:\\Temp\\runner.jar";
	          p = Runtime.getRuntime().exec(command);
	          BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
	 
	          BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
	          
	          // read the output from the command
	 
	          String s = null;
	          System.out.println("Here is the standard output of the command:\n");
	          boolean isFirst = true;
	          while ((s = stdInput.readLine()) != null) {
	              if (isFirst) {
	            	  isFirst = false;
	            	  PID = s;
	            	  System.out.println(s);
	              }else{
	            	  System.out.println(s);
	            	  _BlockingQueue.put(s);
	              }
	          }
	 
	          // read any errors from the attempted command
	 
	          System.out.println("Here is the standard error of the command (if any):\n");
	          while ((s = stdError.readLine()) != null) {
	              System.out.println(s);
	              _BlockingQueue.put(s);
	          }
			//System.out.println("I am In try");
			//Thread.currentThread();
	          _BlockingQueue.put("Finish Run");
			Thread.sleep(1000);
			//System.out.println(s);
		}
		catch(Exception e){  
					System.out.println("I am In catch");
		}

	}

	public List<String> GetText(long TimeOut) throws InterruptedException {
		//long TimeOut = 5*60*1000;
		//String Data = (String) _BlockingQueue.take(TimeOut);
		List<String> LS = new ArrayList<String>();
		LS.add(_BlockingQueue.take(TimeOut));
		while (_BlockingQueue.getQueueSize() > 0) {
			LS.add(_BlockingQueue.take(TimeOut));	
		}
		//String[] Arry = new String[LS.size()];
		//LS.toArray(Arry);
		return LS;
	}
	
	public String Terminate() {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
	        command[2] = "C:\\Web\\KillProcess.exe " + PID;
			Process p1 = Runtime.getRuntime().exec(command);
			p1.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
}

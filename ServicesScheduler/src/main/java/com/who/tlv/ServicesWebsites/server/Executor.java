package com.who.tlv.ServicesWebsites.server;

import java.awt.EventQueue;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class Executor {

	Process p;
	String PID;
	long Timeout = 5000;
	BlockingQueue<String> _BlockingQueue = new BlockingQueue<String>(5000);
	
	/**
	 * @param args
	 */
	public void main(final String[] args) {
		
		try{
			Resource resource = new ClassPathResource("Executor.exe");
			File ConsoleExe = null;
	    	try {
	    		ConsoleExe = resource.getFile();
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			  String[] command =  new String[3];
	          command[0] = "cmd";
	          command[1] = "/C";
	          command[2] = "\"" + ConsoleExe+ " \"" + args[0]+"\" \""+ args[1]+"\" \""+args[2]+"\"\"";
	          p = Runtime.getRuntime().exec(command);
	          BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
	 
	          BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
	          
	          // read the output from the command
	 
	          String s = null;
	          System.out.println("Here is the standard output of the command:\n");
	          boolean isFirst = true;
	          while ((s = stdInput.readLine()) != null) {//p.exitValue());System.exit(code);
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
	          _BlockingQueue.put("Finish Run");
			Thread.sleep(1000);
		}
		catch(Exception e){  
			System.out.println("I am In catch");
		}

	}

	public List<String> GetText(long TimeOut) throws InterruptedException {
		List<String> LS = new ArrayList<String>();
		LS.add(_BlockingQueue.take(TimeOut));
		while (_BlockingQueue.getQueueSize() > 0) {
			LS.add(_BlockingQueue.take(TimeOut));	
		}
		return LS;
	}
	
	public String Terminate() {
		try{
			String[] command =  new String[3];
	        command[0] = "cmd";
	        command[1] = "/C";
	        command[2] = "taskkill /f /pid " + PID;
			Process p1 = Runtime.getRuntime().exec(command);
			p1.waitFor();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
}

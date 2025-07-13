package com.console;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.lang.ProcessBuilder.Redirect;


public class WriteConsole {

	public static void main(String[] args) throws IOException {
		String buildPath = "C:\\Visual Studio 2010\\Projects\\ConsoleApplication2\\ConsoleApplication2\\bin\\Debug\\";
		String[] command =  new String[3];
        command[0] = "cmd";
        command[1] = "/C";
        command[2] = buildPath + "ConsoleApplication2.exe";
        ProcessBuilder builder = new ProcessBuilder(command);
        //builder.inheritIO();
        //builder.redirectInput(Redirect.PIPE);
        //builder.redirectOutput();
        final Process p = builder.start();
        //Process p =Runtime.getRuntime().exec(command,null, new File(buildPath));
        BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
        BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
        final BufferedWriter stdOut = new BufferedWriter(new OutputStreamWriter(p.getOutputStream()));
        
        Thread thread = new Thread(){
            public void run(){
              try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
              System.out.println("Thread Running");
              try {
            	stdOut.write("yaniv" + '\n');
				stdOut.flush();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            }
          };
          thread.start();
          
        // read the output from the command
        String s = null;
        boolean isFirst = true;
        while ((s = stdInput.readLine()) != null) {//p.exitValue());System.exit(code);
            if (isFirst) {
          	  if (s.contains("Starting execution...")) {
          		 System.out.println("Starting Test");
          		isFirst = false;
          	  }
          	  System.out.println(s);
            }else{
          	  System.out.println(s);
            }
        }

        // read any errors from the attempted command 
        boolean firsErorr = true;
        while ((s = stdError.readLine()) != null) {
        	if (firsErorr) {
        		System.out.println("Fatal Error: ");
        		firsErorr = false;
			}
            System.out.println(s);
        }
	}
}

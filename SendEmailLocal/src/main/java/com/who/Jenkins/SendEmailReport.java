package com.who.Jenkins;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Scanner;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class SendEmailReport {

	public static void main(String[] args) throws Exception{
		//try {
			Properties prop = Utilitys.getPropertyFile(Utilitys.getResourcePath("ReportEmail.properties"));
			String[] mailList;
			if (args.length == 0) {
				mailList = prop.getProperty("To").split(",");
				System.out.println("Consol Empty Args");
			}else{
				mailList = args;
			}
			//printArry(args);
			printArry(mailList);
			String smtpHost = prop.getProperty("smtpHost");
			String emailFrom = prop.getProperty("EmailFrom");
			String emailSubject = prop.getProperty("EmailSubject");
			String cssStyle = new Scanner(new File(Utilitys.getResourcePath("reportng.css"))).useDelimiter("\\A").next();
			String reportHtmlFile = Utilitys.getResourcePath("Report.html");
			String content = CreateReport.createTable(prop, cssStyle, reportHtmlFile);
			String path = prop.getProperty("ResultPath");
			List<String> AttachFiles = listFilesForFolder(new File(path));
			//AttachFiles = null;
			SendReport.SendMailJenkinsReport(mailList, smtpHost, content, emailFrom, emailSubject, AttachFiles);
		//} catch (Exception e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		//}
	}
	
	public static List<String> listFilesForFolder(final File folder) {
		List<String> pics = new ArrayList<String>();
	    for (final File fileEntry : folder.listFiles()) {
	        if (!fileEntry.isDirectory()) {
	        	if (fileEntry.getName().contains(".png")) {
	        		pics.add(fileEntry.getAbsolutePath());
				}
	        }
	    }
	    return pics;
	}

	public static void printArry(String[] args){
		for (String arg : args) {
			System.out.println(arg);
		}
	}
}
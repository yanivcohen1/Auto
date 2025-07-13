package com.who.mail;


import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;
import java.util.Scanner;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class SendReport365 {
	
	public static void main(String[] args) throws Exception {
		String[] mailList = { "Yaniv.Cohen@williamhill.com" , "Daniel.Lederer@williamhill.com"};
		String emailFrom = "Yaniv.Cohen@williamhill.com";
		SendMail(mailList, null, "Content Test", emailFrom, "Subject test", null);
	}
	
	@SuppressWarnings("resource")
	public static void SendMail(String[] mailList,
			String smtpHost, String content, String emailFrom,
			String emailSubject, List<String> AttachFiles) throws Exception {
		System.out.println("from: " + emailFrom);
		System.out.println("mailList: " + Arrays.toString(mailList));
		System.out.println("Subject: " + emailSubject);
		System.out.println("Content: " + content);
		/* Gmail */
		final String username = "Mail.Parser@williamhill.com";
	    final String password = HtmlParse.prop.getProperty("mail.psw");//"Yaniv2345";

	    //Properties props = new Properties();
	    /*props.put("mail.imap.ssl.protocols", "imaps");
        props.setProperty("mail.imap.ssl", "true");
        props.put("mail.imap.auth", true);
	    //props.put("mail.transport.protocol", "smtp");
	    //props.put("mail.smtp.starttls.enable", true);//Transport Layer Security
        props.put("mail.imap.starttls.enable", true);
	    //props.put("mail.smtp.host", "smtp.office365.com");//smtp.office365.com
	    props.put("mail.smtp.port", "993");*/
	    Properties props = new Properties();
	    props.put("mail.smtp.auth", true);
	    props.put("mail.transport.protocol", "smtp");
	    props.put("mail.smtp.starttls.enable", true);//Transport Layer Security
	    props.put("mail.smtp.host", "smtp.office365.com");//smtp.office365.com
	    props.put("mail.smtp.port", "587");
	    /*props.put("mail.smtp.auth", true);
	    props.put("mail.transport.protocol", "smtp");//"mail.transport.protocol", "smtp"
	    props.put("mail.smtp.starttls.enable", true);//Transport Layer Security
	    props.put("mail.smtp.host", "outlook.office365.com");//smtp.office365.com
	    props.put("mail.smtp.port", "587");*/

	    Session mailSession = Session.getInstance(props,
	            new javax.mail.Authenticator() {
	                protected PasswordAuthentication getPasswordAuthentication() {
	                    return new PasswordAuthentication(username, password);
	                }
	            });

		// get text from file
		//String file = "JenkinsReport/Report.html";
		// String text = new Scanner( new
		// File(file)).useDelimiter("\\A").next();

		// prepare email
		//Properties props = new Properties();
		//props.setProperty("mail.transport.protocol", "smtp");
		//props.setProperty("mail.smtp.host", smtpHost);
		//System.setProperty("java.net.preferIPv4Stack" , "true");

		//Session mailSession = Session.getDefaultInstance(props, null);
		Transport transport = mailSession.getTransport();

		int size = mailList.length;
		// send email to mail list
		MimeMessage message = new MimeMessage(mailSession);
		message.setFrom(new InternetAddress(emailFrom));
		message.setSubject(emailSubject);
		//message.setContent(content, "text/html; charset=ISO-8859-1");
		for (int i = 0; i < size; i++) {
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(mailList[i]));
		}
		
		//
        // This HTML mail have to 2 part, the BODY and the embedded image
        //
        MimeMultipart multipart = new MimeMultipart("related");

        // first part  (the html)
        BodyPart messageBodyPart = new MimeBodyPart();
        //String htmlText = "<H1>Hello</H1><img src=\"cid:image\">";
        messageBodyPart.setContent(content, "text/html");
        //messageBodyPart.setContent(content, "text/plain; charset=utf-8");
        //bodypart.setHeader("Content-Type","text/plain; charset=\"utf-8\""); 
        //bodypart.setContent( emailBody, "text/plain; charset=utf-8" ); 
        //bodypart.setHeader("Content-Transfer-Encoding", "quoted-printable");
        // add it
        multipart.addBodyPart(messageBodyPart);
		if (AttachFiles != null) {
			for (String AttachFile : AttachFiles) {
				// Part two is attachment
				messageBodyPart = new MimeBodyPart();
				String filename = AttachFile;
				DataSource source = new FileDataSource(filename);
				messageBodyPart.setDataHandler(new DataHandler(source));
				messageBodyPart.setFileName(filename);
				//messageBodyPart.setHeader("Content-ID","<image>");
				//messageBodyPart.attachFile(filename);// JavaMail 1.4
				multipart.addBodyPart(messageBodyPart);
			}
		}
		// Send the complete message parts
		message.setContent(multipart);
		//transport.connect(username, password);
		transport.connect();
		transport.sendMessage(message,
		message.getRecipients(Message.RecipientType.TO));
		transport.close();
		System.out.println("Send-- " + emailSubject);

	}
}

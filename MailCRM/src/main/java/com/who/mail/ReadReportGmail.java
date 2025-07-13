package com.who.mail;


import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Scanner;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Address;
import javax.mail.BodyPart;
import javax.mail.Folder;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Part;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Store;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class ReadReportGmail {
	
	private int mailIndex = -1;
	private String subject = "Subject Test";
	private boolean textIsHtml = false;
	
	public static void main(String[] args) throws Exception {
		String[] mailList = { "Yaniv.Cohen@williamhill.com" };
		String emailFrom = "yanco54321@gmail.com";
		ReadReportGmail readReport365 = new ReadReportGmail();
		readReport365.ReadGmail();
		//SendMailJenkinsReport(mailList, null, "Content Test", emailFrom, "Subject test", null);
	}
	
	private boolean ReadGmail() {
		boolean findEmail = false;
		int mailIndex = -1;
        Properties props = new Properties();
        props.put("mail.store.protocol", "imaps");
        props.setProperty("mail.imap.ssl", "true");
        props.put("mail.imap.auth", true);
	    //props.put("mail.transport.protocol", "smtp");
	    //props.put("mail.smtp.starttls.enable", true);//Transport Layer Security
        props.put("mail.imap.starttls.enable", true);
	    //props.put("mail.smtp.host", "smtp.office365.com");//smtp.office365.com
	    props.put("mail.smtp.port", "993");   

        String ret = null;
        try {
            Session session = Session.getInstance(props, null);
            Store store = session.getStore();
            store.connect("imap.gmail.com", "yanco54321@gmail.com", "yanco123");
            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);
            /*FlagTerm ft = new FlagTerm(new Flags(Flags.Flag.SEEN), false);
            Message messages[] = inbox.search(ft);
            int i =0;
            for(Message message:messages) 
            {
                 Multipart mp = (Multipart)messages[i].getContent();  
                 Object p = mp.getBodyPart(i).getContent();  
                 String q = p.toString();//object has the body content  
                 System.out.println(q);//prints the body 
                 System.out.println( messages[i].getSubject()+ " \n"+i);i++;
            }*/
            mailIndex = inbox.getMessageCount();
            if (this.mailIndex == -1) {
            	this.mailIndex = mailIndex;
			}
            if (this.mailIndex <= mailIndex) {
            	findEmail = true;
            	Message msg = inbox.getMessage(this.mailIndex);
                Address[] in = msg.getFrom();
                for (Address address : in) {
                    System.out.println("FROM:" + address.toString());
                }
                Multipart mp = (Multipart) msg.getContent();
                BodyPart bp = mp.getBodyPart(0);
                System.out.println("SENT DATE:" + msg.getSentDate());
                subject =  msg.getSubject();
                System.out.println("SUBJECT:" + subject);
                ret = getText(bp);
                //ret = readInputStream(((MimeMultipart)bp.getContent()).getParent().getInputStream());
                System.out.println("CONTENT:" + ret);
                this.mailIndex++;
			}     
        } catch (Exception e) {
        	ret = "Error " + e.getMessage();
            e.printStackTrace();
        }
        //htmlContent = ret;
        return findEmail;
    }
	/* Folder folder = store.getFolder("whatever");
     IMAPFolder ifolder = (IMAPFolder)folder;
     List<MailEvent> events = ifolder.open(Folder.READ_WRITE,
                 new ResyncData(prevUidValidity, prevModSeq));
     for (MailEvent ev : events) {
         if (ev instanceOf MessageChangedEvent) {
             // process flag changes
         } else if (ev instanceof MessageVanishedEvent) {
             // process messages that were removed
         }
     }*/
	private String getText(Part p) throws MessagingException, IOException {
		if (p.isMimeType("text/*")) {
			String s = (String) p.getContent();
			textIsHtml = p.isMimeType("text/html");
			return s;
		}

		if (p.isMimeType("multipart/alternative")) {
			// prefer html text over plain text
			Multipart mp = (Multipart) p.getContent();
			String text = null;
			for (int i = 0; i < mp.getCount(); i++) {
				Part bp = mp.getBodyPart(i);
				if (bp.isMimeType("text/plain")) {
					if (text == null)
						text = getText(bp);
					continue;
				} else if (bp.isMimeType("text/html")) {
					String s = getText(bp);
					if (s != null)
						return s;
				} else {
					return getText(bp);
				}
			}
			return text;
		} else if (p.isMimeType("multipart/*")) {
			Multipart mp = (Multipart) p.getContent();
			for (int i = 0; i < mp.getCount(); i++) {
				String s = getText(mp.getBodyPart(i));
				if (s != null)
					return s;
			}
		}

		return null;
	}
	
}

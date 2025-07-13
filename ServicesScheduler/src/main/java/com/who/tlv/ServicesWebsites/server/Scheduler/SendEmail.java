package com.who.tlv.ServicesWebsites.server.Scheduler;
import java.util.ArrayList;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class SendEmail {

	public boolean SendEmails(ArrayList<String> To, String Subject,
			String Body, ArrayList<String> AttachFiles) {

		boolean Pass = true;
		// Recipient's email ID needs to be mentioned.
		// String to = "Yaniv.Cohen@williamhill.com";
		// String to1 = "Elena.Matusevich@williamhill.com";

		// Sender's email ID needs to be mentioned
		String from = "Automation@williamhill.com";

		// Assuming you are sending email from localhost
		String host = "10.117.0.10";// "localhost";

		// Get system properties
		Properties properties = System.getProperties();

		// Setup mail server
		properties.setProperty("mail.smtp.host", host);

		// Get the default Session object.
		Session session = Session.getDefaultInstance(properties);

		try {
			// Create a default MimeMessage object.
			MimeMessage message = new MimeMessage(session);

			message.setFrom(new InternetAddress(from));
			// Set From: header field of the header.
			// message.setFrom(new InternetAddress(from));

			for (String to : To) {
				message.addRecipient(Message.RecipientType.TO,
						new InternetAddress(to));
			}

			// Set Subject: header field
			message.setSubject(Subject);// ("This is the Subject Line!");

			// Create the message part
			MimeBodyPart messageBodyPart = new MimeBodyPart();

			// Fill the message
			messageBodyPart.setText(Body);// ("This is message body");

			// Create a multipar message
			MimeMultipart multipart = new MimeMultipart();

			// Set text message part
			multipart.addBodyPart(messageBodyPart);

			if (AttachFiles != null) {
				for (String AttachFile : AttachFiles) {
					// Part two is attachment
					messageBodyPart = new MimeBodyPart();
					String filename = AttachFile;
					// String filename = "file.txt";
					DataSource source = new FileDataSource(filename);
					messageBodyPart.setDataHandler(new DataHandler(source));
					messageBodyPart.setFileName(filename);
					multipart.addBodyPart(messageBodyPart);
				}
			}
			// Send the complete message parts
			message.setContent(multipart);

			// Send message
			Transport.send(message);
			System.out.println("Sent message successfully....");
		} catch (MessagingException mex) {
			Pass = false;
			mex.printStackTrace();
		}
		return Pass;
	}
}

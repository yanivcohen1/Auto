package com.who.mail;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import javax.mail.*;
import javax.mail.internet.MimeMultipart;
import javax.mail.search.FlagTerm;

import org.apache.log4j.Logger;

import com.google.common.collect.ArrayListMultimap;
import com.google.common.collect.Multimap;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import com.who.mail.ReadReport365.MailResturn;

public class HtmlParse {

	public final static Properties prop = Utilitys.getPropFromStream(Utilitys.getStreamFromFile("config.properties"));
	final static Logger logger = Logger.getLogger(HtmlParse.class);
	String newLine = "<br>";
	Status status;
	public static Date lastEmailRead = Calendar.getInstance().getTime();
	
	public enum Status {
	    Fail, Warning, Pass 
	}
	
	public static void main(String[] args) throws Exception {
		WatchdogWeb.init();
		HtmlParse htmlParse = new HtmlParse();
		//HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
	    //server.setExecutor(null); // creates a default executor
	    //server.start();
	    //System.out.println("The server is running");
		htmlParse.mainRun();
	}
	
	private void mainRun() throws Exception {
		int mailIndex = -1;
		logger.info("Start");
		while (true) {
			try {
				MailResturn retReport = ReadReport365.readOffice365(mailIndex);
				int _mailIndex = retReport.mailIndex;
				String subject = retReport.subject;
				String htmlContent = retReport.content;
				String sendDate = retReport.sentDate;
				if (retReport.error && htmlContent == null) {
					mailIndex++;
				}
				if (htmlContent != null) {
					if (mailIndex == -1) {
						mailIndex = _mailIndex + 1;
					}else{
						mailIndex++;
					}
					lastEmailRead = Calendar.getInstance().getTime();
					List<URL> links = readLinks(htmlContent);
					MyListMap<Integer, UrlRes> linksMap = fillStatus(links);
					String mailContent = "Receive Date: " + sendDate + newLine + buildEmail(linksMap);
					subject = status + " " + subject;
					String[] mailList = {"Yaniv.Cohen@williamhill.com", "EmailMarketingTeam@williamhill.com", "Daniel.Lederer@williamhill.com"};
					String emailFrom = "Mail.Parser@williamhill.com";
					SendReport365.SendMail(mailList, null, mailContent, emailFrom, subject, null);					
				}else{
					Thread.sleep(60000);
				}
			} catch (Exception e) {
				logger.error("erorr: ", e);
			}
		}
	}

	public String buildEmail(MyListMap<Integer, UrlRes> linksMap) {
		status = Status.Pass;
		String mailContent = "";
		//Collection<UrlRes> Urls = linksMap.get(200);
		//mailContent = (Urls.size() > 0) ? newLine + "Sucsses URLs (20x):" + newLine : "";
		//for (UrlRes url : Urls) {
		//	mailContent = mailContent + "Source: " +url.urlIn + newLine + "Target: " + url.UrlOut + newLine;
		//}
		Collection<UrlRes> Urls = new ArrayList<UrlRes>();
		List<String> urlLinks = new ArrayList<String>();
		boolean first = true;
		for (int key : linksMap.keySet()) {
			if (key >= 400 && key < 500 && key != 403) {
				if (first) {
					mailContent = mailContent + newLine + "Errors URLs (4xx):" + newLine;
					status = Status.Fail;
					first = false;
				}
				Urls = linksMap.get(key);
				for (UrlRes url : Urls) {
					if (!urlLinks.contains(url.toString().trim().toLowerCase())) {
						mailContent = mailContent + "Status:" + key + " Source: " +url.urlIn + newLine + "Target: " + url.UrlOut + newLine;
						//logger.info(url.urlIn);
						urlLinks.add(url.toString().trim().toLowerCase());
					}
					
				}
			}
		}
		first = true;
		for (int key : linksMap.keySet()) {
			if (key >= 300 && key < 400 || key >= 500 || key == 403) {
				if (first) {
					mailContent = mailContent + newLine + "Warning URLs (3xx & 5xx & 403):" + newLine;
					if (status != Status.Fail) {
						status = Status.Warning;
					}
					first = false;
				}
				Urls = linksMap.get(key);
				for (UrlRes url : Urls) {
					if (!urlLinks.contains(url.toString().trim().toLowerCase())) {
						mailContent = mailContent + "Status:" + key + " Source: " +url.urlIn + newLine + "Target: " + url.UrlOut + newLine;
						//logger.info(url.urlIn);
						urlLinks.add(url.toString().trim().toLowerCase());
					}
				}
			}
		}
		first = true;
		for (int key : linksMap.keySet()) {
			if (key >= 200 && key < 300) {
				if (first) {
					mailContent = mailContent + newLine + "Sucsses URLs (2xx):" + newLine;
					first = false;
				}
				Urls = linksMap.get(key);
				for (UrlRes url : Urls) {
					if (!urlLinks.contains(url.toString().trim().toLowerCase())) {
						mailContent = mailContent + "Status:" + key + " Source:" +url.urlIn + newLine + "Target:" + url.UrlOut + newLine;
						//logger.info(url.urlIn);
						urlLinks.add(url.toString().trim().toLowerCase());
					}
				}
			}
		}
		return mailContent;
	}
	
	public MyListMap<Integer, UrlRes> fillStatus(List<URL> links) throws MalformedURLException {
		MyListMap<Integer, UrlRes> linksMap = new MyListMap<Integer, HtmlParse.UrlRes>();
		List<String> urlLinks = new ArrayList<String>();
		for (URL url : links) {
			int code = 0;
			boolean find = false;
			if (urlLinks.indexOf(url.toString().toLowerCase()) >= 0) {
				find = true;
			}else{
				urlLinks.add(url.toString().toLowerCase());
			}
			if (!find) {
				try {
					//URL url = new URL(url_);
					HttpURLConnection connection = (HttpURLConnection)url.openConnection();
					connection.setRequestMethod("GET");
					connection.connect();
					code = connection.getResponseCode();
					InputStream is = connection.getInputStream();
					URL urlRet = connection.getURL();
					UrlRes urlRes = new UrlRes();
					urlRes.urlIn = url;
					urlRes.UrlOut = urlRet.toString();
					linksMap.add(code, urlRes);
				} catch (Exception e) {
					UrlRes urlRes = new UrlRes();
					urlRes.urlIn = url;
					urlRes.UrlOut = "MSG: " + e.getMessage();
					linksMap.add(code, urlRes);
				}
			}
		}
		return linksMap;
	}

	public List<URL> readLinks(String mailContent) {
		BufferedReader br;
		//String htmlContent = "";
		List<URL> links = new ArrayList<URL>();
		try {
			// separate input by spaces ( URLs don't have spaces )
	        String [] parts = mailContent.split("\\s+");
	     // Attempt to convert each item into an URL.   
	        for( String item : parts ) try {
	        	String [] parts2 = item.split("\"");
	        	for( String item2 : parts2 ) try {
	        		int length = item2.length();
	        		if (item2.substring(length-1).contentEquals(".") || 
	        				item2.substring(length-1).contentEquals(",") ||
	        				item2.substring(length-1).contentEquals("?")) {
	        			item2 = item2.substring(0,length-1);
					}
		            URL url = new URL(item2);
		            // If possible then replace with anchor...
		            //System.out.print("<a href=\"" + url + "\">"+ url + "</a> " );
		            links.add(url);
		        } catch (MalformedURLException e) {
		            // If there was an URL that was not it!...
		            //System.out.print( item + " " );
		        }
	        	//String [] parts2 = item.split("\"");
	            //URL url = new URL(item);
	            // If possible then replace with anchor...
	            //System.out.print("<a href=\"" + url + "\">"+ url + "</a> " );
	            //links.add(url);
	        } catch (Exception e) {
	            // If there was an URL that was not it!...
	            //System.out.print( item + " " );
	        }

	        System.out.println();
			/*while (htmlContent.toLowerCase().contains("http")) {
				int indexHref = htmlContent.indexOf("http");
				String subHref = htmlContent.substring(indexHref - 4);
				int indexFirstComma = subHref.indexOf(' ');
				String strFirstComma = subHref.substring(indexFirstComma - 1);
				//int indexSecendComma = strFirstComma.indexOf('"');
				//htmlContent = strFirstComma.substring(indexSecendComma +1);
				String strLink = strFirstComma.substring(0 ,indexSecendComma);
				if (strLink.trim().length() > 3) {
					strLink = strLink.trim();
					//System.out.println(strLink);
					links.add(strLink);
				}
			}*/
		} catch (Exception e) {
			logger.error("erorr: ", e);
		} 
		return links;
	}
	
	private Properties readProperty(String propFileName) throws IOException, URISyntaxException {
		Properties prop = new Properties();
		InputStream inputStream;
		try {
			File propFile = new File(HtmlParse.class.getProtectionDomain().getCodeSource().getLocation().toURI().getPath());
			String propFileStr = propFile.getParent() + "/" +propFileName;
			inputStream = new FileInputStream(propFileStr);
			System.out.println("from " + propFileStr);
		} catch (Exception e) {
			System.out.println("from resource");
			inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
		}
		if (inputStream != null) {
			prop.load(inputStream);
		} else {
			throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
		}
		
		return prop; 
	}

	public static class UrlRes{
		
		public URL urlIn;
		public String UrlOut;
	}
	
}
package Com.who.openURL;

import static org.junit.Assert.fail;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.RunWith;
import org.junit.runner.notification.Failure;
import org.junit.runners.BlockJUnit4ClassRunner;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.xml.DOMConfigurator;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import WHO.General.General;

public class OpenURLs {
	
	private static WebDriver driver;
	private String baseUrl;
	private Date m_date = new Date();
	Timestamp m_Now = new Timestamp(m_date.getTime());
	private static Logger m_logger = Logger.getLogger("name");
	private boolean Debug = false;
	private static String CurrentURL;
	private static String CurrentBrowser;
	private ChromeDriverService service;
	
	public static void main(String[] args) {
		
		OpenURLs _OpenURL = new OpenURLs();
		_OpenURL.OpenLoger();
		List<String> URLsList = _OpenURL.URLsOpen();
		String[] URLs = new String[URLsList.size()];
		URLsList.toArray(URLs);
		m_logger.debug("Test Sterded ********************************************************");
		String[] Browsers = new String[]{"FF","Chrom","IE"};
			for (int iteration = 0; iteration < 100; iteration++) {
				m_logger.debug("Start iteration: " + (iteration+1));
				System.out.println("Run index:" + iteration);
				for (String Browser : Browsers) {
					CurrentBrowser = Browser;
					for (int url = 0; url < URLs.length; url++) {
						CurrentURL = URLs[url];
						//System.out.println("Test" + args[i] + "Started");
						if (CurrentBrowser.contentEquals("IE")) {
							_OpenURL.IETest();
						}
						else if (CurrentBrowser.contentEquals("FF")) {
							_OpenURL.FFTest();
						}
						else if (CurrentBrowser.contentEquals("Chrom")) {
							_OpenURL.ChromTest();
						}
					}
				}
			}
		System.exit(0);
	}
	
	 private void OpenLoger() {
		 try {
	            DOMConfigurator.configure("OpenURLsLog4j.xml");//src/log4j.xml
			}catch (Exception ex) {
	            ex.printStackTrace();
	            throw new RuntimeException(ex.getMessage());
			}
	}

	private List<String> URLsOpen() {
		 	File URLsFile = new File("OpenURLs.xml");
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			Document doc = null;
			try {
				DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
				doc = dBuilder.parse(URLsFile);
			}
			catch (Exception e) {
				m_logger.error("XML file Error: ", e);
			}
			doc.getDocumentElement().normalize();
			Node MainNode = doc.getElementsByTagName("URLs").item(0);
			NodeList nodes = ((Element)MainNode).getElementsByTagName("url");
			List<String> URLs = new ArrayList<String>(); 
			for (int i = 0; i < nodes.getLength(); i++) {
				Node node = nodes.item(i);
				if (node.getNodeType() == Node.ELEMENT_NODE) {
					Element element = (Element) node;
					URLs.add(element.getFirstChild().getNodeValue());
				}
			}
			return URLs;
	}

	public void IETest() {
		 m_logger.debug("IE: "+ CurrentURL);
		 try {
			DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
			 capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true); 
			 driver = new InternetExplorerDriver(capabilities);
			 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			 driver.manage().deleteAllCookies();
			 driver.get(CurrentURL);
			 try {
				Thread.sleep(5000);
			}catch (InterruptedException e) {}
			 ReadCookie("clickinfo");
			 driver.manage().deleteAllCookies();
			 driver.quit();
		}
		catch (Exception e) {
			m_logger.error("IE Error", e);
			quitDriver();
		}
	}

	public void FFTest() {
		 m_logger.debug("FF: "+ CurrentURL);
		 try {
			driver = new FirefoxDriver();
			 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			 driver.manage().deleteAllCookies();
			 driver.get(CurrentURL);
			 try {
					Thread.sleep(5000);
			}
			catch (InterruptedException e) {}
			 ReadCookie("clickinfo");
			 driver.manage().deleteAllCookies();
			 driver.quit();
		}
		catch (Exception e) {
			m_logger.error("FF Error", e);
			quitDriver();
		}
	   }
	 
	 public void ChromTest() {
		 m_logger.debug("Chrom:"+ CurrentURL);
		 try {
			service = new ChromeDriverService.Builder()
			     .usingDriverExecutable(new File("C:\\SVN\\SeleniumAndroidTest\\Publish\\chromedriver.exe"))
			     .usingAnyFreePort()
			     .build();
			 try {
				service.start();
			} catch (IOException e) {
				String message = "Service can't be started";
				System.out.println(message);
				m_logger.error(message, e);
				e.printStackTrace();
			}
			 DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			 driver = new RemoteWebDriver(service.getUrl(),capabilities);
			 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			 driver.manage().deleteAllCookies();
			 driver.get(CurrentURL);
			 try {
					Thread.sleep(5000);
			}
			catch (InterruptedException e) {}
			 ReadCookie("clickinfo");
			 driver.manage().deleteAllCookies();
			 driver.quit();
		}
		catch (Exception e) {
			m_logger.error("Chrom Error", e);
			quitDriver();
		}
		 service.stop();
	   }
	
	   public void quitDriver() {
	     try {
	    	 driver.quit();   	 
		} catch (Exception e) {
			 m_logger.error("Driver Error", e);
		}
	     //m_logger.info("Tests Ended");
	   }

	   private void ReadCookie(String CookieName) {
		   Cookie _Cookie = driver.manage().getCookieNamed(CookieName);
		   if (_Cookie != null) {
			   m_logger.debug("Cookie val :"+ _Cookie.getValue());
		   }else{
			   m_logger.error("Cookie: " + CookieName + " not find");
		   }
	   }

}
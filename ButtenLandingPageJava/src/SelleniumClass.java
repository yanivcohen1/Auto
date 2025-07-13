//import java.io.ByteArrayOutputStream;
import java.io.File;
import java.net.URISyntaxException;
import java.security.CodeSource;

import com.thoughtworks.selenium.DefaultSelenium;
import com.thoughtworks.selenium.SeleneseTestCase;

@SuppressWarnings("deprecation")
public class SelleniumClass extends SeleneseTestCase {
	Process p;
	int TimeOutMilisecSelenium;
	String LibFolder = "lib";

	public SelleniumClass(int TimeOutMilisecSelenium) {
		this.TimeOutMilisecSelenium = TimeOutMilisecSelenium;
		if(MainTest.m_Debug){
			LibFolder = "lib";
		}
	}

	// @Before
	@Override
	public void setUp() throws Exception {
		String Jarfolder = getJarSeleniumServerFolder();
		String JarRunProcessfolder = getJarRunProcessFolder();
		if(MainTest.m_Debug){
			p = Runtime.getRuntime().exec("C:\\SVN\\ButtenLandingPageJava\\lib\\RunProcess.exe C:\\SVN\\ButtenLandingPageJava\\lib\\selenium-server-standalone-2.25.0.jar");//"java -jar " + JarRunProcessfolder + " " + Jarfolder
		}else{
			p =	Runtime.getRuntime().exec("java -jar " + JarRunProcessfolder + " " + Jarfolder);
		}
		Thread.sleep(2000);
		p.destroy();
		//String OS = System.getProperty("os.name");
//		if (OS.contains("Windows")) {
//			Runtime.getRuntime().exec("java -jar " + Jarfolder);
//		}
//		else{
//			Runtime.getRuntime().exec("start java -jar " + Jarfolder);
//		}
//		ByteArrayOutputStream byte1=new ByteArrayOutputStream();  
//	    p.getOutputStream().write(byte1.toByteArray());  
//		System.out.println(byte1.toString());
		for (int i = 0; i < 20; i++) {
			try {
				//System.out.println("jar Folder = " + Jarfolder);
				Thread.sleep(2000);
				//p = Runtime.getRuntime().exec("java -jar " + Jarfolder);
				System.out.println("jar Folder = " + Jarfolder);
				selenium = new DefaultSelenium("localhost", 4444, "*firefox",
						"http://www.google.co.il/");// firefox
													// 4444
				selenium.start();
				break;
			} catch (Exception e) {
				System.out.println(e.getMessage());
				//Thread.sleep(2000);
			}
		}
	}

	// @Test
	public void testUntitled(String Brand, String Element) throws Exception {
		// selenium.open(Brand);
		// Boolean Psss = selenium.isElementPresent("name=downloadHPPage");
	}

	// @After
	@Override
	public void tearDown() throws Exception {
		selenium.stop();
		p.destroy();
	}

	// public void test1() throws Exception {
	// Process p =
	// Runtime.getRuntime().exec("java -jar V:\\Selenium\\selenium-server-standalone-2.17.0.jar");
	// Thread.sleep(5000);
	// selenium = new DefaultSelenium("localhost", 4444, "*firefox",
	// "http://www.eurogrand.com/");
	// selenium.start();
	// selenium.open("\\");
	// Boolean Psss = selenium.isElementPresent("name=downloadHPPage");
	// System.out.println(Psss);
	public String test(String Brand, String Element) {
		String PassRes = "";
		try {
			//System.out.println(TimeOutMilisecSelenium);
			selenium.setTimeout(Integer.toString(TimeOutMilisecSelenium));
			//System.out.println(Brand);
			selenium.open(Brand);
			Thread.sleep(2000);
			selenium.waitForPageToLoad(Integer.toString(TimeOutMilisecSelenium));
			//Thread.sleep(3000);
//			String Title = selenium.getTitle();
//			if (Title.contains("404") || (Title.contains("403"))
//					|| (Title.contains("501"))) {
//				PassRes = Title;
//			}			
			if (Element != null) {
				//String Body = selenium.getHtmlSource();
				//String[] AllLinks = selenium.
				//String Body1 = selenium.
				//System.out.println(Body);
				//String 
				
				//char Mark = '"';
				//String s = "href=" + Mark + "?css=style" + Mark;
//				if (!Body.toLowerCase().contains(Element.toLowerCase())){
//						//"href=" + Mark + "?css=style" + Mark)) {
//					PassRes = Title;
//				}
				selenium.click(Element);
				//try {
				Thread.sleep(5000);
				selenium.waitForPageToLoad(Integer.toString(TimeOutMilisecSelenium));
				//} catch (Exception e) {
					// TODO Auto-generated catch block
				//	e.printStackTrace();
				//}
				//selenium
				PassRes = selenium.getLocation();
			}
		} catch (Exception e) {
			// System.out.println( "Open "+Brand+" Fail" );
			e.printStackTrace();
			PassRes = "TimeOut";
		}
		// serch 404
		// return selenium.isElementPresent("name=downloadHPPage");
//		if (PassRes != "") {
//			selenium.captureEntirePageScreenshot(filename, "background=#CCFFDD");
//		}
		return PassRes;
	}

	public String getJarSeleniumServerFolder() throws URISyntaxException {
		CodeSource codeSource = MainTest.class.getProtectionDomain()
				.getCodeSource();
		File jarFile = new File(codeSource.getLocation().toURI().getPath());
		String jarDir = jarFile.getParentFile().getPath();
		return jarDir + System.getProperty("file.separator") + LibFolder
				+ System.getProperty("file.separator")
				+ "selenium-server-standalone-2.25.0.jar";
	}
	
	public String getJarRunProcessFolder() throws URISyntaxException {
		CodeSource codeSource = MainTest.class.getProtectionDomain()
				.getCodeSource();
		File jarFile = new File(codeSource.getLocation().toURI().getPath());
		String jarDir = jarFile.getParentFile().getPath();
		return jarDir + System.getProperty("file.separator") + LibFolder
				+ System.getProperty("file.separator")
				+ "RunProces.jar";
	}
	
	public void captureEntirePageScreenshot (String filename, String background ){
		selenium.captureEntirePageScreenshot(filename, background);
	}
	
}

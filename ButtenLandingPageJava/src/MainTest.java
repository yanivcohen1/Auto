import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;


public class MainTest {

	/**
	 * @param args
	 * @throws Exception 
	 */
	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		m_args = args;
		if (args.length != 0) {
			if (!args[0].contentEquals("Debug"))
				m_IsAutoStart = true;
			else{
				m_Debug = true;
			}
		}
		
		MainTest MainTest1 = new MainTest();
		MainTest1.SeleniumStart();
		MainTest1.StartTest();
		MainTest1.SeleniumEnd();
		System.exit(0);
	}
	
	private void StartTest() throws Exception {
		// TODO Auto-generated method stub
		//fFileName = "C:\\SVN\\ButtenLandingPageJava\\www2ButtenClickList.txt";
		ReadFile();
		Iterator it=ls.iterator();
		while (it.hasNext()) {
			String URL1 = (String)it.next();
			String Result = m_Selenium2.test(URL1,"css=div[class='joinNowBtnWrapper'] a");
			System.out.println(URL1 + "," + Result);
		}
		//m_Selenium2.tearDown();
		System.out.println("EndTest");
	}
	
	/** Read the contents of the given file. */
	void ReadFile() throws IOException {
	    log("Reading from file.");
	    ls.clear();
	    //StringBuilder text = new StringBuilder();
	    String NL = System.getProperty("line.separator");
	    Scanner scanner = new Scanner(new FileInputStream(m_fFileName));
	    try {
	      while (scanner.hasNextLine()){
	        //text.append(scanner.nextLine() + NL);
	    	  ls.add(scanner.nextLine());
	      }
	    }
	    finally{
	    	scanner.close();
	    }
//	    log("Text read in: " + text);
	    //return m_scanner;
	}
	  
	private void log(String aMessage){
		    System.out.println(aMessage);
	}

	private void SeleniumStart() throws Exception {
		if (!m_seleniumStart) {
			m_Selenium2.setUp();
			m_seleniumStart = true;
		}
	}
	
	private void SeleniumEnd() throws Exception {
		if (!m_seleniumStart) {
			m_Selenium2.tearDown();
			m_seleniumStart = false;
		}
	}
	
	public static boolean m_Debug = false;
	int m_TimeOutMilisecSelenium = 30000;
	SelleniumClass m_Selenium2 = new SelleniumClass(m_TimeOutMilisecSelenium);
	Boolean m_seleniumStart = false;
	static String[] m_args;
	static boolean m_IsAutoStart = false;
	private final String m_fFileName = "C:\\SVN\\ButtenLandingPageJava\\www2ButtenClickList.txt";
	private final String m_fEncoding = "UTF-8";
	private final String m_FIXED_TEXT = "But soft! what code in yonder program breaks?";
	List<String> ls=new ArrayList<String>();
	//Scanner m_scanner;
}

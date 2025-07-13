package WHO.General;

import java.io.File;
import java.io.IOException;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.Augmenter;

public class General {

	private static Logger m_logger = Logger.getLogger("name");
	
	public static void Screenshot(WebDriver driver, String TestName){
		String FileName;
		//WebDriver augmentedDriver = new Augmenter().augment(driver);
		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		//File scrFile = ((TakesScreenshot)augmentedDriver).getScreenshotAs(OutputType.FILE);
		Date date = new Date();   // given date
		Calendar calendar = GregorianCalendar.getInstance(); // creates a new calendar instance
		calendar.setTime(date);
		Format formatter = new SimpleDateFormat("yyyy-MM-dd");
		FileName = formatter.format(date) + "_";
		//20-Jun-2013-13_24-SeleniumWebDriverAFFUTD.png
		FileName = FileName + calendar.get(Calendar.HOUR_OF_DAY) + "_";
		FileName = FileName + calendar.get(Calendar.MINUTE);
		FileName = FileName + "-" + TestName + ".png";
		FileName = "c:\\snapshot\\" + FileName;
		try {
			FileUtils.copyFile(scrFile, new File(FileName));
		} catch (IOException e1) {
			m_logger.error("Can't Copy Screenshot", e1);
		}
	}
		
		public static void ScreenshotCherom(WebDriver driver, String TestName){
			String FileName;
			WebDriver augmentedDriver = new Augmenter().augment(driver);
			//File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
			File scrFile = ((TakesScreenshot)augmentedDriver).getScreenshotAs(OutputType.FILE);
			Date date = new Date();   // given date
			Calendar calendar = GregorianCalendar.getInstance(); // creates a new calendar instance
			calendar.setTime(date);
			Format formatter = new SimpleDateFormat("yyyy-MM-dd");
			FileName = formatter.format(date) + "_";
			//20-Jun-2013-13_24-SeleniumWebDriverAFFUTD.png
			FileName = FileName + calendar.get(Calendar.HOUR_OF_DAY) + "_";
			FileName = FileName + calendar.get(Calendar.MINUTE);
			FileName = FileName + "-" + TestName + ".png";
			FileName = "c:\\snapshot\\" + FileName;
			try {
				FileUtils.copyFile(scrFile, new File(FileName));
			} catch (IOException e1) {
				m_logger.error("Can't Copy Screenshot", e1);
			}

	}
}

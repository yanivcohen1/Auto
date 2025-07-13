package selenium.grid;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.SessionId;

public class GridTest {

	public static void main(String[] args) throws MalformedURLException, InterruptedException {
		
		GridTest GridTest = new GridTest();
		GridTest.test();
	}

	private void test() throws MalformedURLException, InterruptedException {
		WebDriver driver;
		DesiredCapabilities ds = new DesiredCapabilities();
		ds.setBrowserName("chrome");
		ds.setPlatform(Platform.WINDOWS);
		CustomRemoteWebDriver.sessionIds = "9af861ce-f39b-4bf0-a1d8-d044f91dbdb7";
		driver = new CustomRemoteWebDriver(new URL("http://localhost:4444/wd/hub"), DesiredCapabilities.chrome());
		//driver = (new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), ds));
		SessionId sessionId = ((RemoteWebDriver)driver).getSessionId();
		System.out.println(sessionId);
		
		/*driver.get("https://www.google.co.il/");
		System.out.println(driver.getTitle());
		driver.findElement(By.cssSelector("#lst-ib")).sendKeys("Test");
		driver.findElement(By.cssSelector("#tsf > div.tsf-p > div.jsb > center > input[type='submit']:nth-child(1)")).click();
		Thread.sleep(1000);*/
		System.out.println(driver.getTitle());
	}

}

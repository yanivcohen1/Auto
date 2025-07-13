package com.wh.auto.TestObjects;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.springframework.context.ApplicationContext;

//import com.legalmonkeys.test.AbstractCucumberTest;
import com.wh.auto.common.Browsers;
import com.wh.auto.common.Reporter;
import com.wh.auto.common.Reporter.Color;
import com.wh.auto.common.Reporter.Style;
import com.wh.auto.repository.AppContextRepository;
import com.wh.auto.repository.SessionRepository;
import com.wh.auto.common.WebDriverUtils;

public abstract class AbstractWhPageObjectSpring {

	protected Browsers browsers;
	protected static ApplicationContext context;
	protected WebDriver driver;
	protected Object classs;
	protected static String lastClass = "";
	public static Map<String, Object> VariablesMap = new HashMap();
	public static Boolean initVariable;
	public static String className;
	//protected Class classParent;
	
	public AbstractWhPageObjectSpring() {
		///super(driver);
		long ThreadId = Thread.currentThread().getId();
		String currentClass = this.getClass().getSimpleName();
		if (!currentClass.contentEquals(lastClass)) {
			Reporter.log("Page: " + this.getClass().getSimpleName(), Style.BOLD, Color.BLUE);
			lastClass = currentClass;
		}
		context = AppContextRepository.getAc();
		driver = SessionRepository.getWebDriver(ThreadId);
	    PageFactory.initElements(driver, this);
	    loadVariables(this.getClass());
	}
	
	protected void loadVariables(Class classParent) {
		if (initVariable != null && classParent != null) {
			if (initVariable && className.contentEquals(this.getClass().getName())) {
				for (Map.Entry<String, Object> entry : VariablesMap.entrySet()) {
					System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
					try {
						for (Field field : classParent.getFields()) {
							//System.err.println(field.getName());
						}
						Field field = classParent.getDeclaredField(entry.getKey());
						Object fieldType = field.getType();
						if (fieldType.toString().contains("String")) {
							field.set(this, entry.getValue().toString());
						} else if (fieldType.toString().contains("int")) {
							field.setInt(this, (Integer)entry.getValue());
						}else if (fieldType.toString().contains("boolean")) {
							field.setBoolean(this, (Boolean)entry.getValue());
						}
					} catch (Exception e) {						
						System.out.println(e);
					}
				}
				initVariable = false;
			}
		}		
	}

	protected void appSleep(long milliToSleep){
		try {
			Thread.sleep(milliToSleep);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
}
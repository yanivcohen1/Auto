package stepdefs.shared;

import com.wh.auto.common.Browsers;
import com.wh.auto.common.Utility;

/**
 * Created by sudhakar on 20/10/14.
 */
public class SharedData {

	private static String userName = null;
	private static Browsers browsers = new Browsers();
	private static boolean debug = init();

	public static Browsers getBrowsers() {
		return browsers;
	}

	private static boolean init() {
		if (Utility.developmentMac) {
			debug = true;
		}else{
			debug = false;
		}
		return debug;
	}

	public static String getUserName() {
		if (userName == null) {
			userName = Utility.readFromTestConfigFile("userName");
		}
		return userName;
	}

	public static void setUserName(String username) {
		Utility.writeToTestConfigFile("userName", username);
		userName = username;
	}

	public static boolean isDebug() {
		return debug;
	}
	
}

package selenium.grid;

import java.net.URL;
import java.util.Map;

import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.remote.Command;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.DriverCommand;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.Response;
import org.openqa.selenium.remote.SessionNotFoundException;
import org.openqa.selenium.remote.UnreachableBrowserException;
import org.openqa.selenium.remote.RemoteWebDriver.When;

import com.google.common.base.Throwables;

public class CustomRemoteWebDriver extends RemoteWebDriver {
	public static String sessionIds = null;
    private Map<String, ?> parameters_;
	
	public CustomRemoteWebDriver(URL remoteAddress, DesiredCapabilities dd) {
		super(remoteAddress, dd);
	}

	@Override
	protected Response execute(String driverCommand, Map<String, ?> parameters) {
		if (parameters.size() > 0) {
			parameters_ = parameters;
		}
		if (driverCommand.contentEquals(DriverCommand.NEW_SESSION)) {
			if (sessionIds != null) {
				Response response = new Response();
				response.setSessionId(sessionIds);
				response.setValue(parameters);
				return response;
			} else {
				Response response = super.execute(driverCommand, parameters);
				// File.WriteAllText(sessiodIdPath, response.SessionId);
				return response;
			}
		} else {
			Response response = super.execute(driverCommand, parameters);
			return response;
		}

	}

}

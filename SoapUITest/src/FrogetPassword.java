import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class FrogetPassword {
	
	//public static int m_TimeOutMilisec = 30000;
	public static void main(String[] args) {
		
		SendData Send_Data = new SendData();
		
		Send_Data.httpGet("http://api.dev/games/playtech800011/web/winners/?period=monthly");
		
		String urlStr = "http://api.dev/user/playtech800011/web/Yaniv123/forgotpassword";
		String BeforeEncodingParam = "{\"email\": \"APItest@mailinator.com\", \"birthDate\": \"1959-02-05\"}";//"{\"email\": \"APItest@mailinator.com\", \"birthDate\": \"1989-02-05\"}";
		
		String[] paramName = {"p"};
		String[] paramVal = {BeforeEncodingParam};
		Send_Data.httpPost(urlStr, paramName, paramVal);
	}
}
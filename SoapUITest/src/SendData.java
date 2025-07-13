import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;


public class SendData {
	
	public static String httpGet(String urlStr) { //throws IOException {
		  System.out.println("Send in Get: "+ urlStr);
		  String Ret = "";
		  StringBuilder sb;
		  InputStream Is;
		  try {
				  URL url = new URL(urlStr);
				  HttpURLConnection conn =
				      (HttpURLConnection) url.openConnection();
	
				  if (conn.getResponseCode() != 200) {
				    //throw new IOException(conn.getResponseMessage());
					  Is = conn.getErrorStream();
				  }else{
					  Is = conn.getInputStream();
				  }
				  
				  // Buffer the result into a string
				  BufferedReader rd = new BufferedReader(
				      new InputStreamReader(Is));//getInputStream()
				  sb = new StringBuilder();
				  String line;
				  while ((line = rd.readLine()) != null) {
				    sb.append(line);
				  }
				  rd.close();
				  System.out.println("Return in Get: "+ sb.toString() );
				  Ret = sb.toString();
				  conn.disconnect();
				} catch (Exception e) {
					Ret = "Error: " + e.getMessage();
					System.out.println("Return in Get "+ Ret);
				}
				  return Ret;
			}

	public static String httpPost(String urlStr, String[] paramName,
			String[] paramVal) {//throws Exception {

		System.out.println("URL in Post: " + urlStr);
		System.out.println("Body in Post: " + paramName[0] + "=" + paramVal[0]);
		String Ret = "";
		StringBuilder sb;
		InputStream Is;
		try {
			URL url = new URL(urlStr);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("POST");
			conn.setDoOutput(true);
			conn.setDoInput(true);
			conn.setUseCaches(false);
			conn.setAllowUserInteraction(false);//false
			conn.setRequestProperty("Content-Type",
					"application/x-www-form-urlencoded; charset=UTF-8");
			
			// Create the form content
			OutputStream out = conn.getOutputStream();
			Writer writer = new OutputStreamWriter(out, "UTF-8");
			for (int i = 0; i < paramName.length; i++) {
				writer.write(paramName[i]);
				writer.write("=");
				writer.write(URLEncoder.encode(paramVal[i], "UTF-8"));
				writer.write("&");
			}
			writer.close();
			out.close();

			if (conn.getResponseCode() != 200) {
				conn.getErrorStream();
				Is = conn.getErrorStream();
			  }else{
				  Is = conn.getInputStream();
			  }

			// Buffer the result into a string
			BufferedReader rd = new BufferedReader(new InputStreamReader(
					Is));
			sb = new StringBuilder();
			String line;
			while ((line = rd.readLine()) != null) {
				sb.append(line);
			}
			rd.close();
			Ret = sb.toString();
			System.out.println("Return in Post: "+ Ret);
			conn.disconnect();
		} catch (Exception e) {
			Ret = "Error: " + e.getMessage();
			System.out.println("Return in Post "+ Ret);
		}
		return Ret;
	}
	
	public String SendGet(String url) {
		
		System.out.println("Send in Get: "+ url);
		String Ret = "";
		try {
			URL _URL = new URL(url);
			URLConnection yc = _URL.openConnection();
			//yc.setConnectTimeout(m_TimeOutMilisec);
			BufferedReader in = new BufferedReader(
					new InputStreamReader(yc.getInputStream()));			
			String buffer = "";
			StringBuilder Sbuilder = new StringBuilder();
			while ((buffer = in.readLine()) != null) {
			    Sbuilder.append(buffer);
			}
			Ret = Sbuilder.toString();
			System.out.println("Return in Get: "+Ret);
			in.close();
		} catch (Exception ex) {
			Ret = "Error: " + ex.getMessage();
			System.out.println("Return in Get "+ Ret);
		}
		return Ret;
	}

	public String SendPost(String urlString, String Body){
		
		System.out.println("URL in Post: "+ urlString);
		System.out.println("Body in Post: "+ Body);
		String Ret = "";
		URLConnection conn;
		try {
			URL url = new URL(urlString);
			conn = url.openConnection();
			conn.setDoOutput(true);
			OutputStreamWriter writer = new OutputStreamWriter(conn.getOutputStream());

			writer.write(Body);//("value=1&anotherValue=1");
			//writer.flush();
			String line;
			//conn.
			InputStream IS = null;
			try {
				IS = conn.getInputStream();
			} catch (Exception e) {
				Ret = "Error: " + e.getMessage();
				System.out.println("Return in Post " + Ret);
				System.out.println("Return in Post Content " + conn);
			}
			writer.flush();
			BufferedReader reader = new BufferedReader(new InputStreamReader(IS));
			
			String buffer;
			StringBuilder Sbuilder = new StringBuilder();
	        while((buffer = reader.readLine()) != null) {
	        	Sbuilder.append(buffer);
	        }
	        Ret = Sbuilder.toString();
			System.out.println("Return in Post: "+Ret);
			
			writer.close();
			reader.close();
		} catch (MalformedURLException e) {
			Ret = "Error: " + e.getMessage();
			System.out.println("Return in Post "+Ret);
		} catch (IOException e) {
			Ret = "Error: " + e.getMessage();
			System.out.println("Return in Post "+Ret);
		}
	    return Ret;
	}

}

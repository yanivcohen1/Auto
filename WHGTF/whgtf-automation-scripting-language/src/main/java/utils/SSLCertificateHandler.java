package utils;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public class SSLCertificateHandler {

	
public static void setSSLSecurity(){
		
		TrustManager[] trustAllCerts = new TrustManager[]{
                 new X509TrustManager() {

                     public java.security.cert.X509Certificate[] getAcceptedIssuers()
                     {
                         return null;
                     }
                     public void checkClientTrusted(java.security.cert.X509Certificate[] certs, String authType)
                     {
                         //No need to implement.
                     }
                     public void checkServerTrusted(java.security.cert.X509Certificate[] certs, String authType)
                     {
                         //No need to implement.
                     }
                 }
         };

         // Install the all-trusting trust manager
         try 
         {
             SSLContext sc = SSLContext.getInstance("SSL");
             sc.init(null, trustAllCerts, new java.security.SecureRandom());
             HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
             HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
				
				@Override
				public boolean verify(String hostname, SSLSession session) {
					return true;
				}
			});
         } 
         catch (Exception e) 
         {
             System.out.println(e);
         }
}

	
}

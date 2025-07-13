package com.who.mail;

import java.io.BufferedReader;
import java.io.Closeable;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

class Utilitys {

	final static Logger logger = Logger.getLogger(Utilitys.class);
	
	public static Properties getPropertyFile(String fileName) {
		Properties prop = new Properties();
		try {
			prop.load(new FileInputStream(fileName));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return prop;
	}

	/**
	 * get the Resource Path
	 * 
	 * @param driver
	 * @return
	 * @throws IOException
	 */
	public static String getResourcePath(String driver) {
		Resource resource = new ClassPathResource(driver);
		String path = null;
		try {
			path = resource.getFile().getPath();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			logger.error("erorr: ", e);
		}
		return path;
	}

	public static CharSequence readFile(String fileName) {
		BufferedReader in = null;
		// String fileName = "empty.xml";
		StringBuilder buffer = new StringBuilder();
		try {
			FileReader inputFile = new FileReader(fileName);

			// Instantiate the BufferedReader Class
			in = new BufferedReader(inputFile);

			// Variable to hold the one line data
			String line;

			// sourceFileContant.replace((CharSequence) bufferReader, "");
			// Read file line by line and print on the console
			while ((line = in.readLine()) != null) {
				// System.out.println(line);
				buffer.append(line).append('\n');
			}
			// Close the buffer reader
			in.close();
			return buffer;
		} catch (IOException e) {
			return "";
		} finally {
			closeStream(in);
		}
	}

	/**
	 * Closes the specified stream.
	 * 
	 * @param stream
	 *            The stream to close.
	 */
	private static void closeStream(BufferedReader stream) {
		if (stream != null) {
			try {
				stream.close();
			} catch (IOException e) {
				// Ignore
			}
		}
	}
	
	/**
	 * get the Resource Path
	 * 
	 * @param driver
	 * @return
	 * @throws IOException
	 */
	public static InputStream getStreamFromFile(String fileNmae) {
		Resource resource = new ClassPathResource(fileNmae);
		InputStream inputStream = null;
		try {
			inputStream = resource.getInputStream();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			logger.error("erorr: ", e);
		}
		return inputStream;
	}
	
	public static Properties getPropFromStream(InputStream inputStream) {
		Properties prop = new Properties();
		try {
			prop.load(inputStream);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return prop;
	}
	
}
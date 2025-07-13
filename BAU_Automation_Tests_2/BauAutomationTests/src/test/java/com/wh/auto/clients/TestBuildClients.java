package com.wh.auto.clients;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.ITestContext;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.wh.auto.common.CSVReader;
import com.wh.auto.common.Utility;
import com.wh.auto.common.Browsers;
import com.wh.auto.utils.WHFormFields.WHFormField;

/**
 * Test The Clients in all brands
 * @author yanivc
 *
 */
public class TestBuildClients {

	private ITestContext myTestContext;

	public static void main(String[] args) throws IOException, InterruptedException {
		TestBuildClients tc = new TestBuildClients();
		tc.clientsBuildTest("ClientsTest.ini");
	}
	
	/**
	 * clients Build Test
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@Parameters({ "parametersFileName" })
	@Test()
	public void clientsBuildTest(String parametersFileName) throws IOException, InterruptedException {
	
		//System.out.println(System.getProperty("java.version"));
		/*String testClientsFile = Utility.getFilePathFromResource("ClientsTest.csv");
		ArrayList<ArrayList<String>> testParams = CSVReader.readFile(testClientsFile);
		String buildPath = testParams.get(0).get(1);
		String msBuildPath = testParams.get(1).get(1);
		String msTestPath = testParams.get(2).get(1);
		String buildParams = testParams.get(3).get(1);
		String buildFolder = testParams.get(4).get(1);*/
		System.out.println(parametersFileName);
		Properties prop = Utility.getPropertyFile(parametersFileName);//"ClientsTest.ini"
		String buildPath = Utility.get_mainTestsPath() + prop.getProperty("BuildPath");
		String msBuildPath = prop.getProperty("MSBuildPath");
		String msTestPath = prop.getProperty("MSTestPath");
		String buildParams = prop.getProperty("SolutionParam");
		String buildFolder = prop.getProperty("BuildFolder");
		
		File absoluteBuildFolder =  new File(Utility.get_mainTestsBuildPath());
		try {
			if (absoluteBuildFolder.exists()) {
				FileUtils.deleteDirectory(absoluteBuildFolder);
				if (!absoluteBuildFolder.mkdirs()) {
		        	   Reporter.log("Failed to create folder name: " + buildFolder);
		        	   throw new IllegalArgumentException("Failed to create folder name: " + buildFolder);
		           }
			}
		} catch (Exception e) {	}
		
		System.out.println( "start building" );
		String[] command =  new String[3];
        command[0] = "cmd";
        command[1] = "/C";
        command[2] = msBuildPath + " " + buildParams;
        
        Process p =Runtime.getRuntime().exec(command,null, new File(buildPath));
        BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
        BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
        
        // read the output from the command
        String s = null;
        StringBuilder sb = new StringBuilder();
        //System.out.println("Here is the standard output of the command:\n");
        //boolean isFirst = true;
        while ((s = stdInput.readLine()) != null) {//p.exitValue());System.exit(code);
        	sb.append(s);
          	 //System.out.println(s);
        }

        // read any errors from the attempted command
        boolean firsErorr = true;
        while ((s = stdError.readLine()) != null) {
        	if (firsErorr) {
        		//System.out.println("Fatal Error: ");
        		sb.append("Fatal Error: ");
        		firsErorr = false;
			}
            //System.out.println(s);
        	sb.append(s);
        }
        boolean error = (p.exitValue()!=0);
        if (error) {
        	String str = sb.toString();
        	String subStr;
        	try {
				subStr = str.substring(str.length()-50, str.length());
			} catch (Exception e) {
				subStr = str;
			}
        	System.out.print(subStr);
        	Reporter.log(subStr);
		}
        String path = buildPath +"\\"+ buildFolder;
        clearFile(path+"\\PicList.txt");
        clearFile(path+"\\Error.log");
        clearFile(path+"\\PlayersUsersNames.txt");//
        File folder = new File(Utility.get_PicBuildPath());
        for (final File fileEntry : folder.listFiles()) {
        	if (fileEntry.getName().contains(".png")) {
        		fileEntry.delete();
			}
        }
        //Process p = Runtime.getRuntime().exec(command,null, new File(buildPath));
//        ProcessBuilder pb = new ProcessBuilder(command).directory(new File(buildPath));
//        pb.redirectOutput(Redirect.INHERIT);
//        pb.redirectError(Redirect.INHERIT);
//        Process p = pb.start();
//		p.waitFor();
		//(valueType.length > 0) ? true : false
		Assert.assertTrue("Build Fail", !error);
	}

	private void clearFile(String path) {
		try {
            FileWriter f2 = new FileWriter(path, false);
            f2.write("");
            f2.close();

        } catch (IOException e) {
            e.printStackTrace();
        }     
		
	}
	
	public void listFilesForFolder(final File folder) {
	    for (final File fileEntry : folder.listFiles()) {
	        if (fileEntry.isDirectory()) {
	            listFilesForFolder(fileEntry);
	        } else {
	            System.out.println(fileEntry.getName());
	        }
	    }
	}
	
}

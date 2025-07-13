package com.who.bi;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import au.com.bytecode.opencsv.CSVReader;

public class CSVRead {
	
	public static ArrayList<ArrayList<String>> readCsvFile(String fileName) {
		String line;
		ArrayList<String> parsedLine;
		ArrayList<ArrayList<String>> retVal = new ArrayList<ArrayList<String>>();
		BufferedReader br;
		
		//System.out.println("Working Directory = " +
	    //          System.getProperty("user.dir"));
		
		try {
			br = new BufferedReader(new FileReader(fileName));
			while ((line = br.readLine()) != null) {
				parsedLine = new ArrayList<String>(Arrays.asList(line.split(",")));
				retVal.add(parsedLine);
			}
			
			br.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		} 
		
		return retVal;
	}
	
	public static List<String[]> ReadCSV(String fileName) throws IOException {
		CSVReader reader = new CSVReader(new FileReader(fileName), ',', '"', 1);
	    //Read all rows at once
	    List<String[]> allRows = reader.readAll();
	    return allRows;
	}
}

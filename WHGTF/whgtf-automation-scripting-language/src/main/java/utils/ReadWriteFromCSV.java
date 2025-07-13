package utils;

import au.com.bytecode.opencsv.CSVReader;
import com.williamhill.whgtf.properties.PropertyReader;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;


public class ReadWriteFromCSV
{
    private static Logger logger = LogManager.getLogger(ReadWriteFromCSV.class);
    protected static String CSVDevices = "src/test/resources/devices.mobile/devices.csv";
    //Build reader instance
    static CSVReader reader = null;
    /*
    Read the devices CSV
    */
    public static List<String[]> deviceCSVReader() throws Exception{
        List<String[]> allRows = null;

            reader = new CSVReader(new FileReader(CSVDevices), ',', '"', 0);

        //Read all rows at once
        try {
            allRows = reader.readAll();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return allRows;
    }

}


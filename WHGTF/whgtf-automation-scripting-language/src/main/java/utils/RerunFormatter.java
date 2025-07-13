package utils;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * Created by alexis1 on 04/04/2016.
 */
public class RerunFormatter {

    static String filePath = "target/rerun.txt";
    static String classPath = "src/test/resources/cucumber/features/";

    /**
     * Reformat the existing RerunFormatter.txt file into the correct format including the source
     *
     * @param filepath the filepath of the rerun file i.e. target/rerun.txt
     * @param classpath the classpath of the feature files src/test/resources/cucumber/features/
     * @throws IOException
     */
    public static void reformat(String filepath, String classpath) throws IOException {
        File file = new File(filepath);
        if(file.exists()) {
            Scanner scanner = new Scanner(file);
            List<String> testNames = new ArrayList<>();
            while (scanner.hasNext()) {
                String[] tokens = scanner.nextLine().split(" ");
                int i = 0;
                for (String line : tokens) {
                    if(!line.startsWith(classpath)) {
                        testNames.add(classpath + line);
                    }else {
                        testNames.add(line);
                    }
                        i++;
                        if (i < tokens.length) {
                            testNames.add(" ");
                        }

                }
                if(testNames.get(testNames.size()-1).isEmpty()){
                    testNames.remove(testNames.get(testNames.size()-1));
                }
            }
            String formattedString = "";
            for (String tests:testNames) {
                formattedString += tests;
            }
            FileWriter fw = new FileWriter(file.getAbsoluteFile());
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(formattedString);
            bw.close();
        }
    }

    /**
     * Reformat the existing RerunFormatter.txt file into the correct format using default arguments
     * filePath = 'target/rerun.txt' and classPath = 'src/test/resources/cucumber/features/'
     * @throws IOException
     */
    public static void reformat() throws IOException {
        File file = new File(filePath);
        if(file.exists()) {
            Scanner scanner = new Scanner(file);
            List<String> testNames = new ArrayList<>();
            while (scanner.hasNext()) {
                String[] tokens = scanner.nextLine().split(" ");
                int i = 0;
                for (String line : tokens) {
                    if(!line.startsWith(classPath)) {
                        testNames.add(classPath + line);
                    }else {
                        testNames.add(line);
                    }
                    i++;
                    if (i < tokens.length) {
                        testNames.add(" ");
                    }

                }
                if(testNames.get(testNames.size()-1).isEmpty()){
                    testNames.remove(testNames.get(testNames.size()-1));
                }
            }
            String formattedString = "";
            for (String tests:testNames) {
                formattedString += tests;
            }
            FileWriter fw = new FileWriter(file.getAbsoluteFile());
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(formattedString);
            bw.close();
        }
    }
}

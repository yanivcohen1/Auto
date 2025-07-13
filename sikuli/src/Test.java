import org.sikuli.script.*;

public class Test {

	public static void main(String[] args) {
        Screen s = new Screen();
        try{
	           /* s.click("imgs/spotlight.png", 0);
	            s.wait("imgs/spotlight-input.png");
	            s.type(null, "hello world\n", 0);*/
	        	Match mach = s.find("imgs/3Usorsyaniuc.png");
		        	//s.click("imgs/1435673026216.png");
	        	//mach.click();
	        	mach.type("dir c:");
        	}
        catch(FindFailed e){
                e.printStackTrace();
        }

	}

}

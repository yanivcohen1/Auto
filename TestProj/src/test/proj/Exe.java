package test.proj;

public class Exe {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		for (int i = 0; i < 10; i++) {
			System.out.println("Start " + (i+1) + " of 10");
			try {
				Thread.currentThread().sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

}

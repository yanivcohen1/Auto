package com.wh.auto.casino;

public class CasinoHelper {

	/**
	 * find Amount of money
	 * 
	 * @param bonusMsg
	 * @param sing
	 * @return
	 */
	public static int findAmount(String bonusMsg, String sing) {
		int euroIndex = bonusMsg.indexOf(sing);
		String numString = null;
		if (euroIndex > 2) {
			numString = bonusMsg.substring(0, 5);
		} else if (bonusMsg.length() > (euroIndex + 6)){
			numString = bonusMsg.substring(euroIndex + 1, euroIndex + 5);
		} else{
			numString = bonusMsg.substring(euroIndex + 1, euroIndex + 4);
		}
		float f = Float.valueOf(numString.trim());
		return (int) Math.round(f);
	}

	/**
	 * find currency
	 * 
	 * @param bonusMsg
	 * @param sing
	 * @return
	 */
	public static String findCurrency(String bonusMsg, String sing) {
		int euroIndex = bonusMsg.indexOf(sing);
		String currency = bonusMsg.substring(euroIndex, euroIndex + 1);
		return currency;
	}
	
}

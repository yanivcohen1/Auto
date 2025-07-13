package com.wh.auto.common;

import java.util.Random;

public class RandomString {

	private static final char[] symbols = new char[36];

	static {
		for (int idx = 0; idx < 10; ++idx)
			symbols[idx] = (char) ('0' + idx);
		for (int idx = 10; idx < 36; ++idx)
			symbols[idx] = (char) ('a' + idx - 10);
	}

	private final Random random = new Random();

	private final char[] buf;

	public RandomString(int length) {
		if (length < 1)
			throw new IllegalArgumentException("length < 1: " + length);
		buf = new char[length];
	}

	public String nextString() {//letters and numbers
		for (int idx = 0; idx < buf.length; ++idx)
			buf[idx] = symbols[random.nextInt(symbols.length)];
		return new String(buf);
	}
	
	public String nextNumber() {
		for (int idx = 0; idx < buf.length; ++idx)
			buf[idx] = symbols[random.nextInt(9)];
		return new String(buf);
	}
	
	public static int nextNumberInRange(int min, int max) {
		Random r = new Random();
		return min + r.nextInt(max - min);
	}
	
	public String nextAlpha() {//only letters
		for (int idx = 0; idx < buf.length; ++idx) {
			int randomIndex = random.nextInt(symbols.length);
			//while (randomIndex < 10) randomIndex = random.nextInt(symbols.length);
			randomIndex = nextNumberInRange(10, symbols.length);
			buf[idx] = symbols[randomIndex];
		}
		return new String(buf);
	}

}
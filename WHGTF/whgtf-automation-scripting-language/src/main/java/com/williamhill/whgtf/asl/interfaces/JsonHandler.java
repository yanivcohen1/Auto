package com.williamhill.whgtf.asl.interfaces;

public interface JsonHandler {

	public boolean jsonCreateObject(String identifier, String... arguments);

	public boolean jsonCreateArray(String identifier, String... arguments);

	public boolean jsonAddToArray(String identifier, String... arguments);

}

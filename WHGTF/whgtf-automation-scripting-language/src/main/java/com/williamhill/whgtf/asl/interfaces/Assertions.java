package com.williamhill.whgtf.asl.interfaces;

/**
 * Created by sudhakar on 13/02/15.
 */
public interface Assertions {

	/**
	 * Asserts that a condition is true. If it isn't it throws an
	 * {@link AssertionError} without a message.
	 *
	 * @param condition
	 *            condition to be checked
	 */
	public void assertTrue(boolean condition);

	/**
	 * Asserts that a condition is true. If it isn't it throws an
	 * {@link AssertionError} without a message.
	 *
	 * @param condition
	 *            condition to be checked
	 */
	public void assertTrue(String errorMessage, boolean condition);

	/**
	 * Asserts that a condition is false. If it isn't it throws an
	 * {@link AssertionError} without a message.
	 *
	 * @param condition
	 *            condition to be checked
	 */
	public void assertFalse(boolean condition);

	/**
	 * Asserts that an object is null. If it isn't an {@link AssertionError} is
	 * thrown.
	 *
	 * @param object
	 *            Object to check or <code>null</code>
	 */
	public void assertNull(Object object);

	/**
	 * Asserts that an object isn't null. If it is an {@link AssertionError} is
	 * thrown.
	 *
	 * @param object
	 *            Object to check or <code>null</code>
	 */
	public void assertNotNull(Object object);

	/**
	 * Asserts that two objects are equal. If they are not, an
	 * {@link AssertionError} without a message is thrown. If
	 * <code>expected</code> and <code>actual</code> are <code>null</code>, they
	 * are considered equal.
	 *
	 * @param expected
	 *            expected value
	 * @param actual
	 *            the value to check against <code>expected</code>
	 */
	public void assertEquals(Object expected, Object actual);

	/**
	 * Asserts that two floats are equal. If they are not, an
	 * {@link AssertionError} is thrown.
	 *
	 * @param expected
	 *            expected float value.
	 * @param actual
	 *            actual float value
	 */
	public void assertEquals(float expected, float actual);

	/**
	 * Asserts that two doubles are equal. If they are not, an
	 * {@link AssertionError} is thrown.
	 *
	 * @param expected
	 *            expected double value.
	 * @param actual
	 *            actual double value
	 */
	public void assertEquals(double expected, double actual);

	/**
	 * Asserts that two longs are equal. If they are not, an
	 * {@link AssertionError} is thrown.
	 *
	 * @param expected
	 *            expected long value.
	 * @param actual
	 *            actual long value
	 */
	public void assertEquals(long expected, long actual);

}
package com.test;
import com.google.common.base.Function;

/**
 * Generic class for testing anonymous classes
 * 
 * @author Yanivc
 */
public class Tool {
	
	/**
	 * before apply callback
	 */
	protected Function<Integer, String> beforeApplyCallback = null;

	/**
	 * apply
	 */
	public void apply() {

		if (this.beforeApplyCallback != null) {
			System.out.println(this.beforeApplyCallback.apply(20));
		}
	}
	
	/**
	 * set before apply callback
	 * @param function
	 */
	public void onBeforeApply(Function<Integer, String> function) {
		this.beforeApplyCallback = function;
	}

}

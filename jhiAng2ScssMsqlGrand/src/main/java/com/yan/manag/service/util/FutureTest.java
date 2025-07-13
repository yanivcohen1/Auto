package com.yan.manag.service.util;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.stream.IntStream;

public class FutureTest {

	public static void main1(String[] args) {
		FutureTest FutureTest = new FutureTest();
		FutureTest.testFuture();
	}

	public void testFuture(){
    	IntStream.range(0, 5).parallel().forEach(i -> {
			
			ExecutorService executor = Executors.newFixedThreadPool(1);
			Future<Integer> future = executor.submit(() -> {
			    try {
			    	double ran = Math.random();
			    	int ret = (int) (ran * 3) + 1;
			        TimeUnit.SECONDS.sleep(ret);//3
			        return i;
			    }
			    catch (InterruptedException e) {
			    	System.err.println("timeOut_inner:" + i);
			        //throw new IllegalStateException("task interrupted", e);
			    	return -1;
			    }
			});
			int ret = -1;
			try {
				ret = future.get(2, TimeUnit.SECONDS);
				System.out.println(ret);
			} catch (InterruptedException | ExecutionException | TimeoutException e) {
				//System.err.println("timeOut_Outer: " + e.getMessage());
			}
			executor.shutdownNow();
			//stop(executor);
			
		});
    }
}

package com.yan.manag.service.util;

import java.util.ArrayList;
import java.util.List;

import org.reactivestreams.Subscriber;

import com.carrotsearch.hppc.HashOrderMixing.Strategy;

import io.reactivex.BackpressureStrategy;
import io.reactivex.Flowable;
import io.reactivex.Observable;
import io.reactivex.ObservableEmitter;
import io.reactivex.Scheduler;
//import io.reactivex.Observable;
import io.reactivex.functions.Consumer;
import io.reactivex.functions.Predicate;
import io.reactivex.schedulers.Schedulers;

public class ObservableTest {
	
	static ObservableEmitter<Object> emitt;
	static StringBuilder sync = new StringBuilder(); 
	
	//for test
	public static void main(String[] args) throws InterruptedException {
		ObservableTest observableTest = new ObservableTest();
		Observable<String> todoObservable = observableTest.observableTest();
		
		todoObservable.subscribe(
				new Consumer<String>() {//OnNext
					@Override public void accept(String s) {
			          System.out.println(s);
				    }
				}, 
				new Consumer<Throwable>() {//OnError
				      @Override public void accept(Throwable t) {
				          System.out.println(t.getMessage());
				      }
				}
		  );
		
		observableTest.getEmitter().onNext("External");
		Thread.sleep(5000);// to finish run all
		observableTest.getEmitter().onComplete();
		observableTest.getEmitter().onNext("willNotWriteToLog");
		System.out.println("Done");

	}
		
	public Observable<String> observableTest() throws InterruptedException {
		Observable<String> todoObservable = Observable.create(emitter -> {
			try {
				synchronized (sync) {
					emitt = emitter;
					sync.notifyAll();
	                // msg.notify();
	            }
		    	
		        List<String> todos = new ArrayList<String>(){{
		            add("A1");
		            add("B2");
		            add("C3");
		        }};
		        for (String todo : todos) {
		            emitter.onNext(todo);
		        }
		        //emitter.onComplete();
		    } catch (Exception e) {
		        emitter.onError(e);
		    }
		})
		.subscribeOn(Schedulers.io())
		.observeOn(Schedulers.single())
		.map((data) -> {
		    Thread.sleep(1000); //  imitate expensive computation
		    return "Well "+ data;
		})
		.filter(new Predicate<String>() {
			@Override public boolean test(String t) throws Exception {
				return true;
			}
		})
		.share();
		return todoObservable;

	}
	
	public ObservableEmitter<Object> getEmitter() throws InterruptedException {
		synchronized (sync) {
			sync.wait(5000);
		}
		return emitt;
	}

}


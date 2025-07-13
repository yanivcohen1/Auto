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

public class ObserverbleTest {
	
	ObservableEmitter<Object> emitt = null;
	static StringBuilder sync = new StringBuilder(); 
	
	public static void main1(String[] args) throws InterruptedException {
		
		ObserverbleTest testObserveble = new ObserverbleTest();
		
		Observable<String> todoObservable = testObserveble.createObserver();
		
		todoObservable.subscribe(
				new Consumer<String>() {//OnNext
					@Override public void accept(String s) throws InterruptedException {
						Thread.sleep(1000);
			          System.out.println("consumer1: " + s);
				    }
				}, 
				new Consumer<Throwable>() {//OnError
				      @Override public void accept(Throwable t) {
				          System.out.println(t.getMessage());
				      }
				}
		  );

		todoObservable.subscribe(
				new Consumer<String>() {//OnNext
					@Override public void accept(String s) throws InterruptedException {
						Thread.sleep(1000);
			          System.out.println("consumer2: " + s);
				    }
				}, 
				new Consumer<Throwable>() {//OnError
				      @Override public void accept(Throwable t) {
				          System.out.println(t.getMessage());
				      }
				}
		  );
		
		testObserveble.getEmmited().onNext("External");
		testObserveble.getEmmited().onNext("External2");
		Thread.sleep(10000);
		testObserveble.getEmmited().onComplete();
		testObserveble.getEmmited().onNext("willNotWriteToLog");
		Thread.sleep(2000);
		System.out.println("Done");
	}

	private Observable<String> createObserver() throws InterruptedException {
		Flowable.just("Hello world")
		  .subscribe(new Consumer<String>() {
		      @Override public void accept(String s) {
		          System.out.println(s);
		      }
		  });
		
		/*Flowable<String> f = Flowable.fromCallable(() -> {
		    Thread.sleep(1000); //  imitate expensive computation
		    return "Done";
		})*/

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
				}})
		.share();
		//synchronized (sync) {
			//sync.wait(25000);
			//System.out.println(this.emitt);
		//}
		return todoObservable;
	}

	public ObservableEmitter<Object> getEmmited() throws InterruptedException{
		/*synchronized (sync) {
			sync.wait();
			//System.out.println(this.emitt);
		}*/
		while (this.emitt == null) {
			Thread.sleep(100);
		}
		return this.emitt;
	}
}
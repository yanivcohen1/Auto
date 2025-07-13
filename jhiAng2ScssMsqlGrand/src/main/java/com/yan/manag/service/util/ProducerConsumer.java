package com.yan.manag.service.util;

import java.util.LinkedList;

//This class has a list, producer (adds items to list
//and consumber (removes items).
public class ProducerConsumer<T> {

	public static void main1(String[] args) throws InterruptedException {
		// Object of a class that has both produce()
		// and consume() methods
		final ProducerConsumer<Integer> pc = new ProducerConsumer<Integer>(5);

		// Create producer thread
		Thread t1 = new Thread(new Runnable() {
			@Override
			public void run() {
				int i = 0;
				while (true) {
					try {
						i++;
						pc.produce(i);
						System.out.println("Producer produced-" + i);
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		});

		// Create consumer thread
		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				while (true) {
					try {
						int val = pc.consume();
						System.out.println("Consumer consumed-" + val);
						Thread.sleep(3000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		});

		// Start both threads
		t1.start();
		t2.start();

		// t1 finishes before t2
		t1.join();
		t2.join();
	}

	// Create a list shared by producer and consumer
	// Size of list is 2.
	LinkedList<T> list = new LinkedList<>();
	int capacity;

	public ProducerConsumer(int capacity) {
		this.capacity = capacity;
	}

	// Function called by producer thread
	public void produce(T val) throws InterruptedException {
		synchronized (this) {
			// producer thread waits while list
			// is full
			while (list.size() == capacity)
				wait();

			// to insert the jobs in the list
			list.add(val);

			// notifies the consumer thread that
			// now it can start consuming
			notify();
		}
	}

	// Function called by consumer thread
	public T consume() throws InterruptedException {
		T val;
		synchronized (this) {
			// consumer thread waits while list
			// is empty
			while (list.size() == 0)
				wait();

			// to retrieve the first job in the list
			val = list.removeFirst();

			// Wake up producer thread
			notify();
		}
		return val;
	}
}
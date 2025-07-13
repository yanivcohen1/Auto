package com.who.tlv.ServicesWebsites.server;

import java.util.LinkedList;
import java.util.Queue;

public class BlockingQueue<T> {

    private Queue<T> queue = new LinkedList<T>();
    private int capacity;

    public BlockingQueue(int capacity) {
        this.capacity = capacity;
    }

    public synchronized void put(T element) throws InterruptedException {
        while(queue.size() == capacity) {
            wait();
        }

        queue.add(element);
        notify();
    }

    public synchronized T take(long Timeout) throws InterruptedException {
    	T item = null ;
    	if(queue.isEmpty()) {
            wait(Timeout);
        }
        if(!queue.isEmpty()) {
        	item = queue.remove();
            notify();
        }
        return item;
    }

	public int getQueueSize() {
		return queue.size();
	}
}
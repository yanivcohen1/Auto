package com.who.mail;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.CopyOnWriteArrayList;

public class MyListMap<K, T> {

	private T t;
	private ConcurrentMap<K, CopyOnWriteArrayList<T>> map = new ConcurrentHashMap<K, CopyOnWriteArrayList<T>>(new HashMap<K, CopyOnWriteArrayList<T>>());
	
	public static void main(String[] args) {
		MyListMap myListMap = new MyListMap();
		myListMap.test();
	}
	
	private void test() {
		MyListMap<String, String> myListMap = new MyListMap<String, String>();
		CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<String>();
		list.add("yan1");
		list.add("yan2");
		myListMap.add("key1", list);
		myListMap.add("key1", "yan3");
		System.out.println(myListMap.get("key1"));
		MyListMap<Integer, String> myListMap2 = new MyListMap<Integer, String>();
		List<String> list2 = new ArrayList<String>();
		list2.add("yan11");
		list2.add("yan22");
		myListMap2.add(1, list2);
		myListMap2.add(1, "yan33");
		System.out.println(myListMap2.getList(1));
	}

	protected synchronized void add(K key, T val){
		if (map.get(key) == null) {
			CopyOnWriteArrayList<T> list = new CopyOnWriteArrayList<T>();
			list.add(val);
			map.put(key, list);
		}else{
			((CopyOnWriteArrayList<T>) map.get(key)).add(val);
		}
		
	}
	
	protected synchronized void add(K key, CopyOnWriteArrayList<T> list){
		if (map.get(key) == null) {
			map.put(key, list);
		}else{
			((CopyOnWriteArrayList<T>) map.get(key)).addAll(list);
		}
	}
	
	protected synchronized void add(K key, List<T> list){
		if (map.get(key) == null) {
			CopyOnWriteArrayList<T> list2 = new CopyOnWriteArrayList<T>();
			list2.addAll(list);
			map.put(key, list2);
		}else{
			((CopyOnWriteArrayList<T>) map.get(key)).addAll(list);
		}
	}
	
	protected synchronized List<T> getList(K Key){
        return ((List<T>) map.get(Key));
    }
	
	protected synchronized CopyOnWriteArrayList<T> get(K Key){
        return map.get(Key);
    }
	
	protected synchronized Set<K> keySet(){
        return map.keySet();
    }
	
}

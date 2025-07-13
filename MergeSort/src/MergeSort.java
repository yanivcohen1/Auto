import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class MergeSort {

	static List<Integer> mergeList = new ArrayList<Integer>();
	
	public static void main(String[] args) {
		List<Integer> unSortedList = Arrays.asList(38,27,43,3,9,82,10);
		int[] unSortedArray = new int[]{38,27,43,3,9,82,10,2};
		MergeSort mergeSort = new MergeSort();
		//mergeSort.split(unSortedList);
		//System.out.println(Arrays.toString(mergeSort.mergesort(unSortedArray)));
		System.out.println(mergeSort.split(unSortedList));
	}

	int[] mergesort(int[] m)
	{
		 int size = m.length;
	     if (size <= 1) {
	    	 return m;
		}else
	     {
	         int middle = m.length / 2;
	         int[] left = new int[middle];
	         for (int i = 0; i < middle; i++) {
	        	 left[i] = m[i];
			 }
	         int[] right = new int[m.length - middle];
	         for (int i = middle; i < m.length; i++) {
	        	 right[i - middle] = m[i];
			 }
	         /*for each x in m up to middle
	             add x to left
	         for each x in m after middle
	             add x to right*/
	         left = mergesort(left);
	         System.out.println("left:" + Arrays.toString(left));
	         right = mergesort(right);
	         System.out.println("right" + Arrays.toString(right));
	         int[] result = merge(left, right);
	         //System.out.println(Arrays.toString(result));
	         return result;
	     }
	}
	
	private int[] merge(int[] left, int[] right) {
		int[] result = {};
	    while (left.length > 0 && right.length > 0)
	    {
	        if (left[0] <= right[0])
	        {
	        	result = addElement(result, left[0]);
	            //append first(left) to result
	        	left = RemoveElement(left);
	            //left = rest(left)
	        }
	        else
	        {
	        	result = addElement(result, right[0]);
	            //append first(right) to result
	        	right = RemoveElement(right);
	            //right = rest(right)
	        }
	    }
	    if (left.length > 0)
	    	result = addElement(result, left);
	    if (right.length > 0) 
	     result = addElement(result, right);
	    return result;
	}
	
	static int[] addElement(int[] a, int e) {
	    a  = Arrays.copyOf(a, a.length + 1);
	    a[a.length - 1] = e;
	    return a;
	}
	
	static int[] addElement(int[] a, int[] e) {
	    int [] b  = Arrays.copyOf(a, a.length + e.length);
	    for (int i = a.length; i < b.length; i++) {
	    	b[i] = e[i - a.length];
		}
	    return b;
	}
	
	static int[] RemoveElement(int[] a) {
		a = Arrays.copyOfRange(a, 1, a.length);
	    //a  = Arrays.copyOf(a, a.length - 1);
	    //a[a.length - 1] = e;
	    return a;
	}
	
	private int[] mergeOld(int[] left, int[] right) {
		int[] merge = new int[left.length + right.length];
		for (int i = 0; i < left.length; i++) {
			merge[i] = left[i];
		 }
        for (int i = left.length; i < left.length + right.length; i++) {
        	merge[i] = right[i - left.length];
		 }
		return merge;
	}

	private List<Integer> split(List<Integer> unSortedList) {
		//int[] d = unSortedList1.stream().mapToInt(i->i).toArray();	
		if (unSortedList.size() <= 1) {
	    	 return unSortedList;
		}else{
			//List<Integer> unSortedList = Arrays.asList(new Integer[unSortedList1.size()]);
			//Collections.copy(unSortedList, unSortedList1);	
			List<Integer> left = unSortedList.subList(0, unSortedList.size()/2);
			List<Integer> right = unSortedList.subList(unSortedList.size()/2, unSortedList.size());
			left = split(left);
	        System.out.println("left:" + left);
	        right = split(right);
	        System.out.println("right:" + right);
			List<Integer> newList = new ArrayList<>();
			newList.addAll(left);
			newList.addAll(right);
			Collections.sort(newList);
			return newList;
			/*if (right.size() > 1) {
				right = split(right);
			}else if (right.size() == 1) {
				if (left.size() > 1) {
					left = split(left);
				}else if (left.size() == 1) {
					mergeSort(right,left);
				}
			}*/
		}
		//return null;
	}

	private List<Integer> mergeSort(List<Integer> right, List<Integer> left) {
		//List<Integer> right1 = Arrays.asList(new Integer[right.size()]);
		//Collections.copy(right1, right);
		//List<Integer> left1 = Arrays.asList(new Integer[left.size()]);
		//Collections.copy(left1, left);
		List<Integer> newList = new ArrayList<>(left.size() + right.size());
		newList.addAll(left);
		newList.addAll(right);
		Collections.sort(newList);
		mergeList = newList;
		return newList;
	}

}

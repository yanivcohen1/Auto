import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Quicksort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> unSortedList =  new ArrayList(Arrays.asList(38,27,43,3,9,82,10));
		Quicksort quicksort = new Quicksort();
		Integer[] array = new Integer[unSortedList.size()];
		Integer[] array2 = unSortedList.toArray(array);
		//System.out.println(Arrays.toString(quicksort.quickSort(array2,0,unSortedList.size()-1)));
		//System.out.println(Arrays.toString(BubbleSort(array2)));
		System.out.println(quicksort.quicksort(unSortedList));
	}

	/*procedure bubbleSort( A : list of sortable items ) defined as:
		n := length( A )
		do
		swapped := false
		n := n - 1
		for each i in 1 to n do:
		if A[ i ] > A[ i + 1 ] then
		swap( A[ i ], A[ i + 1 ] )
		swapped := true
		end if
		end for
		while swapped
		end procedure*/

	public static Integer[ ] BubbleSort( Integer[ ] num )
	{
	     int j;
	     boolean flag = true;   // set flag to true to begin first pass
	     int temp;   //holding variable

	     while ( flag )
	     {
	            flag= false;    //set flag to false awaiting a possible swap
	            for( j=0;  j < num.length -1;  j++ )
	            {
	                   if ( num[ j ] < num[j+1] )   // change to > for ascending sort
	                   {
	                           temp = num[ j ];                //swap elements
	                           num[ j ] = num[ j+1 ];
	                           num[ j+1 ] = temp;
	                          flag = true;              //shows a swap occurred  
	                  } 
	            } 
	      }
	     return num;
	}
	
	public List<Integer> quicksort(List<Integer> array){
	    //var list less, greater
	    List<Integer> less = new ArrayList<Integer>();
	    List<Integer> greater = new ArrayList<Integer>();
	    if (array.size() <= 1)
	        return array;
	    //select and remove a pivot value pivot from array
	    Integer pivot = array.remove(0);
	    for (Integer x : array) {//each x in array
	    	if (x <= pivot){
	    		less.add(x);//then append x to less
	    	}else{
	    		greater.add(x);//append x to greater
	    	}
		}
	    List<Integer> newList = new ArrayList<>();
    	//return concatenate(quicksort(less), pivot, quicksort(greater))
	    System.out.println("lessin:"+ less);
		newList.addAll(quicksort(less));
		System.out.println("lessout:"+ less);
		newList.add(pivot);
		System.out.println("greaterIn:"+ greater);
		newList.addAll(quicksort(greater));
		System.out.println("greaterOut:"+ greater);
		return newList;
    }
	
	public Integer[] quickSort(Integer array[], int start, int end)
	{
	        int i = start;                          // index of left-to-right scan
	        int k = end;                            // index of right-to-left scan

	        if (end - start >= 1)                   // check that there are at least two elements to sort
	        {
	                int pivot = array[start];       // set the pivot as the first element in the partition

	                while (k > i)                   // while the scan indices from left and right have not met,
	                {
	                        while (array[i] <= pivot && i <= end && k > i)  // from the left, look for the first
	                                i++;                                    // element greater than the pivot
	                        while (array[k] > pivot && k >= start && k >= i) // from the right, look for the first
	                            k--;                                        // element not greater than the pivot
	                        if (k > i)                                       // if the left seekindex is still smaller than
	                            swap(array, i, k);                      // the right index, swap the corresponding elements
	                }
	                swap(array, start, k);          // after the indices have crossed, swap the last element in
	                                                // the left partition with the pivot 
	                quickSort(array, start, k - 1); // quicksort the left partition
	                quickSort(array, k + 1, end);   // quicksort the right partition
	        }
	        else    // if there is only one element in the partition, do not do any sorting
	        {
	                return array;                     // the array is sorted, so exit
	        }
			return array;
	}

	public void swap(Integer array[], int index1, int index2) 
	// pre: array is full and index1, index2 < array.length
	// post: the values at indices 1 and 2 have been swapped
	{
		int temp = array[index1];           // store the first value in a temp
		array[index1] = array[index2];      // copy the value of the second into the first
		array[index2] = temp;               // copy the value of the temp into the second
	}
}

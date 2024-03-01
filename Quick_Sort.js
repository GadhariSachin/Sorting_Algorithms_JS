// Quick Sort in JS

/*
---------------
Quick Sort (Read More here - https://www.geeksforgeeks.org/quick-sort/)
---------------
QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions 
the given array around the picked pivot by placing the pivot in its correct position in the sorted array.




----------------
Time Complexity -  O(N Log(N)), O ( N log (N)), O(N^2)
----------------

*/

/* Quick Way of doing Quick Sort but it uses extra auxillary space for storing left and right array */
function QuickSortWithExtraSpace(unSortedArray) {
  if (unSortedArray.length <= 1) return unSortedArray;

  let left = [],
    right = [];

  const pivot = unSortedArray[unSortedArray.length - 1];

  for (let i = 0; i < unSortedArray.length - 1; i++) {
    if (unSortedArray[i] > pivot) {
      right.push(unSortedArray[i]);
    } else {
      left.push(unSortedArray[i]);
    }
  }

  return [
    ...QuickSortWithExtraSpace(left),
    pivot,
    ...QuickSortWithExtraSpace(right),
  ];
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const helper=(arr,start,end)=>{
  if(start>=end ){
      return arr
  }
  const pivotIndex = Math.floor(Math.random() * (end - start) + start)
  
  swap(arr, start, pivotIndex);
  
  let small=start;

  for (let big = start + 1; big <= end; big++) {
      if (arr[start] > arr[big]) {
          small++;
          swap(arr,small, big);
      }
  }

  swap(arr,small,start)
  
  helper(arr,start,small-1)

  helper(arr,small+1, end)

  return arr
  
}

function QuickSort(arr) {

  const start = 0,
    end = arr.length - 1;

  return helper(arr, start, end);
}

const inputArray = [50, 8, 3, 1, 100, 50, 12];

// const sortedArray = QuickSortWithExtraSpace(inputArray);

const sortedArray = QuickSort(inputArray);

console.log("Sorted Array using Quick Sort ::: ", sortedArray);

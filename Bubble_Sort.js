// Selection Sort in JS

/*
---------------
Bubble Sort (Read More here - https://www.geeksforgeeks.org/bubble-sort/)
---------------
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. 
This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

----------------
Time Complexity -  O(N^2)
----------------

*/

function BubbleSort(unSortedArray) {
  return unSortedArray;
}

const inputArray = [10, 2, 3, 67, 100, 56, 7, 4];

const sortedArray = BubbleSort(inputArray);

console.log("Sorted Array using Bubble Sort ::: ", sortedArray);

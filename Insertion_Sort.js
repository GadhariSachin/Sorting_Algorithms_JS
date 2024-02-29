// Insertion Sort in JS

/*
---------------
Insertion Sort (Read More here - https://www.geeksforgeeks.org/insertion-sort/)
---------------
Insertion sort is a simple sorting algorithm that works similarly to the way you sort playing cards in your hands. 
The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed in the correct position in the sorted part.


----------------
Time Complexity -  O(N^2)
----------------

*/

function InsertionSort(unSortedArray) {
  
  for (let i = 0; i < unSortedArray.length; i++){

    let temp = unSortedArray[i];
    let j = i - 1;
    while (j >= 0 && unSortedArray[j] > temp) {
      unSortedArray[j+1]= unSortedArray[j];
      j--;
    }
    unSortedArray[j + 1] = temp;

  }
  
  return unSortedArray;
}


// i    -> 0, 1, 2

// temp -> 5, 8, 3

// j    -> -1, 0, 1, 0

// Iterations
//0 -> [5, 8, 3]
//1 -> [5, 8, 3]
//2 -> [5, 3, 8]
//3 -> [3, 5, 8]

const inputArray = [5, 8, 3];

const sortedArray = InsertionSort(inputArray);

console.log("Sorted Array using Bubble Sort ::: ", sortedArray);


// Selection Sort in JS

/*
---------------
Selection Sort (Read More here - https://www.geeksforgeeks.org/selection-sort/)
---------------
Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 


-------------
Psuedo Code
-------------
- Initialize two pointers to keep track of sorted and unsorte array as
    i = 0 and  j = 0 and a variable to track min index;

- Loop from 0 to array length - 1
  
  - Set minIndex = i

  - Loop from j = i + 1 to arrayLength

    - if we find any smaller element in array[i+1, arrayLength]
        - Update minIndex to j
  
  - Swap unSortedArray[minIndex] with unSortedArray[i]

- Return sorted array




----------------
Time Complexity -  O(N^2)
----------------

*/

function SlectionSort(unSortedArray) {
  let i = 0,
    j = 0,
    minIndex = 0;
  
  const arrayLength = unSortedArray.length;

  // One by one move boundary of unsorted subarray 
  for (i = 0; i < arrayLength - 1; i++) {
  
    // Find the minimum element in unsorted array 
    minIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {

      if (unSortedArray[j] < unSortedArray[minIndex]) {
        minIndex = j;
      }

    }
    
    console.log(`::: Sort Iteration - ${i+1} ::: `);
    console.log(`::: Swap Values ::: arr[${i}] - ${unSortedArray[i]} and arr[${minIndex}] - ${unSortedArray[minIndex]}`);

    console.log(`::: Before Swap ::: `, unSortedArray);

    const temp = unSortedArray[minIndex];
    unSortedArray[minIndex] = unSortedArray[i];
    unSortedArray[i] = temp;

    console.log(`::: After Swap ::: `, unSortedArray);
  }

  return unSortedArray;
}

const inputArray = [10, 2, 3, 67, 100, 56, 7, 4];

const sortedArray = SlectionSort(inputArray);

console.log("Sorted Array using Selection Sort ::: ", sortedArray);

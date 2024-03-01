// Merge Sort in JS

/*
---------------
Bubble Sort (Read More here - https://www.geeksforgeeks.org/merge-sort/)
---------------
Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging 
the sorted subarrays back together to form the final sorted array.


----------------
Time Complexity -  O(N LogN)
----------------

*/

function splitHelper(unSortedArray, start, end) {

  // Base Case - Leaf Level Worker
  if (start >= end) return;

  // Recursie Case - Internal Node
  const mid = parseInt((start + end) / 2);
  splitHelper(unSortedArray, start, mid);
  splitHelper(unSortedArray, mid + 1, end);
  mergeHelper(unSortedArray, start, mid, end);
}
  

function mergeHelper(unSortedArray, start, mid, end){
  let i = start; 
  let j = mid + 1;
  let auxArray = [];

  while (i <= mid && j <= end) {
    if (unSortedArray[i] < unSortedArray[j]) {
      auxArray.push(unSortedArray[i]);
      i++;
    } else {
      auxArray.push(unSortedArray[j]);
      j++;
    }
  }

  while (i <= mid) {
    auxArray.push(unSortedArray[i]);
    i++;
  }

  while (j <= end) {
    auxArray.push(unSortedArray[j]);
    j++;
  }

  // Copy sorted elements back to the original array
  for (let k = 0; k < auxArray.length; k++) {
    unSortedArray[start + k] = auxArray[k];
  }

  return unSortedArray;
}


function MergeSort(unSortedArray) {
  
  const len = unSortedArray.length;

  const start = 0;

  const end = len - 1;

  splitHelper(unSortedArray, start, end);
  
  return unSortedArray;
}

const inputArray = [5, 8, 3, 1];

const sortedArray = MergeSort(inputArray);

console.log("Sorted Array using Merge Sort ::: ", sortedArray);

// Heap Sort in JS

/*
---------------
Heap Sort (Read More here - https://www.geeksforgeeks.org/heap-sort/)
---------------
Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element
and place the minimum element at the beginning. Repeat the same process for the remaining elements.




----------------
Time Complexity -  O(N Log(N))
----------------

*/

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify(arr, n, i) {
  let largest = i,
    left = 2 * i + 1,
    right = 2 * i + 2;
  
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }


  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, largest, i);

    heapify(arr, n, largest);
  }
}

function HeapSort(unSortedArray) {
  const n = unSortedArray.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(unSortedArray, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    swap(unSortedArray, 0, i);

    heapify(unSortedArray, i, 0);
  }

  return unSortedArray;
}

const inputArray = [5, 8, 3, 9, 4, 1, 7];

const sortedArray = HeapSort(inputArray);

console.log("Sorted Array using Heap Sort ::: ", sortedArray);

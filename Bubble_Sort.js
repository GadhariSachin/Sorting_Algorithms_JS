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
  
  let i, j;

  for (i = 0; i < unSortedArray.length; i++){
    console.log(`::: Sort Iteration - ${i + 1} ::: `);

    for (j = i; j < unSortedArray.length - i - 1; j++){
      console.log(`::: Sort Inner Iteration - ${i + 1} - ${j + 1} ::: `);
      console.log(`::: Before Swap ::: `, unSortedArray);
      if (unSortedArray[j] > unSortedArray[j + 1]) {
        const temp = unSortedArray[j];
        unSortedArray[j] = unSortedArray[j + 1];
        unSortedArray[j + 1] = temp;
      }
      console.log(`::: After Swap ::: `, unSortedArray);
    }
  }
  
  return unSortedArray;
}

const inputArray = [5, 8, 3];

const sortedArray = BubbleSort(inputArray);

console.log("Sorted Array using Bubble Sort ::: ", sortedArray);

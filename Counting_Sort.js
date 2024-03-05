// Counting Sort in JS

/*
---------------
Counting Sort (Read More here - https://www.geeksforgeeks.org/counting-sort/)
---------------
Counting Sort is a non-comparison-based sorting algorithm that works well when there is limited range of input values. 
It is particularly efficient when the range of input values is small compared to the number of elements to be sorted. 
The basic idea behind Counting Sort is to count the frequency of each distinct element in the input array and use that 
information to place the elements in their correct sorted positions.


----------------
Time Complexity -  O(N)
----------------

*/


function CountingSort(unSortedArray) {
  
  const max = Math.max(...unSortedArray);

  const min = Math.min(...unSortedArray); 

  const counts = new Array(max - min + 1).fill(0);

  for (let index = 0; index <= unSortedArray.length - 1; index++) {
    const element = unSortedArray[index];
    counts[element - min]++;
  }

  // Calculate the cumulative sum of the counts
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  let outputArray = new Array(unSortedArray.length);

  for (let index = unSortedArray.length - 1; index >= 0; index--) {
    const element = unSortedArray[index];
    outputArray[counts[element - min] - 1] = element;
    counts[element - min]--;
  }

  return outputArray;
}

const inputArray = [5, 2, 3, 2, 7];
//const inputArray = [4, 0, -4];

const sortedArray = CountingSort(inputArray);

console.log("Sorted Array using Counting Sort ::: ", sortedArray);

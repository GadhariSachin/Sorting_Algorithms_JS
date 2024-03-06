// Radix Sort in JS

/*
---------------
Radix Sort (Read More here - https://www.geeksforgeeks.org/radix-sort/)
---------------
Radix Sort is a linear sorting algorithm that sorts elements by processing them digit by digit. 
It is an efficient sorting algorithm for integers or strings with fixed-size keys. 


----------------
Time Complexity -  O(N)
----------------

*/


function CountingSort(unSortedArray, exponent) {  
  const counts = new Array(10).fill(0);

  const min = Math.min(unSortedArray);

  for (let index = 0; index <= unSortedArray.length - 1; index++) {
    const element = unSortedArray[index];
    counts[Math.floor(element / exponent) % 10]++;
  }

  // Calculate the cumulative sum of the counts
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  let outputArray = new Array(unSortedArray.length);

  for (let index = unSortedArray.length - 1; index >= 0; index--) {
    const element = unSortedArray[index];
    outputArray[counts[Math.floor(element / exponent) % 10] - 1] = element;
    counts[Math.floor(element / exponent) % 10]--;
  }

  return outputArray;
}


function RadixSort(arr) {
  let maxDigit = Math.max(...arr);
  
  let exponent =1;
  
  while(maxDigit){
      
      let resultArr = CountingSort(arr, exponent);
      
      maxDigit = Math.floor(maxDigit / 10);
      
      exponent *= 10;
      
      arr = [...resultArr];
  }
  
  return arr;
}

// const inputArray = [57, 112, 43, 20, 7];
const inputArray = [10, 0, 101];

const sortedArray = radix_sort(inputArray) //RadixSort(inputArray);

console.log("Sorted Array using Radix Sort ::: ", sortedArray);

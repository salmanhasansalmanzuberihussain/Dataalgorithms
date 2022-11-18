let array = [1, 2, [3, 4], 5, [6, 7, 8]];

//option 1 the idea is to create a return
//this is the newArray ={}
//create a for loop
//if array.isarray(arr[i])
//let flat = flatten arr[i]
//concat flat
//else newArray.push(arr[i])

function flatten(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //gets the value of the function  //Array.isArray() static method determines whether the passed value is an Array.
      let flat = flatten(arr[i]); //flatten function is inbuilt function in underscore js library
      newArray = newArray.concat(flat); //concat measures two arrays
    } else {
      newArray.push(arr[i]); //then you push the new element
    }
  }
  return newArray;
}

//for each method can be used to replace for loops
function flat(arr) {
  let flat = [];
  arr.forEach((el) =>
    Array.isArray(el) ? (flat = flat.concat(flatten(el))) : flat.push(el)
  );
  return flat;
}

//Review all problems in order and try to understand it as much as possible
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let storage = {};
  let storage1 = {};

  for (const val of arr1) {
    storage[val] = (storage[val] || 0) + 1;
  }

  for (const val of arr2) {
    storage1[val] = (storage1[val] || 0) + 1;
  }

  for (const key in storage1) {
    if (storage1[key ** 2] !== storage[key]) return false;
  }

  return true;
}

//since anagram is a string, store it in one storage and then from there increment and decrement
function isAnagram(first, second) {
  if (first.length !== second.length) return false;

  let storage = {};

  for (i = 0; i < first.length; i++) {
    let newval = first[i];
    storage[newval] = (storage[newval] || 0) + 1;
  }

  for (i = 0; i < second.length; i++) {
    let newval = second[i];
    storage[newval] = (storage[newval] || 0) + 1;
  }

  for (const key in storage) {
    if (!storage[key]) {
      return false;
    } else {
      storage[key] -= 1;
    }
  }
  return true;
}

isAnagram('Has', 'Has');

function sumZero(arr) {
  let left = 0;
  let right = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function countUniqueValues(array) {
  let a = 0;
  for (b = 1; b < array.length; b++) {
    if (array[a] !== array[b]) {
      a++;
      array[a] = array[b];
    }
  }
  return a + 1;
}

//got maxsubarray wrong
//dont mathmax the temp sum math max the maxsum
function maxSubarraySum(array, n) {
  let tempSum = 0;
  let maxSum = 0;
  for (i = 0; i < n; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;
  for (i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num, num1) {
  let string = num.toString();
  let string1 = num1.toString();

  let outlook = {};
  let outlook1 = {};

  for (i = 0; i < string.length; i++) {
    let newval = string[i];
    outlook[newval] = (outlook[newval] || 0) + 1;
  }

  for (i = 0; i < string1.length; i++) {
    let newval = string1[i];
    outlook1[newval] = (outlook1[newval] || 0) + 1;
  }

  for (const key in outlook1) {
    if (outlook[key] !== outlook1[key]) return false;
  }
  return true;
}

//Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.{

function areThereDuplicates() {
  let collection = {};
  for (const val of arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  for (const key in collection) {
    if (collection[key] > 1) {
      return true;
    }
  }
  return false;
}

//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.

function averagePair(array, target) {
  let start = 0;
  let end = 0;
  while (start < array.length) {
    let sum = (array[start] + array[end]) / 2;
    if (sum === target) {
      return [array[start], array[end]];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
}

function isSubsequence(str1, str2) {
  let a = 0;
  let b = 0;
  while (b < str2.length) {
    if (str1[a] !== str2[b]) a++;
    if (a === str1.length) return true;
    b++;
  }
  return false;
}

//Given an array of integers and a number, write a function called maxSubarraySum,
//which finds the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(array, num) {
  let tempSum = 0;
  let maxSum = 0;
  for (i = 0; i < num; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;
  for (i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

//write a function minSubArrayLen which accepts two paramters

//got this question right was missing else if and else break and accidently put sum instead of n
function minSubArrayLen(arr1, n) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minlen = Infinity;

  while (start < arr1.length) {
    if (total < n && end < arr1.length) {
      total += arr1[start];
      start++;
    } else if (total >= n) {
      minlen = Math.min(minlen, end - start);
      total -= arr1[end];
      end++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
//got this one wrong as well no big deal, its i - start +1

function findLongestSubstring(string) {
  let storage = {};
  let start = 0;
  let longest = 0;

  for (i = 0; i < string.length; i++) {
    let newval = string[i];
    if (storage[newval]) {
      start = Math.max(start, storage[newval]);
    }
    longest = Math.max(longest, i - start + 1);
    storage[newval] = i + 1;
  }
  return longest;
}

//write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the su is 0.
//Return an array that includes both sum to zero

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left--;
    }
  }
}

//implement a function called countuniquevalues
//which accepts a sorted array and counts the unique values in the array.
//There can be negative

function countuniquevalues(arr) {
  var i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//Write a function called averagePair.
//Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target

//average pair that has a sorted array and a target average
//determine if there is a pair that = the target value

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right] / 2;
    if (sum === target) {
      return true;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

//productOfArray(arr){
if (arr.length === 0) {
  return 1;
}

return arr[0] * productOfArray(arr.slice(1));
//slices the elements

function birthday(s, d, m) {
  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += s[i];
  }
  let count = 0;
  if (sum == d) {
    count++;
  }

  for (var i = m; i < s.length; i++) {
    sum = sum + s[i] - sum[i - m];
    if (sum == d) {
      count++;
    }
  }
  return count;
}

//sorting bubble //bubble sort is N^2

//bubble sort is when you check if the value of j> arr[j+1] then replace arr[j+1] and then you just keep sorting
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//bubble sort is N^2
// Selection Sort
// If you look at a sort say you have 19,44,38,5,47,15
// Compare 19,44,38,5,47,15
// Go through the array compare the minimum and then change the first element from the minimum element

for (var i = 0; i < arr.length; i++) {
  var lowest = i;
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[lowest]) {
      lowest = j;
    }
  }
  var temp = arr[i];
  arr[i] = arr[lowest];
  arr[lowest] = temp;
}

return arr;

SelectionSort([34, 22, 10, 19, 17]);

//insertion sort

function insertionsort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionsort([1, 5, 4, 4, 5]);

//Mergesort Pseudocode
//Break up the array into halves until you have arrays that are empty or have on element
//Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
//Once the array has been merged back together, return the merge and sorted array

//How do i break the array into halves until you have arrays that are empty or have on element
//One you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
//once the array has been merged back together, return the merge and sorted array

//Regular merge sort

function mergesort(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      results.push(arr2[j]);
    }
  }
  return results;
}

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++; //make sure to increment
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++; //make sure to increment
  }
  return result;
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left, right);
}

//Merge Sort Big 0 of mergeSort
//The Merge complexity is
//o(n log n) Time Complexity(Best,Average)
//o(n log n) Time Complexity(Best,Average)

//32
//16 //16
//8 //8 //8 //8
//4 //4 //4 //4 //4 //4 //4 //4
//2 //2 //2 //2 //2 //2 //2 //2 //2 //2 //2 //2 //2 //2 //2 //2
//1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1 //1

//this relationship is log n(2^n)

//theres always 8 items and we're always comparing em and thats //o(n)

//Sliding window technique

//Write a function called MaxSubarraySum which accepts an array of integers and a number called N.
//The function should calculate the maximum sum of n consecutive elements in the array.
///the function maxSumArraySum(array,num)

//also a useful technique for the running average

//Question variants
//Fixed Length
//max sum subarray of size k

//dynamic variant
//smallest sum>= to some value S

//dynamic variant w/Auxilarry data strucuture

//Introduction to quick sort

//Have to solve with recursion
//Like merge sort exploits the fact that arrays of 0 or 1 element are always sorted
//Work by selecting one element called the pivot, and finding the index where the pivot should end up
//in the sorted array

//[5,2,1,8,4,7,6,3]

//pick some element
//the first one which is [5,2,1,8,4,7,6,3]

//take all the elements that are less than 5 of it to the left of it and all the numbers that are greater than give to the right

//numbers less than 5
//2,1,4,3

//going to move them all here and then on the right side

//5,2,1,8,4,7,6,3

//2,1,4,3 //in this index you move 5 and that becomes
//3,2,1,4,5,7,6,8

//pick the first item and get the first spot
//and then you end up with 1,2,3, //3 is going to have index of 2 5 is going to have index of 4
//1,2,3,4,5,7,6,8

//3,2,1,4,5,7,6,8
//1,2,3,4,5,7,6,8

//pick the first element and see where it needs to go 1,2,3,4,5,7,6,8
//7,6,8
//we move the other elemnts so we move six to the left of it, eight to the right of it

//So that becomes
//[1,2,3,4,5,6,7,8]

//11,40,40,50,43,10,30,42,20,6,19,32,20,41,23,27

//Take 11
//you get to 10 and you would think you move it, but no you actually just increment 10 and add 11
//11,10,40,40,50,43,40,30,42,,20,6,19,32,20,41,23,27

//11,10,6,50,43,40,30,42,20,40,19,32,20,41,23,27
//two items that we need 11 to leap frog over
//6,10,11,50,43,40,30,42,20,40,19,32,20,41,23,27

//it then cements 6,10,11,50,43,40,30,42,20,40,19,32,20,41,23,27
//50 //how many numbers are greater than 50 or how many numbers are less than 50, 12 numbers greater than 50

//6,10,11,27,43,40,30,42,20,40,19,32,20,41,23,50
//6,10,11,27,30,40,30,42,43,40,19,32,20,41,23,50
//43,40,30,42,20
//swap 43 and 20
//swap 40 and 19
//then swap 30 and 23
//and then 27 jumps over all those numbers that were sorted

//this is quick sort
//have to explain quick sort

//Basically if you have 3,5,10,30,50
//3,9,5,40,10

//what is less than 3?
//nothing

//what is less than 9
//5 so 9 jumps over 5
//what is less than 40

//pivot helper
//In order to implement merge sort, it's useful to first implement a function responsible aranging elements in an array
//on either side of a pivot
//Given an array this helper function should designate an element as the pivot
//all values of the pivot are moved to the left and the right

//the runtime of quick sort depends in part on how one selects the pivot
//ideally the pivot should be chosen so that it's roughly the median value in the data set you're sorting
//For simplicity we'll always choose the pivot to be the first element(we'll talk about consequencces of this later)

//let arr = [5,2,1,8,4,7,6,3]

//pivot(arr);

//arr;

//picks the first element and chooses that as an element 5,

//all the elements less than 5, the order of the other values doesn't matter

//Pivot Pseudocode
//it will help to accept three arguments, an array, a start index, and an end index
//these can be default to 0 and the array length minus1 respectively

//array sttart index and end index

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivots = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (pivots > arr[i]) {
      i++;
      //how do i move those elements that are less than the pivot and keep track of em to move them?
    }
  }
}

//28,41,4,11,16,1,40,14,36,37,42,18

//28,41,4,11,16,1,40,14,36,37,42,18
//28,4,41,11,16,1,40,14,36,37,42,18

//28,4,11,41,16,1,40,14,36,37,42,18
//there are 6 elements less than our pivot, have to swap 28, with out first number

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    //this is just a loop to make
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  var pivot = arr[start]; //create a pivot at the start , this is the first value
  var swapIdx = start; //swapIdx =0 this keeps track of how we're going to have to swap //this is the index
  for (var i = start + 1; i < arr.length; i++) {
    //for (var i=start+1; i<arr.length; i++)
    if (pivot > arr[i]) {
      //if pivot>arr[i]
      swapIdx++; //swapIdx++
      swap(arr, swapIdx, i); //swap(arr,swapIdx,i) //takes the value
      console.log(arr);
    }
  }
  swap(arr, start, swapIdx); //arr,start,swapidx, once that swap is complete swap the start and the swapidx
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

//4,8,2
//found that 2 is greater than 4 so we keep track of the counter
//i, with swapidx, i
//pivot (4,8,2,1,5,7,6,3)
//[4,8,2,1,5,7,6,3]
//[4,2,8,1,5,7,6,3]
//[4,2,8,1,5,7,6,3]
//[4,2,8,1,5,7,6,3]
//[4,2,1,3,5,7,6,8]
//[4,2,1,3,5,7,6,8]
//take last index

//[3,2,1,4,5,7,6,8]

//at the very end we would swap
//[1,2,4,8,5,7,6,3]

//in pivot sort

//for(var i=0; i<arr.length; i++)

//3,5,3,2,5

//what is pivot sort, pivot sort is
//[3,2,5,4,3,2]

//[3,2,5,4,3,2]
//look at the concept
//theres 3 theres 2

//the pivot is greater than the number
//increment those numbers
//and then do a temp swap of that last index and the start

//then do a swap

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

//Quicksort Pseudocode
//Call the pivot helper on the array
//recursively call the same thing call quick sort again on the left
//When the helper returns to you the updated pivot index, recirsively call the pivot helper
//on the subarray to the left of that index, and the subarray to the right of that index

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
quickSort([4, 6, 9, 1, 2, 5, 3]);

//quicksort explained

//data algorithms [Quicksort]

//what is quicksort ([3,4,5,2,9,1])
//([5,4,2,1,5])

//if the pivot> greater than the value then you swap the value

//i create a swap that needs to function
//then i made a pivot that starts at arr[start]
//startindex = start

//then its best to loop from the start and if that value of the pivot is greater than arr[i]
//startindex++
//sqap(arr,startindex,i)

//swap(arr,start, startindex)
//return startindex

// then call quicksort

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    temp = arr[j];
  }

  let pivot = arr[start];
  let startindex = start;

  for (var i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      startindex++;
      swap(arr, startindex, i);
    }
  }
  swap(arr, start, startindex);
  return startindex;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivothelper = pivot(arr, left, right);
    quicksort(arr, left, pivothelper - 1);
    quicksort(arr, pivothelper + 1, right);
  }
  return arr;
}

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

//buggle sort is when you check if the value of j> arr[j+1] then replace arr[j+1] and then you just keep sorting

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

//

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
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
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

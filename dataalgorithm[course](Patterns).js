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
    arr[j] = temp;
  }

  let pivot = arr[start];
  let swapidx = start;

  for (var i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      swapidx++;
      swap(arr, swapidx, i);
    }
  }
  swap(arr, start, swapidx);
  return swapidx;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivothelper = pivot(arr, left, right);
    quicksort(arr, left, pivothelper - 1);
    quicksort(arr, pivothelper + 1, right);
  }
  return arr;
}

//Quicksort is a memorization thing but as i keep practicing this stuff is going to become second nature
//Big O of quicksort

//Time complexity
//O(n log n)

//Best case
//[8,5,6,1,3,7,2,4,12,13,14,11,9,15,10]
//make decomposition
//8

//[4,5,6,1,3,7,2]
//[12,13,14,11,9,15,10]

//if we have more elements than we have to make 5 elements
//what is the worst case
//[1,2,3,4,5,6,7,8,9,10]
//1
//so every time we go through each decomposition is only one item that we're pivoting on

//so everything moves to the right side with out current algorithm
//when the pivot chosen is the minimumum pivot chosen every single time

//All the sorts we've seen thus far are comparison sort algorithms
//Base comparisonwe're doing is between two items at any given sort

//Bubble.Insertion,Selectiion sort - O(n^2)
//quicksort- O(n log(n))
//mergesort- O(n log(n))

//Can we improve on O(n log n) the answer is sort of

//n log n is the best time complexity we can find in any sort
//we can do better but not with comparisons
//take advantage of special properties of the data

//Integer sorting algorithms

//one of these examples is radix sort,

//RADIX Sort
//Kind of fun because we're not making comparisons

//Radix sort is a special sorting algorithm that works on lists of numbers
//It never makes comparisons between elements
//it exploits the fact that information about the size of a number is encoded in the number of digits

//more digits mean a bigger number

//how does it actually work

//[1556,4,3556,593,408,4386,901,7,8157,86,9637,29]

//we have some numbers that are one digit

//Create 10 buckets

//0,1,2,3,4,5,6,7,8,9

//look at the index and get the last digit of the right
//6,4,6,3,8,6,2,7,7,6,7,9

//after that we group them by their second digit
//when you look at these numbers

//902,593,4,1556,3556,4386,86,7,8157, 9637,408,29

//then you look at that column
//0,9,4,1556,3556,4386,86,7
//since the single digit number dont have that number in the bucket so we put them in the 0 bucket

//this helper gets the place of the number

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//this helper counts how many digits are in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//Math.floor [Math.abs num/Math.pow(10,i)%10]

//getDigit(7323,2)
//this will get you 0
//Math.abs works with negative numbers

//7323/100

//73/10

//So we divide by the place, the hundreds place, then we floor to get rid of that decimal, then we
//This helper function is specifically made so you can get the index of

//7323,0

//you get 3 then you get 0

//The next helper we need has to do with figuring out how many digits are in a number
//[4,7,29,86,408,593,902,1556,3556,4386,8157,9637]
//How many times do we have to reorder everything the answer is 4

//digitCount(1)
//digitCount(25)
//digitCount(314)

//this gets the digit value of the number
//three helper functions needed for data algorithms

//get the value of the 100th value
function getDigit(nums, i) {
  return Math.floor(Math.abs(nums) / Math.pow(10, i)) % 10;
}

//get the amount of numbers of the counter
function digitCount(nums) {
  if (nums === 0) return 1;
  return Math.floor(Math.log10(Math.abs(nums))) + 1;
}

//given an array of numbers, return the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxdigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxdigits = Math.max(maxdigits, digitCount(nums[i])); //get max value
  }
  return maxdigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums); //this checks the value of the max digit of numbers so we can sort it
  for (let k = 0; k < maxDigitCount; k++) {
    //loop through let k=0; k<maxDigitCount; k++
    //loop through the maxdigitcount
    let digitBuckets = Array.from({ length: 10 }, () => []); //this is the part where you sort the array
    for (let i = 0; i < nums.length; i++) {
      //loop through again
      let digit = getDigit(nums[i], k); //create digit
      digitBuckets[digit].push(nums[i]); //gives us the digit of the last value //digit =.push(nums[i])
    }
    nums = [].concat(...digitBuckets); //helps me pass all the arguments in digit buckets  //nums =[].concat(...digitBuckets)
  }
  return nums; //return nums
}

radixSort([23, 345, 5476, 12, 2345, 9852]);

//Define a function that accepts list of numbers
//Figure out how many digits the largest number has //[most digits]
//start a loo from k up to largest number of digits
//for each iteration of the loop, create a bucket for each digit (0 to 9)
//create buckets for each digit (0 to 9)
//Place each number in the corresponding bucket based on its kth digit
//Replace our existing array with values in our bucket starting with 0 to 9
//return the list at the end

//Today we're going to learn radix sort

//this gets the digit of the i
function getdigit(nums, i) {
  return Math.floor(Math.abs(nums) / Math.pow(10, i)) % 10;
}

function digitvalue(nums) {
  //gets the value of each number
  if (nums === 0) return 1;
  return Math.floor(Math.log10(Math.abs(nums))) + 1;
}

function mostdigits(nums) {
  let maxdigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxdigit = Math.max(maxdigit, digitvalue(nums[i]));
  }
  return maxdigit;
}

function radix(nums) {
  let maxdigitcount = mostdigits(nums);
  for (let k = 0; k < maxdigitcount; k++) {
    let bucket = Array.from({ length: 10 }, () => []); //watch for this its () => []

    for (let i = 0; i < nums.length; i++) {
      let digits = getdigit(nums[i], k);
      bucket[digits].push(nums[i]);
    }
    nums = [].concat(...bucket);
  }
  return nums;
}

// What is data structures
// Binary search trees
// Queues
// Binary heaps
// Directed graphs
// Hash tables
// Stacks
// Single linked lists
// Doubly linked lists
// Undirected unweighted graphs

// What is a data structure
// Collection of values
// Relationship among them
// Function or operations that can be applied to the data

// Array holds many value
// Holds relationship of value
// Adding push pop sorting reversing

// Particular relationship with data
// Push pop reverse and more

// Different data structures excel at different things. Some are highly specialized while others are generally used
// Array
// Single linked list
// Hash table
// Binary Heap
// Binary Search tree
// Graph undirected graph
// Unweighted directed graphs

// All these things store data
// Why should I care
// More time u spend the more likely you’ll need to use of the data structures
// More complicated data and might be working with api and returns graph
// Dom JS is a tree
// Most important fit interviews
// Working with map location data
// Route code to get some gas

// Need an ordered list with fast insert and removals at the beginning and the end
// Million data points removing from both ends
// Linked list comes into play

// Web scraping nested html
// Use a tree
// Need to write a scheduler
// Highest priority task binary heap

// Es2015 class syntax overview
// Easy to define our data structures
// Constructors instructors
// Any sort of object oriented language before or you’ve never defined any sort of patterns

// Objective
// What a class is
// Understand how js implements the idea of classes
// Define terms like abstraction encapsulation and polymorphism
// Use es2015 class to implement data structures

// What is a class
// A blueprint for creating objects with predefined properties and methods
//A class is a blueprint used to predefined properties and methods

//Explain what a class javascript implements the idea of classes
//Blueprint for creating objects with pre-defined properties and methods
//Going to implement a bunch of data structures as classes

//the method to create new objects must be called constructor
//the class keyword creates a constant so you can not define it. Watch out for the syntax as well
//has to be defined as constructor and its a special method that will be used to instantiate new student

//Instance Methods - methods that basically live on a particular instance or we talk about a singly linked list

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
  }

  fullName() {
    //create a a method that work on instances, whoever is calling this will get a different output
    //firstStudent or another student in linked list well define push method or reverse method
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
}

let firstStudent = new Student('Colt', 'Steele',1);
let secondStudent = new Student('Blue', 'Steele',2);

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores=[]
  }

  fullName() {
    //create a a method that work on instances, whoever is calling this will get a different output
    //firstStudent or another student in linked list well define push method or reverse method
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if(this.tardies >=3){
        return "YOU ARE EXPELLED!!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score){
      this.scores.push(score);
      return this.scores
}
calculateAverage(){
  let sum= this.scores.reduce(function(a,b) {return a+b;}) //going to go through the array and create a total
  return sum/this.scores.length;
}
}


let firstStudent = new Student('Colt', 'Steele',1);
let secondStudent = new Student('Blue', 'Steele',2);

//Class Methods
//Creating a class or defining a pattern writing a constructor method
//We talked about instance method

//Another thing we can use which is the static enroll students (...students){ }
//static keyword defines a static method for a class
//Static methods are called without instantiationg their class and cannot be called through a class instance
//Static methods are often used to create utility functions for an application



class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores=[]
  }

  fullName() {
    //create a a method that work on instances, whoever is calling this will get a different output
    //firstStudent or another student in linked list well define push method or reverse method
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  static enrollStudents(...students)
  markLate() {
    this.tardies += 1;
    if(this.tardies >=3){
        return "YOU ARE EXPELLED!!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score){
      this.scores.push(score);
      return this.scores
}


calculateAverage(){
  let sum= this.scores.reduce(function(a,b) {return a+b;}) //going to go through the array and create a total
  return sum/this.scores.length;
}
static enrollStudents(){ //example of static class method
  return "Enrolling Students!"
}
}


let firstStudent = new Student('Colt', 'Steele',1);
let secondStudent = new Student('Blue', 'Steele',2);


class Point {
  constructor(x,y){
    this.x =x;
    this.y=y;
  }

  static distance(a,b){
    const dx = a.x-b.x;
    const dy = a.y -b.y;

    return Math.hypot(dx,dy)
  }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10)

//Class Method you call on the point 

//How we'll be using classes

class DataStructure() {
  constructor() {

  }
  someInstanceMethod(){

  }
}

//this inside all of our instance methods and constructor, the keyword `this` refers to the
//object created from that class(also known as instance)


//Classes are blueprints that when created make objects known as instances
//Classes are created with the new keyword
//constructor function is a special function that gets run when the class is instantiated
//Instance methods can be added to classes similar to methods in objects
//Class methods can be added using the static keyword


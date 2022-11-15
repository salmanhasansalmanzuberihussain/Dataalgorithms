function insertionsort(arr) {
  for (var i = 0; i < arr.length; i++) {
    //this loops regular and then sort the loop
    let currentval = arr[i]; //this has the currentval and then arr[I]
    for (var j = i - 1; j >= 0 && arr[j] > currentval; j--) {
      //then loop
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentval;
  }
  return arr;
}
// Explain insertion sort
// insertion sort is when you go through an array and there is a value, 1, and 1, you compare if the value ahead is less than then you swap

// //the way to loop it the right way is to simply do this
// //create a for loop, store the value of arr[I] in a variable
// //then loop through the other array and reverse it, when you reverse it make sure you compare the arr[j]> currentval, that’s when you only swap

// for(let I=0; I<arr.length;I++){
//               Let currentval = arr[I]
// for(let j=i-1; j>=0; & arr[j]>currentval; j--){
// 	Arr[j+1]= arr[j] //
// }
// Arr[j+1]= currentval
// }
// 	Return arr;
// }

// //so what is arr[j+1] = arr[j]

// //lets say I have a loop for(var j=I-1; j>=0 & arr[j]>currentval;j--){
// 	Arr[j+1]=arr[j]
// 	}

// [1,2,30,20]
// [1, 2, 30, 30]
// [1, 2, 20, 30]

// //you have the number 20 which is greater than the current value, so you compare 20 and 3,3 isn’t greater than current j, then you compare 20 and 30, 30 is greater than 30 and 20.

// //arr[j] is greater than the current value
// //so you take that current value and add that value to j+1
// //then from there you set the current value = 30. This is a simpler version

// //if you look at
// [1,2,30,20,10]

// //the number 10 is not greater than 20 so you loop through, and then you look at the number 30, it is greater than 10. So you set the value.

// //[1,2,30,0,10]
// //this one is definitely tricky but here I am going to go through this and explain so I understand what the loop is

// // [1, 2, 30, 30, 10] I have 10 is not greater than 0, then from there I go to 30, 30 is greater than 30 so then from there since there was a value of 0 and I have to get rid of that number, then the next value gets replaced 2,2 and then 1,1, and then you get 0,1,2,30 and 30 because 10 and 30 got replaced as 30 was greater than 10.

// // [1, 2, 2, 30, 10]
// // [1, 1, 2, 30, 10]
// // [0, 1, 2, 30, 30]
// // [0, 1, 2, 10, 30]

// Bubble Sort
// What is bubble sort
// Bubble sort is when you compare the value of one value to another value
// [1,5,9,3,20]

// You compare 1,5, one isn’t greater than 5 so you don’t switch the element. 5 isn’t greater than 9 so you don’t switch the element. Then you have 9 compared to 3 it is larger so you switch the element, and then you compare 9, 20 is 9 greater than 20 no so you switch the element

function bubblesort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//Selection sort

//Selection sort is really simple. If you look at selection sort [2,4,5,90,2]
//you have the first value, in this case that value is 2. Then from there 2,4,5,90,2
//you have the first value then you go through through

//[2,4,5,90,2]
//if you look at the 2,4,5,90,2
//the lowest value is 2, then you go through the array and there is 2,4,5,90,2 2 becomes the min value and then you just insert the 2 in front of the 4
//then you through again and 4 is the lowest value [2,4,5,90,2]
//[2,4,5,90,2]

//[2,4,5,90,2]

//[2,4,5,90,2]
//[2,4,5,90,2]

//you take the value of 4,5,90,2
//then you take the 4,5,90,2
//then you take the 2,4,5,90,2

//2,4,5,90,2
//then it's 2,2,4,5,90
//then you take the lowest value which is now 4 and compare that stays and you know it's in order
function selectionsort(arr) {
  for (var i = 0; i < arr.length; i++) {
    lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = i;
      }
    }
    var temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

//bubble sort
function bubblesort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//insertion sort
function insertionsort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let currentval = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentval; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentval;
  }
  return arr;
}

//Merging Arrays

//Merge Sort
// It’s a combination of two things- Merging and Sorting!
// Splitting up sorting and merging

// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// [8,3,5,4,7,6,1,2]
// Split it into half and we’re still not at one or zero element arrays

// [8,3,5,4] or [7,6,1,2]
// [8,3] or [5,4] or [7,6] or [1,2]
// [8],[3],[5],[4],[7],[6],[1],[2]

// Completely split the whole array until it gets to 0 then from there
// merge the array in complete order

// 3,8 or 4,5 or 6,7 or 1,2
// 3,4,5,8 or 1,2,6,7
// Then you take the first element and 3,8,4,5
// [3,8] or [4,5]
// [3,4,5,8]
// 3 compared to 4 and then 8 compared to 5
// [6,7] or [1,2]
// [1,2,6,7]
// Then we [3,4,5,8] or [1,2,6,7]
// All you do is compare the values 3,4,5,8 or 1,2,6,7
// [1,2,3,4,5,6,7,8]

// In order to implement merge sort, it’s useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of elements in the two input arrays
// This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.

// Merging Arrays Pseudocode
// Create an empty array, look at the smallest values in each input array
// //look at the smallest values in each input array

// While there are still values, we haven’t looked at
// If the value in the first array is smaller than the value in the second array...push the value in the first array into our results and move on to the next value in the integer.
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array

// Once we exhaust one array, push in all remaining values from the other array
// Two counts
//        _              _
// [1,10,50] or [2,14,99,100]
// [1]

// Which is smaller 1, or 2
// 1 is then you store that in the array

//       _               _
// [1,10,50] or [2,14,99,100]
// Which is smaller 10 or 2
// 2 is smaller
// [1,2]

// then you push the array 2 forward to 14
//            _              _
// [1,10,50] or [2,14,99,100]
// Which one is smaller 10,14
// [1,2,10]

// Which one is smaller 14, or 50?
// 14

//             _                   _
// [1,10,50] or [2,14,99,100]
// Which one is smaller 10,14
// [1,2,10,14,50]

// And then once it’s sorted all you have to do is take all the remaining values
// 99,100 and add them to the element

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
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

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
      j++;
    }
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
}

mergeSort([10, 24, 76, 73, 72, 1, 9]);

//Math.floor
//arr.length/2 -> mid Math.floor(arr.length/2)
//let left = arr.slice(0,mid);
//let right = arr.slice(mid)

//.slice is a function that codes
//0,3, the 0 and 3 would go to that point so you just add a mid 0,mid
//left to the mid, //right to the mid arr.slice(mid)
//mergeSort([10,24,76,72,1,9])

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

//explanation of merge sort

//[2,3,4,5,6]

//split the array in half
//work on the left side first and split that and it goes through merge
//split until its at 1 element

//then go through the right and split that and it goes through merge
//work on the right side first and split that and it goes through merge
//split until its at 1 element

//then finally get to the merge(left,right)

//do it again just to make sure that i know how to do this[Merge Sort]

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

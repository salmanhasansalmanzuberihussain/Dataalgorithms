//Leetcode 10 questions
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function integer(num, int){
  let storage=[]
  for(i=0;i<num.length; i++){
      let newval = num[i]
      let targetvalue = newval-int
      if(storage[targetvalue] !== undefined){
        return [storage[targetvalue], i]
      }else {
        storage[i] =1
      }
  }
}

//Given an integer x, return true if x is a palindrome, and false otherwise.
//i'll be honest i looked at this question 

function palindrome(integer){
  let integer= x.toString().split('').reverse('').join('')
  return x.toString===integer
}

//13. Roman to Integer

//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//this one is a memorization problem where i had to remember everything 

//This question i don't really know how to do as it was based off memorization and it includes swtichcases 
//and it includes terenary operators

//things to remember when you're moving the index, let prev = s[i-1] you gotta move the index over 
var romanToInt = function(s) {
let sum=0
    for(i=0; i<s.length; i++){
      let prev = s[i-1]
      switch(s[i]){
        case "I":
            sum+=1;
            break;
        case "V":
            sum = prev === "I" ? sum+3 : sum+5
            break;
        case "X":
            sum = prev === "I" ? sum+8 : sum+10
            break;
        case "L":
            sum = prev === "X" ? sum+30 : sum+50
            break;
        case "C":
            sum = prev === "X" ? sum+80 : sum+100
            break;
        case "D":
            sum = prev === "C" ? sum+300 : sum+500
            break;
        case "M":
            sum = prev === "C" ? sum+800 : sum+1000
            break;
        }
    }
    return sum;
};

//14.Longest Common Prefix

//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string ""

//i dont think creating two for loops will do anything i have to loop through the array
//i know that but for some reason this problem always gives me issues
//it inclues a for loop to check if the string is in the loop and you use a indexof

//longest common prefix string amongst an arrray of strings
//for while loop 
//indexof checks if there is a prefix
//prefix.substring(0,prefix.length-1)


var longestCommonPrefix = function(strs) {
  let prefix={}
  for(var i=0; i<strs.length; i++){
    while(strs[i].indexOf(prefix) !==0){
        prefix=prefix.substring(0,prefix.length-1)
    }
  }
  return prefix;
}

//valid parenteses 
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid

//21. Merge Two Sorted Lists
//You are given the heads of two sorted linked lists list1 and list2.
//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//Return the head of the merged linked list.



var mergeTwoLists = function(list1, list2) {
  if(list1===null){
      return list2
  }

  if(list2===null){
      return list1
  }

  if(list1.val<list2.val){
      list1.next= mergeTwoLists(list1.next,list2)
      return list1
  }else{
      list2.next= mergeTwoLists(list2.next, list1)
      return list2
  }
};

//26.Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//Since it is impossible to change the length of the array in some languages,
//you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements

var removeDuplicates = function(nums) {
  let index=1;
  for(var i=0; i<nums.length-1; i++){
      if(nums[i]!== nums[i+1]){
          nums[index] = nums[i+1]
          index++
      }
  }
  return index
};

//66.You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

var plusOne = function(digits) {
  for(i=digits.length-1; i>=0; i--){
    if(digits[i]<9){
        digits[i]=digits[i]+1
        return digits
    }else{
      digits[i]=0
    }
}
digits.unshift(1)
return digits
}


//69.Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
var mySqrt = function(x) {
  if(x<=1){
      return x
  }
  for(var i=0; i<=x; i++){
      if(i*i===x){
          return i
      }
       if(i*i>x){
          return i-1
      }
  }
}


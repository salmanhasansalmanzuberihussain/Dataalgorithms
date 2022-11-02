//Given two strings, write a function to determine if the second string is an anagram of the first. 
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
//formed from iceman

//isAnagram 

//use a for loop and increment and decrement the value and store in 1 object is the best way to complete this problem
//i wanna go through the characters so 


function isAnagram(string1,string2){
  let outlook={}

  for(var i=0; i<string1.length; i++){
    let newval = string1[i]
    outlook[newval] = (outlook[newval] || 0)+1
  }

  for(var i=0; i<string2.length; i++){
    let newval = string2[i]
    if(!outlook[newval]){
      return false
    }else{
      outlook[newval] -=1 
    }
  }
  return true
}


//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

//the first thought that comes to my mind is that im going to have to get the value of the strings and store it probably 
//i know im going to have to compare the strings if the value is compared or not.

//i most def have to loop through this, maybe use two arrays to loop through it

//i basically have to create a variable that checks the value of the other value but i don't know it to well

var longestCommonPrefix = function(strs){
  let prefix=strs[0]
  for(i=0; i<strs.length; i++){
      while(strs[i].indexOf(prefix)){ //strs[i] stores the value and indexOf is checking if the strs[i] has that value
        prefix = prefix.substring(0,prefix.length-1) //prefix = prefix.substring(0,prefix.length-1) //since this is looping you go through the whole prefix and then from there you substract the last value 
      }
  }
  return prefix //return the prefix 
}

//Given a time in 12 hour am/pm convert it to PM time, completed on hackerrank


//implement a function called sumZero which accepts a sorted array of integers.the function should find the first pair
//where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

//accepts a sorted array of integers the function should find the first pair
//where the sum is 0. return an array the includes both values that sum to zero or undefined if a pair doesn't exist 

//have to learn how to count the array. I have to go through an array using the multiple pointer function
//rather than loop and try to solve, try to do the mutliple pointer

function sumZero(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right){
      let sum = arr[left]+ arr[right]
       if(sum===0){
        return [arr[left], arr[right]]
      }else if(sum>0){
        right--
      }else{
        left++
      }
    }
 }


//1.Two Sum 

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.



//Given an array of integers num and an integer target, return indicies of the two numbers such that they add up to the target
//I want to get the value of the array where they are = to the target. So say the target is 9, i wanna get the numbers 2,7
//Also great thing to keep note of the value is indicies, meaning that i need the index back. 

//You know you have to loop and have to return an array. If you have to return an array most likely you're going to have to store 
//these values somewhere similar to when you're comparing objects

//when comparing you incremement but in this case use the target and newval to get the wanted val, then i will become the target,
//then store the value 

//things to keep note of return 1 value in the else statement dont return a value 

var twoSum = function(nums, target) {
  let storage={}

  for(var i=0; i<nums.length; i++){
    let newval = nums[i]
    let wantedvalue = target- newval
    if(storage[wantedvalue] !== undefined){
      return [storage[wantedvalue],i]
  }else {
    return storage[newval] = i
  }
    }
    return false
  }


//20.
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//s="()" true 
//s="()[]{}" true
//s"([]){}" true 

//s={] false

//this is from memory and learning new techniques that can be used in my arsenal, a hashmap i meant to say. 
//what you have to do is basically use this technique where you can push the item into the stack and then pop the items, if they are not 
//where they're supposed to be. Check the last element of the array and pop the element off 

//make sure to remember the parentheses 

var isValid = function(s) {
    const hashmap={'{':'}','[':']', '(':')'}
    let stack =[]

    for(const val of s){
      if(hashmap[val]){
        stack.push(hashmap[val])
      }else if(stack.length>0 && stack[stack.length-1] === val){
        stack.pop()
      }else{
        return false
      }
    }
return stack.length ===0
}
  

//26.
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
//More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.

//i already know im going to have to loop through this. I can use the multiple pointer in this case where, one moves behind or i can count the values, thats the first thing that comes to mind

//

var removeDuplicates = function(nums) {
  let index=1; //this is just a counter 
  for(i=0;i<nums.length-1; i++){
      if(nums[i]!==nums[i+1]){
         nums[index]=nums[i+1]
         index++
      }
  }
  return index
};


//21. Merge Two Sorted Lists
//You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//Return the head of the merged linked list.

//i remember this problem was tricky as hell, i don't remember the technique that was used to solve it but i know i had to use if else statements. 

//l1 
//1-2-3-4-5

//l2
//1-1-2-3-4

// i wrote the way to do it basically compare l1 and l2 whatever one is smaller move it next and since im doing it recursive i can just add mergeTwoLists this will click as i keep moving forwardknow 
//this is written recursively i dont really get the solution of non recursive i know that you have to use a counter and all you have to do is move the current value as well 


var mergeTwoLists = function(list1, list2) {
if(list1=null){
  return list2;
}

if(list2=null){
  return list1;
}

if(list1.val<list2.val){
  list1.next = mergeTwoLists(list1.next,list2)
}

if(list2.val<list1.val){
  list2.next = mergeTwoLists(list2.next,list1)
}

}


 //isPalindrome is memorization split reverse and join a string whenever you see that you know what to do 
 //i have to store the variable and compared to like a regular funciton on leetcode i have to convert it to a string and then set it === storage

 //make sure to remember storage.tostring and make sure .tostring 

 var isPalindrome = function(x) {
  let storage= x.toString().split('').reverse('').join('')
  return x.toString() === storage
}


//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
//The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
//Increment the large integer by one and return the resulting array of digits.

//use a for loop to count backwwards and think if the number is less than 9 then add

var plusOne = function(digits) {

  for(i=digits.length-1; i--; i>=0){
    if(digits[i]<9){
      digits[i] = digits[i]+1
      return digits
    }else{
      digits[i]=0
    }
  }
  digits.unshift(1)
  return digits
}


//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.


var singleNumber = function(nums) {
  let result=0;

  for(i=0; i<nums.length;i++){
      result ^= nums[i]
  }
  return result

  };

  var singleNumber = function(nums) {
    const h1 ={}
 
    for(const val of nums){
        h1[val] = (h1[val] || 0)+1
    }
 
     for(const key in h1){
        if(h1[key] ===1){
            return key
        }
    }
 }



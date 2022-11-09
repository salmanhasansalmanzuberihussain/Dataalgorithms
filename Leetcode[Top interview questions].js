//2/3


//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

//Input: strs = ["flower","flow","flight"]
//since im comparing the arrays i have to check if the first word appears anywhere in the longest common prefix.
//I cant think of anything but it doesn't matter 


//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//Given an array of integers(I know im going to have to loop through an array)
function twoSum(nums,target){
    let storage={}
    for(i=0; i<nums.length; i++){
       let val = nums[i]
       let wantedvalue= target-val
       if(storage[wantedvalue] !== undefined){
        return [storage[wantedvalue], i]
       }else{
          storage[val] =i
       }
    }
}


//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//Given two strings
//s and t 

//im trying to think how i can solve this using the tools that i have
//I remember i said given two strings i know im going to have to use for loop,
//I remember that i can use a frequency pattern cause there is a true or false value 
//with is anagram i can use an incremement and decrement 
//its a forloop

function isAnagram(s,t){
    if(s.length !== t.length) return false
  
    let lookup={}
  
   for(i=0; i<s.length; i++){
     let newval = s[i]
     lookup[newval] = (lookup[newval] ||0)+1
   }
  
    for(i=0; i<t.length; i++){
      let newval = t[i]
      if(!lookup[newval]){
        return false
      }else{
        lookup[newval] -=1
      }
    }
    return true
  }


//1.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//I know right away that im going to have to store the value because of indices of two numbers so the index. I'll have to store these values somewhere


function twointegers(num,target){
    let storage={}
    for(i=0; i<num.length;i++){
        let value = num[i]
        let wantedvalue = target-value;
        if(storage[wantedvalue] !== undefined){
            return [storage[wantedvalue], i]
        }else{
            storage[value]=i
        }
    }
}

//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//For example, 2 is written as II in Roman numeral, just two ones added together
//12 is written as XII
//The number 27 is written as XXVII

//Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
//Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
//There are six instances where subtraction is used:


//i can be placed before v(5) and x(10)


function roman(s){
    let sum =0;
    for(i=0; i<s.length; i++){
        let prev =s[i-1]
        switch(s[i]){
            case "I":
                sum+=1
                break;
            case "V":
                sum = prev === 'I' ? sum +3: sum +5;
                break;
            case "X":
                sum = prev === 'I' ? sum +8: sum +10;
                break;
            case "L":
                sum = prev === 'X' ? sum +30: sum +50;
                break;
            case "C":
                sum = prev === 'X' ? sum +80: sum +100;
                break;
            case "D":
                sum = prev === 'C' ? sum +300: sum +500;
                break;
            case "M":
                sum = prev === 'C' ? sum +800: sum +1000;
                break;
        }
    }
    return sum;
};

//Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".

//i probably have to loop through this array to see what functions i can get 
//The indexOf() method returns the first index at which a given element 
//can be found in the array

//this question has a for while indexOf
//this question has a prefix.substring which gets a specific length 

var longestCommonPrefix = function(strs) {
  let prefix = strs[0] //set the first word of the strs
  for(let i = 1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !==0){
            prefix = prefix.substring(0,prefix.length-1)
        }
  } 
  return prefix; 
};

//if the word flower is not in the flow

//longestcommonprefix

//flower
//flow
//flight

//"fl"

//have to find what is similar in all these words 

//thers a trick that can be used
//1.Create a variable prefix
//2.Set flower as common prefix
//3.increment to flow
//4. then go to third work its "fl"

//index of gives you the location of a word so you can literally write indexOfprefix and that would say while
//strs[i].indexOf(firstword) !== 0 subtract the last value

")" -//Invalid
"("-//invalid
"(]"-//invalid
"([)]" //-Invalid
"()[]{}" //valid
"([]){}" //valid
"([]){}" //try to close the outer bracket, then try to close the inner bracket
"([]){}" //

//whenever we see an open close function next to eachother,
//delete the middle pair
//then delete those pair
//if we have a valid string 

""


"([]){}" //and then loop through each character
//stack[] //insert and and remove when a match is found, when curly bracket then remove it when found and if stack is emtpy return true
//then return false 

//

//when we get the closing bracket then push the closing bracket into the stack
//this is the firstime im being introduced to hashmap = "(" : ")", "{": "}"

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//I know that i'm going to have to loop through this thats for sure
//i learned that you can store a key and a value in a hashmap but what i don't get it is how it knows to store the second value
//i think this will make sense over time

//like the frequency pattern im going to have to store the value
//i then loop through this
//i gotta push the value to the stack, then remove the value if it is equal
var isValid = function(s) {
 const hashmap={'{':'}','[':']','(':')'} //looking at this problem there is a bunch of '{'
 const stack =[] //then i create a stack 
 for(const val of s){ //get the val of the s 
    if(hashmap[val]){ //if the hashmap has the same val of s then push the element 
        stack.push(hashmap[val])
    }else if(stack.length >0 && stack[stack.length-1] === val){ //stack.length >0 and stack.length[stac.length-1]===val 
        stack.pop()
    }else{
        return false //return false 
    }
 }
 return stack.length ===0 //stack.length ===0 
 }



 //26. Remove Duplicates from Sorted Array

 //Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
var removeDuplicates = function(nums) {
let index=1;
for(i=0; i<nums.length-1; i++){
    if(nums[i] !== nums[i+1]){
        nums[index]= nums[i+1]
        index++
    }
}
return index
}


//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

var plusOne = function(digits) {
   for(i=digits-1; i>=0; i--){
    if(digits[i]<9){
        digits[i]= digits[i]+1
        return digits
    }else{
        digits[i]=0
    }
   }
   digits.unshift(1)
   return digits
 }


 //Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well
 //loop through everytime something is said to be given, this is an easy one im just tired but i gotta push through mentally create a for loop i*i===x then return i
 //else if(that value is greater than x) then -1 cause i have to round, i can also round to a .tofixed and that would round down 

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



 //35. Search Insert Position
 //Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity.

//i know i had to use some sort of loop use the while loop if you need to insert something in order or something of that nature
//also set a middle boundry this way you're able to find what i need to find, i think this is called binary search
//math.floor rounds down

function searchInsertPosition(nums,target){
    let i=0;
    let j=nums.length;
    while(i<=j){
        const middle= Math.floor((i+j)/2)
        if(nums[middle] ===target){
            return middle
        }else if(nums[middle]<target){
            i+=1
        }else{
            j-=1
        }
    }
    return i
}

 


//Given a string s consisting of words and spaces, return the length of the last word in the string.
//A word is a maximal substring consisting of non-space characters only.

//trim and split the function pop the function then return the length

var lengthOfLastWord = function(s) {
    let word= s.trim('').split(' ')
    let string = word.pop()
    return string.length;
};
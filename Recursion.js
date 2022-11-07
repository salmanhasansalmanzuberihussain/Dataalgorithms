//The definition of recursion is when you implement a function with a base case and then have other values


//Review of recursion problems

//Write a function called power which accepts a base and an exponent.
//the function should return the power of the base to the exponent.
//this function should mimic the functionality of Math.pow()


function power(base,exponent){
  if(exponent ===0) return 1

  return base * power(base,exponent-1)
}

//example of it being recursive is lets say the number is 5,4

//2* power(2,3)
//2* power(2,2) 4
//2* power(2,1) 2



//Write a function factorial which accepts a number and returns the factorial of that number. 
//A factorial is the product of an integer and all the integers below it; e.g., factorial four 
//( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(n){
  if(n===0) return 1;
  
  return n * factorial(n-1)
}

//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr) {
 if(arr.length ===0){return 1
}

return arr[0]* productOfArray(arr.slice(1))
}

//make sure to include the [0] because im multiplying the first index

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
function recursiveRange(n){
  if(n===0) return 0

  return n+ recursiveRange(n-1)

}

//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

//Issue this solution doesn't work for leetcode.js so it might not be worth the time to memorize, instead work on the leetcode but i already know how too 
function reverse(s){
  if(s.length ===0) return s;

  return reverse(s.splice(1) + s[0])
}

//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
//(reads the same forward and backward). Otherwise it returns false

function isPalindrome(str){
  if(str.length ===1) return true
  if(str.length ===2) return s[0] +s[1]
  
  if(str[0]=== str.slice(-1)){
      return isPalindrome(str.slice(1,-1))
  }
    return false
}

//Write a recursive function called someRecursive which accepts an array and a callback.
//The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.


function someRecursive(array,callback){
  if(array.length===0) return false
  if(callback(array[0])) return true
  
  return someRecursive(array.slice(1), callback)
}


//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
//arr.forEach(element =>{
//if(array.isArrray(element)){
  //flatArray=flatArray.concat(flatten(element))
  //else
  //flatarray.add the element
  //this solution is great but doesnt work on leetcode good to know for an interview 

  //i keep messing up the element part

function flatten(arr){
  let flatArray =[]
  
  arr.forEach(element =>{
      if(Array.isArray(element)){
          flatArray= flatArray.concat(flatten(element))
      }else{
          flatArray.push(element)
      }
  })
  return flatArray
}



//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst (arr) {
  if(!arr.length) return []
  
  const string = arr[0]
  const capitalized = string[0].toUpperCase() + string.slice(1)
  return [capitalized].concat(capitalizeFirst(arr.slice(1)))
}


//Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum (obj, sum=0) {
  for(var key in obj){
      if(typeof obj[key] === 'object'){
          sum +=nestedEvenSum(obj[key])
      }else if(typeof obj[key] === 'number' && obj[key]%2===0){
          sum += obj[key]
      }
  }
  return sum
}
 

//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeWords (array) {
  if(array.length ===1){
      return [array[0].toUpperCase()]
  }
  
  let res = capitalizeWords(array.slice(0,-1))
  res.push(array.slice(array.length-1)[0].toUpperCase)
  return res;
}


const numbers =[1,2,3,4,5];

const numbers2 = numbers.slice(1,4);

console.log(numbers2)

//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!


function stringifyNumbers(obj) {
  let newobj={}
  
  for(var key in obj){
      if(typeof obj[key] === 'number'){
          newobj[key]= obj[key].toString()
      }else if(typeof obj[key] ==='object' && !Array.isArray(obj[key])){
          newobj[key] = stringifyNumbers(obj[key])
      }else{
          newobj[key]=obj[key]
      }
  }
  return newobj
}

 

//13. Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string 

 

function collectStrings(obj){ 
var collect=[] 
for(var key in obj){ 
     if(typeof obj[key] === 'string'){ 
         collect.push(obj[key]) 
     }else if(typeof obj[key] === 'object'){ 
         collect= collect.concat(collectStrings(obj[key])) 
     } 
} 
return collect 
} 
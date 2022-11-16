//The definition of recursion is when you implement a function with a base case and then have other values

//Review of recursion problems

//Write a function called power which accepts a base and an exponent.
//the function should return the power of the base to the exponent.
//this function should mimic the functionality of Math.pow()

function power(base, exponent) {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

//example of it being recursive is lets say the number is 5,4

//2* power(2,3)
//2* power(2,2) 4
//2* power(2,1) 2

//Write a function factorial which accepts a number and returns the factorial of that number.
//A factorial is the product of an integer and all the integers below it; e.g., factorial four
//( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
}

//make sure to include the [0] because im multiplying the first index

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(n) {
  if (n === 0) return 0;

  return n + recursiveRange(n - 1);
}

//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

//Issue this solution doesn't work for leetcode.js so it might not be worth the time to memorize, instead work on the leetcode but i already know how too
function reverse(s) {
  if (s.length === 0) return s;

  return reverse(s.splice(1) + s[0]);
}

//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
//(reads the same forward and backward). Otherwise it returns false

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return s[0] + s[1];

  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

//Write a recursive function called someRecursive which accepts an array and a callback.
//The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;

  return someRecursive(array.slice(1), callback);
}

//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
//arr.forEach(element =>{
//if(array.isArrray(element)){
//flatArray=flatArray.concat(flatten(element))
//else
//flatarray.add the element
//this solution is great but doesnt work on leetcode good to know for an interview

//i keep messing up the element part

function flatten(arr) {
  let flatArray = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    } else {
      flatArray.push(element);
    }
  });
  return flatArray;
}

//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst(arr) {
  if (!arr.length) return [];

  const string = arr[0];
  const capitalized = string[0].toUpperCase() + string.slice(1);
  return [capitalized].concat(capitalizeFirst(arr.slice(1)));
}

//Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase);
  return res;
}

const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(1, 4);

console.log(numbers2);

//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
  let newobj = {};

  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newobj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newobj[key] = stringifyNumbers(obj[key]);
    } else {
      newobj[key] = obj[key];
    }
  }
  return newobj;
}

//13. Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  var collect = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      collect.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      collect = collect.concat(collectStrings(obj[key]));
    }
  }
  return collect;
}

//You are given two non-empty linked lists representing two non-negative integers. The digits are
//stored in reverse order and each of their nodes contains a single digit. Add the two numbers
//and return thhe sum as a linked list

//you may assume numbers do not contain zero, excecpt the number 0 itself

//l1 and l2
//l1 1-2-3
//l2 1-2

function addtwonumbers(l1, l2) {
  while (l1 || l2) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    let sum = val1 + val2;
  }
}

// Recursive problem set

// 1.Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// Think like this I have to create a function with that same function inside and I need a basic return value. The power of something. If you have a a power to 0 it returns 1. With the power of you have to multiply the base over and over again. So 2^2 would be 2*2=4. The base value wouldn’t be subtracted
// Recursively this is how its written/executed
// 2^5
// 2 * 2^5 then I finally get the result of 32
// 2* 2^4 same thing 16*2=32
// 2* 2^3 same thing 8*2 =16
// 2* 2^2 same thing equal to 4 so 4*2=8
// 2* 2^1 the previous value was 2 and that is equal to 2^1 so you multiply 2*2 =4
// 2* 2^0 = return 1, 2*1 = 2

// 2.Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

// 4*3=12*2=24*1=24 *5 (120)
// Breaking this problem down
// 5* factorial(4)
// 5* factorial(3)= 30
// 5* factorial(2) = 10
// 5* factorial(1) = 5
// 5 *factorial( 0!)= 5

//3. Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// Remember to use the arr.slice(1) this slices the first element of the array

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

// Productofarray([5,6,2])
// 5* productofarray([6,2]) //5*12 =60
// 6* productofarray([2]) //6*2
// 2* productofarray([0]) //2

// The way I thought If I can get the values of each array and set it === 0 return 1. Then I was going to for loop through the I=0; I<arr.length; I++ and then return arr[I] * productofArray[I] which actually doesn’t do anything whatssoever. If I for loop then I should return arr[I] it doesn’t even store the array element anywhere and would just increment the value so this makes no sense whats so ever
// My arr[0] ===0 return 1
// Then I thought, let me loop through the for loop (I=0; I<arr.length; I++) and then return the value of arr[I] * productofArray(arr[I]) that went through
// Arr[I] * productOfArray(arr[I]-1)

// This returns the first element of the array and does nothing else but what if I stored the element of the array in an object. This doesn’t work because arrayval is a local variable and not a global variable so I'm not able to get it’s value outside of the function.
//4.Write a function called recursive range which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(n) {
  if (n === 0) return 0;

  return n + recursiveRange(n - 1);
}

// The first thing that comes to my mind is that you need to add a base case to make sure that the function exists. This way it stops
// The second thing im trying to figure out is how do I get the value of n and get the computer to realize like yo if its 10 I really want the value of like 10,9,8,7,6,5,4,3,2,1 multiplied. Is that a factorial, well yes it is
// What I forgot is that a recursive range is function recursiveRange(x) the function will decrement untill return x + recursiveRange(x-1);

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// 3 + recursiveRange(3-1) //5
// 2+recursiveRange(2-1) //2
// 1+ recursiveRange(1-1) //1
// 0 + return 0

//4. Write a recursive function called reverse which accepts a string and returns a new string in reverse

let reverse = (str) => {
  if (str.length === 0) return '';

  return reverse(str.slice(1)) + str[0];
};

//
//reverse('happy')
//reverse('appy') + 'h' =yppah
//reverse('ppy') + 'a'; =yppa
//reverse('py')+ 'p'; = ypp
//reverse('y')+ 'p' =yp
//reverse('') + 'y' = y
//reverse('')

//slice

//o

let isPalindrome = (str) => {
  //base case
  if (str.length === 1) return true;
  if (str.length === 2) return s[0] + s[1];

  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
};

function someRecursive(array, callback) {
  if (array.length === 0) if (callback(array[0])) return true;

  return someRecursive(array.slice(1), callback);
}

//

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase);
  return res;
}

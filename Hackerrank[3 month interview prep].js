
//There is a collection of input strings and a collection of query strings.
//For each query string, determine how many times it occurs in the list of input strings. 
//Return an array of the results

//there is a collection of input strings, and collection of query strings.

//basically im comparing two strings 

//i know from memory that i have to compare using a map. Which im not the most comfortable with. 
//how do i write out a function, why am i writing a map anyway? Because i have to store the let collection
//for const val of input, collection[val] = collection[val]
//this stores the value and this stores the input as well 

//get back to this question later as i just did this question yesterday 

function collection(input,query){
  let collection ={}
  for(const val of input){
    collection[val] = (collection[val] || 0)+1
    
return query.map(variable => (collection[variable] || 0))
     
  }
}

//when you're doing the if, else if and the else you have to make sure you know what you're comparing to dont just write code and try to figure it out 
//focus for like ten minutes then write the code 
function plusMinus(array) {
  let positive=0;
  let negative=0;
  let zero=0;
  let len = array.length;
  
  for(var i=0; i<array.length; i++){
      if(array[i]>0){
          positive+=1
      }else if(array[i]<0){
          negative +=1
      }else{
          zero +=1
      }
  }
  
  let pos = positive/len
  let neg = negative/len
  let zer = zero/len
  
  console.log(pos.toFixed(6))
  console.log(neg.toFixed(6))
  console.log(zer.toFixed(6))
}



//Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i<j  and ar[ii+[j] is divisible by .

//most definetly need to create a for loop, this way i can loop through the array and determine (i,j)

function divisibleSumPairs(n, k, ar){
  let sum =0;
  for(i=0; i<array.length; i++){
    for(j=i+1; j<array.length; j++){
        if(i<j && (array[i]+array[j]) %k ===0){
            sum += array[i]
        }
    }
  }
  return sum;
}

//have to increment 1 not the array value or index 


//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//i cant remember if it was splice or split these are important questions 

function timeConversion(s) {
  let late = s.includes('PM')
  if(!late){
    s = s.splice(':')
    s=s[0].splt('AM')
    if(s[0] === '12') s[0] ="00"
    return s.join(':')
  }else{
    s = s.split(':')
    s=s[0].split('PM')
    if(s[0] === '12') s[0] = (parseInt(s[0])+12).toString()
    return s.join(':')
  }
}



//Plus minus
//1.Given an array of integers, calculate the ratios of it's elements that are positive, negative, and zero. Print the decimal value of each fraction
//on a new line with 6 places after the decimal 

//Patterns/Hints

//Pattern 1: Given an array of integers calculate the ratios of it's elements that are positive negative and zero
//This tells me that i'll have to store the variables in an array and then for loop through the array and store the values.

//Pattern2. decimals = .toFixed()

//for loop through these elements and increment as necessary to complete 
//explanation if arr[i]>positive then increment +=1, if negative >arr[i], then increment negative, else increment zero
//then create another 3 variables where you calculate the ratio of these elements

//let pos = positive/arr.length;
//let negative 
function miniMaxSum(arr) {
  var sum =0
  var newArr = arr.sort()
  
  for(var i=0; i<newArr.length; i++){
      sum += newArr[i]
  }
  
  let max = sum - newArr[0]
  let min = sum- newArr[newArr.length-1]
  
  console.log(min,max)
}


//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

//given five positive integers find the minimum and the maxiumum values
//calculating 4 out of the five integers 

//Pattern 1
//I know that im going to have to calculate the min and max values so i'll have to store it in the sum 

//Pattern 2
//4 out of the five
//this gives me a hint that i'm going to have to sort these arrays in order 

//Pattern 3 
//Add the sums and since theyre in order you can calculate the min and max
function miniMaxSum(arr){
  let sum = 0
  let arrs = arr.sort() 

  for(i=0; i<arrs.length; i++){
    sum += arrs[i]
  }

  let max = sum- arrs[0]
  let min = sum - arrs[arrs.length-1]

  console.log(min,max)

}

//Given a time in  12-hour AM/PM format, convert it to military (24-hour) time.

//this problem is based off memorozation, but one has to understand military time to solve

//Pattern 1
//going to have to check the time either im going to have to use if else statements or a for loop or something

//Things to understand 12:00am is 00:00AM on military clock and 12:00pm is 12:00pm in military click

//anytime there is a given most likely you're going to have to declare a variable before checking something or for storing something 
//from memorization i know i have to do this, split the time into specific functions this way i can figure out what the time is split split if this or that then join  


//if the first part of the array is am and ===12 then return 00, if it is pm and not 12 then add 12 to the s and parse int to string

//things i have to be careful with, make sure when you compare the string that you use quotation marks and also when you parse int make sure your parentheses are in the right place
//includes is really simple, if the function includes it 
function timeConversion(s){
 let late = s.includes('PM')
 if(!late){
  s = s.split('AM')
  s = s[0].split(':')
  if(s[0] === '12') s[0] = '00'
  return s.join(':')
 }else{
  s = s.split('PM')
  s = s[0].split(':')
  if(s[0] !== '12') s[0] = (parseInt(s[0])+12).toString();
  return s.join(':')
 }
}

//3.Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
//She tabulates the number of times she breaks her season record for most points and least points in a game. 
//Points scored in the first game establish her record for the season, and she begins counting from there.

//she tabulates the number of times shes scored most points and least points 
//points scored in establish her record and she counts from there

//Returns An array with the numbers of times she broke her records. Index is for breaking most points records, and index  is for breaking least points records.

//since given an array, im going to have to store these variables somewhere and declate a variable, probably going to have to loop through the array and increment the values 
//because they dont want the min or max they just want how many times each record was broken

//Make sure you store that value into max scores and then increment, why comparing to maxscores and minscores because the variable inside needs to be compared if comparing to min
//and max then the result would make no sense for min 

function breakingRecords(scores) {
  let min=0
  let max =0
  let maxscore= scores[0]
  let minscore = scores[0]

  for(var i=0; i<scores.length; i++){
    if(maxscore<scores[i]){
      maxscore = scores[i]
      max++
    }else if(scores[i]<minscore){
      minscore = scores[i]
      min++
    }
  }
  return [max,min]
}




//min,max,maxscore,minscore

//4. Skipped Camal Case cause i can't find a realistic answer anywhere


//5.Given an array of integers and a positive integer k , determine the number of (i,j)  pairs where  andarr[i]  +arr[j]  is divisible by k

//pattern one

//given an array of integers, i'm most likely going to have to loop through this array and try to get the value 
//arr[i] + arr[j] =k
//since its two elements in an array going to have to use i,j and probably either use the multiple pointer function or a for loop inside a for loop with an increment
//and then create an if else statement to check the value and then return it make sure you declare the value of variable as well

//can use multiple pointers in this function

function divisibleSumPairs(n, k, ar) {
let value =0
for(i=0; i<ar.length; i++){
  for(j=i+1; j<ar.length; j++){
    if( i<j && (arr[i]+ arr[j]) %k ===0){
      value +=1
    }
  }
}
return value;
}

//another solution to hackerrank but i dont understand how the ar.maap works in this specific situation
let divisibleSumPairs (n, k, ar) => {
  let count = 0;
  ar = ar.map((value, index, arr) => { 
    for (let i = index + 1; i <= arr.length; i++) {
      if ((value + arr[i]) % k === 0) {
        count++;
      }
    }
  });
  return count
}



//There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

//A query string is a set of characters tacked onto the end of a URL
//for each query string determine how many times it occurs in the input string

//check how many times the input string is equivelant to the query string

//i can use something like the frequency counter pattern but this is the answer specifically for sparse arrays.
//not too comfortable with hashmaps 

//this is a comparison of string and queries. When you see a comparison of an array and check values i think frequency counter
//but we want an array of the results don't want a true or false, so instead of comparing it with two objects or comparing it with
//an increment and decrement cause im not looking for a true or false, want the array of the results i can use a map. (I'm not too sure,
//when to use a map or not but im slowly getting comfortable with when to use it or not

function matchingStrings(strings, queries) {
  let storage={}

   for(const val of strings){
      storage[val] = (storage[val] || 0)+1 //i dont understand why i cant store the newval i think theres no reason to 
   }
   return queries.map(variable => (storage[variable] || 0))
}


//You will be given a list of 32 bit unsigned integers. Flip all the bits (1->0 and 0 ->1) and return the result as an unsigned integer.

function flippingBits(n) {
  return (2**32)-1-n
}


//traversing through an array is a quick way of finding a new value
//because if the value is the same you get 0, if the values arent the same give 2,2,2 

//Bit manipulation
//in console.log(2^0)
//console.log(1^0)
//console.log(0^0)
//console.log(1^1)
//console.log(2^2)
//console.log(2^2^2)
//2^3

function lonelyinteger(a) {
  let ans=0
  for(var i=0; i<a.length; i++) ans^=a[i]
  return ans
}

//2/5
//0/2


//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//For example, the square matrix arr is shown below:

function diagonalDifference(arr) {
  let n = arr[0].length;
  let leftsum= 0
  let rightsum = 0

  for(i=0,j=n-1; i<n; j--, i++){
    leftsum += arr[i][i]
    rightsum += arr[i][j]
  }

  var difference= leftsum-rightsum
  Math.abs(difference)
}

//Given a list of integers, count and return the number of times each value appears as an array of integers.
//i dont get this question at all whatssoever
//notes are in my notebook

function countingSort(arr) {
  let result = [0]*100
  
  for(var i=0; i<arr.length; i++){
      result[i] ++
  }
   return result
}
//question 
//walking up and down the mountain q
//Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

//anytime you see given you know youre going to have to loop 
//notes are in my notebook


function countingValleys(steps, path) {
  let sealevel=0;
  let mountain=0;
  let valley=0;
  for(let i=0; i<path.length; i++){
      if(path[i] =="U"){
          if(sealevel==0){
              mountain++
          }
          sealevel++
      }
      if(path[i]=="D"){
          if(sealevel==0){
              valley++
          }
          sealevel--
      }
  }
  return valley
}


//a panagram is a string that contains every letter of the alphabet.Given a sentence determine wheter it is a panagram in the english
//alphabet. Ignore Case. Return either panagram or not panagram as appropriate. 

//the quick brown fox jumps over the lazy dog


function pangrams(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let lowercase = s.toLowerCase().replace(regex, "");
 
  for(let i = 0; i < alphabet.length; i++){
   if(lowercase.indexOf(alphabet[i]) === -1){
     return "not pangram";
   }
  }
 
 return "pangram";
}


//A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

//Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string s, determine how many letters of the SOS message have been changed by radiation.
//The original message was SOSSOS. Two of the message's characters were changed in transit.
//int: the number of letters changed during transmission
//Rather than panic i literally just have to read the message

// = SOSSPSSQSSOR, and signal length . Sami sent SOS messages (i.e.: 

function marsExploration(s) {
  let cnt=0;
  for(var i=0; i<s.length; i+=3){
      if(s[i] !== 'S'){
          cnt++
      }
      if(s[i+1] !== 'O'){
          cnt++
      }
      if(s[i+2] !== 'S'){
          cnt++
      }
  }
  return cnt
  }


  //There are two -element arrays of integers,  and . Permute them into some  and  such that the relation  holds for all  where 
  //sort the arrays compare the value of the array return no or yes

  function twoArrays(k, A, B) {
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    for(var i=0; i<A.length; i++){
        if(A[i]+B[i]<k) return 'NO'
    }
    return 'YES'
}
function twoArrays(k, A, B) {
  A.sort((a,b)=> a-b)
  B.sort((b,a)=>b-a)
  for(var i=0; i<A.length; i++){
    if (A[i]+B[i]<k) return 'NO'
  }
  return 'YES'
}




//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are
function sockMerchant(n, ar) {
  let pairs=0;
  let storage={}
  for(const element of ar){
      storage[element] = storage[element] +1 || +1
      if(storage[element]%2===0){
          pairs++
      }
  }
  return pairs;
}


//Given an array of bird sightings where every element represents a bird type id, 
//determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids

//Overview
//I knew right away to loop through this array. that i understand and set a counter and some sort of storage.

//Questions i have why doesnt a regular storage work with {}

//Why cant i use store[num]>max and max=store[num] maxarr[num] and return maxarr

function migratoryBirds(arr) {
  let max=0;
  let maxarr=6
  let store= new Array(6).fill(0) //why does regular store not work 
  for(const num of arr){
      store[num]++
      if(store[num]>max){
          max = store[num]
          maxarr=num
      }
  }
  return maxarr 
}

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


//Grading Students

function gradingStudents(grades) {
  let result = []
  for(let i=0; i<grades.length; i++){
      if(grades[i]<38 || grades[i]%5<3){  //grades is less than 38
      //then you have grades[i]%5<3
          result.push(grades[i])
      }else{
          result.push(grades[i] + 5 - (grades[i] % 5))
  }   
}
return result
}


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
  let frequencyArray = new Array(100).fill(0);
  for(let num of arr){ //so when do i use a for of
  //why doesnt the let num of arr work with 
  frequencyArray[num]+=1
  }
  return frequencyArray;
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
  s= s.toLowerCase()
  for(let i =0; i<alphabet.length; i++){
    if(!s.includes(alphabet[i])){
        return "not pangram"
    }
  }
  return "pangram"
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


//Using the diagram above, if the student wants to get to page , they open the book to page , 
//flip  page and they are on the correct page. If they open the book to the last page, page , 
//they turn  page and are at the correct page. Return .

function pageCount(n, p) {
  var frontflip = Math.floor(p/2)
  var backflip= Math.floor((n/2)-frontflip)
  var result = Math.min(frontflip,backflip)
  return result;
}


//Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1

//difference is less than equal to 1

//a =[1,1,2,2,4,4,5,5,5]
//subarray uses a pattern im pretty sure you can use the sliding window pattern in this situation but I dpn't know how to implement it just yet as im still learning

function pickingNumbers(a){
  let countPlus1 = 1
  let countMin1 = 1
  let max=0
  for(let i=0; i<a.length; i++){
    countPlus1 = 1
    countMin1 = 1
    for(let j=i+1; j<a.length;j++){
        if(a[j]=== a[i]+1){
          countPlus1++
        }else if(a[j] ==a[i]-1){
          countMin1++
        }else if(a[j] ==a[i]){
          countPlus1++
          countMin1++
        }
    }
    if(countPlus1 >= countMin1 && countPlus1 > max){
      max= countPlus1
    }else if(countPlus1 < countMin1 && countPlus1 > max){
      max= countMin1
    }
  }
  return max;
}

//A left rotation operation on an array of size n shifts
//each of the array's elements 1 unit to the left.
//Given an integer,d, rotate the array that many steps left and return the result.

function rotateLeft(d, arr) {
  let rotadedarray=[]
  for(var i=d; i<arr.length; i++){
    rotadedarray.push(arr[i])
  }

  for(var i=0; i<d; i++){
    rotadedarray.push(arr[i])
  }
  return rotadedarray
}


  //Given an array of integers and a positive integer k , determine the number of (i,j)  pairs where i<j and ar[i] + ar[j] is divisible by k


//two things i dont understand at this time
//how do i loop the grades problem without a map and just use a for loop
//in the matching queries and maps how do i not use the map... ask these questions later
//both include a map ironically 


//3/10 (Awful score but i learned a lot and def know when to use when and will do this all over and keep repeating slowly )

//This is what i wrote,
//the only thing i got wrong was where i placed the return sum, i didnt let the whole loop run the return sum needs to be outside the last function
function divisibleSumPairs(n, k, ar) {
  let sum =0
  for(var i=0; i<ar.length; i++){
      for(var j=i+1; j<ar.length; j++){
          if(i<j && (ar[i]+ar[j])%k===0){
              sum ++;
          }
      }
  }
  return sum;
  }



 
  //HackerLand University has the following grading policy:
  //Every student receives a grade in the inclusive range from 0 to 100.
  //any grade less than 40 is a failing grade

  //Sam is a professor at the university and likes to round each student's grade according to the rules
  //if the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5 
  //if the value is less than 38 then no rounding occrus


  //looking at this problem, i already know im going to have to loop through the array, get the grades and create if else statements
  //to return the result

  //i remember since i did this problem that i can use a map as well.

  //what is the value im returning?
  //the grade or the value 

  //questions that come up, do i return the value

  //if the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5
  //if the value of grade is less than 38 no rounding occurs.

  //Have to go to answer sheet

  //try to see if theres an answer for grading scores with a for loop instead of a map

  //set the result = grades.map((value)) this


 
function gradingscores(grades){
  //i want to know how to write this in a forloop
  const result = grades.map((value)=>{
    if(value<38){ //checks if the value
      return value;
    }
    else if(value%5<3){ //if the difference between the next multiple of 5 is less than 3
      return value;
    }
    else{
      let extraMarks = 5-(value%5) //5-(value%5) return the value 
      return value+extraMarks //add the value + extraMarks
    }
  })
  return result; //return result 
}

//i for some reason cant write this in a for loop, which i will leave alone for now but i want to know how to write this out in a for loop as well

function gradingStudents(grades){
  for(let i=0; i<grades.length; i++){
    if((grades[i]<38)){
      return grades[i];
    }else if(grades[i]%5<3){
      return grades[i]
    }else{
      let extraMarks = 5-(grades[i]%5)
      return grades[i]+extraMarks
    }
  }
  return result;
}

//You will be given a list of 32 bit unsigned integers. Flip all the bits (1->0) and 0->1 and return the result as an unsigned integer

//this is basically 2**32 -n-1 
//flippingBits is specifically memorization for me at this point
//2**32-n-1 //also take a look at the constraint which is 2&32 and then you subtract n and 1

function flippingBits(n) {
  return (2**32)-n-1
}


//Given an array of integers, where all elements but one occur twice, find the unique element

//a=[1,2,3,4,3,2,1]
//unique element is 4

//i already know that im going to have to loop through this array
//i have to find a way to check the values, maybe using a two point counter might be the best way to do this problem

//maybe i create a counter i and a counter j. If the i counter is = j then keep looping if it isn't then don't
//but that wouldn't work whatssoever because there will be times where it isn't so i have to count the value of the array
//so loop through it 1, store that in 1, then next int 2, store that in 2

//the way to do this problem was a for loop. 

//it has an element a=[1,2,3,4,5,3,2,1]
//unique element is 4

//when you see unique element get the array of integers
function lonelyinteger(a){
  let storage={}

  for(i=0; i<a.length; i++){
    let newval = a[i]
    storage[newval] = (storage[newval] || 0)+1
  }

  for(const key in storage){
    if(storage[key]===1){
      return key;
    }
  }
}





//There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. 
//Return an array of the results

//similar to the frequency pattern, i had this memorized rather than learned,
//whenever youre comparing use the frequency pattern

//for const string of strings //lookup[string] +1
//queries.map

//based off memorization i see that the lookup={}
//for const string of strings use the frequency pattern anytime you're comparing a value inside a value should use the query 

function matchingStrings(strings, queries) {
  let lookup={}

  
  for(const string of strings){
      lookup[string] = (lookup[string] ||0)+1
  }
  

  return queries.map(variable =>( lookup[variable] || 0 ))
 
  //in a map you can name the variable anything can name it string as well
}


//i dont get how to use queries.map in this function and add queries.map(query=> memory[])


//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock


//i have this one memorized as it is one of those difficult problems but i can take this


function timeConversion(s) {
  let late = s.includes('PM')
  if(!late){
      s= s.split('AM');
      s= s[0].split(':');
      if(s[0]==='12') s[0]='00';
      return s.join(':')
  }else{
      s= s.split('PM');
      s= s[0].split(':');
      if(s[0]!=='12') s[0]=(parseInt(s[0])+12).toString()
      return s.join(':')
  }
}


//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
//I had difficulty going through with the length amount but this should be good

function plusMinus(arr) {
  let positive=0;
  let negative=0
  let zero=0;
  
  for(var i=0; i<arr.length; i++){
      if(arr[i]>0){
          positive +=1
      }else if(arr[i]<0){
          negative+=1
      }else{
          zero+=1
      }
  }
  let pos = positive/arr.length
  let neg= negative/arr.length
  let zer= zero/arr.length
  
  console.log(pos.toFixed(6))
  console.log(neg.toFixed(6))
  console.log(zer.toFixed(6))

}

//i can use len but cant use it to loop through for some reason 


//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers
//remember when you do this problem its best to sort and you want the value of the index

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

//Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
//She tabulates the number of times she breaks her season record for most points and least points in a game.
// Points scored in the first game establish her record for the season, and she begins counting from there


//she keeps tabs of her season record for most points and least points in a game

function breakingRecords(scores) {
  let min=0;
  let max=0;
  let minscore=scores[0]
  let maxscore=scores[0]
  
  for(var i=0; i<scores.length; i++){
      if(scores[i]>maxscore){
          maxscore= scores[i]
          max++
      }else if(scores[i]<minscore){
           minscore=scores[i]
          min++  
      }
  }
return [max,min]
}


//i had the scores[i] and the max score the other way around the order matters you want to set the maxscore to the [i] not the min score 



//You are choreographing a circus show with various animals. 
//For one act, you are given two kangaroos on a number line ready to jump in the positive direction 
//(i.e, toward positive infinity).

//The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump
//The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump

function kangaroo(x1, v1, x2, v2) {
  let RESULT="NO"
  for(var i=0; i<10000; i++){
   if(x1+(v1*i)+ x2+(v2*i)){
     RESULT="YES"
   }
  }
 return RESULT;
 }


 //A numeric string, , is beautiful if it can be split into a sequence of two or more positive integers, , satisfying the following conditions:
 // for any  (i.e., each element in the sequence is  more than the previous element).
 //No contains a leading zero. For example, we can split  into the sequence , but it is not beautiful because  and  have leading zeroes.
 //The contents of the sequence cannot be rearranged. For example, we can split  into the sequence , but it is not beautiful because it breaks our first constraint (i.e., )
//BigInt values represent numeric values which are too large to be represented by the number primitive.

//how do i split the strings
//split the string using ''


//Everything makes sense in this problem besides 1 thing, why are we dividing the length by half of the string 
function separateNumbers(s) {
  for(var i=0; i<=Math.floor(s.length/2); i++){
      let char = s.slice(0,i)
      let nums = BigInt(char)
      let newstr= ''
  while(newstr.length<s.length){
      newstr += nums++
      if(newstr===s){
          console.log('YES', char)
          return;
      }   
  }
  }
  console.log('NO')
}

//Sorting is useful as the first step in many different tasks.
//The most common task is to make finding things easier, 
//but there are other uses as well. In this case, 
//it will make it easier to determine which pair
//or pairs of elements have the smallest absolute difference between them

//the idea is to find the minimum difference between the array and then store the pairs
//realistically the easiest way is to loop through and then store the differnece, this is how i would approach the
//problem

//so i store the min, what does it want stored?
//it wants the array pairs

//how do know that the function is the minumum thats something thats difficult
//like do i go through all the arrays, and then check the min, or is there a way to do it automatically?

//looking at this solution how does it know that it is the min value and the max value like what is telling the code like yo this
//is the least min value cause wouldnt it just store all the values?

//i think the answer to this question is the first time the absMin is calulated the absmin is going to change 


function closestNumbers(arr) {
  let pairs=[]
  let min=Infinity
  arr.sort((a,b)=>a-b)
  for(var i=0; i<arr.length; i++){
      let val = arr[i+1]-arr[i]
      if(val<min){
          pairs=[];
          min= val;
         pairs.push(arr[i],arr[i+1])
      }else if(val===min){
         pairs.push(arr[i],arr[i+1]) 
      } 
  }
  return pairs
}

//looking at this question i realized that the only reason why 
function closestNumbers(arr) {
  arr.sort((a,b)=>a-b)
  let min=Infinity
  let pair=[]
  for(let i=0; i<arr.length; i++){
      let val = Math.abs(arr[i+1]-arr[i])
      if(val<min) min=val, pair=[];
      if(val<=min) pair.push(arr[i],arr[i+1])     
  }
  return pair
}

//what doesn't really make sense to me at all is why in the heck do you have val<min and min=val and pair=[]
//if val <=min pair.push(arr[i],arr[i+1]), why am i not pushing it with val <=min, for some reason an error comes to play, and why do i even have to define

// Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally.The rules of the game are as follows:
// Initially there are  towers.
// Each tower is of height .
// The players move in alternating turns.
// In each turn, a player can choose a tower of height  and reduce its height to , where  and  evenly divides .
// If the current player is unable to make a move, they lose the game.
// Given the values of  and , determine which player will win. If the first player wins, return . Otherwise, return .

function towerBreakers(n, m) {
  if(m==1 || n%2==0){
      return 2
  }else{
      return 1
  }
}

//The absolute difference is the positive difference between two values  a
//nd , is written  or  and they are equal. If  and , . Given an array of integers,
//find the minimum absolute difference between any two elements in the array

function minimumAbsoluteDifference(arr) {
  let sort = arr.sort((a,b)=>a-b)
  let min = Math.abs(arr[0]-arr[1])
  for(let i=0; i<sort.length; i++){
    let val = Math.abs(arr[i]- arr[i+1])
    if(val<min){
      min=val
    }
  }
return min 
}




//There is a collection of input strings and a collection of query strings.
//For each query string, determine how many times it occurs in the list of input strings.
//Return an array of the results

//strings =['ab,ab,abc]
//queries=[ab,abc,bc]

//how many tiems does the query string occur in the string

//logically I have to go through the strings, then i have to go through the queries and compare the strings


//without any code how would i approach this problem?
//i would look at the strings =['ab,ab,abc']
//queries = ['ab','abc','bc']

//2 instances of ab, 1 of abc and 0 of bc

//loop through the strings, I would store the strings. Store that data

//then i would loop through the queries and store that data

//and then from there what I would do is compare the values of the storage
//why doesn't this concept work? because if i use this concept, i cant get the value of the 
//queries of the function

//i wont be able to compare the queries with the strings

//the approach glitched failure used is hashmap

//queries.map(query => memory[query] || 0)
//

//return queries.map()
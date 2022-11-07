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



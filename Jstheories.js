//indexOf() and .includes = the same thing

//1.indexOf() includes a certain element if you're searching for something 
//2.includes() includes a certain element if you're searching for something means the exact same thing

//3.What does substring mean
let word ="Barefoot";
let sub1= word.substring(0,3); //first argument is the starting index and the last index is the 3 index
//last argument is exclusive meaning is it is not included  0,4
let sub2= word.substring(4,8); 
//this is going to be foot, the last value gets indexed

//4.split the value of the function s and add join adds the value as seen in the military example

//5.Join is to use 'join'

//6.Val() method is primarily used to get the values of form elements such as input , select and textarea 

//7. Concat means to combine words

//8. slice method gets the value of the array at a specific element (1,-1) -1 gets the last value of the string
//1 gets the first value 

//9.Push element pushes an element onto the array
//The first and probably the most common JavaScript array method you will encounter is push(). 
//The push() method is used for adding an element to the end of an array

//10.https://www.freecodecamp.org/news/javascript-array-insert-how-to-add-to-an-array-with-the-push-unshift-and-concat-functions/


//11. for in loop works for objects remember how to do that

//12.Typeof checks the value of aa object a string or an object

//13.In an object, if the elements are in an object, then that means you have to loop using val key in a for in loop is the best for an object

//14.In recursion i've seen a pattern where when you recurse the first item it has to be (0,-1) this way it doesnt go to an infinity loop

//15.Another pattern i noticed with recursion of arrays is when you use [] this is when you want to set your return statement to an array of some sort

//16.Unshift method The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

//17.Recursion theory. which accepts an object and returns an array (Have to store an array)

//18.StringifyNumbers which takes in an object and finds all of the values

// //19. Another way to loop through const result = grades.map((value)=>{
//   //  const result = grades.map((value)=>{
//     if(value<38){ //checks if the value
//       return value;
//     }
//     else if(value%5<3){ //if the difference between the next multiple of 5 is less than 3
//       return value;
//     }
//     else{
//       let extraMarks = 5-(value%5) //5-(value%5) return the value 
//       return value+extraMarks //add the value + extraMarks
//     }
//   })
//   return result; //return result 
// }

//20. .sort method is used to sort an array

//21. having an if inside an if should have the second if right away

//22.To return the value of arr[i] the index of all you have to do is return i


//23.Hackerrank, s.replace(/\s/g,''),  
//var s1= s.replace(/\s/g, '') replace the empty string with a string

//24.s.split takes the function makes it into an array

//25. [...new Set(s2)] //this is an easy way to remove duplicates from a function
//another way to remove duplicates = function(nums){
//let index=1
//for(i=0; i<nums.length-1; i++){
//if(nums([i] !== nums[i+1])){
  //nums[index] = nums[i+1]
  //index++
  //return index


//26. you can set a counter and add elements and it will convert to an array. Let counter =0 then add elements convert to an array

//27.//i know i had to use some sort of loop use the while loop if you need to insert something in order or something of that nature




//Given an array of integers, where all elements but one occur twice, find the unique element.
//a = [1,2,3,4,5]
//The unique element is 4

//given an array of integers 
//anytime you see this you know you have to use a for loop

//since we're using a unique element you can use traversing 
//i also remember not to use a bracket specifically for traversing

//this question is complete

function lonelyinteger(a) {
  let sum =0;
  for(i=0; i<a.length; a++) sum^=a[i]
  return sum
}

//Given a string s containing just the characters '(', ')', '{','}', '[', ']'
//i already know from memory i have to use a for loop

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type

//from memory i have to loop through this function

//what tools can i use to code this,
//i remember that i can use a foreach loop but i'm not the most comfortable with.
//I have to know specifically how to use a foreach loop

//I had the theory totally long as this wasn't recursion, i have to use const storage
//i have to use stack
//and go through the for loop

//and then use a stack.push and stack.pop but how do i know when to use which

//Stack
//Pop
//Push

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid

//things i dont understand, how am i supposed to use the stack.push and stack.pop method, like when do you know to use that
//maybe use hashmaps when they have specific elements to check


var isValid = function(s){
  let hashmap ={'{':'}', '[':']', '(':')'}
  const stack =[]
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

//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
//there was no way i was going to remember this

//array.isArray(oldArr[i]))
//newArr = newArr.concat(flatten(oldArr[i]))

function flatten(arr){
  let newArray=[]
  for(i=0; i<arr.length;i++){
    if(Array.isArray(arr[i])){
      let flat = flatten(arr[i]);
      newArray = newArray.concat(flat)
    }else{
      newArray.push(arr[i])
    }
  }
}

function flatten(arr){
  let flat =[]
  arr.forEach(i => Array.isArray(i) ? flat = flat.concat(flatten(i)) : flat.push(i));
  return flat;
}

//The CONCAT function combines the text from multiple ranges and/or strings, but it doesn't provide delimiter or IgnoreEmpty arguments.


//Sam is a professor at the university and likes to round each student's according to these rules
//what threw me off about this question? I didn't know how to write the value%5<3 and didn't take the time
//to actually read it i got lazy.  Read the question and try to solve it next time.
//looking at the solution const result = grades.map((value)=> value<38 and else if(value %5<3) let extraMarks =5-(value%5)
//return value + extraMarks, return result 

//you can create a for loop or a foreach loop but the hardest part of this problem is
//understanding how to write the percentages 

//if the difference between the grade and the next multiple of 5 is less than 3 round grade up
//to the next multiple of 5

//if the value of grade is less than 38 no rounding occurs as the result will still be a failing grade

function gradingscores(scores){
  const result = grades.map((value)=>{
    if(value<38){
      return value;
    }
    else if(value%5<3){
      return value;
    }
    else{
      let extraMarks = 5-(value%5)
      return value+extraMarks
    }
  })
  return result;
}
//Big O Notation

//It's called Big O and the official term is Big O
//What is good code?

//1.Readable
//2.Scaleable [Big O notation]

//what is good code
//Recipe, use in our kitchen to bake a cake
//Give insutrctions give it through code and provide us some sort of an output

const nemso = ['nemo'];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}

findNemo(nemo);

const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(100).fill('nemo'); //this creates a new array and fill is used to fill an array with the same value

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}

findNemo(nemo);

//the computer is really fast so when you're coding the number is going to be faster and slower, it will be faster and it will be slower
//Big-O Complexity Chart, big o ninja

//As the elements increase how many more operations do we have to do //operations

//thats what we call algorithmic effciency
//Big-O Complexity Chart

//as we grow bigger and bigger in our algorithm how much does the algorithm slow down

//6 items is 6 operations
//7 items is 7 operations
//8 items is 8 operations
//9 items is 9 operations

//findNemo(large); //O(n) --> Linear Time
//findNemo(large); //O(10000) --> Linear Time
//as things grow larger and larger does it scale

//So the find neo function is o of nw linear time
//Another way to think about it is this if we had compression algorithm, lets say this function is

//Input
//function()
//Output

//think of a box, 1 box and you have to ship a box, you ship the box, 1 box at a time

function compressAllBoxes(boxes) {
  boxes.forEach(function (item) {
    console.log(item);
  });
}

const compressAllBoxes = (boxes) => {
  boxes.forEach((box) => console.log(box));
};

//const numbers =[1,4,5,68] //simple example of numbers and numbers.forEach(function(e){console.log(e)})
//numbers.forEach(function(e) {console.log(e)}

<script type="text/javascript">
  const names = ['Dom', "Bob","Mary"] names.forEach(function (e,i){' '}
  {console.log(e + ' ' + i)});
</script>;

//function compressFirstBox(boxes){
//console.log(boxes[0])
//}

//O(1)- Constant Time
//Grabbing the first item in the array
//its a linear line

// const nemo = ['nemo'];
// const everyone = [
//   'dory',
//   'bruce',
//   'marlin',
//   'nemo',
//   'gill',
//   'bloat',
//   'nigel',
//   'squirt',
//   'darla',
//   'hank',
// ];
// const large = newArray(100000).fill('nemo');

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
// }

// findNemo(large);

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}

logFirstTwoBoxes(boxes); //O(2)

//if you were lookng at it on a graph it just moves up, and moves up , it is just a flat line

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); //O(n) //dont know what this function is //when you call another function O(n)
    let stranger = true; //O(n)
    a++; //O(n) //incrementing in a loop O(n)
  }
  return a; //O(1)
}

funChallenge();

BIGO(3 + 4n);
//O(n)

function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

// BIG O(4+ 7n) //is O(n) basically if something is bigger it just eats the others  so say if it was n^2 it doesn;t matter if there is O9N)

//Simplifying Big O(n)
//In interviews how are you going to do this

//Big O
//break helps stop the loop once the array is found or the value is found so it doesn't loop through the whole array
//trying to find NEMO

//Best case is if nemo is at the beginning so you only gotta loop once
//Worst case is if nemo is at the end so you loop 10 times

const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo(everyone);

//Remove Constants
//if you look at the array there is var middleindex= math.floor(items.length/2)
//while loop is half so it's O(n/2)
//and then you add 100

function printFirstItemThenFirstHalfThenSayHi100times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}

//O(1+n/2+100)
//Dont care about n/2 and 100 and n/2 and drop all the constants and can get the time complexity
//O(n)

function compressBoxesTwice(boxes){
  boxes.forEach(function(boxes)){
    console.log(boxes);
    });


    boxes.forEach(function(boxes){
      console.log(boxes);
      });
    }

    //Always drop the constants two for loops is still O(n) but if that for loop was inside that for loop
    //it would be On^2

  
  //Different terms for inputs
  //Trickiest part of an interview

function compressBoxesTwice(boxes,boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes);
  });

  boxes2.forEach(function(boxes){
    console.log(boxes);
  });
}

//O(2n)
//O(n)

//Different terms for input
//Third rules state that different terms for input, //are two different inputs
//O(a+b)// because theres two variables two inputs


//Log all pairs of array
const box =['a','b', 'c', 'd','e']

function logAllPairsOfArray(array){
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      console.log(array[i],array[j])
    }
  }
}

logAllPairsOfArray(box)

//nested loops means O(n^2) - this is called quadratic time
//O(n*n)
//O(n^2)


function compressBoxesTwices(boxes,boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes)
  });

  boxes2.forEach(function(boxes){
    console.log(boxes)
  });
}
//O(a=b)
//O(a*b)
//anything that happens with indentation you create nested

//Rule number 4 drop all non dominant terms

function printAllNumbersThenAllPairSums(numbers){

    console.log('these are the numbers:');
    numbers.forEach(function(number){
        console.log(number)
    });

   console.log('and these are their sums:');
   numbers.forEach(function(firstNumber){
    numbers.forEach(function(secondNumber){
        console.log(firstNumber + secondNumber)
    });
  });
}

//4th rule 
//this is O(n +n^2)
//this is just O(n^2)

//O(1)- Constant no loops
//O(log N)- Logarithmic usually searching algorithms have log n if they are supported
//O(n)- Linear for loops while loops through n items
//O(n log(n)) Log linear suported loops
//O(2^n) // exponential recurisve algorithms that solves a problem
//O(n!)

//out of practice can i do the quick sort

//O(n!) //this exists and is the most steep version of factorial 

//3 pillars of programming 

//1. Readable
//2. Scaleable


//How fast is our run time on the code 
//How much time does it take for a function to run 

//Scaleable is Big O 

//RAM is what the memory of our code is made
//Which code is best?


//3 pillars
//1.Readable clean code that others can read and is maintainable
//2.Speed and and is efficent and scales well 
//3.Memory usage of code, want it to use less memory of code

//Spacecomplexity
//most primatives(booleans,numbers,undefined,null) are constant space

//Strings require O(n) space //50 characters the string takes up to 50 times more space than a single character string

//Reference types are generally O(n), where n is the longth(for arrays) or the number of keys(for objects)

function sum(arr){
  let total=0; //variable called total 
  for(let i=0; i<arr.length;i++){ //another number
    total +=arr[i]
  }
  return total;
}

//sums all the items in the array
//adding item to the array

//the total


//big o 
//o(n) 
//arr might have 1 item or 10 items or 10000 items
//O(1)

function dobule(arr){
  let newArr=[]
  for(let i=0; i<arr.length; i++){
    newArr.push(2*arr[i])
  }
  return newArr;
}

//the answer is proportional to the array 
//O(n)


//big o 
//o(n) 
//arr might have 1 item or 10 items or 10000 items
//O(1)

//what causes space complexity
//variables //O(1)
//data structures
//function call
//allocations

function boooo(n){
  for(let i=0; i<n.length; i++){
    console.log('boooo!')
  }
}

boooo([1,2,3,4,5]) //o(1)

//what is the space cmoplexity
//Additional space

//we're adding a let i=0

function arrayOfHiNTimes(n){
  let hiArray =[];
  for(let i=0; i<n; i++){
    hiArray[i]= 'hi'
  }
  return hiArray
}

//arrayOfHiNTimes(6)


//twitter example

//get their first name
//get their last name


//space complexity O(n)

function tweets(n){
  let array=[]
  for(let i=0; i<n.length; i++){
    array.push(n[i])
  }
  let firstwwet = array[0]
  let lasttweet=array[array.length-1]
}

const array=['hi','my', 'teddy']
array[0]
array[array.length-1]


const yo = [{
  tweet:'hi',
  date:2021
}, {
  tweet:'hi',
  date:2021
},{
  tweet:'hi',
  date:2021
}];

//O(n^2)


'hgfdsfghjk'.length //O(1) in js

//Data Structure

//Array
const strings =['a','b','c','d'];
//4 items taking up 4 shelves in our memory
//4*4 16 bytes of storage
//push method 
strings.push('e'); //O(1)
//pop method
strings.pop(); //O(1)
strings.pop();
//add an item in the beginnning of the array
//unshift
strings.unshift('x'); // O(n)
//not best data structure to add to beginning of array
//splice
strings.splice(2,0, 'alien')
//inserting and deleting might not be the best for arrays

console.log(strings)


//in a 32 bit system

//0 00000000
//1 00000000
//2 00000000
//3 00000001
//4 00000000
//5 00000000
//6 00000000
//7 00000111

//strings[2]


//Dynamic Array and Static Array

//Static Arrays fixed in size need to specify the array of elements your array will hold
//Static array, we copy the whole array
//We allocate 14 blocks of memory
//Paste the eight list to that location



//Dynamic Arrays- Allow us to copy and rebuild an array with a new location and more memory


class MyArray{
  constructor(){
    this.length=0; //create this.length 
    this.data={} //create this.data
  }

  get(index){ //create get(index)
    return this.data[index] //return this.data(index)
  }

   push(item){ //push item 
    this.data[this.length]= item; //this.data(this.length) =item 
    this.length++ //increment counter 
    return this.length //return this .length 
   }

   pop(){
     const lastItem = this.data [this.length-1] //create last item = this.data and this.length-1
     delete this.data[this.length-1]; //delete this.data[this.length-1]
     this.length--;
     return lastItem;
   }

   delete(index){
    const item = this.data[index];
    this.shiftItems(index)
   }

   shiftItems(index){
      for(let i= index; i<this.length-1;i++)
      { 
        this.data[i]= this.data[i+1];
      }
      delete this.data[this.length-1]
      this.length--
   }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('you');
newArray.push('!');
newArray.delete(1)
console.log(newArray)


//Hash Tables or Hash Maps maps unodered maps dictionaries objects

//Different languages have different names for it and slight variations on the hash tables

//Objects for example in JS are a type of hashtable
//these two are the most common interview questions

//python called dictionaries
//Javascript as we said are objects

//Java has maps and Ruby has hashes
//hash tables are really important all across computer science

//Hash Tables are a data structure that allow you to create a list of paired values.


//You see them a lot in databases and caches and theyre extremely useful
//Basket.grapes=10000
//Now a way a hash table works is we have the key which is grapes

//Hash Tables
//key= Grapes
//Index- Hash function

//pass the key into a black box and do some magic and then out of it comes a key where
//we want to store this value

//What is a hash function 
//Simply a function that generates a value of fixed length for each input that 

//MD5 Hash Generator
String: Hello
//MD5 Hash 
//hashes the table

//give someone the hash they have no idea what the input was
//if i put hello it is going to stay the same, but if i put hello way more times then its going to completely change the string

//idempotent or independent
//a function given an input always outputs the same
//get really fast data access because all i have to do to find grapes or basket dot grapes is to pass grpes

//Hash tables you're looking at O(1) complexity and is a hack on top of an array
//A hash table collision is when data goes into a storage and hits the storage 1 by 1 annd goes in the same container, causing a colision.
//There are ways to fix this but this is what a hash collision is 

//Head--> Node---> Tail

//there is a head there is a node and then there is a tail
//first node is called the head and the last node is called the tail
//linked list = null terminated means that the list is terminated

//why linked list 
//One key thing that you may have seen 

//when you wanted to add the value add head and tail 
//O of n

//linked lists you start at the head and traverse the list until you get to item five, which is O of RN.
//5-10-2

//things you can use prepent O(1)
//append O(1)
//lookup O(n)
//insert O(n)
//delete O(n)


//What is a pointer

//It is a reference to another place in memory or another object or another node

const obj1={a:true};
const obj2= obj1;
obj1.a='booya'
delete obj1
//it wont delete the memory because it's still in memory

//pointer is a reference to an object
console.log('1', obj1);
console.log('2', obj2);

//its simply saying where it is in memory

//what is a doubly linked list its a list that goes both ways
//5-10-2
//searching through a doubly linked list can be more efficient
//lookup can be technically o divided by two


//what is the difference between singly and doubly linked list


//singly linked list its faily easy to implement
//less memory


//doubly can be traversed from the front and the back
//delete function is easier
//fairly complex to make 


//Stacks and Queues

//Linear Data structures allow us to traverse
//Go through data elements sequentially 1 by 1

//In which only one data element can be directly reached
//Stacks and Queues
//Linear Data structures

//Stacks and Queues are linear data structures go through data element sequentially 1 by 1
//In which only one data element can be directly reached
//And this will become more clear to you as we talk more about Stacks and Q's through the next couple videos

//linear strucutres help us traverse one by one
//in which only one data element can be directly reached
//this will become more clear to you as we talk more about stacks and Q's throughout the next couple

//implemented in similar ways. maian difference is how items get removed
//You mainly uses stacks and Q's to run commands like push, peak and pop all of which deal exclusively with
//only can access the first and the last element important topic in computer science

//what is a stacks
//LIFO
//data that gets stacked on the piece of data
//Stacks plates stacked on top of each other veritically and you can only touch
//can only touch the top plate


//Queues are the opposite of stacks, queues are a first in and first out access of the item 
//enqueue = shift
//dequeue = unshift
//peek what item is going to come up 
//lookup


//1
//2-3-4
//6-7


//1 is the root
//1 and 3 are the parent

//1 points down to 
//to 6 and 7 and thats a leaf

//What is O(log n)

//O log(N) 

//is 
//2^1 =1
//2^2 =4
//2^8=8


//if you look at a binary tree,
//the binary tree is 
//2-1
//4-1
//8-1

//1
//3
//7

//Binary Search tree really really good at searching
//All values to the right are increasing


            //101
    //33          //105


  //9 //37      //104 //144

  //you can easily search by using if else statements
  //to delete a node gotta go through it and 105
  //check if 104 is greater than 144

  //since 104 is less thn 144, //144 comes up
  

  //Tries a way to store strings into a data structure
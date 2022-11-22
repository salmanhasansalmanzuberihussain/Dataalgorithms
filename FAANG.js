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

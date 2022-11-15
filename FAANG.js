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

Mastering the Coding Interview: Big Tech FAANG Interviews 
Big O- What is good code 
1.Readable [Similar to what i do with unguarded.com] (I keep the website in stable condition after remaking the whole website and reformatting 	to new technologies such as Vercel and such as NextJS using Meta)  
2.Scaleable [Big O] 
 
A task where we want to bake a cake 
Recipe[Instructions]- Kitchen- Cake 
 
Computers are machines and these machines need to work in order to produce something for us 
Coding Instructions -> Instructions given to these machines [Input] ->  Output 
Turn on the light in our room 
 
Use Replit.com to create Node.JS 
Node.JS [JavaScript] - Open Source JavaScript run time 
Visual Studio Code as well [Thats where I programmed UNGUARDED.com myself]  
 
What is good code? 
1.Readable 
2.Scaleable 
 
//function meaning "self-contained" modules of code that accomplish a specific task 
 
const nemo = ['nemo'] //this is an array   
const nemo =['fwfw’, ‘fwerfwef’,’g34g4g4g’,’ererfer’,’egrege’] // this is multiple elements in an array  
 
function findNemo(array){ //this is a function  
	let t0= performance.now()  //this is a performance.now() - Timecall  
	 for(let i=0; i<array.length; i++){ //this is a for loop 
		 if(array[i] === 'nemo'){ // so this is an if else statement (if(array[i]===’nemo’)  
		console.log('Found NEMO!'); 
 	  } 
	} 
	let t1 = performance.now();  
	console.log("Call to find Nemo took  " + (t1 - t0) + " milliseconds."); 
} 

findNemo(nemo); 
 
What is a function 
A function is a compiler for code to put in a self-contained module 
for loop is a piece of data that is used to go through a loop multiple times 
If array === ‘nemo’ then console.log (‘Found NEMO!’); 
let t1 = performance.now() is a function that calls a timestamp of a function 
 
We have to call the function findNemo(everyone); 
 
const nemo [‘nemo’] 
 
const large = new Array(100).fill(‘nemo’); // fill array of 100 this is what new array does 
 
 
 
 
 
O(logn), O(1), O(n log n), O(n^2), O(2^n), O(n!) 
O(1)- Constant Time 
O(n)- Linear Time 
 
 
const nemo = ['nemo'] //this is an array   
const nemo =['fwfw’, ‘fwerfwef’,’g34g4g4g’,’ererfer’,’egrege’] // this is multiple elements in an array  
 
function findNemo(array){  
	let t0= performance.now()   
	for(let i=0; i<array.length; i++){  
		 if(array[i] === 'nemo'){  
		console.log('Found NEMO!'); 
 	  } 
	} 
	let t1 = performance.now(); 
}  
	console.log("Call to find Nemo took  " + (t1 - t0) + " milliseconds."); 
} 
 
 
O(N)- Usually one for loop  
For Loop (for let i=0; i<array.length; i++){ 
A "For" Loop is used to repeat a specific block of code a known number of times  
 
Function compressAllBoxes(boxes){ 
	boxes.forEach(function(item){ 
	           console.log(item) 
	}); 
} 
 

Const compressAllboxes = boxes  
 
//Foreach loop is really similar loop  
 
 
 
O(1)- Usually one for loop 
function compressFirstBox(boxes){ 
	console.log(boxes[0]); //O(1) 
} 
 
 
// findNemo(large); // O(n) --> Linear Time 
const boxes = [0,1,2,3,4,5] 
 

Function logFirstTwoBoxes(boxes){ 
	console.log(boxes[0]); //O(1) 
	console.log(boxes[1]); //O(1) 
} 
 
logFirstTwoBoxes(boxes) //O(2) 
 
// What is the Big O of the below function? (Hint, you may want to go line by line) 

 
 
 
function anotherFunChallenge(input) { 
	let a = 5; // O(1) 
	let b = 10; // O(1) 
	 let c = 50; // O(1) 
	for (let i = 0; i < input; i++) { // O(n) 
		 let x = i + 1; // O(n) 
		 let y = i + 2; // O(n) 
		let z = i + 3; // O(n) 
  	} 

   	 for (let j = 0; j < input; j++) { // O(n) 
		let p = j * 2; // O(n) 
		let q = j * 2; // O(n)  
	 } 
	let whoAmI = "I don't know"; // O(1) 
 	} 

  // Big O = 4 + 7n = O(n) 
 
 
 

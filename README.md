What is Data Algorithms?  (1 hour) 
Data Algorithms a set of instructions that a computer follows to perform calculations or solve problems. Organization and management of data. 
 
Big O and Scalability 
const nemo = [‘nemo’] 
const everyone [‘dory,’bruce’, ‘marlin’] 
const large = new Array(100).fill(‘nemo’) -> Fill the array  
 
function findNemo(array){ ->Container for code 
	let t0= performance.now(); -> Calls a date and time 
	for(let i =0; i<array.length; i++){ -> Executes a block of code an amount of times 
		if(array[i]===’nemo’){ 
			console.log(‘Found NEMO!’); 
		} 
	} 
	let t1 = performance.now() -> -> Calls a date and time 
	console.log(‘Call to find Nemo took ‘ + (t1-t0) + ‘ milliseconds’); 
	} 
} 
 
findNemo(large); 
 
The more code there is, the more runtime there is. 
 
Big O –Measurement to see how long it takes for code to run 
 
 
Big O 
1. O(1) - Constant Time 
Example | function compressFirstBox(boxes) { 
		console.log(boxes[0]) 
	} 
 
Number of operations | Stay flat- Linear Time 
(1),(2),(3) 
 
Big O Calculation 
function funChallenge(input){ 
	let a =10; O(1) 
	a = 50+3; O(1) 
 
for(let i=0; i<input.length; i++){ O(n) 
	anotherFunction(); O(n)- Since called multiple times 
	let stranger = true; O(n)- Since going to run multiple times O(n) 
	a++ O(n)- Since going to run multiple times O(n) 
} 
 
return a; //O(1) 
} 
 
2.O(n) - 1 For Loop 
 
O(n^2)- Quadratic- 2 For Loops 
O(n!)- Loop for everytime 
 
What is Good Code? 
1.Readable- Clean Code and that is maintainable 
2.Memory- Space Complexity  
3.Speed- Time Complexity 
 
When a program executes it has two ways to remember things 
Heap- Store variables 
Stack- We keep track of function calls 
 
Tradeoff between Memory and Speed tradeoff between Time 
Total size relative to the input and see how many new variables we’re allocating 
TIme Complexity [How quick data can be compressed] 
Memory Complexity [Memory complexity that measures with the boxes] 
How much memory can it take. Say a lot of data is written, there is a chance of an overflow [Stack overflow]. How many times do I have to call data, something we’ll cover when we get into recursion.  
 
What causes Space Complexity 
Adding Variables 
Adding Data Structures- Arrays, Hash Tables,  
Adding Function Call- an expression containing the function name followed by the function call operator() 
Adding Allocations 
 
function boo(n){ 
	for(let i=0; i<n.length; i++){ 
		console.log(’booo’) 
	} 
} 
 
boo([1,2,4,5,2,1])- O(1)

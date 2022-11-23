//IMPORTANT JS techniques
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); //adds a value to the array
hobbies.unshift('Coding'); //adds a value to the array, shifts all the elements to the right
hobbies.shift(); //shifts all elements one place to the left
const poppedValue = hobbies.pop(); //removes the last element
console.log(hobbies);
hobbies[1] = 'Coding'; //replaces element at the index
hobbies[5] = 'reading'; //adds an element at that exact location and adds three empty slots
console.log(hobbies, hobbies[4]);
hobbies.splice[1];
const nameData = ['Max', 'Schwarz'];
const [firstName, lastname] = nameData; //logs out the data
console.log(firstName, lastName);

//Arrays, sets, and maps
//Arrays are most important, sets and the maps

//Arrays
//Store data of any kind and length
//Iterable, also many special array methods available
//order is guarenteed, duplicates are allowed, zero based index to access elements

//Sets
//store nested data of any kind and length
//Iterable also some special set methods available
//Order is not guarenteed duplicates are not allowed, no index-based access

//Maps
//Store key-value data of any kind and length, any key values are allowed
//can use anything as a key and that offers more flexibility
//Iterable also some special maps methods available
//Order is guarenteed diplicate keys are not allowed, key-based access

//Working with sets , it can be an array, it can be another set, can be a node list
//no access to the files
//can use .for sets
//there is no get method or anything like that
//you can check if it has a value
//ids.add(2)
//in a set the value is guarenteed to be unique

const ids = new Set(['Hi', 'from', 'set!']);
ids.add(2);
if (ids.has('Hi')) {
  ids.delete('Hi');
}

for (const entry of ids.entries()) {
  console.log(entry[0]);
}

//Working w/ Maps

const person1 = { name: 'Max' };
const person2 = { name: 'Maxuel' };

const personDate = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

console.log(personData);

personData.set; //creates a value in a map

personData.get; //gets the value

//Maps vs object

//can use any values and you as keys

//Maps

//Can use any values and types as keys better performance for huge quantites of data

//Object
//only may use strings,number or symbols as key perfect for s/m szd set of data

//sets
//store nested data of any kind and length iterable also some special set method available order is not guarenteed

//Maps store key value data of kind and length any key values are allowed

let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);

//What is an object- A closer Look Beyond the Basics
//Objects group data and functions
//Core Data structures in JS

//Typically reflect real-world entities
//buttons and movie
//Apply real world logic to coding
//Made up of properties & methods
//Store data in properties and actions in methods
//Allow you to group related data togethre and split your code into logicial pieces

//

//const newMovie={
//id: Math.random().toString(),
//title: titleValue,
//image: imageUrlValue,
//rating: ratingValue
//};

//Primitive Values
//So only objects are reference values to put it like that
//numbers
//strings
//booleans
//null
//undefined
//symbol

//Reference Values (=Objects)
//Everything else
//{...}
//Arrays
//DOM Nodes
//other built in objects

const complexPerson = {
  name: 'Max',
  hobbies: ['Sports', 'Cooking'],
  address: {
    street: 'Some Street 5',
    stateId: 5,
    country: 'Germany',
  },
};

const per = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi There!');
  },
};

per.greet(); //you can get all the elements of the object by using this
person.age = 31;
//the way to add to a function is .age and to call a function you can do the same thing
person.isAdmin(true);
console.log(person.isAdmin);
delete person.age;

//added a javascript call function(){alert('Hi There)}
//never assign undefined value to any variable
//delete person.age;
//delete the item
//dont person.age to null

let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
  isAdmin: true,
};

person.greet();

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
  isAdmin: true,
};

console.log(person['first name']); //can get the string using an [] to get the first name

class HashTable {
  setItem = (key, value) => {};
  getItem = (key) => {
    return '';
  };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'bob');
myTable.getItem('firstName');
console.log(myTable);

//indexOf() and .includes = the same thing

//1.indexOf() includes a certain element if you're searching for something
//2.includes() includes a certain element if you're searching for something means the exact same thing

//3.What does substring mean
let word = 'Barefoot';
let sub1 = word.substring(0, 3); //first argument is the starting index and the last index is the 3 index
//last argument is exclusive meaning is it is not included  0,4
let sub2 = word.substring(4, 8);
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

//Objects can use numbers or symbols and can store positive numbers 0 or higher
//Can access this console.log(person[1.5]); //and can wrap this in quotes

//the order is kept in the way we keep things

//if you have an object with only numbers than that will be sorted

const keyName = 'first name';
console.log(person[keyName]); //can look at it dynamiccally anything that yields a value

let person = {
  'first name': 'Max',
  age: 30,

  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi There!');
  },
  1.5: 'hello',
};

console.log(person['first name']);
console.log(person[1.5]);
console.log(person);

const userChosenKeyName = 'level';
//but lets assume we got this from a dynamic input by the user

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['sports', 'cooking'],
  [userChosenKeyName]: '...',
  greet: function () {
    alert('Hi There!');
  },
  1.5: 'Hello',
};

const propKey = 'field 12';
const person = {
  [propKey]: 'Max',
};
console.log(person['field 12']);

//What would be a use-case for a dynamic property assignment (i.e. for setting a property via [] on the "left side of the colon")?
//You want to set a user-defined property name

//delete SomeObject.someProp is how you delete
//in an object cant have a semi colon or special characters

//That's correct! If you don't know the property name in advance (i.e. at the time you're writing the code), dynamic assignment allows you to refer to a variable which will eventually hold the to-be-used property name.

let person = {
  age: 30,
  hobbies: ['sports', 'cooking'],
};

return this.age;

//bind ppushes a function for future execution
//call instead goes ahead and executes the function right away
//apply will execute function right away
//this inside a function refers to what is called inside a function

//With this if its outside of a function and it is an arrow function, its going to refer to the inside of a function

//Why do we log window? Use strict indeed leads to undefined being logged instead of global window
const members = {
  teamName: 'Blue Rockets',
  people: ['Max', 'Manuel'],
  getTeamMembers() {
    this.people.forEach((p) => {
      console.log(p + '-' + this.teamName);
    });
  },
};

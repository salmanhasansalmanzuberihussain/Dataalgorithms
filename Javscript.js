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

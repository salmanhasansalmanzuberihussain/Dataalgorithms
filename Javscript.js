//IMPORTANT JS techniques 
const hobbies = ['Sports', 'Cooking'];
hobbies.push("Reading"); //adds a value to the array 
hobbies.unshift('Coding'); //adds a value to the array, shifts all the elements to the right 
hobbies.shift();//shifts all elements one place to the left
const poppedValue = hobbies.pop(); //removes the last element
console.log(hobbies);
hobbies[1] = 'Coding'; //replaces element at the index
hobbies[5] = 'reading' //adds an element at that exact location and adds three empty slots 
console.log(hobbies,hobbies[4]) 
hobbies.splice[1]
const nameData =['Max', 'Schwarz']
const [ firstName, lastname ] = nameData;  //logs out the data 
console.log(firstName, lastName)

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





const ids= new Set(['Hi','from','set!']); 
ids.add(2)
if(ids.has('Hi')){
  ids.delete('Hi');
}


for(const entry of ids.entries()){
  console.log(entry[0]);
}






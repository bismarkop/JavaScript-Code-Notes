// const names = ["John", "Abagail", "Jerome", "Cynthia", "Bismark", "Bizzy"];
// const greetings = [];

// for (let i = 0; i < names.length; i++) {
// 	greetings[i] = "Hello, " + names[i] + "!";
// 	console.log(greetings[i]);
// }

// let movies = ["Black Panther", "Inception", "Avatar"]
// let firstMovie = movies[0]
// console.log(firstMovie)
// console.log(`There are ${movies.length} movies on this list.`)

// // Populating an array by index
// // This changes the movie at index 1 of the movies array.*****
// movies[1] = 'Batman';

// // This adds a movie to the end of the list*****
// movies[movies.length] = 'Test';

// console.log(movies); // [ 'Black Panther', 'Batman', 'Avatar', 'Test' ]

// // The follow creates 6 empty items between the 4th and 10th item. 
// movies[10] = "Shrek"
// console.log(movies);

// // To lengthen an array
// movies.length = 20
// console.log(movies)

// // To shorten an array (potentially getting rid of items in an array)
// movies.length = 4
// console.log(movies)

// // Array iteration
// for (let i = 0; i < movies.length; i++) {
// 	console.log(movies[i]);
// }


// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join(', '));
// // Expected output: "Fire, Air, Water"

// // This pushes what's included in push to the BACK of the array
// elements.push("Earth")
// console.log(elements)

// // This moves what's included in unshift to the FRONT of the array
// elements.unshift("Wind")
// console.log(elements)

// // To REMOVE and item from the BACK of an array 
// let lastMovie = elements.pop()
// console.log(lastMovie)

// // To REMOVE and item from the FRONT of an array 
// let firstMovie = elements.shift()
// console.log(firstMovie)


// Using splice - Splices syntax = 
// array.splice(start, deleteCount, newItem1, newItem2...)

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
// // This starts at element 3 (Trading Places), removes 1 element, and adds Spaceballs and Alien.
// // removedMovies => ['Trading Places']
// // movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien']
// console.log(movies)

// removedMovies = movies.splice(0, 3);
// // This starts at element 0 and removes 3 elements.
// // removedMovies => ['Caddyshack', 'Interstellar', 'Scarface']
// // movies => ['Spaceballs', 'Alien']
// console.log(movies)

// removedMovies = movies.splice(1, 0, 'The Sting');
// // This starts at element 1 and does not remove anything, but adds The Sting.
// // removedMovies => []
// // movies => ['Spaceballs', 'The Sting', 'Alien']
// console.log(movies)

// Using slice - this extracts a section from an array and returns a new array. It takes a starting index and ending index, and returns all elements between those two indexes (end not included). Unlike splice, slice does not modify the original array at all.
// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let middleMovies = movies.slice(1,3);
// // middleMovies => ['Interstellar', 'Scarface']
// // movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']
// console.log(movies)
// console.log(middleMovies)


// The difference between splice and slice is that splice can add to an array and changes the original array whereas splice does neither and creates a new array.

// Sorting an array - This is better used for string than numbers*****
// let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// numArray.sort(); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8]
// movies.sort(); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo']

// console.log(numArray.sort())
// console.log(movies.sort())


// indexOf() and lastIndexOf() - these are used to search an array. The indexOf() method looks for the value passed into it, and returns the index of the first element that matches that value, if any. If the value is not present, it returns -1. lastIndexOf() does the exact same thing, but starts at the end of the array.
// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// let batmanIndex = movies.indexOf('Batman'); // 2
// console.log(movies.indexOf('Batman'))

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Batman', 'Spaceballs', 'Alien', 'Batman', 'The Count of Monte Cristo'];

// let batmanIndex = movies.lastIndexOf('Batman'); // 8

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// movies.forEach((movie) => {
// 	console.log(movie);
// });

// movies.forEach((movie, i) => {
// 	console.log(i + ') ' + movie);
// });

// for (let movie of movies) {
// 	if (movie === 'Scarface') break;
// 	console.log(movie);
// }

// // The spread operator - this copies an entire array
// let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
// let moviesCopy = [...movies]; // This is creating a new array
// let otherCopy = movies // doing this is NOT the same as the line above. This is pointing to the variable? ***Look this difference up***
// console.log(moviesCopy)

// ***OBJECTS*** Changing object properties and values
// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989,
// 	"active registration": true
// }

// vehicle.color = "red"; // changing an existing property value
// vehicle.make = "Audi"; // adding a new key:value pair
// delete vehicle["active registration"]; // removing an existing property

// console.log(vehicle); // {color: 'red', hp: 4000, year: 1989, make: 'Audi'}

// ITERATING THROUGH OBJECTS
// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989,
// 	make: "Audi"
// }

// for (const key in vehicle) {
// 	console.log(vehicle[key]); // this shows the value inside the key
// 	console.log(key); // this shows the key
// 	console.log(vehicle); // this shows the entire object
// }

//This is how you access a value within a key that's on the inside of an object
// const vehicle = {
// 	color: "blue",
// 	year: 1989,
// 	make: "Audi",
// 	engine: {
// 		cylinders: 6,
// 		hp: 4000,
// 		size: 3.2
// 	}
// }

// console.log(vehicle.engine.size);


// In JavaScript, objects (including arrays) are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.

// let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// console.log(myMovies == yourMovies); // false

// const vehicle1 = {
// 	color: "blue",
// 	year: 1989,
// 	make: "Audi",
// 	engine: {
// 		cylinders: 6,
// 		hp: 4000,
// 		size: 3.2
// 	}
// }

// const vehicle2 = {
// 	color: "blue",
// 	year: 1989,
// 	make: "Audi",
// 	engine: {
// 		cylinders: 6,
// 		hp: 4000,
// 		size: 3.2
// 	}
// }
// console.log(vehicle1 == vehicle2); // false

// const only prevents you from reassigning a variable, it doesn't prevent you from adding or changing elements of arrays or properties of objects.
// This works
// const mogwai  = {};
// mogwai.name = 'Gizmo';

// // This will not
// const mogwai = {};
// mogwai = { name: 'Gizmo' };

// const obj = {
// 	salutation: 'hi',
// 	count: 4
// }

// if (obj.salutation === "hi") {
// 	console.log('ok');
// }

// for (let i = 0; i < obj.count; i++) {
// 	console.log(i);
// }

// const obj2 = {
// 	something: 'wuttt'
// }

// if (obj2.something) {
// 	console.log('ok');
// }

// if (obj2.anotherthing){
// 	console.log('ok');
// } else {
// 	console.log("that property doesn't exist");
// }
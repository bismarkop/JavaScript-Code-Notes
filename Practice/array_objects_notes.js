// Remember that most of these examples will be based off of the following movie and movies and for clarity's sake. Look out for the methods that have their own arrays and avoid the variables with the same names!

let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'The Happening'];
let movies2 = ['Batman', 'The Count of Monte Cristo', 'Shrek', 'Coco'];

// Populating an array by index.
//This replaces the value at the given index
// movies[0] = "Space Jam";
// console.log(movies); // [ 'Space Jam', 'Interstellar', 'Scarface' ]

// To add a movie to the end of an array:
// movies[movies.length] = "Inception";
// console.log(movies); // [ 'Space Jam', 'Interstellar', 'Scarface', 'Inception' ]
 

// Array iteration. ***NOTE*** > The final index is ALWAYS 1 less than the length of the array < ***VERY IMPORTANT**
// for (let i = 0; i < movies2.length; i++) {
    // console.log(movies2[i]);    
// }

// ***********************************concat()******************************
// Joins two or more arrays together into a single array
// let ourMovies = movies.concat(movies2);
// console.log(ourMovies); // ['Caddyshack', 'Interstellar','Scarface','Batman','The Count of Monte Cristo','Shrek']

// Repeat arrays by passing them into the method multiple times
// let moviesManyTimes = movies.concat(movies, movies, movies);
// console.log(moviesManyTimes); //['Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface' 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface']

// Copy an array by not passing any values 
// let moviesCopy = movies.concat();
// console.log(moviesCopy); // [ 'Caddyshack', 'Interstellar', 'Scarface' ]

// ***********************************join()***********************************
// This turns all of the elements of an array into a single string. This method accepts a delimiter that will be used to join the array elements together
// let movieString = movies2.join(" and ");
// console.log(movieString) // Batman and The Count of Monte Cristo and Shrek
// let movieString = movies2.join(" + ");
// console.log(movieString) // Batman + The Count of Monte Cristo + Shrek


// The following two methods can ADD MULTIPLE ELEMENTS AND TAKE MULTIPLE ARGUMENTS

// *********************************** push() **************************************
//Add multiple elements to the END of an array
// movies.push("Bad Boys", "Avatar");
// console.log(movies); // [ 'Caddyshack', 'Interstellar', 'Scarface', 'Bad Boys', 'Avatar' ]

// *********************************** unshift() ****************************************
//Add multiple elements to the FRONT of an array
// movies.unshift("Avengers", "American Gangster");
// console.log(movies) // ['Avengers', 'American Gangster', 'Caddyshack', 'Interstellar', 'Scarface']


// *****The following two methods can REMOVE ONE ELEMENT AT A TIME, DON'T TAKE ANY ARGUMENTS, AND RETURN THE REMOVED ELEMENT SO THAT YOU CAN STORE IT IN A VARIABLE. These also modify the array in place, meaning the ORIGINAL array is changed. *****

// *********************************** pop() ****************************************
// Remove a single element from the END of an array. This method can be assigned to a variable
// let lastMovie = movies.pop();
// console.log(lastMovie); // Scarface

// *********************************** shift() ****************************************
// Removes an element from the FRONT of an array
// let firstMovie = movies.shift();
// console.log(firstMovie); // Caddyshack

/* 
Remembering push(), unshift(), pop(), and shift() 

The "longer" named methods add to an array (elongate).
unshift -> [...] <- push

The "shorter" named methods remove from the array (shorten).
shift <- [...] -> pop

*/


// *********************************** splice() **************************************** 
// This has it's own list for practice (spliceMovieList)
// This can add/remove any number of elements to/from an array with a single line of code. This always returns an array of the removed elements.
// SYNTAX: array.splice(start, deleteCount, newItem1, newItem2...)
/*
-start- represents the starting element
-deleteCount- represents how many items from the start point, including the start point
-newItemN- represents the item to be added 
*/ 
// let spliceMovieList = ['Superman', 'Iron Man', 'Black Panther', 'Deadpool'];
// //Uncomment everything splice related to see what was done.
// let removedMovies = spliceMovieList.splice(3, 1, "The Lion King", "Beauty and the Beast");
// console.log(removedMovies); // Deadpool
// console.log(spliceMovieList); // ['Superman', 'Iron Man', 'Black Panther', 'The Lion King', 'Beauty and the Beast']

// removedMovies = spliceMovieList.splice(0, 3);
// console.log(removedMovies); // [ 'Superman', 'Iron Man', 'Black Panther' ]
// console.log(spliceMovieList); // [ 'The Lion King', 'Beauty and the Beast' ]

// removedMovies = spliceMovieList.splice(1, 0, "Fake movie inserted");
// console.log(spliceMovieList); // [ 'The Lion King', 'Beauty and the Beast' ]
// console.log(removedMovies); // [], this is empty because nothing was removed from the last splice. However, notice that the spliceMovieList has still changed.


// **************************************** slice() *************************************** 
// DO NOT CONFUSE THIS WITH SPLICE - This uses the initial list of movies at the top of this page
// This extracts a section from an array and returns a new array. It takes a starting index and ending index and returns all elements between those to, NOT INCLUDING THE ENDING INDEX). This can be added to a variable
// let middleMovies = movies.slice(1, 3);
// console.log(middleMovies); // [ 'Interstellar', 'Scarface' ]

/*
*** Splice can add to an array and changes the original array, slice does neither - it only extracts the given portion ***
*/

// **************************************** at() *********************************************
// This accesses an element at the given position in the array. This is useful due to its ability to count backwards from the end of an array
// let myMovie = movies.at(1) 
// let myOtherMovie = movies.at(-1) 
// console.log(myMovie) // Interstellar
// console.log(myOtherMovie) // "The Happening"


// ****************************** MULTI-DIMENSIONAL ARRAYS ***********************************

// ***** Two-dimensional array *****
// let numArray = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// console.log(numArray[0]) // [1, 2, 3]
// console.log(numArray[0][0]) // 1
// console.log(numArray[2][0]) // 7

// The following loops through the array of arrays, and through each element of the subarray
// for (let i=0; i < numArray.length; i++) {
//     let subArray = numArray[i]
//     console.log(`Initial subarray: [${subArray}]`) 

//     for (let j=0; j<numArray.length; j++) {
//         let subArrElements = numArray[i][j]
//         console.log(`Subarray elements: ${subArrElements}`)
//     }
// };

// ***** Three-dimensional array *****
// let numArray2 = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[
// 		[7, 8, 9],
// 		[10, 11, 12],
// 		[13, 14, 15]
// 	],
// ];

// console.log(numArray2[2][1][1]) // 11
// console.log(numArray2[2][2][1]) // 14


// **************************************** flat() **************************************
// This gives us the option to turn multi-dimensional arrays into less multi-dimensional arrays. This method accepts a number which is the depth at which it will flatten the array (the default is 1), indicating to an indicator of how many dimensions you want reduced from the array. Be cautious in your usage of flat(), as most of the time multi-dimensional data structures are built that way for a reason. Luckily, flat() returns a copy of the original array, meaning your nested, multi-dimensional structure is still there if and when you need it!

// let twoD = numArray2.flat()
// This removed one dimension by default, that being the first two subarray, leaving the nested array.
// console.log(twoD) // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ] ]

// let twoD = numArray2.flat(2)
// console.log(twoD) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// **************************************** sort() *******************************************
// The sort() method sorts an array in place. By default, sort() compares the numerical values of elements and sorts them in ascending order. In the case of strings, this means comparing their UTF-16 code units values. This roughly translates to alphabetical order. Other data types undergo a data conversion to strings before sorting in this same manner, if possible.

// You can also define a custom sort by using what is known as a callback function. Callback functions are beyond the scope of this lesson, but as you move into the lesson on functions, just remember that you can pass an entire function into the sort() method (and many other methods) to change its behavior. *** This affects the original array! ***

// ***** use the toSorted() method to get a sorted copy of the array without modifying the original array *****

// let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
// let movieList = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// console.log(numArray.sort()); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8] Notice how this is sorting from negatives to the order from 0-9, disregarding least to greatest in total
// console.log(movieList.sort()); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo']

// **************************************** indexOf **************************************
// This looks for the value passed into it, and returns the index of the first element that matches that value, if any. If the value is not present, it returns -1

// let movieIndex = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];
// let batmanIndex = movieIndex.indexOf('Batman'); // 2
// console.log(batmanIndex);

// // Now, there is no rule against duplicate values in arrays, so what if I wanted to find the last occurence of "Batman" in the array below? Thankfully, lastIndexOf() does the exact same thing, but starts at the end of the array.

// ************************************* lastIindexOf ****************************************
// let movieIndex2 = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Batman', 'Spaceballs', 'Alien', 'Batman', 'The Count of Monte Cristo'];
// let batmanIndex2 = movieIndex2.lastIndexOf('Batman'); // 8
// console.log(batmanIndex2)

// **************************************** forEach() **************************************
// ITERATING OVER AN ARRAY WITH THE ABILITY TO PASS A CALLBACK FUNCTION FOR CUSTOMIZATION 
// Although a for loop can be used to iterate over an array, if you know you want to iterate over all of the elements in an array, the forEach() method is a better approach. forEach() is another method that accepts a callback function, like sort(). 

// let movieList = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// // forEach() calls the function provided as an argument once for each element in the array. Note that it is good practice to name the parameter that accepts each element as the singular of the array, or simply the first letter of the array variable (movie or m for this example).

// movieList.forEach((movie) => {
// 	console.log(movie);
// });

// You can also access the index within each iteration:
// movieList.forEach((movie, i) => {
//     console.log(i + ': ' + movie);
// });

// // We also have the for...of loop for iterating over the elements of arrays and other iterables such as strings Unlike forEach, the for...of loop can be exited using the break statement:
// for (let movie of movieList) {
//     if (movie === "Spaceballs") break;
//     console.log(movie)
// }

// ****************************** The Spread Operator ****************************************
// This is a new way to copy an entire array using "..." - the spread operator

// let movieSpread = [ 'Spaceballs', 'The Sting', 'Alien' ];
// let movieSpreadCopy = [...movieSpread]; // [ 'Spaceballs', 'The Sting', 'Alien' ]
// console.log(movieSpreadCopy)

// // We can also copy and insert additional elements simultaneously using the spread operator:
// let moreMovies = ['Interstellar', ...movieSpread, 'Contact']
// console.log(moreMovies) // [ 'Interstellar', 'Spaceballs', 'The Sting', 'Alien', 'Contact' ]

// *********************************** Objects *********************************************
// These are key-value pairs that allow for storing more specific data. Key-value pairs are also know as properties.

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	"active registration": true
};

// This is how you access objects. Starting with values ***Remember, it's best practice to use dot notation to access the value inside keys. Bracket notation is only used for a key that has a space in it and is surround by quotation marks:

console.log(vehicle.color); // blue
console.log(vehicle.hp); // 4000
console.log(vehicle["active registration"]); // true

// You can change object properties and values, assigning new keys and values to an object after it has been created or overwriting the values of existing keys. 
// The -delete- keyword can also be used to remove properties

vehicle.color = "orange"; // Changes the color value to orange
vehicle.make = "Maserati"; // Adds a property - make: "Maserati"
delete vehicle["active registration"]; // removes this property
console.log(vehicle) // { color: 'orange', hp: 4000, year: 1989, make: 'Maserati' }

// *** Iterating through objects is similar to using the for...in loop

for (const key in vehicle) {
	console.log(vehicle[key]);
}

// **Note that we must use square bracket notation to access the vehicle properties using key, because key is a variable, not a literal. Trying to use vehicle.key would attempt to access a property named key, which does not exist within our vehicle object.**

// *****Object Methods*****
// Objects can be much more complex than arrays, especially when nested with other objects:

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

// console.log(vehicle.engine.size); // 3.2

// let myMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// ***In JavaScript, objects (including arrays) are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.***
// console.log(myMovies == yourMovies); // false
// console.log(myMovies[0] == yourMovies[0]); // true

// ***** When to use Objects or Arrays *****
// When designing your programs, it is up to you to choose how to model your data. We can represent real-life things with our datatypes, but it's a matter of choosing the appropriate datatypes.

// If the thing you want to model is just a list, use an array.
// If the thing want to model has properties, use an object.
// For more simple things use Strings, Numbers, Booleans and other simple datatypes.

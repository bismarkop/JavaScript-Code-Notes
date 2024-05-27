// Remember that will all be based off of the next to variables and not the changes made to them for clarity's sake

let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
let movies2 = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

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

// *****concat()*****
// Joins two or more arrays together into a single array
// let ourMovies = movies.concat(movies2);
// console.log(ourMovies); // ['Caddyshack', 'Interstellar','Scarface','Batman','The Count of Monte Cristo','Shrek']

// Repeat arrays by passing them into the method multiple times
// let moviesManyTimes = movies.concat(movies, movies, movies);
// console.log(moviesManyTimes); //['Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface' 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface']

// Copy an array by not passing any values 
// let moviesCopy = movies.concat();
// console.log(moviesCopy); // [ 'Caddyshack', 'Interstellar', 'Scarface' ]

// *****join()*****
// This turns all of the elements of an array into a single string. This method accepts a delimiter that will be used to join the array elements together
// let movieString = movies2.join(" and ");
// console.log(movieString) // Batman and The Count of Monte Cristo and Shrek
// let movieString = movies2.join(" + ");
// console.log(movieString) // Batman + The Count of Monte Cristo + Shrek


// The following two methods can ADD MULTIPLE ELEMENTS AND TAKE MULTIPLE ARGUMENTS, 
// ***** push() ***
//Add multiple elements to the END of an array
// movies.push("Bad Boys", "Avatar");
// console.log(movies); // [ 'Caddyshack', 'Interstellar', 'Scarface', 'Bad Boys', 'Avatar' ]

// ***** unshift() *****
//Add multiple elements to the FRONT of an array
// movies.unshift("Avengers", "American Gangster");
// console.log(movies) // ['Avengers', 'American Gangster', 'Caddyshack', 'Interstellar', 'Scarface']


// The following two methods can REMOVE ONE ELEMENT AT A TIME, DON'T TAKE ANY ARGUMENTS, AND RETURN THE REMOVED ELEMENT SO THAT YOU CAN STORE IT IN A VARIABLE. These also modify the array in place, meaning the ORIGINAL array is changed. 
// ***** pop() ***
// Remove a single element from the END of an array. This method can be assigned to a variable
// let lastMovie = movies.pop();
// console.log(lastMovie); // Scarface

// ***** shift() *****
// Removes an element from the FRONT of an array
// let firstMovie = movies.shift();
// console.log(firstMovie); // Caddyshack

/* 
Remembering push(), unshift(), pop(), and shift() 

The "longer" named methods add to an array (elongate).
unshift -> [...] <- push

The "shorter" named ones remove from the array (shorten).
shift <- [...] -> pop

*/

// *****splice()***** This has it's own list for practice (spliceMovieList)
// This can add/remove any number of elements to/from an array with a single line of code. This always returns an array of the removed elements.
// SYNTAX: array.splice(start, deleteCount, newItem1, newItem2...)
/*
-start- represents the starting element
-deleteCount- represents how many items from the start point, including the start point
-newItemN- represents the item to be added 
*/ 
let spliceMovieList = ['Superman', 'Iron Man', 'Black Panther', 'Deadpool'];
//Uncomment everything splice related to see what was done.
let removedMovies = spliceMovieList.splice(3, 1, "The Lion King", "Beauty and the Beast")
console.log(removedMovies) // Deadpool
console.log(spliceMovieList) // ['Superman', 'Iron Man', 'Black Panther', 'The Lion King', 'Beauty and the Beast']

removedMovies = spliceMovieList.splice(0, 3)
console.log(removedMovies) // [ 'Superman', 'Iron Man', 'Black Panther' ]
console.log(spliceMovieList) // [ 'The Lion King', 'Beauty and the Beast' ]

removedMovies = spliceMovieList.splice(1, 0, "Fake movie inserted")
console.log(spliceMovieList) // [ 'The Lion King', 'Beauty and the Beast' ]
console.log(removedMovies) // [], this is empty because nothing was removed from the last splice. However, notice that the spliceMovieList has still changed.

// ***** slice() *****

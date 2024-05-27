let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
let movies2 = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

// Populating an array by index.
//This replaces the value at the given index
movies[0] = "Space Jam"
// console.log(movies) // [ 'Space Jam', 'Interstellar', 'Scarface' ]

// To add a movie to the end of an array:
movies[movies.length] = "Inception"
// console.log(movies) // [ 'Space Jam', 'Interstellar', 'Scarface', 'Inception' ]

// Array iteration. ***NOTE*** > The final index is ALWAYS 1 less than the length of the array < ***VERY IMPORTANT**
for (let i = 0; i < movies2.length; i++) {
    console.log(movies2[i]);    
}

// *****concat()*****
// Joins two or more arrays together into a single array
let ourMovies = movies.concat(movies2);
// console.log(ourMovies) // ['Caddyshack', 'Interstellar','Scarface','Batman','The Count of Monte Cristo','Shrek']

// Repeat arrays by passing them into the method multiple times
let moviesManyTimes = movies.concat(movies, movies, movies)
// console.log(moviesManyTimes) //['Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface' 'Caddyshack', 'Interstellar', 'Scarface', 'Caddyshack', 'Interstellar', 'Scarface']

// Copy an array by not passing any values 
let moviesCopy = movies.concat()
// console.log(moviesCopy)
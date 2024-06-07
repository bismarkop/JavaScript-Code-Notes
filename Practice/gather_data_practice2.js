// // const items = [
// //     { name: "Edward", value: 21 },
// //     { name: "Sharpe", value: 37 },
// //     { name: "And", value: 45 },
// //     { name: "The", value: -12 },
// //     { name: "Magnetic", value: 13 },
// //     { name: "Zeros", value: 37 },
// // ];


// // for (let i=0; i<items.length; i++) {
// //     if (items[i].value >= 30) {
// //         delete items[i].value
// //     }
// //     else {
// //         console.log(items[i].value)
// //     }
// // }

// // // // items.sort(function(a, b) {
// // // //     if (a.name.toLowerCase() < b.name.toLowerCase()) {
// // // //         return -1
// // // //     }
// // // //     if (a.name.toLowerCase() > b.name.toLowerCase()) {
// // // //         return 1
// // // //     }
// // // //     return 0
// // // // });

// // // items.sort(function(a, b) {
// // //     if (a.value < b.value) {
// // //         return -1
// // //     }
// // //     if (a.value > b.value) {
// // //         return 1
// // //     }
// // //     return 0
// // // });


// // // console.log(items)

// // // let numbers = [0,1, 2, 3, 4, 5];
// // // // Remove elements less than 3
// // // let filteredNumbers = numbers.filter(number => number >= 3);

// // // console.log(filteredNumbers);

// // const array1 = [1, 2, 3, 4];

// // // 0 + 1 + 2 + 3 + 4
// // let arrayTotal = array1.reduce((total, currentNum) => {
// //     return total + currentNum
// // }, 0);

// // console.log(arrayTotal)
// // // Expected output: 10

// // CALL BACK FUNCTIONS

// // console.log("1")
// // setTimeout(() => {
// //     console.log("2")
// // }, )
// // console.log("3")

// // let names = ["bizzy", "bizz", 'bismark', 'bis']

// // names.forEach((name) => console.log(name))

// // Remember that (name) => console.log(name), the function inside of the forEach function, equates to 

// /*
// function name () {
//     console.log(name)
// }
// */

// //...and is immediately called in the forEach function. The following is what the above forEach is doing in more detail

// // let myForEach = (arr, cb) => {
// //     for (let i = 0; i < arr.length; i++) {
// //         const element = arr[i];
// //         cb(element)
// //     }
// // }

// // myForEach(names, (name) => {
// //     console.log(name)
// // })

// let numbers = [[1], [2], [3]];
// let numbersCopy = [];

// // For Loops
// for (let i = 0; i < numbers.length; i++) {
//     numbersCopy[i] = numbers[i];
// }
// numbersCopy.push([4])
// // console.log(numbersCopy)
// // console.log(numbers)

// let deepArray = [['String in an array that\'s in another array']]
// let shallowCopy = deepArray.slice(0)
// shallowCopy[0].push("...what?")

// console.log(deepArray)
// console.log(shallowCopy)

// // // While Loops
// // let j = -1;
// // while (++j < numbers.length) {
// //     numbersCopy[j] = numbers[j];
// // }

// // // Spread Operator
// // numbersCopy = [...numbers];

// // // Array.map
// // numbersCopy = numbers.map((ele) => ele);


// let x = 10;

// function example() {

//    let x = 20;

//    console.log(x);

// }

// example();

// console.log(x);

// When we return a function
// function outer() {
//    let count = 0;  

//    function inner() {
//         count += 1;
//       return count;        
//} 
//         return inner;
//     }

// const increment = outer();    
// console.log(increment());
// console.log(increment());
// console.log(increment());

// let x = 10;

// try {
// 	if (x > 0) {
// 		isEven = (x % 2 == 0) ? true : false;
// 	} else if (x <= 0) {
// 		throw "Error - Value of 0 or below.";
// 	}

// 	console.log(isEven);
// } catch (err) {
// 	console.log(err);
// } finally {
// 	console.log(x);
// }



// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// let arrayTotal = array1.reduce((total, currentNum) => {
//     return total + currentNum
// }, 0);

// // console.log(arrayTotal)


// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//         skills.push(arguments[i]);
//     }
//     return {
//         devName: name,
//         jobSkills: skills
//     };
// }

// let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
// let bismark = getDevObject('Bismark', 'HTML', 'CSS', 'Python', 'JavaScript', 'SQL')
// console.log(maria)
// console.log(bismark)

// .reduce() = reduces the elements of an array to a single value
// let prices = [5, 30, 10, 25, 15, 20];
// let total = prices.reduce(sum);

// function sum(accumulator, element) {
//     return accumulator + element;
// }

// console.log(total)

// let grades = [75, 50, 90, 80, 65, 95]
// let maxGrade = grades.reduce(getMax)

// function getMax(accumulator, element) {
//     return Math.max(accumulator, element)
// }

// console.log(maxGrade)


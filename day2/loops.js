// for (let i = 0; i < 10; i++) {
// 	console.log(i); // after this code is run, it jumps back to the afterthought (i++) before returning to check the conditiion.
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// for (let i=1; i < 10; i +=2 ) {
//     console.log(i)
// }

// // come back to this
// for (let i = 1; i > 0; i++) {
//     if (i % 2 !== 0) {
//     console.log(i)
//     }
// }

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }

// for (let i = 6; i <= 60; i += 3) {
//     console.log(i)
// }


// let num = "#"
// for (i = 0; i < 7; i++) {
//     console.log(num)
//     num += "#"
// }

// Come back to figure this out. Label prime, even, and odd numbers
// for (i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + "." + " even")
//     } else if (i % 2 !== 0){
//         console.log(i + "." + " odd")
//     }
// }


// Looping through iterables
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }

// For...In Loops - The following is another way to get the same output as the code above.
// const str = "Hello World";

// for (const i in str) {
// 	console.log(str[i]);
// }

// For...Of Loops - use when you're trying to get information out of an object. This gets or loops through the value instead of the index. Notice what's inside the console.log
// const str = "Hello World";

// for (const c of str) {
// 	console.log(c);
// }

// The continue statement in For Loops. When you use continue after statement (in this example it's an if statement within the for..in loop), it will jump to the next iteration instead of acknowledging what was in the statement. 
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// Continue in a for...of loop


// While Loops. Using the break statement. Uneven numbers will likely break immediately. 
// let x = 29;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}

// 	console.log(x);
// }

// For loop for the same example.
// let x = 30;

// for (x = x/2 - 1; x >= 0; x = x/2 - 1) {
// 	if (x % 1 != 0) {
// 		break;
// 	}

// 	console.log(x);
// }

// num = 20
// while (num > 0) {
//     console.log(num)
//     num--
// }

// let num = 0
// while (num < 35) {
//     if (num !== 0 && num % 3 === 0) {
//         console.log(num)
//     }
//     num++ // Understand this placement*****
// }

// let num = 0
// while (num < 100){
//     if (num !== 0 && num % 5 === 0) {
//         console.log(num)
//     }
//     num++
// } 

// let num = 0
// while (num <= 20) {
//     if (num !== 0 && num % 2 === 0) {
//         console.log(num * 3)
//     } 
//     num++
// }

// The following checks how many factors a given number has and determines whether it's a prime number or not. I need to figure out how to NOT include 1 as a prime number

// let num = 1
// let factors = []
// for (let i = 1; i <= num; i++) {
//     // This checks if a number has factors and pushes them into an array.
//     if (num % i == 0) {
//         factors.push(i);
//     }
// }

// if (factors.length > 2) {
//     console.log(`${num} is not a prime number.`)
// } else {
//     console.log(`${num} is a prime number.`)
// }


//Finds the next prime number
// const num = 13;

// mainLoop: for (let i=num; i<100; i++) {
//     if (i === 1) 
//     continue mainLoop

//     for (let j=num; j>1; j--) {
//         if (i % j === 0) {
//             continue mainLoop
//         }
//     }
//     console.log(i)
//     break
// }
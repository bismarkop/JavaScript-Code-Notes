function sayHello(name) {
    console.log(`Hello ${name}!`)
}

// sayHello("Bismark")

// The following function declaration and the following arrow function are equivalent:

// *****Function Declaration***** //
function add(a, b) {
	return a + b;
}

// // *****Arrow Function***** //
// const add = (a, b) => a + b; // the return is implied in the arrow pointing to a + b

// console.log(add(2, 5))

function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
  }
/*
The areBothEven function is defined to accept two arguments. These arguments should be numbers, otherwise the function as written won't work as expected.

The return keyword returns the result of the expression that follows it - which looks kind of crazy, but isn't as intimidating as it appears when you break it down.
*/

// Class Work 
// function computerArea (width, height) {
//     area = width * height
//     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area}`
// }
// console.log(computerArea(5, 2))

// function planetHasWater (planet) {
//     if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(planetHasWater("EaRtH"))
// Class Work End

// *****************************************************************
// NOTE: The first argument that you put into the function call on the next line, will relate to the parameter called in the function. Because we don't know how many arguments will follow, the following function is written with that in consideration.

// let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

// What's happening in the above function can be written in a much cleaner way. This is done by using what is know as REST PARAMETERS. This works with extra arguments but there can only be a single rest parameter and it must be the last parameter in the list:
// function getDevObject(name, ...skills) {
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }
// console.log(maria)
// *****************************************************************

// Default Parameters - These are used if your function requires certain arguments and you want to provide a default value for the parameter if an argument is not supplied when the function is called. 

// COME BACK TO THIS
// function setColor(bicycle, color) {
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }

// let bike = {}
// let bike2 = {}
// setColor(bike, 'blue');  // sets color to blue
// setColor(bike2);  // sets color to purple by default
// console.log(bike)
// console.log(bike2)


// Functions as Arguments
// In JavaScript, it's easy to pass around functions like data - because they are - they're objects!

// Often functions or methods (functions attached to an object) will require a function be provided as an argument.

// For example, the forEach method on arrays. 
// let a = ['red', 'green', 'blue'];

// a.forEach(function(color) {
//   console.log(color);
// });

// Tishana mentioned an anonymous function? 

// ***************************Hoisting**************************************
// We mentioned that we can call function declarations before they are defined thanks to hoisting, but what is that and how does it work?

// Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// A variable's declaration (but not its assignment), is hoisted to the top of the function when it's declared using var.

// The reason for this difference is because "Hoisting" is not a universally agreed-upon term, nor is it defined in the ECMAScript specification, so hoisting actually refers to three separate groups of behaviors:

// 1. Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
// 2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
// 3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

// ***var is hoisted with type 2 behavior, whereas -let-, -const-, and -class- (which we will cover in a later lesson) are hoisted with type 3 behavior.***

// For example, when we write code like this:
// function hoist() {
// 	console.log(x);  // outputs undefined, not a ReferenceError, because x hasn't been declared yet at this point
// 	var x = 25;
// 	console.log(x);  // outputs 25
// }
// hoist()

// This works this way because var is being used. The result would be different with let

// function hoist() {
// 	console.log(x);  // outputs ReferenceError. x cannot be accessed before initialization
// 	let x = 25;
// 	console.log(x);
// }
// hoist()

// let x = 5;

// {
//   console.log(x);
//   let x = 6;
// }
/*
If the const x = 6 declaration is not hoisted at all, then the console.log(x) statement should be able to read the x value from the upper scope, but that is not the case...

This code does not output 5, nor does it output 6! Looking at the definition of a type 3 hoisting behavior again, we can see that "the declaration of the variable causes behavior changes in its scope before the line in which it is declared." This change in behavior is such that the variable declaration "taints" the scope that it is within, causing a ReferenceError in this case.

Basically, JavaScript sees that x exists within the same scope as the console.log but it is not initialized yet; it assumes that the same-scope x is what you meant to use, but since it can't reference that value yet... ReferenceError.

It is best not to rely 
*/


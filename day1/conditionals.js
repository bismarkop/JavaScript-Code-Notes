// let num = -8

// if (num > 0) {
//     console.log("Positive!")
// } else if (num == 0) {
//     console.log("Neither. It's a zero!")
// }
// else {
//     console.log("Negative!")
// }

// if (num > 0) {
//     if (num % 2 === 0) {
//         console.log("This number is posiive and even.")
//     } else {
//         console.log ("This number is positive and odd.")
//     }
// } else {
//     console.log("The number is negative!")
// }

// let num = -40

// if (num > 0) {
//     if (num > 100) {
//         console.log("Positive and great than 100")
//     }
//     else {
//         console.log("Positive and less than 100")
//     }
// } else if (num === 0) {
//     console.log("Equal to zero")
// } else {
//     console.log("Negative")
// }

// let grade = 80

// if (grade >= 90) {
//     console.log("A")
// } else if (grade >= 80) {
//     console.log("B")
// } else if (grade >= 70) {
//     console.log("C")
// } else if (grade >= 55) {
//     console.log("D")
// } else {
//     console.log("F")
// } 

// let grade = 72
// switch (true) {
//     case (grade >= 90):
//         console.log("A")
//         break;
//     case (grade >= 80):
//         console.log("B")
//         break;
//     case (grade >= 70):
//         console.log("C")
//         break;
//     case (grade >= 55):
//         console.log("D")
//         break;
//     default:
//         console.log("Fail")
// }

// Switch Statements

// let hour = 13;
// if (hour >= 6 && hour < 12) 
//     console.log("Good morning");
// else if (hour >= 12 && hour < 18) 
//     console.log("Good afternoon");
// else 
//     console.log("Good evening");

// switch(true) {
//     case (hour >= 6 && hour < 12):
//         console.log("Good morning")
//         break;
//     case (hour >= 12 && hour < 18):
//         console.log("Good afternoon")
//         break;
//     case (hour >= 18 && hour < 24):
//         console.log("Good evening")
//     default:
//         console.log("Why are you awake?")
// }

// let x = 5;
// let y = 4;
// let operand = "*";
// switch (operand) {
//    case "+":
//        console.log(x + y);
//        break;
//    case "-":
//        console.log(x - y);
//        break;
//    case "*":
//        console.log(x * y);
//        break
//    case "/":
//        console.log(x / y);
//        break;
//    default:
//        console.log("Invalid Operand")
//        break;
// }

// Ternary Operator

// let grade = 55

// grade > 70 ? console.log("You passed!") : console.log("Sorry, you failed..")

// let x = 10;
// let isTen;

// if (x == 10) {
// 	isTen = true;
//     console.log("True")
// } else {
// 	isTen = false;
//     console.log("False")
// }

// let x = 10;
// let isTen = x == 10 ? console.log("True") : console.log("False");


// Throwing Errors - The code stops at the throw
// let x = 10;
// if (x < 0) {
// 	console.log("Negative!");
// } else {
// 	throw "Error - I don't know what I'm doing.";
// }

// console.log("Does this log?");

// Try and catch
// let x = 10;

// try {
// 	if (x < 0) {
// 		console.log("Negative!");
// 	} else {
// 		throw "Error - I don't know what I'm doing.";
// 	}
// } catch (error) {
// 	console.log(error);
// }

// console.log("Does this log?");

// let x = 10;
// let isEven;

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


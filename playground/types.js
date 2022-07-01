/* eslint-disable */
// The above line uses block comment to disable ESLint for this file.

/*
Strings are used for holding text. There are three different ways to create strings in JavaScript:

1. Single Quotes 'text'
2. Double Quotes "text"
3. Backticks `text`

- Single and double quotes are the same.
- We can use a backslash to escape a single quote if we are to use them in a string enclosed in single quotes. The same
  goes with double quotes and backticks.
- We do not need to escape a single quote if the string is enclosed in double quotes and vice-versa.
- With backticks, we can:
  - use both single and double quotes without the backslash
  - escape a backtick with a backslash to print backticks
  - have multi-line strings and maintain the line breaks inside them instead of adding backslashes at every line's end
*/
// const name = 'Paul Eliczar';
// const middle = "Galvez";
// const last = `Adraneda`;
//
// const singleQuotesInSingleQuotes = 'At world\'s end.';
// const doubleQuotesInDoubleQuotes = "The crow said, \"caw-caw\".";
// const thisIsMoreConvenient = 'Do not call that "bacon". It does not even taste close to the actual thing.';
// const backtickInBackticks = `This is full of unused \`variables\`.`;
// const multiLineString = "The quick brown fox\
// jumps over the lazy dog\
// but the dog woke up and\
// bit the bastard's tail.";
// const multiLineStringInBackticks = `Can we go back? This is the moment
// Tonight is the night, we'll fight 'til it's over
// So we put our hands up like the ceiling can't hold us.`;
// const htmlCode = `
// <div>
//   <p class="immortal-example">Hello, world!</p>
// </div>
// `;
//
// /* Concatenation and Interpolation */
//
// // Interpolation using concatenation
// const hello = "Hello, my name is" + name + ". Nice to meet you.";
//
// // Overwriting the value
// let hello2 = "Hello, my name is ";
// hello2 = hello2 + name;
// hello2 = hello2 + ". Nice to meet you.";
//
// // Using backticks
// const hello3 = `Hello, my name is ${name}. Nice to meet you.`;
//
// // We can also do expressions inside the curly braces
// // JavaScript will run whatever is inside the curly brackets in that syntax (whether it is a variable or an actual
// // statement) and it will return the value that's inside it.
// const hello4 = `Hello, my name is ${name}. Nice to meet you. I am ${6 * 6 + 1} years old.`;

// const html = `
// <div>
//   <h2>${name} ${last}</h2>
//   <p>${hello4}</p>
// </div>
// `;
//
// document.body.innerHTML = html;

// /* Numbers */
// const age = 100;
// const myLazadaDiscount = 13.02;
// // typeof is a keyword in JavaScript that allows you to check the type of a value.
// // You use it by writing typeof followed by a space and a variable or value.
// // That will tell you whether it's a number, a string, or any of the other types.
// console.log('typeof age', typeof age);
// console.log('typeof name', typeof name);
//
// // Arithmetic operations
//
// // Math operations will perform addition, multiplication, subtraction, etc. between two number types.
// console.log(1 + 1); // 2
// console.log(12 * 5); // 60
// console.log(120 / 5); // 24
// console.log(3 - 2); // 1
//
// // adding numbers and strings will result into concatenation and will return a string value.
// console.log("10" + "10"); // "1010"
// console.log(10 + "10"); // "1010"
// console.log(10 + 10); // "1010"
//
// // Doing other operations will first convert the strings into numbers before performing the operation.
// console.log("10" * "10"); // 100
// console.log('10' / 10); // 1
// console.log('15' % 4); // 3
//
// // Helper methods
//
// // Round the number up or down
// Math.round(36.4); // 36
// Math.round(36.5); // 37
// // Gives the lower number
// Math.floor(36.7); // 36
// // Gives the upper number
// Math.ceil(36.7); // 37
// // Gives a random value between 0 and 1
// Math.random();
// // modulo and power operators
// const smarties = 20;
// const kids = 3;
// let eachKidGets = smarties / kids; // 6.666666666666667
// // Using Math.floor to drop the decimal value
// eachKidGets = Math.floor(eachKidGets); // 6
// // How many smarties left?
// const dadGets = smarties % kids; // 2
//
// // 0.1 + 0.2 is NOT equal to 0.3 -> explained in https://0.30000000000000004.com
//
// // we use ** to compute for powers
// const power = 10 ** 2; // 10 to the power of 2, results to 100
// const boss = 1000 ** 20; // 1e+60
// // Infinity and negative infinity. Both are number types
// const wife = 1000 ** 200; // Infinity
// const negativeInfinity = (1000 ** 200) * -1; // -Infinity
// // NaN means "not a number". NaN is a type of "number", which is confusing since it means not a number.
// const notANumber = 10 / 'dog'

/* Objects */
// declare an empty object
const emptyObject = {};
// You may notice that the order of the properties are different when the object is printed in the browser console.
// The short and skinny is that the order doesn't matter in an object. If you need the order to matter,
// use an array or Map data structure.
const person = {
    // the following key-value pairs define the properties of the object
    name: 'Paul Eliczar',
    last: 'Adraneda',
    age: 37
};
// Accessing the properties
console.log(person.name); // dot notation
console.log(person.name);

/* Symbols */

// A quick tutorial: https://flaviocopes.com/javascript-symbols/
const illuminati = Symbol();
// Every time you invoke Symbol() we get a new and unique symbol, guaranteed to be different from all other symbols.
console.log(Symbol() === Symbol()); //false

/* Null and Undefined */

// Two ways to sort of express "nothing" in JavaScript.
// If you create a variable and don't set anything to it, it will be undefined.
// undefined is something that has been created (a variable), but has not yet been defined (given a value).
// The same thing goes for properties on an object.
let dog;
console.log(dog); // undefined

// Null is a value of nothing, whereas undefined is a variable that has not yet had a value set to it.
// you cannot use a const variable without setting a value.
let somethingUndefined;
const somethingNull = null;

const cher = {
    first: "Cher"
};
const teller = {
    first: "Raymond",
    last: "Teller"
};
teller.first = "Teller";
teller.last = null;

// cher.last -> undefined
// teller.last -> null

/* Booleans */

// Booleans are either true or false.
let isDrawing = false;

// calculation of booleans result to either true or false
const age = 18;
const ofAge = age > 19; // false since 18 is less than 19
console.log(ofAge); // false

/* Equality: =, ==, and === */

// One equal sign is used to assign values.
const sheep = 100;
// double equals (==) and triple equals (===) are used for comparison
console.log(sheep === 100); // true
console.log(sheep === 10); // false

const lamb = 100;
// === always checks that the value and type are exactly the same
console.log(sheep === lamb); // true
// == checks that the values are same but may cause unexpected type coercion
console.log("10" == 10); //true
// Condition is always false since 'string' and 'number' has no overlap.
console.log("10" === 10); //false

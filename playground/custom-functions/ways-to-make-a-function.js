console.log('It works!');
console.log('----');
console.log('Ways to define a function');

// Anonymous Functions

// Anonymous functions are only valid in some use cases, such as using them in callbacks as well as in
// an IIFE (immediately invoked function expression).

// This will produce an error:
// Uncaught SyntaxError: Function statements require a function name
/*
function(firstName) {
  return `Dr. ${firstName}`;
}
*/

// Function Expressions
// We stick the anonymous function into a variable.
// Having the ability to store a function in a variable is what leads people to say functions are
// "first-class citizens".
// console(doctorize('Elie')); // Uncaught ReferenceError: Cannot access 'doctorize' before initialization
// console.log(doctorize2('Elie'));
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// There is only one real difference which is how they operate in something called hoisting.
// Functions that are declared with the function keyword are called hoisted.
// JavaScript will take all functions with the function keyword and hoist them up to the top of the code.
// That means anywhere you call the function, it will be available to you.
// JavaScript does not hoist variable functions.
// function doctorize2(firstName) {
//   return `Dr. ${firstName}`;
// }

// Arrow Functions

// Arrow functions themselves have a few different ways of being declared. They are a newer addition to JavaScript,
// and were added in the last couple of years.
// They have a few benefits:
// - concise syntax and tend to be shorter. allow for writing one line functions
// - do not have their own scope in reference to the this keyword
// Arrow functions are also anonymous functions, which means there is no way to declare an arrow function the way we do
// a function declaration. You always have to stick it into a variable.

// A regular function
// function inchToCM(inches) {
//   return inches * 2.54;
// }

/* eslint-disable */
const inchToCM = (inches) => {
  // An explicit return is when you type the return keyword before returning a value.
  return inches * 2.54;
};

/* eslint-enable */
const lengthInInches = 3;
console.log(`Convert ${lengthInInches} inches to centimeter: ${inchToCM(lengthInInches)}`);

// An implicit return is returning it without actually having to type the keyword return. Arrow functions allow us to
// use implicit returns.
// The way we can tell this is an implicit return is that:
// - it's all on one line
// - there is no return keyword
// - there are no curly brackets
const cmToInch = cm => cm / 2.54;
const lengthInCm = 7.62;
console.log(`Convert ${lengthInCm} centimeters to inch: ${cmToInch(lengthInCm)}`);

// Another example. Convert this to an arrow function
// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;
console.log(`Add two numbers 4 and 5: ${add(4, 5)}`);
console.log(`Add two numbers 4 and 3: ${add(4)}`);

// Arrow function gotchas

// If you want to implicitly return an object in JavaScript, you just pop a set of parentheses around the thing that
// you are returning and then the code will know that it's not the block to the function.
// This is a little harder to read though.
/* eslint-disable */
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
// This is a little more readable
/* eslint-enable */
const makeAnotherBaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

// IIFE (iffy; immediately invoked function expression

// You can immediately run a function when you wrap it in a parentheses.
// Parentheses always run first in Javascript.
const cultivator = 1000;
(function (age) {
  console.log('Running the anon function');
  return `You are cool and ${age}`;
})(cultivator);

// Methods

// A method is simply a function that lives inside of an object.
console.log('log is a function or method inside the console object.');

/* eslint-disable */
const elie = {
  name: 'Elie',
  sayHi: function () {
    const heyItsMe = "Hey, it's me~";
    console.log(heyItsMe);
    return heyItsMe;
  },
  // Short hand method
  lookOutside() {
    const whatISee = "I see a cat licking its...";
    console.log(whatISee);
    return whatISee;
  },
  // Arrow function
  walkAround: () => console.log('I am walking.')
};
/* eslint-enable */
elie.sayHi();
elie.lookOutside();
elie.walkAround();

/* Callback Functions */
const button = document.querySelector('.click-me');
console.log(button);
button.addEventListener('click', elie.sayHi);

// Callback functions can be declared outside of the handler
function handleClick() {
  console.log('U-FOOOOO~!!');
}
button.addEventListener('click', handleClick);

// anonymous functions as callback
button.addEventListener('click', () => {
  console.log('I was once a cucumber.');
});

// Timer callback example
setTimeout(elie.lookOutside, 4000);

/* eslint-disable */
//anonymous function
setTimeout(function () {
  console.log('Do something.');
}, 5500);
// arrow function
setTimeout(() => console.log('...SPLASH!!!'), 7000);

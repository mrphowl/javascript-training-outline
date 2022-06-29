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
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// There is only one real difference which is how they operate in something called hoisting.

function doctorize2(firstName) {
  return `Dr. ${firstName}`;
}

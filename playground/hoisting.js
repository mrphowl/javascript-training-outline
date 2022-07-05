/* Hoisting */
// Hoisting is when variable declarations and function declarations are hoisted to the top of the file.
// Only function declaration types of functions are hoisted, not function expressions (when you put a function in
// a variable).
// Same thing goes with arrow function or any other type of function.

/* Hoisting function declarations */
/* What does this file do? */
sayHi(); // sayHi was used before it was defined. eslint(no-use-before-define)

// When you run your JavaScript file, the JavaScript compiler will take all of your function declarations and move them
// to the top of the file, so they are all available before you use them.
// Because of hoisting, you can technically run a function before it exists.

/* How does this file do it? */
function sayHi() {
  console.log('Hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

/* Variable hoisting */

console.log(age);
var age = 10; // undefined

// What above does is basically this:
var age;
console.log(age);
age = 10;

// You can use hoisting to figure out if variables are created but not what their values are later in the file.
// It is important to note that although let and const variables are hoisted, they are not initialised to undefined,
// unlike var variables. Hence, in the above example if you replace var with let or const, you would be presented with
// a ReferenceError saying - age is not defined

/* Hoisting */

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

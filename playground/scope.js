/* eslint-disable */
/* Function scoping */
const age = 100;

function go() {
  // When variables are created inside a function, those variables are only ever available inside that function.
  const hair = 'blonde';
  // You can name variables the same thing, if they are not in the same scope.
  // However, it's not a good idea because if you name a variable something that is the same as in another scope,
  // you limit yourself to being able to access that.
  const age = 200; // shadow variable
  // If we wanted to access the age = 100; from the go() function, there is no way to do that because
  // the variable has been shadowed (meaning it has been over-written).
  console.log(age); // 200
  console.log(hair); // 'blonde'
}

go();
console.log(age); // 100

/* Block Scoping */
if (1 === 1) {
  const cool = true;
}
console.log(cool); // Uncaught ReferenceError: cool is not defined

if (1 === 1) {
  let cool = true;
}
console.log(cool); // Uncaught ReferenceError: cool is not defined

if (1 === 1) {
  var cool = true;
}
console.log(cool); // Will work

// Solutions/workaround
let cool; // define the variable in the higher scope
if (1===1) {
  cool = true; // then update the value here
}
console.log(cool); // The updated value will be accessible

// two different kinds of scope
function isCool(name) {
  let cool; // function scope

  if(name === 'Elie') {
    cool = true; // block scope
  }

  console.log(cool);
  return cool;
}
// It is actually really nice to have block scope because you don't have variables leaking out of it.

/* Lexical and Static Scoping */
// the way that variable look-up or scope look-up happens, is where the functions are defined, not where they are run.
const dog = 'Snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'Sunny';
  // Because logDog is defined in the higher scope, it looks at const dog = 'Snickers' instead of const dog = 'Sunny'
  logDog();
}

go(); // Snickers

/**
 * Best Practices
 *
 * 1. Try not to create global variables
 * 2. Functions are scoped the same way as variables
 */
function sayHi(name) {
  // If you create a function inside another function, that function will only ever be available inside that. (closure)
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

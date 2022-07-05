/**
 * What is scope? Scope answers the question "where are my variables and functions available to me?".
 */
/* eslint no-console: 0 */
console.log('It works!');

/**
 * Global variables
 *
 * Global variables, when declared, will always be available anywhere in the application.
 */
const first = 'Elie';
/* eslint-disable */
let second = 'Phowl';
/**
 * `var` variables are attached to the window object and are globally scoped.
 * `const` and `let` variables when declared are globally scoped but are not attached to the window object.
 * @type {number}
 */
var age = 100;
/* eslint-enable */
/**
 * This can be called in the console like sayHi() or window.sayHi().
 * Anything that is in the global scope is attached to the window object, except for const and let variables.
 */
function sayHi() {
  console.log('hi!');
}

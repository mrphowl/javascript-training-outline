/**
 * JavaScript is able to create functions inside of functions, and it can still reach outside to the parent scope, and
 * even though the outer function is done running, it will still maintain that variable in memory so that we can then
 * access it at a later time.
 *
 * The variable is not cleaned up or "garbage collected" which is a term that is often used.
 */
/* Examples of Closures */

/* eslint no-console: 0 */

/**
 * Using closures to create private variables
 *
 * @param   string    greeting
 * @return  function
 */
function createGreeting(greeting = '') {
  // outer scope
  const myGreet = greeting.toUpperCase();

  /**
   * Return formatted greeting
   *
   * @param   string name
   * @return  string
   */
  return function (name) {
    // inner scope
    return `${myGreet} ${name}`;
  };
}

// With the function above, we can create functions that are based off whichever greeting we like.
const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('Brother Elie'));
console.log(sayHello('Mr. Phowl'));
console.log(sayHey('human'));

/**
 * Private Variables
 */
function createGame(gameName) {
  // This is the private variable. There is currently no way to access this outside.
  let score = 0;

  return function win() {
    score += 1;
    return `Your name ${gameName} score is ${score}`;
  };
}

// Whenever the game is created, it creates an empty score variable.
// Every time the inner function is run, it will increment the score variable that's in the outer scope.
// This allows to maintain multiple games at once.
const syatoGame = createGame('Syato');
console.log(syatoGame());
console.log(syatoGame());
console.log(syatoGame());
console.log(syatoGame());

const patinteroGame = createGame('Patintero');
console.log(patinteroGame());
console.log(patinteroGame());
console.log(patinteroGame());

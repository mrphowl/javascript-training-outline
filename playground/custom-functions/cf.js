// Global variable which can be accessed inside functions if they don't have a variable with the same name.
const moneyFractionDigits = 2;

// Passing parameters to a function
function calculateBill(meal, taxRate) {
  const total = meal * (1 + taxRate);
  return total;
}

function money(amount) {
  return amount.toFixed(moneyFractionDigits);
}

const taxRate = 0.13;
let myTotal = calculateBill(112, taxRate);
console.log(`Your total bill is Php${money(myTotal)}.`);

// Parameter can also be expression
// The expression is run first before passing the final value to the function.
myTotal = calculateBill(20 + 20 + 30 + 40 + 20, taxRate);
console.log(`Your total bill is Php${money(myTotal)}.`);

// Function #2 Greeter
function sayHiTo(name) {
  return `Hi, ${name}!`; // if the parameter is not passed, this will return 'Hi, undefined!'
}

const ninongMo = 'Ninong Mo';
console.log(sayHiTo(ninongMo));
document.querySelector('#person').innerHTML = sayHiTo(ninongMo);

function doctorize(name) {
  return `Dr. ${name}`;
}

console.log(doctorize('Ho'));

function yell(name) {
  return `HEY, ${name.toUpperCase()}!`;
}
// Functions sayHiTo, doctorize, and yell all use the 'name' parameter but these parameters are not the same since
// these parameters are only available within their respective functions.
console.log(yell('Jude'));

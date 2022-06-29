// Global variable which can be accessed inside functions if they don't have a variable with the same name.
const moneyFractionDigits = 2;
const taxRatePH = 0.12;

// parameters with default values
function calculateBill(meal, taxRate = taxRatePH, tipRate = 0.15) {
  const total = meal * (1 + taxRate + tipRate);
  return total;
}

function money(amount) {
  return amount.toFixed(moneyFractionDigits);
}

let myTotal = calculateBill(100);
console.log(`Your total bill is Php${money(myTotal)}.`); // Your total bill is Php127.00.

// use undefined to use the default tax rate and set the tipRate
myTotal = calculateBill(100, undefined, 0.2);
console.log(`Your total bill is Php${money(myTotal)}.`); // Your total bill is Php132.00.

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

console.log('It works!');

// Take in some arguments and return the total value:
// -how much the dinner was
// -the tax rate
// -how much you want to tip
//
// We will assume the meal is 100 Pesos, and we will multiply it by 1.12 (PH VAT = 12%)
function calculateBill() {
  // This is a function body.
  console.log("I'm in.");
  const total = 100 * 1.12;
  return total;
}

const myTotal = calculateBill();
console.log(`Your total is Php${myTotal}.`);
// Another interpolation strings - you can actually run the function from within the log statement.
// JavaScript is going to run the function first, and then whatever the return result is it will immediately
// be interpolated into that string.
console.log(`Your total is Php${calculateBill()}. Please pay the exact amount.`);

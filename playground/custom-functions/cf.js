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
  console.log('Total:', total);
}
// The variable total here will be undefined due to scoping.
// The variable total is only available inside the function calculateBill.
// We can define a variable called total here, but it will a different one.

calculateBill();

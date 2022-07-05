/* eslint no-console: 0 */
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

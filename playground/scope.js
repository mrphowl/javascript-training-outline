/* eslint no-console: 0 */
/* Function scoping */
const age = 100;

function go() {
  // When variables are created inside a function, those variables are only ever available inside that function.
  const hair = 'blonde';
}

console.log(age);
go();
console.log(hair); // throws a reference error

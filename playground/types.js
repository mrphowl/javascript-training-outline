/* eslint-disable */
// The above line uses block comment to disable ESLint for this file.

/*
Strings are used for holding text. There are three different ways to create strings in JavaScript:

1. Single Quotes 'text'
2. Double Quotes "text"
3. Backticks `text`

- Single and double quotes are the same.
- We can use a backslash to escape a single quote if we are to use them in a string enclosed in single quotes. The same
  goes with double quotes and backticks.
- We do not need to escape a single quote if the string is enclosed in double quotes and vice-versa.
- With backticks, we can:
  - use both single and double quotes without the backslash
  - escape a backtick with a backslash to print backticks
  - have multi-line strings and maintain the line breaks inside them instead of adding backslashes at every line's end
*/
const name = 'Paul Eliczar';
const middle = "Galvez";
const last = `Adraneda`;

const singleQuotesInSingleQuotes = 'At world\'s end.';
const doubleQuotesInDoubleQuotes = "The crow said, \"caw-caw\".";
const thisIsMoreConvenient = 'Do not call that "bacon". It does not even taste close to the actual thing.';
const backtickInBackticks = `This is full of unused \`variables\`.`;
const multiLineString = "The quick brown fox\
jumps over the lazy dog\
but the dog woke up and\
bit the bastard's tail.";
const multiLineStringInBackticks = `Can we go back? This is the moment
Tonight is the night, we'll fight 'til it's over
So we put our hands up like the ceiling can't hold us.`;
const htmlCode = `
<div>
  <p class="immortal-example">Hello, world!</p>
</div>
`;

/* Concatenation and Interpolation */

// Interpolation using concatenation
const hello = "Hello, my name is" + name + ". Nice to meet you.";

// Overwriting the value
let hello2 = "Hello, my name is ";
hello2 = hello2 + name;
hello2 = hello2 + ". Nice to meet you.";

// Using backticks
const hello3 = `Hello, my name is ${name}. Nice to meet you.`;

// We can also do expressions inside the curly braces
// JavaScript will run whatever is inside the curly brackets in that syntax (whether it is a variable or an actual
// statement) and it will return the value that's inside it.
const hello4 = `Hello, my name is ${name}. Nice to meet you. I am ${6 * 6 + 1} years old.`;

const html = `
<div>
  <h2>${name} ${last}</h2>
  <p>${hello4}</p>
</div>
`;

document.body.innerHTML = html;

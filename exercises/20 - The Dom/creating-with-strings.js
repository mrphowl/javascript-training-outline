/**
 * HTML From Strings
 */
/* eslint no-console:0 */

// innerHTML as getter
const item = document.querySelector('.item');
console.log('--get item.innerHTML', item.innerHTML);

// innerHTML as setter
const chat = document.querySelector('.chat');
chat.innerHTML = `<h1>Hey! How are you?</h1>`;
// If the string it is valid HTML, the browser will take the string, parse it and turn it into all the items.
console.log('--set item.innerHTML', chat.innerHTML);

// with interpolation
const src = `https://picsum.photos/200`;
const desc = 'Cute pup';
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// Create a range.
// A range is essentially a collection of elements or part of HTML that we can then work with.
let myFragment = document.createRange();
console.log('--myFragment', myFragment);

// We can call another method directly on document.createRange() called .createContextualFragment();
// which takes in a string as a parameter
myFragment = document.createRange().createContextualFragment(myHTML); // document fragment
console.log('--myFragment-myHTML', myFragment.querySelector('img'));

// insertAdjacentElement wouldn't accept document fragments as element
// https://stackoverflow.com/a/61576091
for (const element of myFragment.children) {
  item.insertAdjacentElement('beforeend', element);
}

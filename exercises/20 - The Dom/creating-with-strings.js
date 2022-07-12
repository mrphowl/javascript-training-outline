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
let src = `https://picsum.photos/200`;
let desc = 'Cute pup';
let myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;
item.innerHTML = myHTML;

// One of the downsides to using this method to insert HTML is that the contents of
// the myHTML variable are not elements, they are just strings.
const width = 500;
src = `https://picsum.photos/${width}`;
desc = 'Cute pup';
myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;
item.innerHTML = myHTML;
// myHTML only becomes an actual element once it is dumped into the DOM by setting the innerHTML.
// It is not possible to do things like add event listeners, add to the classList, or change any attributes,
// like title or alt or src.
console.log('--typeof myHTML', typeof myHTML);

// Once it's in the DOM, it will have to be pulled out.
const itemImage = document.querySelector('.wrapper img');
itemImage.classList.add('round');

/**
 * JS-202: Events and Triggers
 */

/* Attach and event listener to an element */
const butts = document.querySelector('.butts');

function handleClick() {
  console.log('IT GOT CLICKED!');
}

// This is called "binding" - taking a function and listening for a specific event within an element.
butts.addEventListener('click', handleClick);

const coolButton = document.querySelector('.cool');

coolButton.addEventListener('click', handleClick);

/* Remove an event listener from an element */

// This is called "unbinding"
coolButton.removeEventListener('click', handleClick);

// Adding an event listener with an arrow function
const hoola = () => console.log('HOOORAY!!');

coolButton.addEventListener('click', hoola);

/* Listening to events on multiple elements */

const buyItem = evt => console.log(`BUY ITEM ${evt.currentTarget.dataset.item}`);
const buyButtons = document.querySelectorAll('button.buy');
// Bind an event listener to all button.buy
// The same method can be done to unbind the event listeners
buyButtons.forEach(buyButton => {
  buyButton.addEventListener('click', buyItem);
});

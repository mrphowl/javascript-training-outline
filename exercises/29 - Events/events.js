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
const buyButtons = document.querySelectorAll('button.buy');

function handleByButtonClick(event) {
  const price = parseFloat(event.target.dataset.price).toFixed(2);
  console.log(`You are buying Item ${event.target.dataset.item} for ${price}`);

  console.log('--event.target', event.target);
  console.log('--event.currentTarget', event.currentTarget);
  console.log(event.target === event.currentTarget);
}

buyButtons.forEach(buyButton => buyButton.addEventListener('click', handleByButtonClick));

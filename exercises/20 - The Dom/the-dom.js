/**
 * JS-201: The DOM
 */
/* eslint no-console: 0 */
/**
 * If this script is loaded in the <head> tag, the script above will not work since the Javascript is being loaded and
 * run before the HTML or the actual elements are created.
 *
 * One way around this is to load the Javascript before the closing <body> tag. (see index.html)
 *
 * Another way is to put all the js code inside a function, and then add an event listener that listens for
 * the DOM content loaded event and runs the init() function below. With this, we can move the script src back inside
 * the <head> tag.
 */
function init() {
  const p = document.querySelector('p'); // select a <p> element
  console.log('--init', p);
}
document.addEventListener('DOMContentLoaded', init);

/**
 * querySelector() and querySelectorAll() both take one argument, which is the CSS selector.
 */
const firstP = document.querySelector('p'); // the first matching p element
const divs = document.querySelectorAll('div'); // array of div elements
const item2 = document.querySelector('.item2'); // the div that has the class 'item2'

console.log('firstP', firstP);
console.log('divs', divs);
console.log('item2', item2);

/**
 * Searching inside already selected elements
 *
 * If you ever need to narrow down your focus as to where you are searching, you can do that in your selector, but
 * you can also run querySelector() and querySelectorAll() on any other element and only search within it to limit
 * the scope.
 */
const item2p = item2.querySelector('p');

console.log('--item2p', item2p);

/**
 * Element properties and methods
 */
const h2 = document.querySelector('h2');
console.log('--h2');
// console.dir() shows the object properties instead of the actual element itself.
console.dir(h2);

/**
 * Getters and setters
 */
const heading = document.querySelector('h2');
console.log('--heading');
console.dir(heading.textContent); // example of a getter

// heading.textContent = 'Diablo Immortal'; // example of a setter

/**
 * textContent and innerText
 *
 * textContent and innerText are very similar properties, textContent is the newer one.
 *
 * The only difference is that innerText returns only the human-readable content whereas textContent will get
 * the contents of all the elements, including script and style elements.
 */
console.log('--textContent', heading.textContent); // using Chrome, the <style> tags were not included?
console.log('--innerText', heading.innerText);

/**
 * Creating HTML
 *
 * MDN Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 */
/* eslint no-console: 0 */

// Create a paragraph element, set the inner text as 'I am a p!', add the class 'special'.
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p!';
myParagraph.classList.add('special');
console.log('--myParagraph', myParagraph);

// Create an image element
const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Noice photo';
console.log('--myImage', myImage);

// A div with a class of 'wrapper'
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log('--myDiv', myDiv);

/**
 * Adding the elements to the page with .appendChild()
 *
 * MDN reference: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 *
 * You may come across the .append() method when searching for how to add an element to the DOM, which works very
 * similarly to createElement. However, append() doesn't seem to be fully supported in Internet Explorer
 */
// It is better to add elements from inner to outer element to minimize repaints in the browser
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

/**
 * Adding the elements to the page with .insertAdjacentElement()
 *
 * insertAdjacentElement is used to insert elements before, after and inside other elements.
 *
 * MDN reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
 */
// Create a heading
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
// Insert the heading before the paragraph and the image tag
myDiv.insertAdjacentElement('afterbegin', heading);

/* Generating An Unordered List */
const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'One';
const li2 = li.cloneNode(true);
li2.textContent = 'Two';
const li3 = li.cloneNode(true);
li3.textContent = 'Three';
const li4 = li.cloneNode(true);
li4.textContent = 'Four';
const li5 = li.cloneNode(true);
li5.textContent = 'Five';

// Add the list items
list.appendChild(li3); // Three
list.appendChild(li5); // Five
list.insertAdjacentElement('afterbegin', li); // One
li5.insertAdjacentElement('beforebegin', li4); // Four
li.insertAdjacentElement('afterend', li2); // Two
myDiv.insertAdjacentElement('beforeend', list);

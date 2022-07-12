/**
 * Traversing And Removing Nodes
 *
 * Traversing means going up, down, over, etc. When you have an element,
 * you often need to select an element based on its position.
 */
/* eslint no-console: 0 */
const wes = document.querySelector('.wes');
console.log('--wes', wes);
console.log('--wes-children', wes.children);
// Everything in NodeList is a Node. If it's wrapped in a tag, it is also an element,
// but it doesn't work the other way around.
// If you only select elements, you won't have nodes returned.
// But if you select the nodes, you get all the three different pieces.
console.log('--wes-child-nodes', wes.childNodes);

/**
 * Properties to work with Nodes and Elements
 */
console.log('--wes-first-element-child', wes.firstElementChild);
console.log('--wes-last-element-child', wes.lastElementChild);
console.log('--wes-previous-element-sibling', wes.previousElementSibling);
console.log('--wes-next-element-sibling', wes.nextElementSibling);
console.log('--wes-parent-element', wes.parentElement);
console.log('--wes-child-node', wes.childNodes);

/**
 * Removing elements
 *
 * Use the remove() method to remove the element completely from the DOM.
 *
 * Although when an element is removed from the DOM, if you still have any reference to that element in your Javascript,
 * then it means we still have access to that element and still be able to add it back.
 */
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();

console.log('--p-removed', p); // still here

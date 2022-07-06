/**
 * JS-201: The DOM
 */
/* eslint no-console: 0 */
/**
 * If this script is loaded in the <head> tag, the script above will not work since the Javascript is being loaded and
 * run before the HTML or the actual elements are created.
 *
 * One way around this is to load the Javascript before the closing <body> tag. (see index.html)
 */
const p = document.querySelector('p');
console.log(p);

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
  const p = document.querySelector('p');
  console.log(p);
}
document.addEventListener('DOMContentLoaded', init);

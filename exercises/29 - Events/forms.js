/**
 * Prevent Default and Form Events
 */
console.log('It works!');
const wes = document.querySelector('.wes');

wes.addEventListener('click', event => {
  event.preventDefault();

  /* eslint no-restricted-globals: 0 */
  const shouldChangePage = confirm('This website might be malicious! Do you wish to proceed?');
  /* eslint no-restricted-globals: 1 */

  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
  // Alternately, we can just call preventDefault when shouldChangePage is false.
  // if (!shouldChangePage) {
  //   event.preventDefault();
  // }

  console.log(shouldChangePage);
});

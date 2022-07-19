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

const signupFrom = document.querySelector('[name=signup]');

signupFrom.addEventListener('submit', event => {
  console.log(event);
  console.log('--name', event.currentTarget.name.value);
  console.log('--email', event.currentTarget.email.value);
  console.log('--agree', event.currentTarget.agree.checked);
  // event.preventDefault();

  const name = event.currentTarget.name.value.toLowerCase();
  // Note: includes is case-sensitive!
  if (name.includes('chad')) {
    alert('Sorry, Bro');
    event.preventDefault();
  }
});

/**
 * Log event types
 *
 * @param object event
 */
function logEvent(event) {
  console.count(event.type);
  console.log(event.currentTarget.value);
}

// log the key pressed
signupFrom.name.addEventListener('keyup', logEvent);
// log the value
signupFrom.name.addEventListener('keydown', logEvent);
// log when the cursor goes to the field
signupFrom.name.addEventListener('focus', logEvent);
// log when the cursor leaves the field
signupFrom.name.addEventListener('blur', logEvent);

/**
 * Accessibility Gotchas and Keyboard Codes
 */
const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('you clicked the photo');
  }
}

['click', 'keyup'].forEach(event => {
  photo.addEventListener(event, handlePhotoClick);
});

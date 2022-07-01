/* eslint-disable */
const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods
function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('log');
  console.warn('warn');
  console.error('error');
  console.groupEnd('Doing some stuff');
}
// Callstack
function bootstrap() {
  go();
}
// bootstrap();
// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  // console.count() is based on what strings you pass it
  // console.count(`running doctorize for ${name}`); // Counts separately for each name
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

/* eslint-enable */
document.querySelector('#joke').addEventListener('click', async () => {
  document.querySelector('.joke').innerHTML = await fetchDadJoke();
});

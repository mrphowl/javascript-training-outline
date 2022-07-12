/* eslint no-console: 0 */
// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.insertAdjacentElement('afterbegin', div);
// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
const li2 = li1.cloneNode();
li2.textContent = 'two';
const li3 = li1.cloneNode();
li3.textContent = 'three';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
// put that list into the above wrapper
div.appendChild(ul);
// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/300';
// set the width to 250
img.width = 300;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside it
const strDiv = `<div>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>;`;
const newDiv = document.createRange().createContextualFragment(strDiv);
// put this div before the unordered list from above
for (const e of newDiv.children) {
  div.insertAdjacentElement('afterbegin', e);
}
// add a class to the second paragraph called warning
document.querySelector('.wrapper div').children[1].classList.add('warning');
// remove the first paragraph
document.querySelector('.wrapper div').children[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const generatePlayerCard = (name, age, height) => {
  function dogYears(humanAge) {
    if (humanAge > 24) {
      return (humanAge - 24) * 5 + 2;
    }
    if (humanAge <= 24 && humanAge > 15) return 2; // +9 years
    return 1;
  }
  const ageInDogYears = dogYears(age);
  const title = `${name.toUpperCase()} - ${age}`;
  const description = `They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!`;

  return function card() {
    const cards = document.createElement('div');
    cards.classList.add('playerCard');
    const cardHeading = document.createElement('h2');
    cardHeading.textContent = title;
    const cardBody = document.createElement('p');
    cardBody.textContent = description;
    const cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.name = 'delete';
    cardDeleteBtn.textContent = 'Remove';
    cardDeleteBtn.classList.add('btn-delete');
    cards.appendChild(cardHeading);
    cards.appendChild(cardBody);
    cards.appendChild(cardDeleteBtn);
    return cards;
  };
};

// make a new div with a class of cards
const cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards');
// make 4 player cards using generatePlayerCard
const players = [
  {
    name: 'Shannon',
    age: 10,
    height: 150,
  },
  {
    name: 'Coleen',
    age: 18,
    height: 165,
  },
  {
    name: 'Elucia',
    age: 25,
    height: 177,
  },
  {
    name: 'Cassey',
    age: 32,
    height: 185,
  },
];

players.forEach(player => {
  const playerCard = generatePlayerCard(...Object.values(player));
  // append those cards to the div
  cardsContainer.appendChild(playerCard());
});
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cardsContainer);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButtons = document.querySelectorAll('.playerCard > .btn-delete');
// make out delete function
function deleteCard() {
  this.parentElement.remove();
}
// loop over them and attach a listener
deleteButtons.forEach(button => {
  button.addEventListener('click', deleteCard);
});

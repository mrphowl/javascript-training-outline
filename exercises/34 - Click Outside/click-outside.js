/**
 * JS-202: Events and Triggers - Click Outside Modal
 */
console.log('It works!');

const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  modalInner.innerHTML = `
	<img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${name}" />
	<p>${desc}</p>
	`;

  modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', event => {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

// prevent the modal from closing when the user clicks anything on the inner modal.
// modalInner.addEventListener('click', event => {
//   event.stopPropagation();
// });

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});

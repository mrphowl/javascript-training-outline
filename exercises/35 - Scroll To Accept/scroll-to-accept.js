/**
 * JS-202: Events And Triggers - Scroll Events and Intersection Observer
 */
function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');

  if (!terms) {
    return;
  }

  terms.addEventListener('scroll', e => {
    console.log(e.currentTarget.scrollTop);
    console.log(e.currentTarget.scrollHeight);
  });
}

scrollToAccept();

/**
 * JS-202: Events And Triggers - Scroll Events and Intersection Observer
 */
const button = document.querySelector('.accept');
function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');

  if (!terms) {
    return;
  }

  function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      // stop observing the button
      ob.unobserve(terms.lastElementChild);
    }
  }

  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);

  // terms.addEventListener('scroll', e => {
  //   console.log(e.currentTarget.scrollTop);
  //   console.log(e.currentTarget.scrollHeight);
  // });
}

scrollToAccept();

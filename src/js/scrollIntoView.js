'use strict';

// Scroll Into View
const btnScrollTo = document.querySelector('.header__move-btn');
const sectionFeatures = document.querySelector('.section-features');

btnScrollTo.addEventListener('click', () => {
  sectionFeatures.scrollIntoView({ behavior: 'smooth' });
});

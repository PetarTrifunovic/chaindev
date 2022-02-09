'use strict';

//Sticky Nav
const sticky = document.getElementById('sticky');
const navbar = document.querySelector('.navbar');

export const initialCoords = sticky.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) {
    navbar.classList.add('navbar__sticky');
  } else {
    navbar.classList.remove('navbar__sticky');
  }
});

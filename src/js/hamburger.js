'use strict';

//Hamburger Menu
const hamburgerIcon = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

hamburgerIcon.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  hamburgerIcon.classList.toggle('hamburger-menu__change');
  overlay.classList.toggle('visible');
});

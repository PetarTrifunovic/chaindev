'use strict';

//Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 5,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});

'use strict';
const btnCopy = document.querySelectorAll('.btn-copy');
const btnStopFollowing = document.querySelectorAll('.btn-stop-following');
const btnFollow = document.querySelectorAll('.card__follow-btn');
const popupClose = document.querySelectorAll('.popup__close');
const popupOverlay = document.querySelectorAll('.popup__overlay');
const popupCopy = document.querySelector('.popup__copy');
const popupStopFollowing = document.querySelector('.popup__stop-following');
const popupFollow = document.querySelector('.popup__follow');

// Copy
btnCopy.forEach(btn => {
  btn.addEventListener('click', () => {
    popupCopy.classList.add('popup__visible');
  });

  btn.addEventListener('click', () => {
    popupOverlay.classList.add('popup__overlay--visible');
  });

  popupClose.forEach(el => {
    el.addEventListener('click', () => {
      popupCopy.classList.remove('popup__visible');
    });
  });

  popupOverlay.forEach(el => {
    el.addEventListener('click', () => {
      popupCopy.classList.remove('popup__visible');
    });
  });
});

// Stop Following
btnStopFollowing.forEach(btn => {
  btn.addEventListener('click', () => {
    popupStopFollowing.classList.add('popup__visible');
  });

  btn.addEventListener('click', () => {
    popupOverlay.classList.add('popup__overlay--visible');
  });

  popupClose.forEach(el => {
    el.addEventListener('click', () => {
      popupStopFollowing.classList.remove('popup__visible');
    });
  });

  popupOverlay.forEach(el => {
    el.addEventListener('click', () => {
      popupStopFollowing.classList.remove('popup__visible');
    });
  });
});

// Follow
btnFollow.forEach(btn => {
  btn.addEventListener('click', () => {
    popupFollow.classList.add('popup__visible');
  });

  btn.addEventListener('click', () => {
    popupOverlay.classList.add('popup__overlay--visible');
  });

  popupClose.forEach(el => {
    el.addEventListener('click', () => {
      popupFollow.classList.remove('popup__visible');
    });
  });

  popupOverlay.forEach(el => {
    el.addEventListener('click', () => {
      popupFollow.classList.remove('popup__visible');
    });
  });
});

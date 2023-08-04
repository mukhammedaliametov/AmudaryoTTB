'use strict'

const navEl = document.querySelector('.navigation');
const buttonEl = document.querySelector('.hamburger');

buttonEl.addEventListener('click', () => {
  navEl.classList.toggle('active');
  buttonEl.classList.toggle('active');
})

'use strict'

const navEl = document.querySelector('.navigation');
const buttonEl = document.querySelector('.hamburger');
const headerEl = document.querySelector('.second-header')

buttonEl.addEventListener('click', () => {
  navEl.classList.toggle('active');
  buttonEl.classList.toggle('active');
});

window.onscroll = function () { myFunction() };
var sticky = headerEl.offsetTop;

function myFunction() {
  if (window.scrollY >= 1) {
    headerEl.classList.add("sticky");
  } else {
    headerEl.classList.remove("sticky");
  }
}

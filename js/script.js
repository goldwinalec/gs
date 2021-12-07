'use strict';

////////////////////////////////////////////
// Slider

const stepsSwiper = new Swiper('.swiper', {
  lazy: true,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

const feedbackSwiper = new Swiper('.feedback__swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.feedback-button-next',
    prevEl: '.feedback-button-prev',
  },
});

////////////////////////////////////////////
// FAQ section
const container = document.querySelector('.faq__items');
const accordion = new Accordion(container, {
  openOnInit: [2],
});

const buttons = container.querySelectorAll('.faq__btn--mobile');
[...buttons].map((button, idx) => {
  button.addEventListener('click', () => accordion.close(idx));
});

////////////////////////////////////////////
// Modal windows

const html = document.querySelector('html');
const overlay = document.querySelector('.overlay');
const btnsOpenLogin = document.querySelectorAll('#login');
const btnsOpenRegister = document.querySelectorAll('#register');
const btnOpenFeedback = document.querySelector('#feedback-btn');
const btnOpenPassword = document.querySelector('#password');
const btnsClose = document.querySelectorAll('.close__btn');
const btnsSeePass = document.querySelectorAll('.see-password');
const btnsHidePass = document.querySelectorAll('.hide-password');
const inputsPass = document.querySelectorAll('.form__input--password');
const modalWrapper = document.querySelector('.modal');
const modalLogin = document.querySelector('.modal__login');
const modalRegister = document.querySelector('.modal__register');
const modalFeedback = document.querySelector('.modal__feedback');
const modalPassword = document.querySelector('.modal__password');

const closeModal = function () {
  modalWrapper.classList.remove('modal--visible');
  const modals = [...modalWrapper.children];
  modals.forEach((modal) => {
    modal.classList.remove('modal--visible');
  });
  html.classList.remove('page--disabled');
  overlay.classList.remove('overlay--visible');
  inputsPass.forEach((input) => input.setAttribute('type', 'password'));
  btnsSeePass.forEach((btnHide) => btnHide.classList.remove('hidden'));
  btnsHidePass.forEach((btnHide) => btnHide.classList.add('hidden'));
};

const openModal = function () {
  overlay.classList.add('overlay--visible');
  modalWrapper.classList.add('modal--visible');
  html.classList.add('page--disabled');
};

btnsOpenLogin.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
    openModal();
    modalLogin.classList.add('modal--visible');
  });
});

btnsOpenRegister.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
    modalRegister.classList.add('modal--visible');
  });
});

btnOpenPassword.addEventListener('click', function (e) {
  e.preventDefault();
  closeModal();
  openModal();
  modalPassword.classList.add('modal--visible');
});

btnOpenFeedback.addEventListener('click', function (e) {
  e.preventDefault();
  openModal();
  modalFeedback.classList.add('modal--visible');
});

overlay.addEventListener('click', function (e) {
  e.preventDefault();
  closeModal();
});

btnsClose.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

btnsHidePass.forEach((btnHide) => btnHide.classList.add('hidden'));

btnsSeePass.forEach((btn) => {
  btn.addEventListener('click', function () {
    inputsPass.forEach((input) => input.setAttribute('type', 'text'));
    btn.classList.add('hidden');
    btnsHidePass.forEach((btnHide) => btnHide.classList.remove('hidden'));
  });
  btnsHidePass.forEach((btn) => {
    btn.addEventListener('click', function () {
      inputsPass.forEach((input) => input.setAttribute('type', 'password'));
      btn.classList.add('hidden');
      btnsSeePass.forEach((btnHide) => btnHide.classList.remove('hidden'));
    });
  });
});

////////////////////////////////////////////
// Anchors
document.querySelectorAll('.header__link').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

////////////////////////////////////////////
// Mobile slider
let possibs;

const enableSwiper = function () {
  possibs = new Swiper('.possibs__swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    navigation: {
      nextEl: '.possibs__btn-next',
      prevEl: '.possibs__btn-prev',
    },
  });
};

window.addEventListener('resize', function () {
  if (window.screen.width <= 769) {
    enableSwiper();
  }
});
window.addEventListener('load', function () {
  if (window.screen.width <= 769) {
    enableSwiper();
  }
});

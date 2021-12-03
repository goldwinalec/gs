'use strict';

const swiper = new Swiper('.swiper', {
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

new Accordion('.faq__items', {
  openOnInit: [2],
});

const html = document.querySelector('html');
const overlay = document.querySelector('.overlay');
const btnsOpenLogin = document.querySelectorAll('#login');
const btnsOpenRegister = document.querySelectorAll('#register');
const btnOpenFeedback = document.querySelector('#feedback-btn');
const btnOpenPassword = document.querySelector('#password');
const btnsClose = document.querySelectorAll('.close__btn');
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

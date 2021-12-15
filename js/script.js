'use strict';

////////////////////////////////////////////
// Slider

const stepsSwiper = new Swiper('.swiper', {
  lazy: true,
  loop: true,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
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
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
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
const btnsOpenFeedback = document.querySelectorAll('#feedback-btn');
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
  toggleLine.forEach((line) =>
    line.classList.remove('header__mobile-line--active')
  );
  headerLine.classList.remove('header__line-mobile--visible');
  headerLogo.classList.remove('header__logo--invisible');
  menuLogo.classList.remove('header__logo-menu--visible');
  headerNav.classList.remove('header__nav--visible');
  btnGroup.classList.remove('header__btn-group--visible');
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

btnsOpenFeedback.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
    modalFeedback.classList.add('modal--visible');
  });
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
    effect: 'slide',
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

//////////////////////////////////////
// Mobile menu
const toggleNav = document.querySelector('.header__mobile-btn');
const toggleLine = document.querySelectorAll('.header__mobile-line');
const headerNav = document.querySelector('.header__nav');
const headerLine = document.querySelector('.header__line-mobile');
const headerLogo = document.querySelector('.header__logo');
const menuLogo = document.querySelector('.header__logo-menu');
const navLink = document.querySelectorAll('.header__link');
const btnGroup = document.querySelector('.header__btn-group');
const btns = document.querySelectorAll('header__btn');

toggleNav.addEventListener('click', function () {
  toggleLine.forEach((line) =>
    line.classList.toggle('header__mobile-line--active')
  );
  headerLine.classList.toggle('header__line-mobile--visible');
  headerNav.classList.toggle('header__nav--visible');
  headerLogo.classList.toggle('header__logo--invisible');
  menuLogo.classList.toggle('header__logo-menu--visible');
  btnGroup.classList.toggle('header__btn-group--visible');
  html.classList.toggle('page--disabled');
});

navLink.forEach((link) => {
  link.addEventListener('click', function () {
    toggleLine.forEach((line) =>
      line.classList.remove('header__mobile-line--active')
    );
    headerLine.classList.remove('header__line-mobile--visible');
    headerLogo.classList.remove('header__logo--invisible');
    menuLogo.classList.remove('header__logo-menu--visible');
    headerNav.classList.remove('header__nav--visible');
    btnGroup.classList.remove('header__btn-group--visible');
    html.classList.remove('page--disabled');
  });
});

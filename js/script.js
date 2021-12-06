'use strict';

////////////////////////////////////////////
// Slider

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

////////////////////////////////////////////
// FAQ section

new Accordion('.faq__items', {
  openOnInit: [2],
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
// Check Instagram account
// const checkForm = document.querySelector('.check__form');
// const checkInput = document.querySelector('.check__input');
// const checkLabel = document.querySelector('.check__label');
// const tagsWrapper = document.querySelector('.tags__list');
// const items = [...document.querySelectorAll('.found__item')];
// const resultWrapper = document.querySelector('.check__results-wrapper');
// const error = document.querySelector('.check__result--error');
// const searching = document.querySelector('.check__result--searching');
// const found = document.querySelector('.check__result--found');
// const gettingData = document.querySelector('.check__process');
// const doneSearching = document.querySelector('.check__inner--done');
// const btnsChoose = document.querySelectorAll('.found__btn');
// const btnStart = document.querySelector('.check__info-btn');
// const checkBtn = document.querySelector('.check__btn');

// const hideResults = function () {
//   searching.classList.remove('check__result--visible');
//   found.classList.remove('check__result--visible');
//   error.classList.remove('check__result--visible');
//   resultWrapper.classList.remove('check__results-wrapper--visible');
//   checkBtn.disabled = true;
// };

// checkForm.addEventListener('submit', function (e) {
//   e.preventDefault();
// });

// checkInput.addEventListener('keyup', function (e) {
//   hideResults();
//   if (checkInput.value.length > 2) {
//     searching.classList.add('check__result--visible');
//     resultWrapper.classList.add('check__results-wrapper--visible');
//     // setTimeout(function () {
//     //   error.classList.add('check__result--visible');
//     //   searching.classList.remove('check__result--visible');
//     // }, 1000);

//     setTimeout(function () {
//       found.classList.add('check__result--visible');
//       searching.classList.remove('check__result--visible');

//       btnsChoose.forEach((btn) => {
//         const onMouseOut = function () {
//           btn.textContent = 'Добавлен';
//         };

//         const onMouseOver = function () {
//           btn.textContent = 'Удалить';
//           btn.addEventListener('mouseout', onMouseOut);
//         };

//         const deleteAccount = function () {
//           btn.parentElement.classList.remove('found__item--add');
//           btn.textContent = 'Выбрать';
//           if (!tagsWrapper.firstChild) checkBtn.disabled = true;

//           btn.removeEventListener('mouseenter', onMouseOver);
//           btn.removeEventListener('mouseout', onMouseOut);
//           btn.removeEventListener('click', deleteAccount);
//         };

//         btn.addEventListener('click', function (e) {
//           e.preventDefault();
//           btn.parentElement.classList.add('found__item--add');

//           if (btn.parentElement.classList.contains('found__item--add')) {
//             const id = (Date.now() + '').slice(-10);
//             console.log(id);
//             const name =
//               btn.previousSibling.previousSibling.innerText.split('\n');
//             const html = `<li class="tags__item id="${id}">${name[0]}<span id="${id}" class="tags__btn"><img src="/images/close-tag.svg" alt=""></span></li>`;
//             btn.id = id;
//             tagsWrapper.insertAdjacentHTML('beforeEnd', html);

//             btn.textContent = 'Добавлен';
//             btn.addEventListener('mouseenter', onMouseOver);

//             const deleteTagBtns = [...document.querySelectorAll('.tags__btn')];
//             deleteTagBtns.forEach((tag) => {
//               tag.addEventListener('click', function () {
//                 tag.parentElement.remove();
//                 if (!tagsWrapper.firstChild) {
//                   hideResults();
//                   items.forEach((item) => {
//                     item.classList.remove('found__item--add');
//                   });
//                   deleteAccount();
//                 }
//                 btnsChoose.forEach((btn) => {
//                   btn.textContent = 'Выбрать';
//                 });
//               });
//             });
//             checkInput.value = '';
//             checkInput.placeholder = '';
//             if (tagsWrapper.firstChild) checkBtn.disabled = false;
//             if (!tagsWrapper.firstChild) {
//               hideResults();
//               items.forEach((item) => {
//                 item.classList.remove('found__item--add');
//               });
//               deleteAccount();
//             }
//             btn.addEventListener('click', deleteAccount);
//           } else {
//             btn.textContent = 'Выбрать';
//             btn.removeEventListener('mouseenter', onMouseOver);
//             btn.removeEventListener('mouseout', onMouseOut);
//           }
//         });
//       });
//     }, 1000);
//   } else {
//     hideResults();
//   }
// });

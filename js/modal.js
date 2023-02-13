// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//     body: document.querySelector('body'), //add no scroll while modal is open
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal(e) {
//     console.log(e.currentTarget);
//     refs.modal.classList.toggle('backdrop--is-hidden');
//     refs.body.classList.toggle('no-scroll'); //add no scroll while modal is open
//   }
// })();

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'), //add no scroll while modal is open
  input: document.querySelector('.order-form__input'),
  inputCheck: document.querySelector('.order-form__check-input'),
  btnSubmit: document.querySelector('.order-form__btn'),
  form: document.querySelector('.order-form'),
};

// Функція для закриття (додається клас backdrop--is-hidden)
function closeModal() {
  refs.modal.classList.add('backdrop--is-hidden');
}

function onOpenModalClick(e) {
  e.preventDefault();
  refs.modal.classList.remove('backdrop--is-hidden');

  // Якщо форма відкрита додаємо слухачі на закриття з кнопки, по кліку на бекдропі, по кліку на кнопці закриття
  document.addEventListener('keydown', closeModalByKeyboard);
  refs.modal.addEventListener('click', onBackdropClick);
  refs.closeModalBtn.addEventListener('click', onCloseModalClick);
}

function onCloseModalClick() {
  closeModal();
}

function onBackdropClick(e) {
  if (e.target === refs.modal) {
    closeModal();
  }
}

function closeModalByKeyboard(e) {
  if (e.code === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', closeModalByKeyboard);
  }
}

refs.openModalBtn.addEventListener('click', onOpenModalClick);

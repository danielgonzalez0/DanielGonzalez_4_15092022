function editNav() {
  const x = document.getElementById('myTopnav');
  const y = document.querySelector('.main-navbar-container');
  if (x.className === 'topnav' && window.innerWidth < 875) {
    x.className += ' responsive';
    y.classList.add('menuactive');
  } else {
    x.className = 'topnav';
    y.classList.replace('menuactive', 'menuinactive');
    setTimeout(() => {
      y.classList.remove('menuinactive');
    }, 500);
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalContent = document.querySelector('.content');
const fields = document.querySelectorAll('input[required], #checkbox1');

// launch modal form
function launchModal() {
  modalContent.classList.remove('modalClosed');
  modalbg.classList.remove('select-hide');
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// -------------- Close modal form ----------------
// variable declaration
const modalCross = document.querySelector('.close');

/**
 * close modal form
 */
function closeModal() {
  modalContent.classList.add('modalClosed');
  setTimeout(() => {
    modalbg.classList.add('select-hide');
    successMessage.classList.replace('success-show', 'select-hide');
    fields.forEach((field) => {
      removeErrorMessage(field);
    });
    inputCheckbox1.checked = true;
  }, 750);
}
// catch user event & setting up interactions
modalCross.addEventListener('click', closeModal);
// ------------end  Close modal form -----------

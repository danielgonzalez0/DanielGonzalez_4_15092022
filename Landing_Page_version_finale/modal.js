function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalContent = document.querySelector('.content');
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalContent.classList.remove('modalClosed');
  modalbg.classList.remove('bground-closed');
}

//-------------- Close modal form ----------------//

//variable declaration
const modalCross = document.querySelector('.close');

//catch user event & setting up interactions
modalCross.addEventListener('click', closeModal);

/**
 * function => close modal form
 */
function closeModal() {
  modalContent.classList.add('modalClosed');
  setTimeout(function () {
    modalbg.classList.add('bground-closed');
  }, 750);
}
//------------end  Close modal form -----------//

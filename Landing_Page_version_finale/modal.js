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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

//code added by Daniel Gonzalez (september 2022)

//----------------- Close modal form --------------------//

//variable declaration
const modalCross = document.querySelector('.close');

//catch user event & setting up interactions
modalCross.addEventListener('click', closeModal);

// function => close modal form
function closeModal() {
  modalbg.style.display = 'none';

  //-----------------end  Close modal form --------------//
}

//end code added by Daniel Gonzalez

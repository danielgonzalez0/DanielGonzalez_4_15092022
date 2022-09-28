//DOM Elements Selection
const contactForm = document.getElementById('frmContact');
const successMessage = document.querySelector('.succes-confirmation');
console.log(contactForm);

//event listener

// on form submit
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

/**
 * function validate => show success message on form submit
 */

function validate() {
  successMessage.classList.replace('select-hide', 'success-show');
  console.log(successMessage);
  console.log(contactForm);
}

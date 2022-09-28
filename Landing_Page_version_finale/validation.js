//DOM Elements Selection
const contactForm = document.getElementById('frmContact');
const successMessage = document.querySelector('.succes-confirmation');
const fields = document.querySelectorAll('input[required]');
console.log(fields);

//event listener & step process

// -----on form submit--------
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); //submit behavior disabling
  let valid = true;
  //loop to check validity of each field required
  fields.forEach((field) => {
    if (!validateField(field)) {
      valid = false;
    }
    //console check for manual test
    console.log(`-----field: ${field.id}-----`);
    console.log(`valid = ${valid}`);
  });
  if (valid) {
    validate();
  }
});

//---------------------------functions------------------------------

/**
 * function validate => show success message on form submit
 */

function validate() {
  successMessage.classList.replace('select-hide', 'success-show');
  console.log(successMessage);
  console.log(contactForm);
}

/**
 * function validateField => check validity of required field & return true
 */
function validateField(field) {
  if (field.checkValidity()) {
    return true;
  } else {
    field.parentElement.setAttribute('data-error-visible', 'true');
    field.parentElement.setAttribute('data-error', field.validationMessage);
    return false;
  }
}

/**
 * 
 */
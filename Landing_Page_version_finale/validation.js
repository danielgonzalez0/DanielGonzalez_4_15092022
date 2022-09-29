//Variable
let valid = true;

//DOM Elements Selection
const contactForm = document.getElementById('frmContact');
const successMessage = document.querySelector('.succes-confirmation');
const fields = document.querySelectorAll('input[required]');
const inputFormValue = document.querySelectorAll(
  'input[type=text], input[type=email], input[type=date],input[type=number]'
);
const inputFormRadio = document.querySelectorAll('input[type=radio]');
const inputCheckbox2 = document.getElementById('checkbox2');
console.log(inputCheckbox2.checked);

//
//contactForm.setAttribute('novalidate', true);

//event listener & step process

// -----on form field focus & blur--------
fields.forEach((field) => {
  field.addEventListener('focus', () => {
    resetErrorMessage(field);
  });
});

fields.forEach((field) => {
  field.addEventListener('click', () => {
    resetErrorMessage(field);
  });
});

fields.forEach((field) => {
  field.addEventListener('blur', () => {
    validateField(field);
  });
});

// -----on form submit--------
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); //submit behavior disabling

  // reset field error message & variable valid
  fields.forEach((field) => {
    resetErrorMessage(field);
  });
  //loop to check validity of each field required
  fields.forEach((field) => {
    if (!validateField(field)) {
      valid = false;
    }
    //console check for manual test
    console.log(`-----field: ${field.id}-----`);
    console.log(`valid = ${valid}`);
    console.log(field.value);
  });
  if (valid) {
    validate();
    resetInputForm();
  }
});

//---------------------------functions------------------------------

/**
 * function validate => show success message on form submit
 */

function validate() {
  successMessage.classList.replace('select-hide', 'success-show');
  //next steps not coding yet
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
 * function resetErrorMessage => reset error message of a form field & the variable valid
 */

function resetErrorMessage(field) {
  if ((field.parentElement.classList.value = 'formData')) {
    field.parentElement.removeAttribute('data-error-visible', 'true');
    field.parentElement.removeAttribute('data-error', field.validationMessage);
  }
  valid = true;

  //console check for manual test
  /* console.log(`----resetField check-----`);
  console.log(`----field.valid true : ${field.valid}-----`);*/
}

/**
 * function resetInputForm => reset input value manually
 */

function resetInputForm() {
  inputFormValue.forEach((input) => {
    input.value = '';
  });
  inputFormRadio.forEach((input) => {
    input.checked = false;
  });
  inputCheckbox2.checked = false;
}

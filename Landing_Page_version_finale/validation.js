//Variable
let valid = true;
let errorMessage;

//DOM Elements Selection
const contactForm = document.forms['reserve'];
const successMessage = document.querySelector('.succes-confirmation');
const fields = document.querySelectorAll('input[required], #checkbox1');
const inputFormValue = document.querySelectorAll(
  'input[type=text], input[type=email], input[type=date],input[type=number]'
);
const inputFormRadio = document.querySelectorAll('input[name=location]');
const inputCheckbox1 = document.querySelector('#checkbox1');
const inputCheckbox2 = document.getElementById('checkbox2');
const inputName = document.querySelectorAll('.name');
const inputEmail = document.querySelectorAll('input[type=email]');
const inputDate = document.querySelectorAll('input[type=date]');
const inputNumber = document.querySelectorAll('input[type=number]');

//event listener & step process

// -----on form field focus & blur--------

//general handling
fields.forEach((field) => {
  field.addEventListener('focus', () => {
    removeErrorMessage(field);
  });
});

fields.forEach((field) => {
  field.addEventListener('click', () => {
    removeErrorMessage(field);
    //specific
    checkbox1Validity();
  });
});

fields.forEach((field) => {
  field.addEventListener('blur', () => {
    validateField(field);
    //specific
    nameValidity();
    emailValidity();
    numberValidity();
  });
});

inputFormRadio.forEach((field) => {
  field.addEventListener('click', () => {
    removeErrorMessage(field);
  });
});
// -----on form submit--------
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); //submit behavior disabling

  // reset field error message & variable valid
  fields.forEach((field) => {
    removeErrorMessage(field);
  });
  //loop to check validity of each field required
  fields.forEach((field) => {
    if (!validateField(field)) {
      valid = false;
    }
  });
  //specific
  nameValidity();
  emailValidity();
  numberValidity();
  checkbox1Validity();

  if (valid) {
    //coding post steps process
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
    addErrorMessage(field, field.validationMessage);
    return false;
  }
}

/**
 * function addErrorMessage => add error message of a form field
 */

function addErrorMessage(field, errorMessage) {
  field.parentElement.setAttribute('data-error-visible', 'true');
  field.parentElement.setAttribute('data-error', errorMessage);
}

/**
 * function removeErrorMessage => reset error message of a form field & the variable valid
 */
function removeErrorMessage(field) {
  field.parentElement.removeAttribute('data-error-visible', 'true');
  field.parentElement.removeAttribute('data-error', errorMessage);
  valid = true;
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
  inputCheckbox1.checked = true;
  inputCheckbox2.checked = false;
}

//specific functions
/**
 * function nameValidity => check sepecific validity of inputs with class = name
 */
function nameValidity() {
  let regexName = /^[a-zA-ZÀ-ÿ -]{2,30}$/;
  let errorMessage = 'Veuillez entrer 2 caractères ou plus pour ce champ.';
  inputName.forEach((field) => {
    if (!regexName.test(field.value)) {
      addErrorMessage(field, errorMessage);
      valid = false;
    }
  });
}

/**
 * function emailValidity => check sepecific validity of inputs with type = email
 */
function emailValidity() {
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //https://regexr.com/3e48o
  let errorMessage = 'Veuillez entrer une adresse mail valide';
  inputEmail.forEach((field) => {
    if (!regexEmail.test(field.value)) {
      addErrorMessage(field, errorMessage);
      valid = false;
    }
  });
}

/**
 * function numberValidity => check sepecific validity of the input typr = number
 */
function numberValidity() {
  let errorMessage = 'Veuillez entrer un chiffre compris entre 0 et 99';
  inputNumber.forEach((field) => {
    let number = field.value;
    if (isNaN(number) || number < 0 || number > 99) {
      addErrorMessage(field, errorMessage);
      valid = false;
    }
  });
}

/**
 * function checkbox1Validity => check sepecific validity of the input checkbox1
 */
function checkbox1Validity() {
  if (!inputCheckbox1.checked) {
    let errorMessage =
      'Vous devez vérifier que vous acceptez les termes et conditions.';
    addErrorMessage(inputCheckbox1, errorMessage);
    valid = false;
  }
}
